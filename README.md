# gripforge-site

Temporary landing page for **gripforge.us** while the full store is being built.

## What this is

A single static `index.html`. No build step, no dependencies, no framework.
All CSS is inline in the `<style>` block, and the product mark is an inline SVG.
Nothing is fetched at runtime, so the page is one request.

## Local preview

Open `index.html` in a browser, or serve the folder with any static server.

## Deploy

Hosted on Netlify as project `gripforge-us` (team `etservice`), serving
gripforge.us. `netlify.toml` publishes the repo root as-is, with no build step.

Deploys are manual from this folder:

    netlify deploy --prod --dir .

The project is not linked to this GitHub repo, so pushing here does not
publish. Connect it in Netlify under Build & deploy if you want that later.

DNS lives at GoDaddy: apex `A @ -> 75.2.60.5` (Netlify's load balancer) and
`CNAME www -> gripforge.us`. Google Workspace MX records are untouched.

## Replacing this with the real store

Delete `index.html` and drop the real site in its place, or point the
`gripforge.us` DNS at the new host. Nothing here is depended on elsewhere.

## Notes

- No email capture — there is no backend for it yet, and a dead signup form
  is worse than none.
- No social links — no verified GripForge accounts existed at the time of
  writing. Add them when they do.
