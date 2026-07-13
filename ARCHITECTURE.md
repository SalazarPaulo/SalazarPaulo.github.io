# Source Architecture

DEV ARCADE is a static, client-side portfolio designed as an arcade cabinet interface. It is published as plain files through GitHub Pages and does not require an application server or database.

## Runtime overview

```text
index.html
  ├── styles.min.css
  ├── project-modal.css
  ├── script.min.js
  ├── project-modal.js
  └── assets/
      ├── fonts/
      ├── images/
      ├── icons/
      ├── tech/
      ├── skills/
      ├── documents/
      ├── projects/
      └── readme/screenshots/
```

## HTML

`index.html` defines the semantic structure of the portfolio and the interactive arcade shell.

It contains:

1. global document metadata and SEO tags;
2. local font and stylesheet references;
3. the CRT/cabinet layout;
4. portfolio screens for Home, Profile, Projects, Skills, Contact, About, Free Play and Config;
5. dialogs for contact, CV, settings and project details;
6. accessible controls, labels, buttons and `data-*` hooks used by JavaScript.

The screens are switched on the client without a framework router. JavaScript toggles active sections through page state, DOM attributes and control bindings.

## CSS

`styles.css` is the readable stylesheet. `styles.min.css` is the optimized stylesheet loaded by the page.

The main stylesheet is organized around:

1. design tokens, fonts, colors and theme variables;
2. cabinet, CRT, screen frame and control panel layout;
3. portfolio screens and their responsive states;
4. project cards, skills inventory, contact cards and About cards;
5. dialogs, overlays and accessibility states;
6. game/free-play interface;
7. light mode, dark mode, reduced motion and mobile adaptations.

`project-modal.css` isolates the advanced Projects modal. It controls the featured carousel, media stages, text landing state, video state, HUD indicators, scroll cue and project-specific responsive behavior.

## JavaScript

`script.js` is the main controller for the portfolio experience. `script.min.js` is the production bundle used by `index.html`.

It is responsible for:

1. static configuration and localized copy;
2. persistent user settings through `localStorage`;
3. DOM references and screen routing;
4. arcade controls, keyboard input and button states;
5. notifications and UI feedback;
6. theme, language, audio and visual preferences;
7. contact dialog behavior and on-demand EmailJS loading;
8. mini-game state, canvas rendering and Web Audio effects;
9. event binding, resize handling and reduced-motion safeguards.

`project-modal.js` manages the Projects detail experience. It loads local project media, builds the carousel, coordinates image/text/video phases, controls the scroll cue, updates project metadata and keeps the modal independent from the rest of the cabinet navigation.

## Assets

The project keeps runtime assets local:

| Folder | Purpose |
|---|---|
| `assets/fonts/` | Local WOFF2 fonts used through `@font-face`. |
| `assets/images/` | Main portrait, blueprint and interface images. |
| `assets/icons/` | UI and contact icons. |
| `assets/tech/` | Technology logos used in project cards and skills. |
| `assets/skills/` | Skill-specific visual assets. |
| `assets/documents/` | CV files in English and Spanish. |
| `assets/projects/` | Project screenshots, posters, videos and `project-media-manifest.json`. |
| `assets/readme/screenshots/` | Optimized screenshots displayed in the repository README. |

## Project media flow

Project cards are rendered from JavaScript data and use local media references. The project detail modal reads the project information, resolves image/video/poster paths, then presents the content in phases:

```text
project card → project modal → carousel → text landing → video stage
```

This keeps the public site independent from remote raw media URLs and reduces runtime failures caused by external asset paths.

## Build and tooling

The site can run directly as static files, but the repository includes optional tooling for validation and minification.

```bash
pnpm install --frozen-lockfile
pnpm run check
pnpm run build
```

The build pipeline keeps readable source files and generated production files side by side:

| Source | Generated / loaded file |
|---|---|
| `styles.css` | `styles.min.css` |
| `script.js` | `script.min.js` |
| `project-modal.css` | loaded directly |
| `project-modal.js` | loaded directly |

## External services

The portfolio does not use a custom backend. EmailJS is the only runtime external service and is loaded only when the contact flow needs it. Fonts, images, videos, CVs and project media are served locally from the repository.
