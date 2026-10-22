# Erick Rodríguez-Esparza — Research Portfolio

Professional academic and technology portfolio for Dr. Erick Rodríguez-Esparza, Postdoctoral Researcher in Artificial Intelligence and Optimization at DeustoTech, University of Deusto.

Built with Astro 7, TypeScript, Tailwind CSS 4, Astro Content Collections, and Lucide icons. The site is fully static and configured for the GitHub Pages user-site URL `https://erickrdze.github.io/`.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Astro. Production validation:

```bash
npm run build
npm run preview
```

## Content architecture

- Identity, profiles, metrics, research areas, projects, timeline, capabilities, and activities: `src/data/site.ts`
- Publications: `src/content/publications/*.md`
- Publication schema: `src/content.config.ts`
- Pages: `src/pages/`
- Shared components: `src/components/`
- Design tokens and global styles: `src/styles/global.css`
- Original portrait source used by Astro's image pipeline: `src/assets/erick-portrait.png`
- Internal verification notes: `CONTENT_REVIEW.md`

## Adding a publication

Create a Markdown file in `src/content/publications/`:

```yaml
---
title: "Exact publication title"
authors: ["Author One", "Erick Rodríguez-Esparza"]
year: 2026
venue: "Exact journal or conference"
type: "Journal article" # Conference paper, Book chapter, or Other
doi: "https://doi.org/..." # optional, verified only
url: "https://..."        # optional, verified only
pdf: "https://..."        # optional, verified only
code: "https://..."       # optional, public repositories only
project: "Project name"   # optional
area: "Research area"     # optional
featured: false
verified: true
---
```

Only entries with `verified: true` appear publicly. Year and publication-type filters update automatically.

## Editing projects and activities

Edit the corresponding arrays in `src/data/site.ts`. Project records should keep the consortium challenge separate from Erick's individual contribution. Review time-sensitive project and activity statuses periodically.

## CV and private source handling

The source CVs in `references/` are ignored by Git. They contain private information and must not be added to the public repository. The public website intentionally excludes personal phone numbers and references.

Before adding a Download CV link, prepare and approve a separate sanitized PDF, place it in `public/files/`, and update the relevant navigation and contact components.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` follows Astro's official Pages pattern and deploys pushes to `main`.

Initial publication target:

1. GitHub account: `erickrdze` (confirmed by the site owner on 22 October 2026).
2. Repository: `erickrdze/erickrdze.github.io`.
3. Production URL: `https://erickrdze.github.io/`.
4. GitHub Pages source: **GitHub Actions**.
5. Private source CVs in `references/` must remain excluded.

Local setup commands:

```bash
git init
git branch -M main
git remote add origin https://github.com/erickrdze/erickrdze.github.io.git
git add .
git status
git commit -m "Launch research portfolio"
git push -u origin main
```

No Astro `base` path is configured because this is a GitHub user-site repository.

## Future custom domain

After ownership of `erickrodriguezesparza.com` is confirmed:

1. Configure the domain in GitHub Pages settings and at the DNS provider.
2. Change `site` in `astro.config.mjs` to the custom HTTPS URL.
3. Add `public/CNAME` containing only the confirmed domain.
4. Update `public/robots.txt` and check canonical/sitemap output.

No custom-domain or DNS configuration is currently active.
