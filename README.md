# gripforge-site

Pre-launch landing page for **gripforge.us**. Its one job is getting interested
climbers onto the Frameboard early access list.

## What this is

A single static `index.html`. No build step, no dependencies, no framework.
All CSS is inline in the `<style>` block, and the product mark is an inline SVG.
The only subresource is the logo PNG, so the page is two requests.

Sections, in order: hero, our story, why Frameboard, hold system, built in
Michigan, follow the build, early access, footer. Nav and hero CTAs are anchors
to `#early-access`; the form itself lives there and is the only one on the page.

Motion is hero-only CSS animation. There is no scroll-triggered JS.

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

The early access form uses Netlify Forms, under the form name `updates`.
Submissions are in the Netlify dashboard under Forms, and can be exported as
CSV. The free plan allows 100 submissions per month; past that, Netlify
silently drops them, so watch the count if this gets traffic.

Fields:

| name         | required | notes                                          |
| ------------ | -------- | ---------------------------------------------- |
| `email`      | yes      |                                                |
| `first-name` | no       |                                                |
| `where`      | no       | Dorm / Apartment / House / Other               |
| `train`      | no       | Crimps / Slopers / Pinches / General finger strength |

The optional selects default to an empty value, so they post as blank rather
than defaulting anyone into an answer. Adding fields does not affect existing
submissions; older ones simply have no value for the new columns.

Site-level form detection must stay on. It is off by default on new Netlify
projects; the site now has `ignore_html_forms` set to false. If the form ever
stops recording, check that first.

Without JavaScript the form posts normally and lands on `/thanks/`. With it,
a small inline script posts the form and reports success in place.

## Analytics

None configured, and nothing was added. Netlify Analytics is a paid add-on, so
it was left off. Signup counts are already visible for free under Forms.

Every CTA carries a `data-cta` attribute (`nav`, `hero`, `submit`) so a script
can be wired to those later without touching markup.

## Still needed

- **Social URLs.** The "Follow the build" section renders Instagram, TikTok and
  YouTube as inert placeholders because no verified GripForge accounts have
  been provided. There is a commented block in that section with the exact
  markup to drop real links into.
- **Prototype photography.** The hero uses the inline SVG diagram, labelled as
  a diagram rather than a photo. Replace it with a real prototype shot when one
  exists; the `figure` is sized for it.
- **A 1200x630 share card.** `og:image` currently points at the 760x110 logo,
  which renders small in iMessage, Discord and Slack previews. `twitter:card`
  is `summary` to suit that. Swap both once a proper card exists.
