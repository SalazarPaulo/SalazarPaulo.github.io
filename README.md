# 🕹️ DEV ARCADE · Portafolio interactivo

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Canvas](https://img.shields.io/badge/Canvas-2D-111111?style=for-the-badge)
![Web Audio API](https://img.shields.io/badge/Web_Audio_API-Interactive-7B1FA2?style=for-the-badge)
![EmailJS](https://img.shields.io/badge/EmailJS-Contact_Form-5C32B7?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Static_Deploy-222222?style=for-the-badge&logo=githubpages&logoColor=white)

**DEV ARCADE** es un portafolio web estático e interactivo con estética de máquina arcade y pantalla CRT. Presenta perfil profesional, proyectos, habilidades, certificaciones, currículum, contacto y un minijuego jugable, sin requerir servidor propio ni base de datos.

---

## 🌐 Publicación

El sitio esta publicado en GitHub Pages desde la raíz del repositorio:

```text
https://<usuario>.github.io
```

---

## 📌 Tabla de contenido

- [Descripción](#-descripción)
- [Características principales](#-características-principales)
- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [Recursos visuales](#-recursos-visuales)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Arquitectura](#-arquitectura)
- [Secciones e interacción](#-secciones-e-interacción)
- [Minijuego y controles](#-minijuego-y-controles)
- [Patrones de diseño aplicados](#-patrones-de-diseño-aplicados)
- [Paradigmas y enfoque de programación](#-paradigmas-y-enfoque-de-programación)
- [Principios de diseño front-end](#-principios-de-diseño-front-end)
- [Accesibilidad](#-accesibilidad)
- [Optimización y rendimiento](#-optimización-y-rendimiento)
- [Carga diferida e infinite scroll](#-carga-diferida-e-infinite-scroll)
- [Formulario de contacto](#-formulario-de-contacto)
- [Cómo publicar en GitHub Pages](#-cómo-publicar-en-github-pages)
- [Trabajo local y compilación](#-trabajo-local-y-compilación)
- [Descripción técnica por archivo](#-descripción-técnica-por-archivo)
- [Limitaciones y mejoras futuras](#-limitaciones-y-mejoras-futuras)

---

## 📖 Descripción

El proyecto transforma la navegación de un portafolio en una experiencia arcade donde la interfaz simula una cabina con pantalla CRT incluida una consola, joystick, efectos de luces, audio generado en el navegador, traducción español/inglés, temas visuales, persistencia de preferencias y navegación por pantallas internas.

El contenido principal incluye:

- Perfil profesional y tecnologías principales.
- Galería de proyectos con ventanas de detalle.
- Inventario de habilidades técnicas.
- Certificaciones y currículums en español e inglés.
- Formulario de contacto con envío mediante EmailJS.
- Juego **Neon Fighters**, implementado con HTML, CSS y JavaScript nativo.
- Configuración de idioma, tema, paleta, audio, efectos CRT y escalas tipográficas.

---

## ✨ Características principales

- Interfaz arcade responsive basada en HTML semántico, CSS y JavaScript nativo.
- Navegación interna por páginas mediante atributos `data-*` y estado de interfaz.
- Tema claro, oscuro y automático según la preferencia del sistema.
- Paletas visuales, tamaño de texto y ajustes de efectos guardados en `localStorage`.
- Texto localizado en inglés y español.
- Canvas 2D para fondo de estrellas y profundidad visual del CRT.
- Web Audio API para tonos, efectos y música ambiental generada en el cliente.
- Ventanas modales accesibles para perfil, proyectos, CV y contacto.
- Imágenes WebP responsivas para retrato y plano de la mansión.
- Iconos SVG para tecnologías, redes y medios de contacto.
- Formulario que incorpora EmailJS únicamente cuando el usuario abre el diálogo de contacto.
- Minijuego con teclado y controles táctiles adaptados a teléfonos.

---

## 🛠️ Tecnologías utilizadas

| Área | Tecnología | Uso dentro del proyecto |
|---|---|---|
| Estructura | HTML5 | Marcado semántico, pantallas, controles, formularios y diálogos. |
| Estilos | CSS3 | Layout, tokens visuales, animaciones, media queries y diseño CRT. |
| Lógica | JavaScript moderno | Estado de interfaz, navegación, configuración, juego y eventos. |
| Gráficos | Canvas 2D | Fondo de estrellas animado en la pantalla arcade. |
| Sonido | Web Audio API | Efectos, tonos de interacción y música ambiental. |
| Contacto | EmailJS | Envío de mensajes desde el formulario sin backend propio. |
| Tipografías | Fuentes locales | `Press Start 2P` y `Space Mono` servidas desde `assets/fonts`. |
| Imágenes | WebP + SVG | Recursos visuales de bajo peso y escalabilidad vectorial. |
| Publicación | GitHub Pages | Hosting estático desde el repositorio. |
| Construcción opcional | pnpm + esbuild + Lightning CSS + Prettier | Minificación y validación al editar fuentes. |

---

## 📁 Estructura del proyecto

```text
.
├── index.html
├── styles.css
├── styles.min.css
├── project-modal.css
├── script.js
├── script.min.js
├── project-modal.js
├── package.json
├── pnpm-lock.yaml
├── README.md
├── .nojekyll
├── .gitattributes
├── .gitignore
│
└── assets/
    ├── documents/
    ├── icons/
    ├── images/
    ├── projects/
    │   ├── project-media-manifest.json
    │   ├── cristina-granda/
    │   ├── bank-project/
    │   ├── n-queens-visualizer/
    │   ├── space-ship/
    │   └── ids-ml-thesis/
    ├── skills/
    └── tech/
```

---

## 🧩 Arquitectura

DEV ARCADE es una aplicación **estática del lado del cliente**. No usa ni framework, servidor de aplicación ni base de datos. La estructura separa presentación, comportamiento, recursos y servicios externos.

```text
index.html
   │
   ├── Estructura semántica y contenido
   ├── Controles, diálogos y atributos data-*
   │
styles.css
   │
   ├── Tokens visuales y componentes de la cabina
   ├── Diseño responsive y controles móviles
   └── Accesibilidad y reducción de movimiento
   │
script.js
   │
   ├── Estado de preferencias y traducciones
   ├── Navegación, modales y eventos
   ├── Canvas 2D, audio y minijuego
   └── Carga condicional de EmailJS
   │
assets/
   └── Imágenes, iconos SVG y documentos
```

### Capas funcionales

| Capa | Responsabilidad |
|---|---|
| Presentación | `index.html` define la estructura, el contenido y los controles accesibles. |
| Estilos | `styles.css` define tokens, composición, responsive design y estados visuales. |
| Estado e interacción | `script.js` coordina navegación, preferencias, modales, juego, audio y formulario. |
| Recursos | `assets/` contiene imágenes, iconos, documentos y variantes responsivas. |
| Servicio externo | EmailJS se integra bajo demanda al abrir el formulario de contacto. |
| Entrega | GitHub Pages sirve los archivos como contenido estático. |

La navegación no utiliza un router de framework. Se gestiona mediante secciones con `data-page`, el atributo `hidden` y un estado de página activo controlado por JavaScript.

---

## 🧭 Secciones e interacción

| Sección | Contenido e interacción |
|---|---|
| Inicio | Presentación, consola CRT y acceso a las pantallas del portafolio. |
| Perfil | Resumen profesional y plano conceptual de la mansión. |
| Proyectos | Tarjetas activables por mouse o teclado con diálogo de detalles. |
| Habilidades | Categorías de tecnologías con iconos SVG. |
| Contacto | Redes, correo y activador del formulario. |
| Sobre mí | Experiencia, investigación, educación, certificaciones y CV. |
| Juegos | Selector tipo acordeón y acceso a Neon Fighters. |
| Configuración | Idioma, tema, sonido, efectos, paleta y escala de texto. |

---

## 🎮 Minijuego y controles

**Neon Fighters** es un minijuego de combate creado sin motor externo. El bucle de simulación se actualiza con `requestAnimationFrame`, mientras el estado de jugador y CPU se mantiene en un objeto dedicado.

### Controles de escritorio

| Acción | Tecla |
|---|---|
| Mover a la izquierda | `A` |
| Mover a la derecha | `D` |
| Saltar | `W` |
| Atacar | `F` |

### Controles móviles

En dispositivos táctiles, el movimiento se agrupa en el lado izquierdo de la pantalla:

```text
[ ◀ ] [ ▲ ] [ ▶ ]                         [ ATAQUE ]
```

Esto permite manejar desplazamiento y salto con el pulgar izquierdo, mientras el pulgar derecho queda libre para atacar.

### Mecánicas implementadas

- Movimiento horizontal limitado al escenario.
- Salto con velocidad vertical y gravedad simulada.
- Distancia de ataque, enfriamiento y bloqueo de ataques repetidos.
- Barra de salud para jugador y CPU.
- CPU con decisiones temporizadas y comportamiento simple de persecución/ataque.
- Efectos visuales, mensajes de combate y sonidos generados en el navegador.
- Pausa automática al ocultar la pestaña o salir de la pantalla del juego.

---

## 🧠 Patrones de diseño aplicados

| Patrón | Aplicación | Beneficio |
|---|---|---|
| **Command** | Los atributos `data-target` y `data-game-action` representan acciones de navegación y juego. | Reduce condicionales en el HTML y mantiene los controles declarativos. |
| **Observer** | `addEventListener`, `ResizeObserver`, `matchMedia` y `visibilitychange`. | La interfaz reacciona a usuario, tamaño, tema del sistema y visibilidad de la pestaña. |
| **State Object** | Objetos `settings` y `gameState`. | Agrupan el estado de preferencias y del combate en estructuras coherentes. |
| **Data-Driven UI** | Copias localizadas, etiquetas de páginas y detalles de proyectos se almacenan en objetos y mapas. | Facilita traducción, mantenimiento y reutilización de comportamientos. |
| **Lazy Service Loader** | `loadEmailClient()` crea y reutiliza una promesa para cargar EmailJS. | Evita descargar el cliente de correo durante la carga inicial. |
| **Facade ligera** | Helpers `query()` y `queryAll()` centralizan acceso al DOM. | Simplifica el código de interacción y reduce repetición. |
| **Render Loop controlado** | El Canvas y el minijuego se actualizan con `requestAnimationFrame`. | Sincroniza animación con el navegador y permite detener trabajo no visible. |

---

## ⚙️ Paradigmas y enfoque de programación

| Enfoque | Uso en DEV ARCADE |
|---|---|
| **Imperativo** | JavaScript cambia estados, clases CSS y propiedades del DOM en respuesta a acciones. |
| **Orientado a eventos** | Botones, teclado, touch, foco, puntero, cambios de tamaño y visibilidad disparan acciones. |
| **Declarativo** | HTML semántico y CSS describen estructura, diseño y estados visuales. |
| **Basado en estado** | La pantalla activa, preferencias y estado del juego determinan la interfaz mostrada. |
| **Orientado a datos** | Traducciones, detalles, etiquetas y rutas se resuelven desde estructuras de datos. |
| **Programación funcional puntual** | Métodos como `map`, `filter`, `forEach` y `Set` procesan colecciones y recursos. |

---

## 🎨 Principios de diseño front-end

- **Jerarquía visual:** cabina, pantalla CRT, consola y botones separan acciones principales de secundarias.
- **Consistencia:** tipografías, paleta, bordes, luces y estados de botones mantienen el lenguaje visual arcade.
- **Retroalimentación inmediata:** avisos CRT, efectos de presión, tonos, barras de salud y mensajes de estado responden a cada acción.
- **Diseño responsive:** media queries adaptan distribución, paneles, juego y controles a escritorio y móvil.
- **Controles táctiles ergonómicos:** el juego separa movimiento y ataque en lados opuestos de la pantalla.
- **Divulgación progresiva:** los detalles de proyectos, CV y formulario se presentan en diálogos cuando hacen falta.
- **Compatibilidad visual:** las preferencias de color, modo y tamaño de texto se conservan entre visitas.
- **Diseño de contenido finito:** la navegación utiliza pantallas internas porque el portafolio tiene secciones fijas, no un feed de datos extensible.

---

## ♿ Accesibilidad

El proyecto incorpora prácticas de accesibilidad desde el marcado y los controles:

- Elementos semánticos como `main`, `section`, `header`, `footer`, `button`, `label` y `form`.
- Etiquetas `aria-label`, `aria-live`, `role="status"`, `role="dialog"` y `aria-modal` en contextos necesarios.
- Botones reales para las acciones principales.
- Tarjetas activables mediante teclado con `Enter` y barra espaciadora.
- Diálogos con cierre, foco de retorno y contenido identificado.
- Formularios con etiquetas asociadas y validación nativa del navegador.
- Ajustes de tamaño de texto desde la propia interfaz.
- Adaptación a `prefers-reduced-motion` para reducir animaciones continuas.
- Contraste y estados visuales para acciones activas, desactivadas o en progreso.

---

## ⚡ Optimización y rendimiento

### Recursos visuales

- Imágenes convertidas a **WebP**.
- Variantes `srcset` y `sizes` para entregar imágenes más pequeñas en móviles.
- `loading="lazy"` en imágenes no críticas.
- `decoding="async"` para evitar bloquear el renderizado mientras se decodifican imágenes.
- SVG para iconos de tecnologías y redes, evitando imágenes rasterizadas innecesarias.

### Carga de recursos

- Los iconos de Habilidades y Contacto se preparan en caché después del primer render mediante `requestIdleCallback`; existe un `setTimeout` como alternativa cuando esa API no está disponible.
- Al pasar el cursor, enfocar o tocar un botón de navegación, los recursos de la pantalla destino se solicitan anticipadamente con prioridad baja.
- EmailJS se descarga solo al abrir el formulario de contacto.
- Las fuentes se conectan con `preconnect` y usan `display=swap` para priorizar texto visible.

### Renderizado y animación

- El Canvas limita su actualización aproximadamente a **30 FPS en escritorio** y **20 FPS en pantallas compactas**.
- La densidad de píxeles del Canvas se limita a 1.5 en escritorio y 1.25 en móvil.
- La cantidad de estrellas se mantiene entre 28 y 50 según el ancho de pantalla.
- `ResizeObserver` ajusta el Canvas únicamente cuando cambia el tamaño real del contenedor.
- `visibilitychange` detiene Canvas, música y juego cuando la pestaña queda oculta.
- El joystick y otros cambios visuales se agrupan con `requestAnimationFrame` para evitar actualizaciones repetidas por evento.
- En móvil se aplican `contain` y `will-change` solo a zonas visuales que se benefician de aislamiento de pintura.

### Persistencia y compilación

- Las escrituras de preferencias se agrupan con una espera corta antes de guardar en `localStorage`.
- `styles.min.css` y `script.min.js` son los archivos cargados por la página publicada.
- `Lightning CSS` y `esbuild` generan los archivos minificados cuando se modifica el código fuente.

---

## 💤 Carga diferida // Lazy loading

El proyecto usa carga diferida para imágenes y carga condicional para servicios que no son necesarios al inicio. El objetivo es reducir competencia de red y trabajo de decodificación durante la primera visualización.

| Técnica | Aplicación |
|---|---|
| `loading="lazy"` | Imágenes en pantallas que no se muestran inicialmente. |
| `decoding="async"` | Decodificación de imágenes sin bloquear el hilo de renderizado. |
| Caché en tiempo inactivo | SVG de Habilidades y Contacto tras estabilizar la portada. |
| Precarga por intención | Recursos activados por hover, foco o toque de la navegación. |
| Carga bajo demanda | Cliente EmailJS cuando se abre el diálogo de contacto. |

---

## 📩 Formulario de contacto

El formulario se abre en un diálogo y solicita:

- Nombre.
- Correo electrónico.
- Asunto.
- Mensaje.

Cuando se envía, el sitio carga EmailJS bajo demanda, inicializa el cliente una sola vez y envía la información desde el navegador. Mientras la petición está en proceso, el botón queda deshabilitado y muestra un estado de envío.

```text
Visitante
   │
   ▼
Diálogo de contacto
   │
   ▼
Carga condicional de EmailJS
   │
   ▼
Servicio EmailJS
   │
   ▼
Correo del destinatario configurado
```

---

## 📦 Descripción técnica por archivo

| Archivo | Función |
|---|---|
| `index.html` | Documento principal: estructura, secciones, modales, contenido y referencias a recursos. |
| `styles.css` | Hoja de estilos legible: tokens, composición arcade, responsive, accesibilidad y animaciones. |
| `styles.min.css` | Hoja de estilos minificada que se carga en producción. |
| `script.js` | Lógica legible: traducción, preferencias, navegación, juego, Canvas, audio, modales y correo. |
| `script.min.js` | JavaScript minificado que se carga en producción. |
| `package.json` | Scripts de validación y minificación opcionales. |
| `assets/documents/` | Currículums en español e inglés. |
| `assets/icons/` | Logo, favicons e iconos de contacto. |
| `assets/images/` | Retrato y plano de la mansión en formatos responsivos. |
| `assets/skills/` | Iconos de categorías técnicas. |
| `assets/tech/` | Iconos de tecnologías y herramientas. |
| `.nojekyll` | Evita el procesamiento de Jekyll en GitHub Pages. |

---

## 🔭 Limitaciones y mejoras futuras

- Añadir pruebas automatizadas de navegación, modales y reglas del minijuego.
- Añadir analítica respetuosa de privacidad con consentimiento cuando sea necesaria.
- Configurar un dominio personalizado y política de seguridad de contenido al desplegar.
- Revisar periódicamente las restricciones de EmailJS y su protección contra spam.
- Añadir imágenes Open Graph para vistas previas en redes sociales.
- Incorporar una página de accesibilidad y una licencia formal si el repositorio se abre a reutilización.

---

## 👨‍💻 Autor

**Pedro Salazar**

Portafolio orientado a desarrollo de software, interfaces, inteligencia artificial y proyectos interactivos.

---

## 📄 Uso

Proyecto de portafolio personal. Libre de reutilizar código, recursos visuales, sin utilizar documentos o contenido profesional.
