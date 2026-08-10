# Casa Renders — Masterpiece Consolidated Build

This is the single consolidated Casa Renders project. It replaces the earlier phase-by-phase patches and should be treated as the new source of truth.

## What is included

- Cinematic four-stage scroll hero with premium still-image fallback
- Automatic scroll-scrub video support when final hero assets are added
- Editorial powder-blue / warm-white design system
- Detailed About and Experience content
- Professional Exposure logo marquee with publication disclaimer
- Interior Design, Structural Engineering and 3D Visualisation pillars
- Honest concept gallery, clearly separated from completed-project claims
- All client-requested Design Ideas categories
- End-to-end solutions including terrace, balcony, elevation and flooring
- Separate estimate journeys for homes and cafés/restaurants
- Detailed services, industries, process and packages
- Leadership, Casa Renders TV, enquiry form, map and complete footer
- Privacy, Terms and Thank-you routes
- Discreet “Designed & developed by VisiCore AI” signature
- Desktop, tablet, mobile and reduced-motion behaviour

## Install and run

Use a local folder outside OneDrive where possible, for example:

```powershell
C:\Projects\casa-renders-masterpiece
```

Then run:

```powershell
npm install
npm run dev:clean
```

Open:

```text
http://localhost:3000
```

Validation commands:

```powershell
npm run lint
npx tsc --noEmit
npm run build
```

## Important: do not layer old phase packs over this build

This ZIP already includes the final merged files. Do not paste Phase 1–5 files over it, because those older CSS and component versions caused the distorted result.

## Main configuration

Edit all contact details, map URL, social profiles, form mode and feature flags in:

```text
src/config/site.ts
```

## Cinematic hero assets

The hero already works with three curated concept images. To upgrade it to a true scroll-controlled film, add:

```text
public/videos/interior-hero.mp4
public/videos/interior-hero.webm
public/images/interior-hero-poster.webp
```

The desktop hero automatically detects the available video and maps page scroll progress to video time. Mobile and reduced-motion users continue to receive the lighter static experience.

Recommended web delivery target:

- 16:9 landscape
- 8–12 seconds
- H.264 MP4 plus optional WebM
- no audio
- compressed for web delivery

## Concept imagery

Temporary stock photographs are intentionally described as:

- concept imagery
- visual studies
- design inspiration

They are not presented as completed Casa Renders projects. Replace them later by editing:

```text
src/content/visuals.ts
src/content/designIdeas.ts
```

`SafeImage.tsx` provides a local fallback if a remote image cannot load.

## Client confirmations before public launch

Review `CLIENT-CONFIRMATIONS.md`. The highest-priority confirmations are:

- Jai/Jal Sirsiya spelling
- official email address
- GF versus LGF in the address
- permission to publish organisation names/logos
- official Instagram, Facebook and YouTube URLs
- legal approval of Privacy Policy and Terms
- whether the VisiCore AI signature should link to `https://visicore.ai`

## Key folders

```text
src/app/                    Routes, layout and global design system
src/components/hero/        Cinematic hero
src/components/sections/    Homepage sections
src/components/layout/      Header, footer and global polish
src/components/ui/          Reusable UI primitives
src/config/site.ts          Business configuration
src/content/                Centralised client copy and visual data
public/images/              Logos, experience marks and fallbacks
public/videos/              Optional final cinematic hero video
```

## Notes

- The enquiry form currently continues through WhatsApp by default.
- Legal pages are starter templates and require professional review before launch.
- No database, CMS, login or paid library is required for the current scope.
