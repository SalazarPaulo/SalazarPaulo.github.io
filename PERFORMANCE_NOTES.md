# Performance Notes

## Applied improvements

- Converted the blueprint, portrait, Gmail icon, and LinkedIn icon to WebP.
- Added `loading="lazy"` and `decoding="async"` to non-critical images.
- Kept large illustrations in hidden sections lazy-loaded instead of preloading them during the opening screen.
- Warmed the compact Skills and Contact SVGs in the browser cache at idle time, plus on navigation hover, focus, touch, and selection. This removes the visible icon delay without prioritizing them above the opening screen.
- Moved EmailJS loading to the contact-dialog interaction instead of initial page load.
- Reduced canvas work using a 30 FPS cap, a lower mobile pixel ratio, fewer generated stars, `ResizeObserver`, and page-visibility pausing.
- Throttled mouse-driven joystick updates to one visual update per animation frame.
- Debounced localStorage writes while text-size sliders move.
- Added reduced-motion support.
- Added `.nojekyll` for static publishing.

## Raster asset comparison

| Asset | Original | Optimized | Difference |
|---|---:|---:|---:|
| Blueprint | 3340.3 KB | 217.7 KB | 93.5% smaller |
| Portrait | 99.6 KB | 63.6 KB | 36.2% smaller |
| Gmail icon | 19.2 KB | 16.9 KB | 11.9% smaller |
| LinkedIn icon | 124.7 KB | 26.4 KB | 78.8% smaller |

## Why the project does not use infinite scrolling

The portfolio has a small, fixed set of sections. Native scrolling and lazy media are faster, more accessible, and simpler than infinite scrolling, which would add JavaScript work without a useful loading benefit.

---
