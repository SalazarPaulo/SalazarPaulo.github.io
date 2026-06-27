# Source Architecture

## HTML

`index.html` contains semantic screen sections, dialogs, accessible controls, and `data-*` hooks for behavior.

## CSS

`styles.css` uses numbered headers and groups rules around:

1. design tokens;
2. cabinet and CRT layout;
3. portfolio screens;
4. controls and dialogs;
5. responsive behavior;
6. performance and accessibility safeguards.

## JavaScript

`script.js` uses focused sections for:

1. static configuration and localized copy;
2. persistent settings;
3. DOM references;
4. notification helpers;
5. routing and dialogs;
6. audio;
7. the mini-game;
8. optimized canvas rendering;
9. event bindings;
10. on-demand EmailJS delivery.

The project uses native browser APIs and has no framework or build dependency.
