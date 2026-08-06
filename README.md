# gripforge-site

Temporary landing page for **gripforge.us** while the full store is being built.

## What this is

A single static `index.html`. No build step, no dependencies, no framework.
All CSS is inline in the `<style>` block, and the product mark is an inline SVG.
Nothing is fetched at runtime, so the page is one request.

## Local preview

Open `index.html` in a browser, or serve the folder with any static server.

## Deploy

Hosted on GitHub Pages from the `main` branch, root directory.
Pushing to `main` publishes.

## Replacing this with the real store

Delete `index.html` and drop the real site in its place, or point the
`gripforge.us` DNS at the new host. Nothing here is depended on elsewhere.

## Notes

- No email capture — there is no backend for it yet, and a dead signup form
  is worse than none.
- No social links — no verified GripForge accounts existed at the time of
  writing. Add them when they do.
