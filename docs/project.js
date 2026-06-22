/* Project dossier enhancer — builds a sticky scrollspy table of contents from
   the section headings and reveals sections on load. Runs only on detail pages
   and degrades gracefully if anything is missing. */
(function () {
  if (!document.body.classList.contains('project-page')) return;

  const main = document.querySelector('main.project-content, main.project-grid');
  if (!main) return;

  const sections = [...main.querySelectorAll(':scope > section.section-card')];
  const headed = sections
    .map(sec => ({ sec, h2: sec.querySelector(':scope > h2') }))
    .filter(x => x.h2);

  // Lift the hero's Latest panel into a full-height right rail.
  const hero = document.querySelector('.project-hero');
  const latest = hero && hero.querySelector('.latest-card');

  // Nothing to enhance: no TOC-worthy sections and no Latest panel to relocate.
  if (headed.length < 2 && !latest) return;

  const slugify = t => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const used = new Set();

  let toc = null;
  if (headed.length >= 2) {
    toc = document.createElement('nav');
    toc.className = 'dossier-toc';
    toc.setAttribute('aria-label', 'Dossier sections');
    let html = '<p class="toc-head">Dossier</p>';
    headed.forEach(({ sec, h2 }, i) => {
      let id = sec.id || slugify(h2.textContent) || `section-${i}`;
      while (used.has(id)) id += '-' + i;
      used.add(id);
      sec.id = id;
      const n = String(i + 1).padStart(2, '0');
      html += `<a href="#${id}" data-target="${id}"><span class="n">${n}</span><span>${h2.textContent}</span></a>`;
    });
    toc.innerHTML = html;
  }

  // wrap [toc | main | latest] in a shell
  const shell = document.createElement('div');
  shell.className = 'dossier-shell' + (toc ? ' has-toc' : '') + (latest ? ' has-rail' : '');
  main.parentNode.insertBefore(shell, main);
  if (toc) shell.appendChild(toc);
  shell.appendChild(main);
  if (latest) {
    latest.classList.add('latest-rail');
    shell.appendChild(latest);
    if (hero) hero.classList.add('hero-solo');
  }

  const links = new Map(toc ? [...toc.querySelectorAll('a')].map(a => [a.dataset.target, a]) : []);

  // scrollspy
  let active = null;
  const setActive = id => {
    if (id === active) return;
    active = id;
    links.forEach(a => a.classList.remove('active'));
    links.get(id)?.classList.add('active');
  };
  if ('IntersectionObserver' in window) {
    const seen = new Map();
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => seen.set(e.target.id, e.intersectionRatio));
      let best = null, ratio = 0;
      seen.forEach((r, id) => { if (r > ratio) { ratio = r; best = id; } });
      if (best) setActive(best);
    }, { rootMargin: '-72px 0px -55% 0px', threshold: [0, .25, .5, 1] });
    headed.forEach(({ sec }) => obs.observe(sec));
  }

  // smooth anchor + reveal
  toc?.addEventListener('click', e => {
    const a = e.target.closest('a');
    if (!a) return;
    setActive(a.dataset.target);
  });

  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    headed.forEach(({ sec }, i) => {
      sec.style.opacity = '0';
      sec.style.transform = 'translateY(10px)';
      sec.style.transition = 'opacity .5s ease, transform .5s ease';
      sec.style.transitionDelay = Math.min(i * 45, 360) + 'ms';
    });
    requestAnimationFrame(() => requestAnimationFrame(() => {
      headed.forEach(({ sec }) => { sec.style.opacity = ''; sec.style.transform = ''; });
    }));
  }
})();
