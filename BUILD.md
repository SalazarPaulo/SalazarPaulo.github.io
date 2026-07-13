# Build Workflow

The readable source files are `styles.css` and `script.js`.

This repository uses `pnpm-lock.yaml`, so dependency installation and build commands should stay aligned with pnpm.

```bash
pnpm install --frozen-lockfile
pnpm run build
```

The build updates `styles.min.css` and `script.min.js`, which are the files loaded by `index.html`.

Before publishing, run:

```bash
pnpm run check
```

---
