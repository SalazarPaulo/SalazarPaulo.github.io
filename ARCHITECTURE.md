# Arquitectura del proyecto

## Visión general

DEV ARCADE es un portafolio estático de una sola página. Utiliza HTML, CSS y JavaScript nativos para presentar el perfil, proyectos, tecnologías, contacto y un minijuego interactivo.

## Capa de presentación

- `index.html` contiene la estructura semántica, los diálogos, controles accesibles y atributos `data-*` usados por la interfaz.
- `styles.css` define los estilos legibles: diseño arcade, composición CRT, páginas internas, controles, diálogos, adaptación móvil y preferencias de accesibilidad.
- `styles.min.css` es la hoja de estilos optimizada que carga la página publicada.

## Capa de comportamiento

- `script.js` contiene la lógica legible del sitio: navegación, idioma, tema, sonido, diálogos, formularios, minijuego, Canvas y controles táctiles.
- `script.min.js` es el paquete JavaScript optimizado que carga la página publicada.

## Recursos

- `assets/images/` reúne las ilustraciones WebP y sus variantes responsivas.
- `assets/icons/`, `assets/skills/` y `assets/tech/` contienen iconos SVG, favicon e imágenes de interfaz.
- `assets/documents/` almacena los currículos disponibles desde el portafolio.

## Servicios y APIs del navegador

El proyecto usa APIs nativas del navegador: DOM, Canvas 2D, `requestAnimationFrame`, `localStorage`, `matchMedia`, `ResizeObserver`, eventos de teclado, puntero y toque. El formulario carga EmailJS bajo demanda cuando se utiliza el diálogo de contacto.