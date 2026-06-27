# Compilación y publicación

## Requisitos

- Node.js 22.13 o superior.
- pnpm 11.9.0.

El proyecto incluye `pnpm-lock.yaml`, que fija las dependencias de compilación para instalaciones reproducibles.

## Compilar

Desde la carpeta raíz del proyecto:

```bash
pnpm install --frozen-lockfile
pnpm run check
pnpm run build
```

`pnpm run build` valida `script.js`, minifica `styles.css` en `styles.min.css`, genera `script.min.js` a partir de `script.js` y verifica la sintaxis del paquete JavaScript resultante.

## Archivos que se editan

Edita únicamente los archivos legibles:

```text
styles.css
script.js
index.html
```

No edites manualmente `styles.min.css` ni `script.min.js`. Se regeneran con `pnpm run build` después de modificar sus fuentes.

## Formato opcional

```bash
pnpm run format
```

Este comando aplica Prettier a `index.html`, `styles.css` y `script.js`.

## Publicar en GitHub Pages

1. Ejecuta `pnpm run build`.
2. Confirma los archivos generados en Git.
3. Sube el contenido de la carpeta raíz al repositorio configurado para GitHub Pages.
4. En GitHub, selecciona `main` y `/(root)` como fuente de publicación.

GitHub Pages entrega directamente los archivos estáticos; no compila el proyecto durante la publicación.
