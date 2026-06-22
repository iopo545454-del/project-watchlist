# Project Watchlist

Source of truth for crypto/project monitoring dossiers.

- Markdown dossiers: [`/projects`](projects/)
- Machine-readable index: [`index.json`](index.json) / [`index.csv`](index.csv)
- GitHub Pages dashboard source: [`/docs`](docs/)

## Workflow

Hermes researches and updates the Markdown dossiers, `index.json`, and `index.csv`, then commits changes. GitHub Pages renders the review dashboard from `/docs`. Discord updates should send GitHub links, not filesystem paths or ZIP files.

See [`AGENTS.md`](AGENTS.md) for the explicit monitoring framework: source priority, materiality threshold, recurring scan workflow, changelog rules, Discord alert policy, and validation steps.

## Projects

- [POD / Dolphin POD](projects/01-pod.md)
- [GEOD / GEODNET](projects/02-geod.md)
- [META / MetaDAO](projects/03-meta.md)
- [BANKR / BankrCoin](projects/04-bankr.md)
- [AEON / Aeon](projects/05-aeon.md)
- [GitlWab / GitLawb / Gitwab](projects/06-gitlawb.md)
- [Kinetiq](projects/07-kinetiq.md)
- [GRASS](projects/08-grass.md)
- [IOTA — Macrocosmos Bittensor Subnet 9](projects/09-iota-sn9.md)
- [Targon — Bittensor Subnet 4](projects/10-targon.md)
- [TAO / Bittensor](projects/11-tao-bittensor.md)
- [AKT / Akash](projects/12-akt-akash.md)
- [CHIP / USD.AI](projects/13-chip-usdai.md)
- [VVV / Venice AI](projects/14-vvv-venice.md)
- [VIRTUAL / Virtuals Protocol](projects/15-virtuals.md)
- [Worldcoin / WLD / World Network](projects/16-worldcoin-wld.md)
- [NEAR Protocol](projects/17-near.md)
- [DRV / Derive Protocol](projects/18-drv-derive.md)
- [OCT / Octra](projects/19-octra.md)
- [BIO / Bio Protocol](projects/20-bio.md)

## Dossier section standard

Each project file should include: Overview, Thesis, Team, Investors, Twitter/X accounts, KOLs, Official links, Onchain/data resources, Docs/blogs, Risks, Open questions, and Watch triggers.

The Thesis section should include linked investor/market theses with short TLDRs plus a separate, visually distinct Hermes take. See [`AGENTS.md`](AGENTS.md#thesis-section-standard).

The Catalysts section should track future confirmed/tentative/speculative catalysts with evidence, timing, direct impact, second-order consequences, and what to watch next. See [`AGENTS.md`](AGENTS.md#catalyst-section-standard).
- [Chutes — Bittensor Subnet 64](projects/24-chutes.md)
- [Lium — Bittensor Subnet 51](projects/25-lium.md)
- [Compute Horde — Bittensor Subnet 12](projects/26-compute-horde.md)
