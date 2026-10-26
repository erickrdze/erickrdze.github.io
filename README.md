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

Copy `.env.example` to `.env.local` only when testing configuration locally. Analytics never loads during `npm run dev`; it is emitted only by production builds when a Cloudflare site token is present.

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

## Cloudflare Web Analytics

The official Cloudflare JavaScript beacon is included once in `src/layouts/BaseLayout.astro`, immediately before the closing `body` tag. It is disabled unless both conditions are true:

1. Astro is running a production build.
2. `PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` has a value.

The token is a public site identifier embedded in the generated HTML, not a private API credential. Do not invent it or reuse a token from another hostname.

To obtain and activate it:

1. Sign in to the [Cloudflare dashboard](https://dash.cloudflare.com/).
2. Open **Web Analytics**, select **Add a site**, and enter `erickrdze.github.io` as the hostname.
3. Open **Manage site** and copy the `token` value from Cloudflare's JavaScript snippet.
4. In GitHub, open `erickrdze/erickrdze.github.io` → **Settings** → **Secrets and variables** → **Actions** → **Variables**.
5. Create a repository variable named `PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` and paste only the token value.
6. Trigger the existing **Deploy to GitHub Pages** workflow, either with a new authorized push or **Actions** → workflow → **Run workflow**.

To access reports later, sign in to Cloudflare, open **Web Analytics**, and select the `erickrdze.github.io` site. Data can take a few minutes to appear, and blockers may prevent some visits from being measured.

Cloudflare Web Analytics is configured without cookies, local storage, fingerprinting, advertising trackers, or individual visitor profiles. The public explanation is available at `/privacy/`. Based on Cloudflare's current technical documentation and the AEPD guidance concerning cookies and audience measurement, this implementation does not add a consent banner. This is an implementation assessment, not legal advice. If the measurement technology or purpose changes, reassess the privacy notice and consent requirements before deploying the change.

## Google Search Console

The shared layout is ready to emit Google's HTML verification meta tag when `PUBLIC_GOOGLE_SITE_VERIFICATION` is set.

1. Open [Google Search Console](https://search.google.com/search-console/).
2. Add the URL-prefix property `https://erickrdze.github.io/`.
3. Select the **HTML tag** verification method.
4. Copy only the value of the tag's `content` attribute.
5. Add it in the repository's GitHub Actions **Variables** as `PUBLIC_GOOGLE_SITE_VERIFICATION`.
6. Run the existing deployment workflow and confirm the meta tag appears in the live homepage source.
7. Return to Search Console and select **Verify**.
8. Submit `https://erickrdze.github.io/sitemap-index.xml` under **Sitemaps**.

Keep the verification variable and meta tag in place after verification because Google checks ownership periodically. The HTML-tag method verifies this URL-prefix property; a Domain property requires DNS verification and is not applicable to the `github.io` parent domain.

## SEO checks

- The canonical site origin is `https://erickrdze.github.io` in `astro.config.mjs` and `src/data/site.ts`.
- Every page receives an absolute canonical URL, description, robots directive, Open Graph metadata, Twitter card metadata, and Person structured data from `BaseLayout.astro`.
- `@astrojs/sitemap` generates `sitemap-index.xml` during production builds.
- `public/robots.txt` allows crawling and points to the generated sitemap index.
- The privacy page is included automatically in the sitemap.

## Future custom domain

After ownership of `erickrodriguezesparza.com` is confirmed:

1. Configure the domain in GitHub Pages settings and at the DNS provider.
2. Change `site` in `astro.config.mjs` to the custom HTTPS URL.
3. Add `public/CNAME` containing only the confirmed domain.
4. Update `public/robots.txt` and check canonical/sitemap output.

No custom-domain or DNS configuration is currently active.
