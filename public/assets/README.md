# public/assets/

Drop your asset files here. The app references them at `/assets/*`.

## Required files

| File | Used in | Notes |
|---|---|---|
| `herobgvideo.mp4` | Hero section (desktop + mobile) | Background video, 55% opacity |
| `herovector.png` | Hero desktop mask | WebkitMaskImage — shapes the hero container |
| `mobilevector.svg` | Hero mobile mask | Applied at 100% 100% mask-size |
| `logo-light.png` | Nav + footer | White/light version of the Hrytos logo |

## Optional

| File | Notes |
|---|---|
| `favicon.ico` | Add `<link rel="icon">` in views/index.ejs `<head>` |
| `og-image.png` | Add Open Graph meta tags in views/index.ejs for social sharing |

## Path convention

All assets are served statically from `public/` by Express.
Reference them in HTML/CSS as `/assets/filename.ext` — no `./` prefix needed.
