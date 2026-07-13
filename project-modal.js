(() => {
  const modal = document.querySelector("#project-modal");
  const modalBody = document.querySelector("#project-modal-body");
  const modalActions = document.querySelector("#project-modal-actions");
  const modalKicker = document.querySelector("#project-modal-kicker");
  const modalTitle = document.querySelector("#project-modal-title");
  const closeButton = document.querySelector("#project-modal-close");
  const modalPanel = modal?.querySelector(".about-modal__panel");

  if (!modal || !modalBody || !modalActions || !modalKicker || !modalTitle) return;

  const GITHUB_ICON = "assets/tech/github.svg";
  const SPIN_SPEED = 14;
  const CENTER_DURATION = 420;
  const FOCUS_DURATION = 3000;
  const HOLD_REPEAT = 260;
  const TILT = -8;

  const PROJECTS = {
    cristina: {
      en: {
        kicker: "FEATURED PROJECT · WEB EXPERIENCE",
        title: "Portfolio Cristina Granda",
        description: "Responsive professional voice-over portfolio focused on visual storytelling, voice demos, services and direct contact.",
        stack: "React, Three.js, Tailwind CSS, Framer Motion and EmailJS.",
        highlights: "3D microphone scene, service-first presentation and brand-focused voice artist journey.",
        github: "https://github.com/SalazarPaulo/Portfolio_Cristina_Locutor",
        live: "https://cristinagranda.es/",
      },
      es: {
        kicker: "PROYECTO DESTACADO · EXPERIENCIA WEB",
        title: "Portfolio Cristina Granda",
        description: "Portafolio responsivo de locución profesional enfocado en narrativa visual, demos de voz, servicios y contacto directo.",
        stack: "React, Three.js, Tailwind CSS, Framer Motion y EmailJS.",
        highlights: "Escena de micrófono 3D, presentación de servicios y recorrido de marca para una locutora.",
        github: "https://github.com/SalazarPaulo/Portfolio_Cristina_Locutor",
        live: "https://cristinagranda.es/",
      },
      images: [
        ["assets/projects/cristina-granda/images/home.webp", "Home"],
        ["assets/projects/cristina-granda/images/about.webp", "About"],
        ["assets/projects/cristina-granda/images/intonations.webp", "Intonations"],
        ["assets/projects/cristina-granda/images/demos.webp", "Demos"],
        ["assets/projects/cristina-granda/images/delivery.webp", "Voice delivery"],
        ["assets/projects/cristina-granda/images/contact.webp", "Contact"],
      ],
      demo: null,
    },
    bank: {
      en: {
        kicker: "FEATURED PROJECT · DESKTOP APP",
        title: "Bank Project",
        description: "Desktop banking prototype with client and administrator flows, structured views and local data persistence.",
        stack: "Java, JavaFX, FXML, CSS, SQLite, JDBC and Maven.",
        highlights: "Account-management screens, client creation workflow and desktop-first banking operations.",
        github: "https://github.com/SalazarPaulo/Bank-Project",
      },
      es: {
        kicker: "PROYECTO DESTACADO · APP DE ESCRITORIO",
        title: "Bank Project",
        description: "Prototipo bancario de escritorio con flujos de cliente y administrador, vistas estructuradas y persistencia local.",
        stack: "Java, JavaFX, FXML, CSS, SQLite, JDBC y Maven.",
        highlights: "Pantallas de gestión de cuentas, creación de clientes y operación bancaria de escritorio.",
        github: "https://github.com/SalazarPaulo/Bank-Project",
      },
      images: [
        ["assets/projects/bank-project/images/login.webp", "Login"],
        ["assets/projects/bank-project/images/dashboard.webp", "Client dashboard"],
        ["assets/projects/bank-project/images/accounts.webp", "Accounts"],
        ["assets/projects/bank-project/images/create-client.webp", "Create client"],
        ["assets/projects/bank-project/images/overview.webp", "Overview"],
      ],
      demo: null,
    },
    queens: {
      en: {
        kicker: "FEATURED PROJECT · AI SEARCH",
        title: "N-Queens Visualizer",
        description: "Interactive desktop visualizer for comparing informed and uninformed search strategies in the N-Queens problem.",
        stack: "Python, Tkinter, BFS, DFS, A*, Best-First, Hill Climbing and Graphviz.",
        highlights: "Board validation, generated solutions and state-graph export for search analysis.",
        github: "https://github.com/SalazarPaulo/n-queens-search-visualizer",
      },
      es: {
        kicker: "PROYECTO DESTACADO · BÚSQUEDA IA",
        title: "Visualizador de N-Reinas",
        description: "Visualizador de escritorio para comparar estrategias de búsqueda informada y no informada en el problema de las N-Reinas.",
        stack: "Python, Tkinter, BFS, DFS, A*, Primero el Mejor, Ascenso a la Colina y Graphviz.",
        highlights: "Validación del tablero, generación de soluciones y exportación de grafos de estados.",
        github: "https://github.com/SalazarPaulo/n-queens-search-visualizer",
      },
      images: [
        ["assets/projects/n-queens-visualizer/images/cover.webp", "Main view"],
        ["assets/projects/n-queens-visualizer/images/manual-placement.webp", "Manual placement"],
        ["assets/projects/n-queens-visualizer/images/valid-moves.webp", "Valid moves"],
        ["assets/projects/n-queens-visualizer/images/solution-complete.webp", "Solution"],
      ],
      demo: null,
    },
    spaceShip: {
      en: {
        kicker: "FEATURED PROJECT · ARCADE GAME",
        title: "Space Ship",
        description: "Java 2D survival arcade game built around meteor and UFO waves, collectible power-ups, configurable controls and local high scores.",
        stack: "Java 21, Java2D, Canvas, BufferStrategy, Swing, AWT and JSON persistence.",
        highlights: "Arcade HUD, laser combat, UFO enemies and persistent high-score flow.",
        github: "https://github.com/SalazarPaulo/space_ship",
      },
      es: {
        kicker: "PROYECTO DESTACADO · JUEGO ARCADE",
        title: "Space Ship",
        description: "Juego arcade 2D de supervivencia espacial en Java con oleadas de meteoritos y UFOs, mejoras acumulables, controles configurables y puntajes locales.",
        stack: "Java 21, Java2D, Canvas, BufferStrategy, Swing, AWT y persistencia JSON.",
        highlights: "HUD arcade, combate con láser, enemigos UFO y flujo persistente de récords.",
        github: "https://github.com/SalazarPaulo/space_ship",
      },
      images: [
        ["assets/projects/space-ship/images/menu-episode-phantom.webp", "Episode Phantom menu"],
        ["assets/projects/space-ship/images/gameplay-red-laser.webp", "Red laser gameplay"],
        ["assets/projects/space-ship/images/gameplay-powerups.webp", "Power-ups"],
        ["assets/projects/space-ship/images/gameplay-wave-two.webp", "Second wave"],
      ],
      demo: {
        src: "assets/projects/space-ship/videos/space-ship-demo.mp4",
        poster: "assets/projects/space-ship/posters/gameplay-red-laser.webp",
      },
    },
    idsml: {
      en: {
        kicker: "FEATURED PROJECT · CYBERSECURITY RESEARCH",
        title: "IDS-ML Thesis",
        description: "Experimental intrusion-detection system that combines network preprocessing, machine-learning classification, calibrated probabilities and multiengine alert correlation.",
        stack: "Python, scikit-learn, XGBoost, LightGBM, CatBoost, Snort, Suricata and Zeek.",
        highlights: "Level-based interface for capture, evaluation, MoE review and NLP result exploration.",
        github: "https://github.com/SalazarPaulo/hybrid-ids-ml-flow-based-thesis",
      },
      es: {
        kicker: "PROYECTO DESTACADO · INVESTIGACIÓN EN CIBERSEGURIDAD",
        title: "Tesis IDS-ML",
        description: "Sistema experimental de detección de intrusiones que combina preprocesamiento de red, clasificación con ML, calibración de probabilidades y correlación multifuente de alertas.",
        stack: "Python, scikit-learn, XGBoost, LightGBM, CatBoost, Snort, Suricata y Zeek.",
        highlights: "Interfaz por niveles para captura, evaluación, revisión MoE y consulta NLP de resultados.",
        github: "https://github.com/SalazarPaulo/hybrid-ids-ml-flow-based-thesis",
      },
      images: [
        ["assets/projects/ids-ml-thesis/images/level-1-captura.webp", "Level 1 capture"],
        ["assets/projects/ids-ml-thesis/images/moe-interface.webp", "Mixture of Experts interface"],
        ["assets/projects/ids-ml-thesis/images/level-3-nlp.webp", "NLP interface"],
        ["assets/projects/ids-ml-thesis/images/terminal-orchestration.webp", "Terminal orchestration"],
        ["assets/projects/ids-ml-thesis/images/unsw-roc-auc.webp", "UNSW-NB15 ROC-AUC"],
      ],
      demo: null,
    },
  };

  const preloaders = new Map();
  let lastTrigger = null;
  let stopCarousel = () => {};
  let stopStageController = () => {};

  const currentLanguage = () =>
    document.documentElement.lang.toLowerCase().startsWith("es") ? "es" : "en";

  const escape = (value) =>
    String(value).replace(/[&<>'"]/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    })[character]);

  const renderLitCharacters = (value, state) =>
    String(value).split(/(\s+)/).map((part) => {
      if (!part) return "";
      if (/^\s+$/.test(part)) return escape(part);
      const characters = Array.from(part).map((character) => {
        const index = state.index;
        state.index += 1;
        const delay = state.offset + index * state.step;
        return `<span class="project-modal-addon__lit-char" aria-hidden="true" style="--pma-lit-i:${index};animation-delay:${delay}ms">${escape(character)}</span>`;
      }).join("");
      return `<span class="project-modal-addon__lit-word" aria-hidden="true">${characters}</span>`;
    }).join("");

  const renderLitParagraph = ({ className, segments, offset = 0 }) => {
    const text = segments.map(({ text }) => text).join("");
    const count = Array.from(text.replace(/\s+/g, "")).length || 1;
    const step = Math.max(4, Math.min(14, Math.floor(1400 / count)));
    const state = { index: 0, offset, step };
    const body = segments.map(({ text, strong }) => {
      const html = renderLitCharacters(text, state);
      return strong ? `<strong aria-hidden="true">${html}</strong>` : html;
    }).join("");

    return `<p class="${className} project-modal-addon__lit-copy" data-pma-lit-text aria-label="${escape(text)}">${body}</p>`;
  };

  const preload = (projectId, priority = "low") => {
    const project = PROJECTS[projectId];
    if (!project) return;
    const sources = project.images.map(([src]) => src);
    if (project.demo?.poster) sources.push(project.demo.poster);
    sources.forEach((src) => {
      let image = preloaders.get(src);
      if (!image) {
        image = new Image();
        image.decoding = "async";
        image.fetchPriority = priority;
        image.setAttribute("fetchpriority", priority);
        image.src = src;
        preloaders.set(src, image);
      } else {
        image.fetchPriority = priority;
        image.setAttribute("fetchpriority", priority);
      }
    });
  };

  const renderSurface = ({ src, label, index, side, title, eager }) => {
    const isFront = side === "front";
    return `
      <span class="project-modal-addon__surface project-modal-addon__surface--${side}" ${isFront ? "" : 'aria-hidden="true"'}>
        <span class="project-modal-addon__beacon project-modal-addon__beacon--top" aria-hidden="true"></span>
        <span class="project-modal-addon__beacon project-modal-addon__beacon--bottom" aria-hidden="true"></span>
        <span class="project-modal-addon__visual">
          <img class="project-modal-addon__image" src="${escape(src)}" alt="${isFront ? escape(`${label} — ${title}`) : ""}" decoding="async" loading="${eager ? "eager" : "lazy"}" fetchpriority="${eager ? "high" : "low"}">
          <span class="project-modal-addon__scan" aria-hidden="true"></span>
          <span class="project-modal-addon__reticle" aria-hidden="true"></span>
          ${isFront ? `<span class="project-modal-addon__caption"><span class="project-modal-addon__watch">WATCH</span><span class="project-modal-addon__label">${escape(label)}</span></span><span class="project-modal-addon__index" aria-hidden="true">${index}</span>` : `<span class="project-modal-addon__back-label" aria-hidden="true"><span>ARCHIVE</span><strong>${index}</strong></span>`}
        </span>
      </span>`;
  };

  const renderVideo = (project, content) => {
    if (!project.demo) return "";
    return `
      <section class="project-modal-addon__video" aria-label="${currentLanguage() === "es" ? "Video de demostración" : "Project demonstration video"}">
        <div class="project-modal-addon__video-frame">
          <span class="project-modal-addon__video-beacon project-modal-addon__video-beacon--top" aria-hidden="true"></span>
          <span class="project-modal-addon__video-beacon project-modal-addon__video-beacon--bottom" aria-hidden="true"></span>
          <div class="project-modal-addon__video-viewport">
            <video width="1280" height="720" controls playsinline preload="none" poster="${escape(project.demo.poster || "")}" aria-label="${escape(content.title)} demo" data-pma-video>
              <source data-src="${escape(project.demo.src)}" type="video/mp4">
            </video>
          </div>
        </div>
      </section>`;
  };

  const renderProject = (projectId) => {
    const project = PROJECTS[projectId];
    if (!project) return false;
    const language = currentLanguage();
    const content = project[language] || project.en;
    const total = project.images.length;
    const cards = project.images.map(([src, label], itemIndex) => {
      const number = String(itemIndex + 1).padStart(2, "0");
      const angle = (360 / total) * itemIndex;
      return `
        <button class="project-modal-addon__item" type="button" data-pma-angle="${angle}" style="--pma-angle:${angle}deg" aria-label="${escape(language === "es" ? `Mostrar ${label}` : `Show ${label}`)}">
          ${renderSurface({ src, label, index: number, side: "front", title: content.title, eager: itemIndex === 0 })}
          ${renderSurface({ src, label, index: number, side: "back", title: content.title, eager: false })}
        </button>`;
    }).join("");

    modalKicker.textContent = content.kicker;
    modalTitle.textContent = content.title;
    const scrollLabel = language === "es" ? "BAJA" : "SCROLL TO LAND";
    const scrollAria = language === "es" ? "Mostrar la siguiente parte del proyecto" : "Show the next project section";
    const stackLabel = "Stack:";
    const highlightsLabel = language === "es" ? "Destacados:" : "Highlights:";
    const detailsCopy = `
      ${renderLitParagraph({ className: "project-modal-addon__copy", segments: [{ text: content.description }], offset: 0 })}
      ${renderLitParagraph({ className: "project-modal-addon__stack", segments: [{ text: stackLabel, strong: true }, { text: ` ${content.stack}` }], offset: 60 })}
      ${content.highlights ? renderLitParagraph({ className: "project-modal-addon__highlights", segments: [{ text: highlightsLabel, strong: true }, { text: ` ${content.highlights}` }], offset: 120 }) : ""}`;
    const demoCopy = renderVideo(project, content);
    const actionLinks = `
      <a class="project-action project-modal-addon__github" href="${escape(content.github)}" target="_blank" rel="noreferrer">
        <img src="${GITHUB_ICON}" alt="" aria-hidden="true">GITHUB <span class="project-action__arrow" aria-hidden="true">↗</span>
      </a>
      ${content.live ? `<a class="project-action" href="${escape(content.live)}" target="_blank" rel="noreferrer">${language === "es" ? "SITIO EN VIVO" : "LIVE SITE"} <span class="project-action__arrow" aria-hidden="true">↗</span></a>` : ""}`;
    const phases = [
      `
        <section class="project-modal-addon__phase project-modal-addon__phase--gallery is-active" data-pma-phase="gallery" aria-label="${language === "es" ? "Galería del proyecto" : "Project gallery"}">
          <div class="project-modal-addon__landing">
            <section class="project-modal-addon__gallery">
              <div class="project-modal-addon__track" data-pma-track aria-live="off">${cards}</div>
            </section>
            <aside class="project-modal-addon__side" aria-label="${language === "es" ? "Enlaces del proyecto" : "Project links"}">
              <div class="project-modal-addon__actions">${actionLinks}</div>
            </aside>
          </div>
        </section>`,
      `
        <section class="project-modal-addon__phase project-modal-addon__phase--details" data-pma-phase="details" aria-label="${language === "es" ? "Detalles del proyecto" : "Project details"}" aria-hidden="true">
          <section class="project-modal-addon__content">${detailsCopy}</section>
        </section>`,
    ];

    if (demoCopy) {
      phases.push(`
        <section class="project-modal-addon__phase project-modal-addon__phase--demo" data-pma-phase="demo" aria-label="${language === "es" ? "Demostración del proyecto" : "Project demo"}" aria-hidden="true">
          ${demoCopy}
        </section>`);
    }

    const dots = phases.map((_, phaseIndex) => `<button class="project-modal-addon__dot${phaseIndex === 0 ? " is-active" : ""}" type="button" data-pma-dot="${phaseIndex}" aria-label="${escape(language === "es" ? `Ver sección ${phaseIndex + 1}` : `View section ${phaseIndex + 1}`)}"></button>`).join("");

    modalBody.innerHTML = `
      <section class="project-modal-addon" data-project-modal-addon data-pma-current="0" data-pma-has-demo="${demoCopy ? "true" : "false"}">
        <div class="project-modal-addon__viewport" data-pma-viewport>
          ${phases.join("")}
        </div>
        <div class="project-modal-addon__hud" aria-hidden="false">
          <div class="project-modal-addon__dots" aria-label="${language === "es" ? "Secciones del proyecto" : "Project sections"}">${dots}</div>
          <button class="project-modal-addon__scroll-cue" data-pma-next type="button" aria-label="${escape(scrollAria)}">
            <span>${scrollLabel}</span>
            <i aria-hidden="true">↓</i>
          </button>
        </div>
      </section>`;

    modalActions.replaceChildren();

    return true;
  };

  const initialiseCarousel = () => {
    const track = modal.querySelector("[data-pma-track]");
    if (!track) return () => {};

    const items = [...track.querySelectorAll(".project-modal-addon__item")];
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reducedMotion = motionPreference.matches;
    let frame = 0;
    let lastTime = 0;
    let rotation = 0;
    let state = { type: "spinning" };
    let heldPointer = null;
    let holdInterval = 0;
    let carouselVisible = true;
    let visibilityObserver = null;
    let selectedHudTimer = 0;
    let selectedHudExitTimer = 0;

    const clearSelectedHudTimers = () => {
      window.clearTimeout(selectedHudTimer);
      window.clearTimeout(selectedHudExitTimer);
      selectedHudTimer = 0;
      selectedHudExitTimer = 0;
    };

    const hideSelectedHud = (item, immediate = false) => {
      window.clearTimeout(selectedHudTimer);
      selectedHudTimer = 0;
      if (!item) return;
      if (immediate) {
        item.classList.remove("is-hud-active", "is-hud-exiting");
        return;
      }
      item.classList.remove("is-hud-active");
      item.classList.add("is-hud-exiting");
      window.clearTimeout(selectedHudExitTimer);
      selectedHudExitTimer = window.setTimeout(() => {
        item.classList.remove("is-hud-exiting");
      }, 1000);
    };

    const hideAllSelectedHud = (immediate = false) => {
      clearSelectedHudTimers();
      items.forEach((entry) => {
        if (immediate) {
          entry.classList.remove("is-hud-active", "is-hud-exiting");
          return;
        }
        if (entry.classList.contains("is-hud-active") || entry.classList.contains("is-hud-exiting")) {
          hideSelectedHud(entry);
        }
      });
    };

    const revealSelectedHud = (item, timeout = 0) => {
      items.forEach((entry) => {
        if (entry !== item) entry.classList.remove("is-hud-active", "is-hud-exiting");
      });
      clearSelectedHudTimers();
      item.classList.remove("is-hud-exiting");
      item.classList.add("is-hud-active");
      if (timeout > 0) {
        selectedHudTimer = window.setTimeout(() => hideSelectedHud(item), timeout);
      }
    };

    const draw = () => {
      track.style.transform = `perspective(900px) rotateX(${TILT}deg) rotateY(${rotation}deg)`;
    };

    const focus = (item) => {
      const angle = Number(item.dataset.pmaAngle || 0);
      const target = Math.round((rotation + angle) / 360) * 360 - angle;
      items.forEach((entry) => {
        entry.classList.toggle("is-selected", entry === item);
        if (entry !== item) entry.classList.remove("is-hud-active", "is-hud-exiting");
      });

      if (Math.abs(target - rotation) < 0.5) {
        state = { type: "holding", resumeAt: performance.now() + FOCUS_DURATION };
        draw();
        return;
      }

      state = {
        type: "centering",
        from: rotation,
        target,
        started: performance.now(),
      };
    };

    const stopHolding = () => {
      if (holdInterval) window.clearInterval(holdInterval);
      holdInterval = 0;
      heldPointer = null;
    };

    if ("IntersectionObserver" in window) {
      visibilityObserver = new IntersectionObserver(
        ([entry]) => {
          carouselVisible = entry.isIntersecting;
          if (carouselVisible) lastTime = 0;
        },
        {
          root: modalPanel || null,
          threshold: 0.15,
        },
      );
      visibilityObserver.observe(track);
    }

    const startHolding = (event, item) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      event.preventDefault();
      stopHolding();
      item.dataset.pmaPressedAt = String(performance.now());
      focus(item);
      revealSelectedHud(item, 2000);
      heldPointer = event.pointerId;
      try {
        item.setPointerCapture(event.pointerId);
      } catch {
        heldPointer = null;
      }
      holdInterval = window.setInterval(() => focus(item), HOLD_REPEAT);
    };

    const releaseHolding = (event) => {
      if (heldPointer !== null && event.pointerId !== heldPointer) return;
      const item = event.currentTarget;
      if (item.hasPointerCapture?.(event.pointerId)) item.releasePointerCapture(event.pointerId);
      const pressedAt = Number(item.dataset.pmaPressedAt || 0);
      delete item.dataset.pmaPressedAt;
      if (pressedAt && performance.now() - pressedAt < 420) {
        revealSelectedHud(item);
      }
      stopHolding();
    };

    const loop = (now) => {
      frame = window.requestAnimationFrame(loop);

      const galleryPhase = track.closest("[data-pma-phase]");
      const galleryActive = !galleryPhase || galleryPhase.classList.contains("is-active");

      if (!carouselVisible || !galleryActive) {
        lastTime = now;
        return;
      }

      if (!lastTime) lastTime = now;
      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (state.type === "centering") {
        const progress = Math.min((now - state.started) / CENTER_DURATION, 1);
        const eased = 1 - (1 - progress) ** 3;
        rotation = state.from + (state.target - state.from) * eased;
        if (progress === 1) state = { type: "holding", resumeAt: now + FOCUS_DURATION };
      } else if (state.type === "holding") {
        if (now >= state.resumeAt) {
          items.forEach((entry) => entry.classList.remove("is-selected"));
          hideAllSelectedHud();
          state = { type: "spinning" };
        }
      } else if (!reducedMotion) {
        rotation += SPIN_SPEED * delta;
      }

      draw();
    };

    items.forEach((item) => {
      item.addEventListener("pointerdown", (event) => startHolding(event, item));
      item.addEventListener("pointerup", releaseHolding);
      item.addEventListener("pointercancel", releaseHolding);
      item.addEventListener("lostpointercapture", stopHolding);
      item.addEventListener("click", (event) => {
        if (event.detail === 0) {
          focus(item);
          revealSelectedHud(item);
        }
      });
      item.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        focus(item);
        revealSelectedHud(item);
      });
    });

    draw();
    if (!reducedMotion) frame = window.requestAnimationFrame(loop);

    return () => {
      stopHolding();
      hideAllSelectedHud(true);
      window.cancelAnimationFrame(frame);
      visibilityObserver?.disconnect();
      modal.querySelectorAll("video[data-pma-video]").forEach((video) => {
        video.pause();
        video.removeAttribute("src");
        video.querySelectorAll("source").forEach((source) => {
          source.removeAttribute("src");
          if (source.dataset.pmaSrc) {
            source.dataset.src = source.dataset.pmaSrc;
          }
        });
        video.dataset.pmaLoaded = "false";
        video.load();
      });
    };
  };

  const initialiseStageController = () => {
    const addon = modal.querySelector("[data-project-modal-addon]");
    if (!addon || !modalPanel) return () => {};

    const phases = [...addon.querySelectorAll("[data-pma-phase]")];
    const dots = [...addon.querySelectorAll("[data-pma-dot]")];
    const nextButton = addon.querySelector("[data-pma-next]");
    const lastIndex = phases.length - 1;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let activeIndex = -1;
    let wheelLocked = false;
    let touchStartY = null;
    let touchStartX = null;
    let lockTimer = 0;

    const loadActiveVideo = () => {
      const video = phases[activeIndex]?.querySelector("video[data-pma-video]");
      if (!video || video.dataset.pmaLoaded === "true") return;
      video.querySelectorAll("source[data-src]").forEach((source) => {
        source.dataset.pmaSrc = source.dataset.src;
        source.src = source.dataset.src;
        source.removeAttribute("data-src");
      });
      video.dataset.pmaLoaded = "true";
      video.load();
    };

    const unlock = () => {
      window.clearTimeout(lockTimer);
      lockTimer = window.setTimeout(() => {
        wheelLocked = false;
      }, reducedMotion ? 140 : 520);
    };

    const setStage = (nextIndex) => {
      const boundedIndex = Math.max(0, Math.min(lastIndex, nextIndex));
      if (boundedIndex === activeIndex) return false;
      activeIndex = boundedIndex;
      addon.dataset.pmaCurrent = String(activeIndex);
      modalPanel.scrollTop = 0;

      phases.forEach((phase, phaseIndex) => {
        const isActive = phaseIndex === activeIndex;
        phase.classList.toggle("is-active", isActive);
        phase.classList.toggle("is-before", phaseIndex < activeIndex);
        phase.classList.toggle("is-after", phaseIndex > activeIndex);
        phase.setAttribute("aria-hidden", isActive ? "false" : "true");
      });

      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === activeIndex);
        dot.setAttribute("aria-current", dotIndex === activeIndex ? "step" : "false");
      });

      if (nextButton) {
        const isComplete = activeIndex >= lastIndex;
        nextButton.classList.toggle("is-hidden", isComplete);
        nextButton.disabled = isComplete;
        nextButton.setAttribute("aria-hidden", isComplete ? "true" : "false");
      }

      loadActiveVideo();

      return true;
    };

    const advance = () => setStage(activeIndex + 1);
    const retreat = () => setStage(activeIndex - 1);

    const onWheel = (event) => {
      if (!modal.classList.contains("is-open")) return;
      const absX = Math.abs(event.deltaX);
      const absY = Math.abs(event.deltaY);
      if (absY < 10 || absY < absX) return;

      const canAdvance = event.deltaY > 0 && activeIndex < lastIndex;
      const canRetreat = event.deltaY < 0 && activeIndex > 0;
      if (!canAdvance && !canRetreat) return;

      event.preventDefault();
      if (wheelLocked) return;
      wheelLocked = true;
      if (canAdvance) advance();
      if (canRetreat) retreat();
      unlock();
    };

    const onTouchStart = (event) => {
      const touch = event.touches?.[0];
      if (!touch) return;
      touchStartY = touch.clientY;
      touchStartX = touch.clientX;
    };

    const onTouchMove = (event) => {
      const touch = event.touches?.[0];
      if (!touch || touchStartY === null || touchStartX === null) return;
      const deltaY = touchStartY - touch.clientY;
      const deltaX = touchStartX - touch.clientX;
      if (Math.abs(deltaY) < 42 || Math.abs(deltaY) < Math.abs(deltaX)) return;

      const canAdvance = deltaY > 0 && activeIndex < lastIndex;
      const canRetreat = deltaY < 0 && activeIndex > 0;
      if (!canAdvance && !canRetreat) return;

      event.preventDefault();
      if (canAdvance) advance();
      if (canRetreat) retreat();
      touchStartY = null;
      touchStartX = null;
    };

    const onKeyDown = (event) => {
      if (!modal.classList.contains("is-open")) return;
      const blockedTarget = event.target.closest?.("#project-modal-close, .modal-actions a, .project-modal-addon__dot");
      if (blockedTarget) return;
      if (["ArrowDown", "PageDown", " "].includes(event.key) && activeIndex < lastIndex) {
        event.preventDefault();
        advance();
      }
      if (["ArrowUp", "PageUp"].includes(event.key) && activeIndex > 0) {
        event.preventDefault();
        retreat();
      }
    };

    nextButton?.addEventListener("click", advance);
    dots.forEach((dot) => {
      dot.addEventListener("click", () => setStage(Number(dot.dataset.pmaDot || 0)));
    });
    modalPanel.addEventListener("wheel", onWheel, { passive: false });
    modalPanel.addEventListener("touchstart", onTouchStart, { passive: true });
    modalPanel.addEventListener("touchmove", onTouchMove, { passive: false });
    modalPanel.addEventListener("keydown", onKeyDown);

    setStage(0);

    return () => {
      window.clearTimeout(lockTimer);
      nextButton?.removeEventListener("click", advance);
      modalPanel.removeEventListener("wheel", onWheel);
      modalPanel.removeEventListener("touchstart", onTouchStart);
      modalPanel.removeEventListener("touchmove", onTouchMove);
      modalPanel.removeEventListener("keydown", onKeyDown);
    };
  };

  const resetProjectScroll = () => {
    if (!modalPanel) return;
    modalPanel.scrollTop = 0;
    window.requestAnimationFrame(() => {
      modalPanel.scrollTop = 0;
    });
  };

  const closeProject = () => {
    stopStageController();
    stopStageController = () => {};
    stopCarousel();
    stopCarousel = () => {};
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalBody.replaceChildren();
    modalActions.replaceChildren();
    resetProjectScroll();
    lastTrigger?.focus();
  };

  const openProject = (projectId, trigger) => {
    if (!PROJECTS[projectId]) return;
    preload(projectId, "high");
    stopStageController();
    stopStageController = () => {};
    stopCarousel();
    resetProjectScroll();
    if (!renderProject(projectId)) return;
    lastTrigger = trigger;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    stopStageController = initialiseStageController();
    stopCarousel = initialiseCarousel();
    resetProjectScroll();
    window.setTimeout(() => closeButton?.focus(), 0);
  };

  document.addEventListener("click", (event) => {
    const card = event.target.closest("[data-project]");
    if (card && !event.target.closest("a,button")) {
      event.preventDefault();
      event.stopImmediatePropagation();
      openProject(card.dataset.project, card);
      return;
    }

    if (event.target === modal || event.target.closest("#project-modal-close")) {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeProject();
    }
  }, true);

  document.addEventListener("keydown", (event) => {
    const card = event.target.closest?.("[data-project]");
    if (card && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      event.stopImmediatePropagation();
      openProject(card.dataset.project, card);
      return;
    }

    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      event.preventDefault();
      event.stopImmediatePropagation();
      closeProject();
    }
  }, true);

  document.querySelectorAll("[data-project]").forEach((card) => {
    ["pointerenter", "focusin", "touchstart"].forEach((eventName) => {
      card.addEventListener(eventName, () => preload(card.dataset.project, "low"), { passive: true });
    });
  });

  const projectsPage = document.querySelector('.screen-page[data-page="projects"]');
  const compactProjectsQuery = window.matchMedia("(max-width: 760px)");
  const isCompactProjectsScroll = () => (
    projectsPage
    && compactProjectsQuery.matches
    && !projectsPage.hidden
    && projectsPage.classList.contains("screen-page--active")
    && !modal.classList.contains("is-open")
  );

  document.addEventListener("wheel", (event) => {
    if (!isCompactProjectsScroll()) return;
    if (event.target.closest?.("#project-modal")) return;

    const absX = Math.abs(event.deltaX);
    const absY = Math.abs(event.deltaY);
    if (absY < 2 || absY < absX) return;

    const maxScroll = projectsPage.scrollHeight - projectsPage.clientHeight;
    if (maxScroll <= 0) return;

    const unit = event.deltaMode === WheelEvent.DOM_DELTA_LINE
      ? 16
      : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
        ? projectsPage.clientHeight
        : 1;
    const nextScroll = Math.max(0, Math.min(maxScroll, projectsPage.scrollTop + event.deltaY * unit));
    if (Math.abs(nextScroll - projectsPage.scrollTop) < 0.5) return;

    event.preventDefault();
    projectsPage.scrollTop = nextScroll;
  }, { capture: true, passive: false });

  window.addEventListener("pagehide", () => {
    stopStageController();
    stopStageController = () => {};
    stopCarousel();
    stopCarousel = () => {};
  });
})();
