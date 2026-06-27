# Rendimiento y experiencia de carga

## Recursos visuales

- Las ilustraciones principales se sirven en WebP mediante `srcset` y `sizes`, de modo que cada pantalla solicita una variante adecuada a su espacio disponible.
- Las imágenes que no son críticas para el primer render usan `loading="lazy"` y `decoding="async"`.
- Los iconos SVG de Skills y Contact se preparan en caché durante el tiempo inactivo del navegador y al anticipar la navegación mediante puntero, foco, toque o selección.
- Los iconos vectoriales se mantienen como SVG para conservar nitidez con archivos pequeños.

## Carga de código y red

- EmailJS se carga cuando el usuario abre el flujo de contacto, no durante el render inicial.
- Las fuentes externas usan `preconnect` y `font-display: swap` para priorizar texto visible.
- `styles.min.css` y `script.min.js` reducen la transferencia y el tiempo de análisis del navegador.

## Renderizado e interacción

- El Canvas limita su frecuencia de dibujo y usa una densidad de píxeles menor en pantallas compactas.
- `ResizeObserver` actualiza el lienzo solo cuando cambia su tamaño.
- La animación se pausa cuando la página no está visible.
- Las actualizaciones del joystick guiadas por puntero se agrupan con `requestAnimationFrame`.
- Las escrituras de preferencias en `localStorage` se agrupan para evitar operaciones repetidas mientras el usuario ajusta controles.
- Las preferencias de reducción de movimiento se respetan con `prefers-reduced-motion`.

## Navegación de contenido

El portafolio utiliza un conjunto fijo de pantalla.
