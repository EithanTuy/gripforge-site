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

## Signup

The "Hear when it ships" form uses Netlify Forms, under the form name
`updates`. Submissions are in the Netlify dashboard under Forms, and can be
exported as CSV. The free plan allows 100 submissions per month; past that,
Netlify silently drops them, so watch the count if this gets traffic.

Site-level form detection must stay on. It is off by default on new Netlify
projects; the site now has `ignore_html_forms` set to false. If the form ever
stops recording, check that first.

Without JavaScript the form posts normally and lands on `/thanks/`. With it,
a small inline script posts the form and reports success in place.

## Notes

- No social links — no verified GripForge accounts existed at the time of
  writing. Add them when they do.
