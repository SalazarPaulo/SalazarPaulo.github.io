# Refactor Audit

## Source validation

- `node --check` passed for both the readable and production JavaScript bundles.
- `prettier --check` passed for HTML, CSS, and JavaScript source.
- A JSDOM bootstrap test passed for both JavaScript bundles.
- Every local reference from `index.html` resolves to a file in this package.

## File size snapshot

| File | Raw size | Gzip size |
|---|---:|---:|
| HTML | 52.7 KB | 8.3 KB |
| CSS | 155.5 KB | 33.4 KB |
| JavaScript | 57.5 KB | 15.4 KB |
| HTML source | 61.5 KB | 8.7 KB |
| CSS source | 164.1 KB | 29.6 KB |
| JavaScript source | 63.3 KB | 16.6 KB |
| CSS production | 120.0 KB | 23.3 KB |
| JavaScript production | 47.0 KB | 14.0 KB |

## Publishing behavior

- `index.html` loads the production bundles `styles.min.css` and `script.min.js`.
- Readable source remains in `styles.css` and `script.js`.
- `pnpm run build` regenerates the production bundles after changes.

---
