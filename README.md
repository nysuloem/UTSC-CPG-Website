# UTSC Computational Physiology Group website

Public-facing research-group website and LinkedIn launch materials for the UTSC Computational Physiology Group.

## Site content

- Home, About, Research, People, HumMod, Outputs, and Join routes
- Typed people, project, and output records in `lib/content.ts`
- Dynamic output detail pages in `app/outputs/[slug]`
- Search, social-sharing, sitemap, and robots metadata
- Responsive, keyboard-accessible layouts

## Launch materials

- `docs/LINKEDIN_LAUNCH_PACKAGE.md` contains the Page configuration, five posts, four-week calendar, comment policy, and launch checklist.
- `docs/PRE_LAUNCH_FACT_CHECK.md` lists every migrated fact and approval item requiring confirmation.
- `public/og.png` is the coordinated website social-sharing card. Final LinkedIn profile and cover images require the approved UTSC/U of T signature and rights-cleared media.

## Local commands

- `pnpm run dev` — start the local preview
- `pnpm run build` — build the deployable site
- `pnpm run lint` — run static checks
- `node --test tests/rendered-html.test.mjs` — test the built server output

## Railway deployment

1. In Railway, create a project from this GitHub repository and deploy from the repository root.
2. Railway should detect the existing `pnpm` scripts automatically. If manual overrides are needed, use `pnpm run build` as the build command and `pnpm start` as the start command.
3. Generate a public domain in the service's Networking settings.
4. Add `NEXT_PUBLIC_SITE_URL` with the complete public origin, including `https://` and no trailing slash, then redeploy. This keeps canonical, sitemap, and social-sharing URLs aligned with the Railway domain.

The application requires Node.js 22.13 or newer and listens on Railway's `PORT` automatically.
