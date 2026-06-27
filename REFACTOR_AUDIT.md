# Verificación técnica

## Comprobaciones de código

Ejecuta estos comandos desde la raíz del proyecto:

```bash
pnpm install --frozen-lockfile
pnpm run check
pnpm run build
```

Las comprobaciones validan la sintaxis de JavaScript antes y después de la minificación. La compilación de Lightning CSS también procesa la hoja de estilos fuente antes de generar el archivo publicado.

## Comprobación de archivos publicados

`index.html` carga los siguientes paquetes de producción:

```text
styles.min.css
script.min.js
```

Después de ejecutar la compilación, súbelos junto con `index.html` y `assets/`.

## Integridad opcional

`SHA256SUMS.txt` contiene huellas SHA-256 de archivos relevantes. En macOS, Linux o WSL puedes verificarlas con:

```bash
sha256sum -c SHA256SUMS.txt
```

Vuelve a generar el archivo de sumas después de cambiar alguno de los recursos listados.
