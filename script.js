/* ==========================================================================
   01 · STATIC CONFIGURATION & COPY
   ========================================================================== */
const MESSAGE_PRESETS = {
  CRT_TERMINAL: { duration: 1350, prefix: "> " },
  CONSOLE_BLUE: { duration: 2350 },
};

/* ---------- NAVIGATION LABELS ---------- */
const NAV_PAGES = [
  "home",
  "profile",
  "projects",
  "skills",
  "contact",
  "about",
  "games",
];
const PAGE_LABELS = {
  en: {
    home: "LEVEL SELECT / HOME",
    profile: "LEVEL SELECT / PLAYER PROFILE",
    projects: "LEVEL SELECT / PROJECTS",
    skills: "LEVEL SELECT / POWER-UP INVENTORY: SKILLS",
    contact: "LEVEL SELECT / CONTACT",
    about: "LEVEL SELECT / ABOUT ME",
    games: "FREE PLAY / GAME SELECT",
    settings: "SYSTEM MENU / LOCAL SETTINGS",
    "neon-fighters": "NEON FIGHTERS / ROUND 01",
  },
  es: {
    home: "SELECCIÓN DE NIVEL / INICIO",
    profile: "SELECCIÓN DE NIVEL / PERFIL DEL JUGADOR",
    projects: "SELECCIÓN DE NIVEL / PROYECTOS",
    skills: "SELECCIÓN DE NIVEL / INVENTARIO: HABILIDADES",
    contact: "SELECCIÓN DE NIVEL / CONTACTO",
    about: "SELECCIÓN DE NIVEL / SOBRE MÍ",
    games: "JUEGO LIBRE / SELECCIÓN",
    settings: "MENÚ DEL SISTEMA / AJUSTES",
    "neon-fighters": "NEON FIGHTERS / RONDA 01",
  },
};
/* ---------- LOCALIZED COPY: ENGLISH & SPANISH ---------- */
const LOCALIZED_COPY = {
  en: {
    systemOnline: "SYSTEM ONLINE",
    homeEyebrow: "PLAYER 01 · SOFTWARE BUILDER",
    homeCopy:
      "Software developer focused on web experiences, desktop applications, data-connected systems and applied AI.",
    homeReady: "READY TO BUILD",
    statsLabel: "PLAYER STATS",
    statsStart: "START",
    statsProjects: "PROJECTS",
    statsDomains: "DOMAINS",
    missionLabel: "MISSION SELECT",
    missionOne: "WEB INTERFACES",
    missionTwo: "DESKTOP APPS",
    missionThree: "AI + SECURITY",
    moveJoystick: "MOVE MOUSE · PRESS THE KEYS ",
    insertHint: "INSERT COIN TO PLAY",
    move: "MOVE",
    profileEyebrow: "PLAYER PROFILE",
    profileTitle: "SOFTWARE DEVELOPER",
    profileCopy:
      "I build digital products with Java, Python, JavaScript, React, JavaFX, SQL and Tailwind CSS. My work connects interfaces, application flows, databases and applied AI.",
    profileLineOne: "> experience: independent developer · 2022—present",
    profileLineTwo: "> background: Systems & Computer Engineering",
    profileLineThree: "> status: academic requirements completed",
    projectsEyebrow: "LEVEL SELECT · PROJECTS",
    projectsTitle: "FEATURED PROJECTS",
    skillsEyebrow: "POWER-UP INVENTORY",
    skillsTitle: "SKILL LOADOUT",
    skillCode: "CODE",
    skillWeb: "WEB",
    skillData: "DATA",
    skillBuild: "BUILD",
    contactEyebrow: "FINAL SCREEN · CONTACT",
    contactTitle: "LET'S BUILD<br />SOMETHING.",
    contactCopy: "Available to collaborate.",
    contactMailLabel: "GMAIL FORM",
    contactMailTitle: "SEND A MESSAGE",
    contactLinkedInTitle: "VIEW PROFILE ↗",
    aboutExperience: "EXPERIENCE",
    aboutResearch: "RESEARCH",
    aboutEducation: "EDUCATION",
    aboutCertifications: "CERTIFICATIONS",
    aboutProjects: "PROJECT VAULT",
    gamesEyebrow: "FREE PLAY ENABLED",
    gamesTitle: "CHOOSE A GAME",
    gamesCopy:
      "Insert a coin, choose a mode and return to the portfolio whenever you want.",
    neonCopy:
      "Original mini-fighter: CSS + JavaScript. A/D move · W jump · F attack.",
    threeCopy: "Upcoming 3D world and immersive experience.",
    construction: "IN CONSTRUCTION",
    returnPortfolio: "RETURN TO PORTFOLIO",
    settingsEyebrow: "SYSTEM MENU · LOCAL SETTINGS",
    settingsTitle: "Settings",
    settingsLanguage: "LANGUAGE",
    settingsLanguageCopy:
      "English is the default. Open this panel to switch the portfolio to Spanish.",
    settingsTheme: "THEME MODE",
    settingsThemeCopy:
      "SYSTEM is the default mode and detects your device preference.",
    settingsAudio: "AMBIENT AUDIO",
    settingsMusic: "Continuous arcade music",
    settingsVolume: "VOLUME",
    settingsFx: "VISUAL FX",
    settingsLights: "Lights and glow",
    settingsCrt: "CRT scanlines",
    settingsLetters: "LETTER COLOR",
    settingsCache: "SAVED LOCALLY IN THIS BROWSER",
    settingsReset: "RESET DEFAULT",
    settingsReturn: "RETURN",
    buttonProfile: "PROFILE",
    buttonProjects: "PROJECTS",
    buttonSkills: "SKILLS",
    buttonContact: "CONTACT",
    buttonStart: "START",
    buttonHome: "HOME",
    buttonInsert: "INSERT",
    buttonCoin: "COIN",
    buttonCfg: "CFG",
    credits: "CREDITS",
    contactFormKicker: "GMAIL MESSAGE",
    contactFormTitle: "SEND A MESSAGE",
    formName: "YOUR NAME",
    formEmail: "YOUR EMAIL",
    formSubject: "SUBJECT",
    formMessage: "MESSAGE",
    formSend: "SEND GMAIL",
    soundOn: "SOUND ON",
    soundMuted: "MUTED",
    ready: "PLAYER 01 · PORTFOLIO READY",
    coinsAccepted: "2 COINS ACCEPTED · FREE PLAY ENABLED",
    settingsClosed: "RETURNING TO PREVIOUS SCREEN",
    audioOnline: "ARCADE AUDIO ONLINE",
    resetDone: "DEFAULT SETTINGS RESTORED",
    languageSet: "LANGUAGE: ENGLISH",
    ambientEnabled: "AMBIENT MUSIC ENABLED",
    ambientMuted: "AMBIENT MUSIC MUTED",
  },
  es: {
    systemOnline: "SISTEMA EN LÍNEA",
    homeEyebrow: "JUGADOR 01 · CREADOR DE SOFTWARE",
    homeCopy:
      "Desarrollador de software enfocado en experiencias web, aplicaciones de escritorio, sistemas con datos e IA aplicada.",
    homeReady: "LISTO PARA CONSTRUIR",
    statsLabel: "ESTADÍSTICAS",
    statsStart: "INICIO",
    statsProjects: "PROYECTOS",
    statsDomains: "DOMINIOS",
    missionLabel: "SELECCIÓN DE MISIÓN",
    missionOne: "INTERFACES WEB",
    missionTwo: "APLICACIONES DE ESCRITORIO",
    missionThree: "IA + SEGURIDAD",
    moveJoystick: "MUEVE EL MOUSE · PULSA LOS BOTONES",
    insertHint: "INSERTA MONEDA PARA JUGAR",
    move: "MOVER",
    profileEyebrow: "PERFIL DEL JUGADOR",
    profileTitle: "DESARROLLADOR DE SOFTWARE",
    profileCopy:
      "Construyo productos digitales con Java, Python, JavaScript, React, JavaFX, SQL y Tailwind CSS. Mi trabajo conecta interfaces, flujos de aplicación, bases de datos e IA aplicada.",
    profileLineOne:
      "> experiencia: desarrollador independiente · 2022—actualidad",
    profileLineTwo: "> formación: Ingeniería de Sistemas y Computación",
    profileLineThree: "> estado: requisitos académicos completados",
    projectsEyebrow: "SELECCIÓN DE NIVEL · PROYECTOS",
    projectsTitle: "PROYECTOS DESTACADOS",
    skillsEyebrow: "SELECCIÓN DE NIVEL · INVENTARIO DE POWER-UPS",
    skillsTitle: "EQUIPAMIENTO DE HABILIDADES",
    skillCode: "CÓDIGO",
    skillWeb: "WEB",
    skillData: "DATOS",
    skillBuild: "CONSTRUCCIÓN",
    contactEyebrow: "SELECCIÓN DE NIVEL · CONTACTO",
    contactTitle: "CONSTRUYAMOS<br />ALGO.",
    contactCopy: "Disponible para colaborar.",
    contactMailLabel: "GMAIL",
    contactMailTitle: "ENVIAR MENSAJE",
    contactLinkedInTitle: "VER PERFIL ↗",
    aboutExperience: "EXPERIENCIA",
    aboutResearch: "INVESTIGACIÓN",
    aboutEducation: "EDUCACIÓN",
    aboutCertifications: "CERTIFICACIONES",
    aboutProjects: "BÓVEDA DE PROYECTOS",
    gamesEyebrow: "JUEGO LIBRE ACTIVADO",
    gamesTitle: "ELIGE UN JUEGO",
    gamesCopy:
      "Inserta una moneda, elige un modo y vuelve al portafolio cuando quieras.",
    neonCopy: "Mini pelea: CSS + JavaScript. A/D mover · W saltar · F atacar.",
    threeCopy: "Próximo mundo 3D y experiencia inmersiva.",
    construction: "EN CONSTRUCCIÓN",
    returnPortfolio: "VOLVER AL PORTAFOLIO",
    settingsEyebrow: "MENÚ DEL SISTEMA · AJUSTES LOCALES",
    settingsTitle: "Configuración",
    settingsLanguage: "IDIOMA",
    settingsLanguageCopy:
      "El inglés es el idioma predeterminado. Abre este panel para ver el portafolio en español.",
    settingsTheme: "MODO DE TEMA",
    settingsThemeCopy:
      "SYSTEM es el modo predeterminado y detecta la preferencia del dispositivo.",
    settingsAudio: "AUDIO AMBIENTAL",
    settingsMusic: "Música arcade continua",
    settingsVolume: "VOLUMEN",
    settingsFx: "EFECTOS VISUALES",
    settingsLights: "Luces y resplandor",
    settingsCrt: "Scanlines CRT",
    settingsLetters: "COLOR DE LETRAS",
    settingsCache: "GUARDADO LOCALMENTE EN ESTE NAVEGADOR",
    settingsReset: "RESTAURAR",
    settingsReturn: "VOLVER",
    buttonProfile: "PERFIL",
    buttonProjects: "PROYECTOS",
    buttonSkills: "HABILIDADES",
    buttonContact: "CONTACTO",
    buttonStart: "INICIO",
    buttonHome: "INICIO",
    buttonInsert: "INSERTAR",
    buttonCoin: "MONEDA",
    buttonCfg: "CFG",
    credits: "CRÉDITOS",
    contactFormKicker: "FORMULARIO DE MENSAJE GMAIL",
    contactFormTitle: "ENVIAR UN MENSAJE",
    formName: "TU NOMBRE",
    formEmail: "TU CORREO",
    formSubject: "ASUNTO",
    formMessage: "MENSAJE",
    formSend: "ENVIAR GMAIL",
    soundOn: "SONIDO ON",
    soundMuted: "SILENCIO",
    ready: "JUGADOR 01 · PORTAFOLIO LISTO",
    coinsAccepted: "2 MONEDAS ACEPTADAS · JUEGO LIBRE ACTIVADO",
    settingsClosed: "VOLVIENDO A LA PANTALLA ANTERIOR",
    audioOnline: "AUDIO ARCADE ACTIVADO",
    resetDone: "AJUSTES PREDETERMINADOS RESTAURADOS",
    languageSet: "IDIOMA: ESPAÑOL",
    ambientEnabled: "MÚSICA AMBIENTAL ACTIVADA",
    ambientMuted: "MÚSICA AMBIENTAL SILENCIADA",
  },
};
/* ==========================================================================
   02 · PERSISTENT SETTINGS
   ========================================================================== */
const DEFAULT_SETTINGS = {
  theme: "system",
  ambient: true,
  volume: 58,
  lights: true,
  crt: true,
  palette: "neon",
  language: "en",
  bodyScale: 100,
  titleScale: 100,
};
const STORAGE_KEY = "dev-arcade.settings";

/* ==========================================================================
   03 · ADDITIONAL LOCALIZED COPY
   ========================================================================== */

Object.assign(LOCALIZED_COPY.en, {
  aboutEyebrow: "BONUS LEVEL · ABOUT ME",
  aboutTitle: "ABOUT ME",
  buttonAbout: "ABOUT",
  skillCodeList: "Java · Python · JavaScript · C · VB.NET",
  skillWebList: "React · Tailwind · HTML · CSS · APIs",
  skillDataList: "SQL · PL/SQL · Oracle · MySQL · SQL Server",
  skillBuildList: "MVC · Git · Jira · Figma · UML · BPMN",
  playNow: "PLAY NOW",
  playableNow: "PLAYABLE NOW",
  fighterEyebrow: "NEON FIGHTERS · ORIGINAL CSS + JS BUILD",
  fighterTitle: "PLAYER 01 vs CPU",
  fighterRestart: "RESTART",
  fighterExit: "EXIT",
  fighterMove: "A / D MOVE",
  fighterJump: "W JUMP",
  fighterAttack: "F ATTACK",
  themeSystem: "SYSTEM",
  themeNight: "NIGHT",
  themeLight: "LIGHT",
  settingsTextSize: "TEXT SIZE",
  settingsBodyText: "BODY TEXT",
  settingsTitles: "TITLES",
  cvTrigger: "CV / RESUME",
  cvKicker: "CAREER CARD",
});
Object.assign(LOCALIZED_COPY.es, {
  aboutEyebrow: "NIVEL EXTRA · SOBRE MÍ",
  aboutTitle: "SOBRE MÍ",
  buttonAbout: "SOBRE MÍ",
  skillCodeList: "Java · Python · JavaScript · C · VB.NET",
  skillWebList: "React · Tailwind · HTML · CSS · APIs",
  skillDataList: "SQL · PL/SQL · Oracle · MySQL · SQL Server",
  skillBuildList: "MVC · Git · Jira · Figma · UML · BPMN",
  playNow: "JUGAR AHORA",
  playableNow: "JUGABLE AHORA",
  fighterEyebrow: "NEON FIGHTERS · CREACIÓN ORIGINAL CSS + JS",
  fighterTitle: "JUGADOR 01 vs CPU",
  fighterRestart: "REINICIAR",
  fighterExit: "SALIR",
  fighterMove: "A / D MOVER",
  fighterJump: "W SALTAR",
  fighterAttack: "F ATACAR",
  themeSystem: "SISTEMA",
  themeNight: "NOCHE",
  themeLight: "CLARO",
  settingsTextSize: "TAMAÑO DE TEXTO",
  settingsBodyText: "TEXTO",
  settingsTitles: "TÍTULOS",
  cvTrigger: "CV / RESUMEN",
  cvKicker: "TARJETA PROFESIONAL",
});

/* ==========================================================================
   03 · DOM HELPERS & ELEMENT REFERENCES
   ========================================================================== */
const query = (selector, scope = document) => scope.querySelector(selector);
const queryAll = (selector, scope = document) => [
  ...scope.querySelectorAll(selector),
];
const pageNodes = queryAll(".screen-page");
const pageById = new Map(pageNodes.map((page) => [page.dataset.page, page]));
const navigationButtonsByTarget = new Map();

queryAll("[data-target]").forEach((button) => {
  const target = button.dataset.target;
  const buttons = navigationButtonsByTarget.get(target) ?? [];
  buttons.push(button);
  navigationButtonsByTarget.set(target, buttons);
});

const pageAssetWarmupTargets = new Set([
  "profile",
  "about",
  "skills",
  "contact",
]);
const pageAssetWarmers = new Map();

/**
 * Fetches image files for a hidden page before it is opened. Keeping the
 * Image objects alive lets the visible lazy images reuse the warmed cache.
 */
function warmPageAssets(target) {
  if (!pageAssetWarmupTargets.has(target) || pageAssetWarmers.has(target)) {
    return;
  }

  const page = pageById.get(target);
  if (!page) return;

  const preloaders = [
    ...new Set(
      queryAll("img[src]", page)
        .map((image) => image.getAttribute("src"))
        .filter(Boolean),
    ),
  ].map((source) => {
    const image = new Image();
    image.decoding = "async";
    image.fetchPriority = "low";
    image.src = source;
    return image;
  });

  pageAssetWarmers.set(target, preloaders);
}

function warmCoreSecondaryPageAssets() {
  warmPageAssets("skills");
  warmPageAssets("contact");
}

const screenStatus = query("#screen-status"),
  screenLocation = query("#screen-location"),
  screenFooterHint = query("#screen-footer-hint"),
  screenNotice = query("#screen-notice"),
  toast = query("#toast");
const themeToggle = query("#theme-toggle"),
  themeToggleLabel = query("#theme-toggle-label"),
  soundToggle = query("#sound-toggle"),
  soundToggleLabel = query("#sound-toggle-label");
const settingsTrigger = query("#settings-trigger"),
  settingsKey = query("#settings-key"),
  settingsReturn = query("#settings-return"),
  startButton = query("#start-button"),
  coinButton = query("#coin-button"),
  coinFx = query("#coin-fx"),
  creditsCount = query("#credits-count");
const joystickZone = query("#joystick-zone"),
  joystickStick = query("#joystick-stick"),
  joystickBall = query("#joystick-ball"),
  arcadeCanvas = query("#arcade-canvas");
const aboutModal = query("#about-modal"),
  aboutModalClose = query("#about-modal-close"),
  aboutModalKicker = query("#about-modal-kicker"),
  aboutModalTitle = query("#about-modal-title"),
  aboutModalBody = query("#about-modal-body");
const projectModal = query("#project-modal"),
  projectModalClose = query("#project-modal-close"),
  projectModalKicker = query("#project-modal-kicker"),
  projectModalTitle = query("#project-modal-title"),
  projectModalBody = query("#project-modal-body"),
  projectModalActions = query("#project-modal-actions");
const cvModal = query("#cv-modal"),
  cvModalClose = query("#cv-modal-close"),
  cvModalContent = query("#cv-modal-content"),
  cvDownloadPrimary = query("#cv-download-primary"),
  cvTrigger = query("#cv-trigger");
const contactModal = query("#contact-modal"),
  contactModalClose = query("#contact-modal-close"),
  contactForm = query("#contact-form"),
  contactFormTrigger = query("#contact-form-trigger");
const ambientToggle = query("#ambient-toggle"),
  volumeControl = query("#volume-control"),
  lightsToggle = query("#lights-toggle"),
  crtToggle = query("#crt-toggle"),
  bodyScaleControl = query("#body-scale-control"),
  titleScaleControl = query("#title-scale-control"),
  languageSummary = query("#language-summary");
const gameAccordion = query("#game-accordion"),
  gameAccordionPanels = gameAccordion
    ? queryAll("[data-game-panel]", gameAccordion)
    : [],
  gameAccordionControls = gameAccordion
    ? queryAll("[data-game-accordion]", gameAccordion)
    : [];
const neonLaunch = query("#neon-launch"),
  fightRestart = query("#fight-restart"),
  playerFighter = query("#player-fighter"),
  cpuFighter = query("#cpu-fighter"),
  playerHealth = query("#player-health"),
  cpuHealth = query("#cpu-health"),
  fightMessage = query("#fight-message"),
  hitFlash = query("#hit-flash");

/* ==========================================================================
   04 · RUNTIME STATE
   ========================================================================== */
let settings = loadSettings();
let currentPage = "home",
  previousPageBeforeSettings = "home",
  credits = 0;
let terminalTimer,
  consoleTimer,
  audioContext,
  masterGain,
  musicTimer,
  musicStep = 0,
  audioReady = false,
  audioAnnouncementMade = false;
let pointerX = innerWidth * 0.5,
  pointerY = innerHeight * 0.58,
  canvasFrame = 0,
  joystickFrame = 0,
  pendingJoystickPoint = null;
let joystickClickFrame = 0,
  joystickClickTimer = 0,
  joystickClickPending = false;
let syncCanvasAnimation = () => {};

/* ==========================================================================
   05 · STORAGE, LANGUAGE & THEME UTILITIES
   ========================================================================== */
function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const merged = { ...DEFAULT_SETTINGS, ...saved };
    if (!["system", "dark", "light"].includes(merged.theme))
      merged.theme = "system";
    return merged;
  } catch {
    return { ...DEFAULT_SETTINGS };
  }
}
function saveSettings() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {}
}

let settingsSaveTimer = 0;

/**
 * Defers localStorage writes while a range control is being dragged.
 */
function scheduleSettingsSave() {
  window.clearTimeout(settingsSaveTimer);
  settingsSaveTimer = window.setTimeout(saveSettings, 180);
}

function getCurrentLanguage() {
  return LOCALIZED_COPY[settings.language] ? settings.language : "en";
}
function translate(key) {
  return (
    LOCALIZED_COPY[getCurrentLanguage()][key] ?? LOCALIZED_COPY.en[key] ?? key
  );
}
function pageLabel(page) {
  return (
    PAGE_LABELS[getCurrentLanguage()][page] ??
    PAGE_LABELS.en[page] ??
    page.toUpperCase()
  );
}
function resolvedTheme() {
  return settings.theme === "system"
    ? matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark"
    : settings.theme;
}

/* ==========================================================================
   06 · NOTIFICATION MESSAGE API
   ========================================================================== */
/* ---------- Coordinates CRT and console notifications. ---------- */
function showCRTTerminal(message) {
  clearTimeout(terminalTimer);
  screenNotice.textContent = message;
  screenNotice.setAttribute("aria-hidden", "false");
  screenNotice.classList.remove("is-visible");
  requestAnimationFrame(() => screenNotice.classList.add("is-visible"));
  terminalTimer = setTimeout(() => {
    screenNotice.classList.remove("is-visible");
    screenNotice.setAttribute("aria-hidden", "true");
  }, MESSAGE_PRESETS.CRT_TERMINAL.duration);
}
function showConsoleBlue(message) {
  clearTimeout(consoleTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  consoleTimer = setTimeout(
    () => toast.classList.remove("is-visible"),
    MESSAGE_PRESETS.CONSOLE_BLUE.duration,
  );
}
function showNavigationMessages(label) {
  const message = `${getCurrentLanguage() === "es" ? "CARGANDO" : "LOADING"}: ${label}`;
  showCRTTerminal(message);
}
/* ------------------------------------------------------------------------------- */

/* ==========================================================================
   07 · UI STATE, SETTINGS & LOCALIZATION RENDERING
   ========================================================================== */
function pressButton(button) {
  if (!button) return;
  animateJoystickClick();
  button.classList.remove("is-pressed");
  requestAnimationFrame(() => button.classList.add("is-pressed"));
  setTimeout(() => button.classList.remove("is-pressed"), 175);
}
function applyUserSettings({ persist = true } = {}) {
  document.body.dataset.theme = settings.theme;
  document.body.dataset.resolvedTheme = resolvedTheme();
  document.body.dataset.palette = settings.palette;
  document.body.classList.toggle("fx-off", !settings.lights);
  document.body.classList.toggle("crt-off", !settings.crt);
  syncCanvasAnimation();
  document.documentElement.style.setProperty(
    "--body-font-scale",
    String((Number(settings.bodyScale) || 100) / 100),
  );
  document.documentElement.style.setProperty(
    "--title-font-scale",
    String((Number(settings.titleScale) || 100) / 100),
  );
  themeToggleLabel.textContent =
    resolvedTheme() === "dark"
      ? translate("themeNight")
      : translate("themeLight");
  soundToggleLabel.textContent = settings.ambient
    ? translate("soundOn")
    : translate("soundMuted");
  soundToggle.setAttribute("aria-pressed", String(settings.ambient));
  ambientToggle.checked = settings.ambient;
  volumeControl.value = settings.volume;
  lightsToggle.checked = settings.lights;
  crtToggle.checked = settings.crt;
  bodyScaleControl.value = settings.bodyScale;
  titleScaleControl.value = settings.titleScale;
  queryAll("[data-theme-choice]").forEach((btn) =>
    btn.classList.toggle(
      "is-selected",
      btn.dataset.themeChoice === settings.theme,
    ),
  );
  queryAll("[data-palette-choice]").forEach((btn) =>
    btn.classList.toggle(
      "is-selected",
      btn.dataset.paletteChoice === settings.palette,
    ),
  );
  queryAll("[data-language-choice]").forEach((btn) =>
    btn.classList.toggle(
      "is-selected",
      btn.dataset.languageChoice === getCurrentLanguage(),
    ),
  );
  applyLanguage();
  if (audioContext && masterGain)
    masterGain.gain.setTargetAtTime(
      (settings.volume / 100) * 0.72,
      audioContext.currentTime,
      0.04,
    );
  if (audioReady && settings.ambient) startAmbient();
  else stopAmbient();
  if (persist) scheduleSettingsSave();
}
function applyLanguage() {
  document.documentElement.lang = getCurrentLanguage();
  queryAll("[data-i18n]").forEach(
    (node) => (node.textContent = translate(node.dataset.i18n)),
  );
  queryAll("[data-i18n-html]").forEach(
    (node) => (node.innerHTML = translate(node.dataset.i18nHtml)),
  );
  languageSummary.textContent =
    getCurrentLanguage() === "en" ? "ENGLISH · DEFAULT" : "ESPAÑOL · ACTIVO";
  screenStatus.textContent = pageLabel(currentPage);
  screenLocation.textContent = pageLabel(currentPage);
  screenFooterHint.textContent =
    currentPage === "neon-fighters"
      ? "A/D · W · F"
      : getCurrentLanguage() === "es"
        ? "A S D F G · FLECHAS · ENTER · ESPACIO MONEDA"
        : "A S D F G · ARROWS · ENTER · SPACE COIN";
  const fightRound = query("#fight-round");
  if (fightRound)
    fightRound.textContent =
      getCurrentLanguage() === "es" ? "RONDA 01" : "ROUND 01";
  const spanish = getCurrentLanguage() === "es";
  cvDownloadPrimary.href = spanish
    ? "assets/documents/Pedro_Salazar_Resume_ES.pdf"
    : "assets/documents/Pedro_Salazar_Resume_EN.pdf";
  cvDownloadPrimary.textContent = spanish
    ? "DESCARGAR CV EN ESPAÑOL"
    : "DOWNLOAD ENGLISH CV";
  if (cvModalContent)
    cvModalContent.innerHTML = spanish
      ? `<p><strong>Desarrollador de software</strong> con formación en Ingeniería de Sistemas y Computación, enfocado en aplicaciones web, herramientas de escritorio, sistemas conectados a bases de datos e IA aplicada.</p><p><strong>Stack principal:</strong> Java, Python, JavaScript, React, JavaFX, SQL, Tailwind CSS, HTML y CSS.</p><p><strong>Experiencia:</strong> Desarrollador Independiente, 2022–actualidad. Requisitos académicos completados; título pendiente de emisión oficial.</p><p><strong>Proyectos:</strong> Portfolio Cristina Granda, Bank Project, Sistema de Matrícula VB.NET, Battle Ship, Pokémon Battle AI y N-Queens Visualizer.</p>`
      : `<p><strong>Software developer</strong> with a Systems and Computer Engineering background, focused on web applications, desktop tools, database-connected systems and applied AI.</p><p><strong>Core stack:</strong> Java, Python, JavaScript, React, JavaFX, SQL, Tailwind CSS, HTML and CSS.</p><p><strong>Experience:</strong> Independent Software Developer, 2022–present. Academic requirements completed; degree pending official issuance.</p><p><strong>Selected work:</strong> Portfolio Cristina Granda, Bank Project, VB.NET Enrollment System, Battle Ship Game, Pokémon Battle AI and N-Queens Search Visualizer.</p>`;
}

/* ==========================================================================
   08 · PAGE NAVIGATION & SETTINGS ROUTING
   ========================================================================== */
function setNavigationButtonsActive(target, active) {
  navigationButtonsByTarget.get(target)?.forEach((button) => {
    button.classList.toggle("is-active", active);
  });
}

function setPage(target, announce = true) {
  const nextPageNode = pageById.get(target);
  if (!nextPageNode || target === currentPage) return;

  warmPageAssets(target);

  const previousPage = currentPage;
  const previousPageNode = pageById.get(previousPage);

  if (!joystickClickPending && !joystickZone.classList.contains("is-clicked")) {
    animateJoystickClick();
  }

  if (previousPage === "neon-fighters" && target !== "neon-fighters") {
    stopFight();
  }

  if (previousPageNode) {
    previousPageNode.hidden = true;
    previousPageNode.classList.remove("screen-page--active");
  }

  nextPageNode.hidden = false;
  nextPageNode.classList.add("screen-page--active");
  setNavigationButtonsActive(previousPage, false);
  setNavigationButtonsActive(target, true);

  currentPage = target;

  const label = pageLabel(target);
  screenStatus.textContent = label;
  screenLocation.textContent = label;
  screenFooterHint.textContent =
    target === "neon-fighters"
      ? "A/D · W · F"
      : getCurrentLanguage() === "es"
        ? "A S D F G · FLECHAS · ENTER · ESPACIO MONEDA"
        : "A S D F G · ARROWS · ENTER · SPACE COIN";
  settingsTrigger.setAttribute("aria-pressed", String(target === "settings"));
  settingsKey.setAttribute("aria-pressed", String(target === "settings"));
  playTone(target === "home" ? 360 : 540, 0.06, "square", 0.045);
  if (announce) showNavigationMessages(label);
}
function nextPage(direction = 1) {
  const index = NAV_PAGES.indexOf(currentPage);
  setPage(
    NAV_PAGES[
      (Math.max(index, 0) + direction + NAV_PAGES.length) % NAV_PAGES.length
    ],
  );
}
function toggleSettings() {
  if (currentPage === "settings") {
    const destination = previousPageBeforeSettings || "home";
    setPage(destination, false);
    showConsoleBlue(translate("settingsClosed"));
  } else {
    previousPageBeforeSettings = currentPage;
    setPage("settings");
  }
}

/* ==========================================================================
   08A · GAME ACCORDION (GAME SELECT ONLY)
   ========================================================================== */
function setActiveGamePanel(gameId, silent = false) {
  if (!gameAccordion || !gameAccordionPanels.length) return;

  const target = gameAccordionPanels.find(
    (panel) => panel.dataset.gamePanel === gameId,
  );

  if (!target) return;

  gameAccordion.dataset.activeGame = gameId;

  gameAccordionPanels.forEach((panel) => {
    const active = panel === target;
    panel.classList.toggle("is-active", active);
    panel.setAttribute("aria-expanded", String(active));
  });

  if (!silent) {
    playTone(gameId === "fighters" ? 650 : 470, 0.045, "square", 0.035);
  }
}

function cycleGameAccordion(direction = 1) {
  if (!gameAccordionPanels.length) return;

  const currentIndex = gameAccordionPanels.findIndex((panel) =>
    panel.classList.contains("is-active"),
  );
  const nextIndex = Math.max(0, currentIndex) + direction;

  if (nextIndex < 0 || nextIndex >= gameAccordionPanels.length) return;

  const nextPanel = gameAccordionPanels[nextIndex];
  setActiveGamePanel(nextPanel.dataset.gamePanel);
  nextPanel.scrollIntoView({
    behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "nearest",
  });
}

/* ==========================================================================
   09 · AUDIO ENGINE
   ========================================================================== */
/* Audio: unlocked after a click/key as required by browsers. */
function ensureAudio() {
  if (!window.AudioContext && !window.webkitAudioContext)
    return Promise.resolve(false);
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioContext.createGain();
    masterGain.connect(audioContext.destination);
  }
  if (audioContext.state === "running") {
    audioReady = true;
    if (settings.ambient) startAmbient();
    return Promise.resolve(true);
  }
  return audioContext
    .resume()
    .then(() => {
      audioReady = true;
      if (settings.ambient) startAmbient();
      return true;
    })
    .catch(() => false);
}
function announceAudio() {
  ensureAudio().then((ready) => {
    if (ready && !audioAnnouncementMade) {
      audioAnnouncementMade = true;
      showConsoleBlue(translate("audioOnline"));
    }
  });
}
function playTone(
  frequency = 440,
  duration = 0.07,
  type = "square",
  volume = 0.05,
) {
  if (!audioContext || !masterGain || audioContext.state !== "running") {
    return;
  }
  const now = audioContext.currentTime,
    oscillator = audioContext.createOscillator(),
    gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(gain).connect(masterGain);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.04);
}
function playStartJingle() {
  [330, 440, 660, 880].forEach((note, index) =>
    setTimeout(() => playTone(note, 0.1, "square", 0.09), index * 76),
  );
}
function stopAmbient() {
  clearTimeout(musicTimer);
  musicTimer = undefined;
}
function startAmbient() {
  if (!audioReady || !settings.ambient || musicTimer !== undefined) return;
  const lead = [
      440, 523.25, 659.25, 523.25, 392, 440, 493.88, 659.25, 587.33, 493.88,
      440, 392, 329.63, 392, 440, 523.25,
    ],
    bass = [110, 110, 130.81, 130.81, 98, 98, 123.47, 123.47];
  const tick = () => {
    if (!audioReady || !settings.ambient || audioContext?.state !== "running") {
      musicTimer = undefined;
      return;
    }
    const step = musicStep++;
    playTone(lead[step % lead.length], 0.14, "square", 0.06);
    if (step % 2 === 0)
      playTone(
        bass[Math.floor(step / 2) % bass.length],
        0.19,
        "triangle",
        0.07,
      );
    if (step % 4 === 2) playTone(880, 0.045, "sine", 0.026);
    musicTimer = setTimeout(tick, 176);
  };
  tick();
}
/* ==========================================================================
   10 · CABINET INTERACTIONS: THEME, SOUND, COIN & JOYSTICK
   ========================================================================== */
function cycleTheme() {
  settings.theme = resolvedTheme() === "dark" ? "light" : "dark";
  applyUserSettings();
  showConsoleBlue(
    `${getCurrentLanguage() === "es" ? "TEMA" : "THEME"}: ${themeToggleLabel.textContent}`,
  );
}
function toggleAmbient() {
  settings.ambient = !settings.ambient;
  applyUserSettings();
  showConsoleBlue(
    settings.ambient ? translate("ambientEnabled") : translate("ambientMuted"),
  );
}

function insertCoin() {
  announceAudio();
  if (coinButton.classList.contains("is-inserting")) return;
  coinButton.classList.add("is-inserting");
  const rect = coinButton.getBoundingClientRect();
  coinFx.style.left = `${rect.left + rect.width / 2}px`;
  coinFx.style.top = `${rect.top + rect.height * 0.28}px`;
  coinFx.classList.remove("is-inserting");
  requestAnimationFrame(() => coinFx.classList.add("is-inserting"));
  playTone(780, 0.1, "triangle", 0.072);
  setTimeout(() => playTone(1180, 0.12, "square", 0.07), 150);
  setTimeout(() => playTone(520, 0.09, "sine", 0.05), 290);
  setTimeout(() => {
    credits += 2;
    creditsCount.textContent = String(credits).padStart(2, "0");
    coinButton.classList.remove("is-inserting");
    coinFx.classList.remove("is-inserting");
    setPage("games", false);
    showCRTTerminal(translate("coinsAccepted"));
    showConsoleBlue(translate("coinsAccepted"));
  }, 760);
}
/**
 * Coalesces pointer updates into one visual joystick update per frame.
 */
function queueJoystickUpdate(x, y) {
  pendingJoystickPoint = { x, y };

  if (joystickFrame) return;

  joystickFrame = requestAnimationFrame(() => {
    joystickFrame = 0;
    if (!pendingJoystickPoint) return;
    updateJoystick(pendingJoystickPoint.x, pendingJoystickPoint.y);
    pendingJoystickPoint = null;
  });
}

function updateJoystick(x, y) {
  pointerX = x;
  pointerY = y;
  const rect = joystickZone.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const cx = rect.left + rect.width / 2,
    cy = rect.top + rect.height / 2;
  const dx = Math.max(
      -1,
      Math.min(1, (x - cx) / Math.max(innerWidth * 0.28, 190)),
    ),
    dy = Math.max(
      -1,
      Math.min(1, (y - cy) / Math.max(innerHeight * 0.42, 230)),
    );
  joystickStick.style.setProperty(
    "--stick-angle",
    `${(dx * 31 + dy * 4).toFixed(2)}deg`,
  );
  joystickBall.style.setProperty("--ball-x", `${(dx * 2.6).toFixed(1)}px`);
  joystickBall.style.setProperty("--ball-y", `${(dy * 1.4).toFixed(1)}px`);
}

/* ==========================================================================
   11 · BONUS LEVEL BENTO ABOUT CONTENT & MODAL UTILITIES
   ========================================================================== */
const ABOUT_DETAILS = {
  en: {
    experience: {
      kicker: "EXPERIENCE",
      title: "Independent Software Developer",
      body: "<p>I develop web and desktop applications, database-connected systems and functional prototypes using Java, Python, JavaScript, React, JavaFX, SQL and Tailwind CSS.</p><ul><li>Responsive interfaces and structured application flows.</li><li>Object-oriented, MVC and event-driven development.</li><li>API integration, business forms and academic/freelance projects.</li></ul>",
    },
    research: {
      kicker: "RESEARCH",
      title: "Computer Vision · Applied AI",
      body: "<p>Co-author of a scientific publication on food detection and classification in refrigerators using artificial vision models.</p><p>This work connects data preparation, model evaluation, applied AI.</p>",
    },
    education: {
      kicker: "EDUCATION",
      title: "UTP · Systems & Computer Engineering",
      body: "<p>Bachelor's Degree in Systems and Computer Engineering from the Technological University of Panama.</p><p><strong>Status:</strong> academic requirements completed; university degree pending official issuance.</p>",
    },
    certifications: {
      kicker: "CERTIFICATIONS",
      title: "AWS · MySQL · Jira · PM",
      body: `
        <p>Selected credentials across cloud, databases, agile practices and project management.</p>
        <ul>
          <li>AWS Academy Cloud Foundations · 2024</li>
          <li>MySQL Database Principles · 2022</li>
          <li>Agile Practices with Jira · 2022</li>
          <li>Dell Volunteers Project Management Program · 2022</li>
        </ul>
        <button class="project-action" type="button" id="view-all-certifications">
          VIEW ALL CERTIFICATIONS
        </button>
      `,
    },
    projects: {
      kicker: "PROJECT VAULT",
      title: "Web · Desktop · AI · Games",
      body: "<p>A project collection covering professional portfolios, desktop systems, banking interfaces, enrollment management, logic games and AI experiments.</p><p>Selected work includes Portfolio Cristina Granda, Bank Project, VB.NET Enrollment System, Battle Ship, Pokémon Battle AI and N-Queens Search Visualizer.</p>",
    },
  },
  es: {
    experience: {
      kicker: "EXPERIENCIA",
      title: "Desarrollador de software independiente",
      body: "<p>Desarrollo aplicaciones web y de escritorio, sistemas conectados a bases de datos y prototipos funcionales usando Java, Python, JavaScript, React, JavaFX, SQL y Tailwind CSS.</p><ul><li>Interfaces responsivas y flujos de aplicación estructurados.</li><li>Desarrollo orientado a objetos, MVC y programación orientada a eventos.</li><li>Integración de APIs, formularios de negocio y proyectos académicos/freelance.</li></ul>",
    },
    research: {
      kicker: "INVESTIGACIÓN",
      title: "Visión por computadora · IA aplicada",
      body: "<p>Coautor de una publicación científica sobre detección y clasificación de alimentos en refrigeradores mediante modelos de visión artificial.</p><p>Este trabajo conecta preparación de datos, evaluación de modelos, IA aplicada.</p>",
    },
    education: {
      kicker: "EDUCACIÓN",
      title: "UTP · Ingeniería de Sistemas y Computación",
      body: "<p>Licenciatura en Ingeniería de Sistemas y Computación en la Universidad Tecnológica de Panamá.</p><p><strong>Estado:</strong> requisitos académicos completados; título universitario pendiente de emisión oficial.</p>",
    },
    certifications: {
      kicker: "CERTIFICACIONES",
      title: "AWS · MySQL · Jira · Gestión",
      body: `
        <p>Credenciales seleccionadas en nube, bases de datos, prácticas ágiles y gestión de proyectos.</p>
        <ul>
          <li>AWS Academy Cloud Foundations · 2024</li>
          <li>Principios de Base de Datos MySQL · 2022</li>
          <li>Prácticas ágiles con Jira · 2022</li>
          <li>Dell Volunteers Project Management Program · 2022</li>
        </ul>
        <button class="project-action" type="button" id="view-all-certifications">
          VER TODAS LAS CERTIFICACIONES
        </button>
      `,
    },
    projects: {
      kicker: "BÓVEDA DE PROYECTOS",
      title: "Web · Escritorio · IA · Juegos",
      body: "<p>Colección de proyectos que cubren portafolios profesionales, sistemas de escritorio, interfaces bancarias, gestión de matrícula, juegos lógicos y experimentos de IA.</p><p>Trabajo seleccionado: Portfolio Cristina Granda, Bank Project, Sistema de Matrícula VB.NET, Battle Ship, Pokémon Battle AI y N-Queens Search Visualizer.</p>",
    },
  },
};

function openModal(modal) {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}
function closeModal(modal) {
  if (modal.contains(document.activeElement)) {
    const fallbackFocus =
      modal === contactModal
        ? contactFormTrigger
        : modal === aboutModal
          ? document.querySelector("[data-about]")
          : modal === projectModal
            ? document.querySelector("[data-project]")
            : modal === cvModal
              ? cvTrigger
              : startButton;

    fallbackFocus?.focus();
  }

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}
function openAboutDialog(id) {
  const detail = (ABOUT_DETAILS[getCurrentLanguage()] || ABOUT_DETAILS.en)[id];
  if (!detail) return;
  aboutModalKicker.textContent = detail.kicker;
  aboutModalTitle.textContent = detail.title;
  aboutModalBody.innerHTML = detail.body;
  openModal(aboutModal);
  aboutModalClose.focus();
  playTone(720, 0.07, "triangle", 0.05);
}
document.addEventListener("click", (event) => {
  const button = event.target.closest("#view-all-certifications");
  if (!button) return;

  aboutModalKicker.textContent =
    getCurrentLanguage() === "es" ? "CERTIFICACIONES" : "CERTIFICATIONS";

  aboutModalTitle.textContent =
    getCurrentLanguage() === "es"
      ? "FORMACIÓN COMPLETA"
      : "FULL TRAINING RECORD";

  aboutModalBody.innerHTML = `
    <h3>Cloud & Infrastructure</h3>
    <ul>
      <li>AWS Academy Cloud Foundations · 2024</li>
      <li>Introduction to Docker · 2022</li>
      <li>Introduction to Kubernetes · 2022</li>
      <li>Serverless FrontEnd Development · 2022</li>
    </ul>

    <h3>Software Engineering</h3>
    <ul>
      <li>Automated Testing · 2022</li>
      <li>Introduction to Kafka · 2022</li>
      <li>Version Control with GitLab · 2022</li>
      <li>Agile Practices with Jira · 2022</li>
      <li>Groovy for Batch Processing · 2022</li>
    </ul>

    <h3>Data & Cybersecurity</h3>
    <ul>
      <li>MySQL Database Principles · 2022</li>
      <li>Authentication and Authorization in Cybersecurity · 2026</li>
      <li>Cryptography Concepts · 2024</li>
    </ul>

    <h3>Programming & Management</h3>
    <ul>
      <li>Java Course · 2023</li>
      <li>Python for Beginners · 2024</li>
      <li>Javascript Course · 2017</li>
      <li>Dell Volunteers Project Management Program · 2022</li>
    </ul>

    <h3>Additional Training</h3>
    <ul>
      <li>Diploma Program in U.S. Stock Market Investment Management · 2022</li>
    </ul>
  `;
});
/* ==========================================================================
   12 · PROJECT DETAIL CONTENT
   ========================================================================== */
const PROJECT_DETAILS = {
  en: {
    cristina: {
      kicker: "FEATURED PROJECT · WEB EXPERIENCE",
      title: "Portfolio Cristina Granda",
      body: "<p>A responsive portfolio for a professional presenter, designed around visual storytelling, services and a direct contact route.</p><p><strong>Stack:</strong> React, Three.js and Tailwind CSS.</p>",
      github: "https://github.com/SalazarPaulo/Portfolio_Cristina_Locutor",
      live: "https://cristinagranda.es/",
    },
    bank: {
      kicker: "FEATURED PROJECT · DESKTOP APP",
      title: "Bank Project",
      body: "<p>A desktop banking prototype focused on navigation, structured screens and object-oriented application flows.</p><p><strong>Stack:</strong> Java, JavaFX and CSS.</p>",
      github: "https://github.com/SalazarPaulo/Bank-Project",
    },
    queens: {
      kicker: "FEATURED PROJECT · AI SEARCH",
      title: "N-Queens Visualizer",
      body: "<p>An interactive visualizer for comparing search approaches in the N-Queens problem.</p><p><strong>Algorithms:</strong> BFS, DFS, A*, Best-First and Hill Climbing.</p>",
      github: "https://github.com/SalazarPaulo/n-queens-search-visualizer",
    },
  },
  es: {
    cristina: {
      kicker: "PROYECTO DESTACADO · EXPERIENCIA WEB",
      title: "Portfolio Cristina Granda",
      body: "<p>Portafolio responsivo para una locutora profesional, diseñado alrededor de narrativa visual, servicios y una ruta de contacto directa.</p><p><strong>Stack:</strong> React, Three.js y Tailwind CSS.</p>",
      github: "https://github.com/SalazarPaulo/Portfolio_Cristina_Locutor",
      live: "https://cristinagranda.es/",
    },
    bank: {
      kicker: "PROYECTO DESTACADO · APP DE ESCRITORIO",
      title: "Bank Project",
      body: "<p>Prototipo bancario de escritorio centrado en navegación, pantallas estructuradas y flujos de aplicación orientados a objetos.</p><p><strong>Stack:</strong> Java, JavaFX y CSS.</p>",
      github: "https://github.com/SalazarPaulo/Bank-Project",
    },
    queens: {
      kicker: "PROYECTO DESTACADO · BÚSQUEDA IA",
      title: "Visualizador de N-Reinas",
      body: "<p>Visualizador interactivo para comparar estrategias de búsqueda en el problema de las N-Reinas.</p><p><strong>Algoritmos:</strong> BFS, DFS, A*, Best-First y Hill Climbing.</p>",
      github: "https://github.com/SalazarPaulo/n-queens-search-visualizer",
    },
  },
};
function openProject(id) {
  const project = (PROJECT_DETAILS[getCurrentLanguage()] || PROJECT_DETAILS.en)[
    id
  ];
  if (!project) return;
  projectModalKicker.textContent = project.kicker;
  projectModalTitle.textContent = project.title;
  projectModalBody.innerHTML = project.body;
  projectModalActions.innerHTML = `<a class="project-action" href="${project.github}" target="_blank" rel="noreferrer">GITHUB ↗</a>${project.live ? `<a class="project-action" href="${project.live}" target="_blank" rel="noreferrer">${getCurrentLanguage() === "es" ? "SITIO EN VIVO ↗" : "LIVE SITE ↗"}</a>` : ""}`;
  openModal(projectModal);
  projectModalClose.focus();
  playTone(720, 0.07, "triangle", 0.05);
}

function openCV() {
  openModal(cvModal);
  cvModalClose.focus();
  playTone(710, 0.07, "triangle", 0.05);
}
function openContactForm() {
  openModal(contactModal);
  window.setTimeout(() => query("#contact-name")?.focus(), 30);
  playTone(660, 0.075, "triangle", 0.05);

  if (contactSendButton) {
    contactSendButton.disabled = true;
  }

  loadEmailClient()
    .then(() => {
      if (contactSendButton) contactSendButton.disabled = false;
    })
    .catch(() => {
      if (contactSendButton) contactSendButton.disabled = false;
      showConsoleBlue(
        getCurrentLanguage() === "es"
          ? "FORMULARIO NO DISPONIBLE"
          : "FORM UNAVAILABLE",
      );
    });
}

/* ==========================================================================
   13 · NEON FIGHTERS MINI-GAME
   ========================================================================== */
const gameState = {
  running: false,
  raf: 0,
  lastTime: 0,
  keys: { left: false, right: false },
  player: {
    x: 24,
    y: 0,
    vy: 0,
    hp: 100,
    cooldown: 0,
    attackLock: 0,
    facing: 1,
  },
  cpu: {
    x: 76,
    y: 0,
    vy: 0,
    hp: 100,
    cooldown: 0,
    attackLock: 0,
    facing: -1,
    decision: 0,
  },
};
function resetFight() {
  cancelAnimationFrame(gameState.raf);
  gameState.player = {
    x: 24,
    y: 0,
    vy: 0,
    hp: 100,
    cooldown: 0,
    attackLock: 0,
    facing: 1,
  };
  gameState.cpu = {
    x: 76,
    y: 0,
    vy: 0,
    hp: 100,
    cooldown: 0,
    attackLock: 0,
    facing: -1,
    decision: 0,
  };
  gameState.keys = { left: false, right: false };
  updateFightVisuals();
}
function startFight() {
  announceAudio();
  setPage("neon-fighters", false);
  resetFight();
  gameState.running = true;
  gameState.lastTime = performance.now();
  flashFightMessage("FIGHT!");
  playStartJingle();
  gameState.raf = requestAnimationFrame(fightLoop);
}
function stopFight() {
  gameState.running = false;
  cancelAnimationFrame(gameState.raf);
  gameState.keys.left = false;
  gameState.keys.right = false;
}
function jump(fighter) {
  if (!gameState.running || fighter.y > 0.1) return;
  fighter.vy = 18;
  playTone(260, 0.07, "square", 0.035);
}
function attack(attacker, defender, element) {
  if (!gameState.running || attacker.cooldown > 0 || attacker.attackLock > 0)
    return;
  attacker.cooldown = 0.42;
  attacker.attackLock = 0.18;
  element.classList.remove("is-attacking");
  requestAnimationFrame(() => element.classList.add("is-attacking"));
  playTone(620, 0.055, "sawtooth", 0.035);
  if (Math.abs(attacker.x - defender.x) < 17 && defender.hp > 0) {
    defender.hp = Math.max(
      0,
      defender.hp - (attacker === gameState.player ? 12 : 9),
    );
    const defEl = defender === gameState.player ? playerFighter : cpuFighter;
    defEl.classList.remove("is-hit");
    requestAnimationFrame(() => defEl.classList.add("is-hit"));
    hitFlash.classList.remove("is-active");
    requestAnimationFrame(() => hitFlash.classList.add("is-active"));
    playTone(110, 0.1, "square", 0.055);
    if (defender.hp <= 0)
      endFight(attacker === gameState.player ? "PLAYER 01 WINS" : "CPU WINS");
  }
}
function endFight(message) {
  gameState.running = false;
  flashFightMessage(message);
  playTone(98, 0.5, "sawtooth", 0.05);
  updateFightVisuals();
}
function flashFightMessage(message) {
  fightMessage.textContent = message;
  fightMessage.classList.remove("is-visible");
  requestAnimationFrame(() => fightMessage.classList.add("is-visible"));
}
function updateFightVisuals() {
  const { player, cpu } = gameState;
  player.facing = player.x <= cpu.x ? 1 : -1;
  cpu.facing = cpu.x >= player.x ? -1 : 1;
  playerFighter.style.setProperty("--x", player.x);
  playerFighter.style.setProperty("--jump", player.y);
  playerFighter.style.setProperty("--facing", player.facing);
  cpuFighter.style.setProperty("--x", cpu.x);
  cpuFighter.style.setProperty("--jump", cpu.y);
  cpuFighter.style.setProperty("--facing", cpu.facing);
  playerHealth.style.width = `${player.hp}%`;
  cpuHealth.style.width = `${cpu.hp}%`;
  playerFighter.classList.toggle("is-ko", player.hp <= 0);
  cpuFighter.classList.toggle("is-ko", cpu.hp <= 0);
}
function fightLoop(time) {
  const d = Math.min(0.05, (time - gameState.lastTime) / 1000 || 0.016);
  gameState.lastTime = time;
  if (!gameState.running) return;
  const { player, cpu } = gameState;
  if (gameState.keys.left) player.x -= 31 * d;
  if (gameState.keys.right) player.x += 31 * d;
  player.x = Math.max(7, Math.min(93, player.x));
  [player, cpu].forEach((f) => {
    f.cooldown = Math.max(0, f.cooldown - d);
    f.attackLock = Math.max(0, f.attackLock - d);
    if (f.y > 0 || f.vy > 0) {
      f.y += f.vy * 36 * d;
      f.vy -= 2.6 * 36 * d;
      if (f.y <= 0) {
        f.y = 0;
        f.vy = 0;
      }
    }
  });
  const distance = player.x - cpu.x;
  cpu.decision -= d;
  if (cpu.decision <= 0) {
    cpu.decision = 0.08 + Math.random() * 0.18;
    if (Math.abs(distance) > 15) cpu.x += Math.sign(distance) * 14 * d;
    if (Math.abs(distance) < 16 && cpu.cooldown <= 0 && Math.random() > 0.7)
      attack(cpu, player, cpuFighter);
    if (Math.random() > 0.95) jump(cpu);
  }
  cpu.x = Math.max(7, Math.min(93, cpu.x));
  updateFightVisuals();
  gameState.raf = requestAnimationFrame(fightLoop);
}

/* ==========================================================================
   14 · CRT BACKGROUND CANVAS
   ========================================================================== */
function initCanvas() {
  if (!arcadeCanvas) return;

  const context = arcadeCanvas.getContext("2d", { alpha: true });
  if (!context) return;

  const starCount = Math.max(28, Math.min(50, Math.round(innerWidth / 12)));
  const stars = Array.from({ length: starCount }, () => ({
    x: Math.random(),
    y: Math.random(),
    depth: Math.random() * 0.9 + 0.1,
  }));

  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const compactViewport = matchMedia("(max-width: 759px)");
  let elapsed = 0;
  let lastPaint = 0;
  let canvasTimer = 0;
  let resizeFrame = 0;
  let canvasWidth = 0;
  let canvasHeight = 0;
  let backgroundGradient = null;

  function shouldRenderCanvas() {
    return settings.lights && !document.hidden && !reducedMotion.matches;
  }

  function canvasFrameInterval() {
    return compactViewport.matches ? 50 : 33;
  }

  function cancelCanvasRender() {
    cancelAnimationFrame(canvasFrame);
    clearTimeout(canvasTimer);
    canvasFrame = 0;
    canvasTimer = 0;
  }

  function resizeCanvas() {
    const bounds = arcadeCanvas.getBoundingClientRect();
    const pixelRatio = Math.min(
      devicePixelRatio || 1,
      compactViewport.matches ? 1.25 : 1.5,
    );

    canvasWidth = Math.max(1, Math.floor(bounds.width));
    canvasHeight = Math.max(1, Math.floor(bounds.height));
    arcadeCanvas.width = Math.max(1, Math.floor(canvasWidth * pixelRatio));
    arcadeCanvas.height = Math.max(1, Math.floor(canvasHeight * pixelRatio));
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    backgroundGradient = context.createRadialGradient(
      canvasWidth * 0.48,
      canvasHeight * 0.32,
      5,
      canvasWidth * 0.48,
      canvasHeight * 0.32,
      Math.max(canvasWidth, canvasHeight),
    );
    backgroundGradient.addColorStop(0, "rgba(42,133,184,.16)");
    backgroundGradient.addColorStop(1, "rgba(1,5,22,.05)");
  }

  function queueCanvasResize() {
    if (resizeFrame) return;

    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = 0;
      resizeCanvas();
      scheduleCanvasRender();
    });
  }

  function scheduleCanvasRender() {
    if (!shouldRenderCanvas() || canvasFrame || canvasTimer) return;

    const delay = Math.max(
      0,
      canvasFrameInterval() - (performance.now() - lastPaint),
    );

    canvasTimer = window.setTimeout(() => {
      canvasTimer = 0;
      canvasFrame = requestAnimationFrame(drawCanvas);
    }, delay);
  }

  function drawCanvas(timestamp) {
    canvasFrame = 0;
    if (!shouldRenderCanvas()) return;

    lastPaint = timestamp;
    elapsed += compactViewport.matches ? 0.005 : 0.006;

    context.clearRect(0, 0, canvasWidth, canvasHeight);

    if (backgroundGradient) {
      context.fillStyle = backgroundGradient;
      context.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    for (const [index, star] of stars.entries()) {
      const opacity =
        0.35 + Math.sin(elapsed * (1.5 + star.depth) + index) * 0.25;
      context.fillStyle =
        index % 5 === 0
          ? `rgba(255,84,206,${opacity})`
          : `rgba(126,238,255,${opacity})`;
      context.fillRect(
        star.x * canvasWidth,
        star.y * canvasHeight,
        star.depth * 1.5,
        star.depth * 1.5,
      );
    }

    scheduleCanvasRender();
  }

  function updateCanvasAnimation() {
    if (!shouldRenderCanvas()) {
      cancelCanvasRender();
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      return;
    }

    scheduleCanvasRender();
  }

  const resizeObserver = new ResizeObserver(queueCanvasResize);
  resizeObserver.observe(arcadeCanvas);

  document.addEventListener("visibilitychange", updateCanvasAnimation);
  reducedMotion.addEventListener?.("change", updateCanvasAnimation);
  compactViewport.addEventListener?.("change", queueCanvasResize);

  syncCanvasAnimation = updateCanvasAnimation;
  resizeCanvas();
  updateCanvasAnimation();
}

/* Warm Skills and Contact SVGs after the initial screen has settled. */
window.addEventListener(
  "load",
  () => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(warmCoreSecondaryPageAssets, {
        timeout: 1800,
      });
      return;
    }

    window.setTimeout(warmCoreSecondaryPageAssets, 700);
  },
  { once: true },
);

/* ==========================================================================
   15 · EVENT BINDINGS
   ========================================================================== */
queryAll("[data-target]").forEach((button) => {
  const warmTargetAssets = () => warmPageAssets(button.dataset.target);

  button.addEventListener("pointerenter", warmTargetAssets, { passive: true });
  button.addEventListener("focus", warmTargetAssets);
  button.addEventListener("touchstart", warmTargetAssets, { passive: true });
  button.addEventListener("click", () => {
    announceAudio();
    pressButton(button);
    setPage(button.dataset.target);
  });
});
queryAll("[data-about]").forEach((button) =>
  button.addEventListener("click", () => {
    announceAudio();
    openAboutDialog(button.dataset.about);
  }),
);
queryAll("[data-project]").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (!event.target.closest("a,button")) {
      announceAudio();
      openProject(card.dataset.project);
    }
  });
  card.addEventListener("keydown", (event) => {
    if (["Enter", " "].includes(event.key)) {
      event.preventDefault();
      announceAudio();
      openProject(card.dataset.project);
    }
  });
});
queryAll("[data-theme-choice]").forEach((button) =>
  button.addEventListener("click", () => {
    announceAudio();
    settings.theme = button.dataset.themeChoice;
    applyUserSettings();
    showConsoleBlue(
      `${getCurrentLanguage() === "es" ? "TEMA" : "THEME"}: ${settings.theme.toUpperCase()}`,
    );
  }),
);
queryAll("[data-palette-choice]").forEach((button) =>
  button.addEventListener("click", () => {
    settings.palette = button.dataset.paletteChoice;
    applyUserSettings();
    showConsoleBlue(
      `${getCurrentLanguage() === "es" ? "COLOR DE LETRAS" : "LETTER COLOR"}: ${settings.palette.toUpperCase()}`,
    );
  }),
);
queryAll("[data-language-choice]").forEach((button) =>
  button.addEventListener("click", () => {
    settings.language = button.dataset.languageChoice;
    applyUserSettings();
    showConsoleBlue(translate("languageSet"));
  }),
);
themeToggle.addEventListener("click", () => {
  announceAudio();
  cycleTheme();
});
soundToggle.addEventListener("click", () => {
  announceAudio();
  toggleAmbient();
});
settingsTrigger.addEventListener("click", () => {
  announceAudio();
  toggleSettings();
});
settingsKey.addEventListener("click", () => {
  announceAudio();
  pressButton(settingsKey);
  toggleSettings();
});
settingsReturn.addEventListener("click", () => {
  announceAudio();
  toggleSettings();
});
startButton.addEventListener("click", () => {
  announceAudio();
  pressButton(startButton);
  playStartJingle();
  setPage("home", false);
  showCRTTerminal(translate("ready"));
  showConsoleBlue(translate("ready"));
});
coinButton.addEventListener("click", () => {
  pressButton(coinButton);
  insertCoin();
});
/* Game selector accordion: no impact outside [data-page="games"]. */
gameAccordionControls.forEach((control) => {
  control.addEventListener("click", () => {
    announceAudio();
    cycleGameAccordion(control.dataset.gameAccordion === "previous" ? -1 : 1);
  });
});
queryAll("[data-mobile-page]").forEach((button) => {
  button.addEventListener("click", () => {
    announceAudio();
    pressButton(button);

    nextPage(button.dataset.mobilePage === "previous" ? -1 : 1);
  });
});
gameAccordionPanels.forEach((panel) => {
  panel.addEventListener("click", (event) => {
    if (event.target.closest("button, a")) return;
    if (!panel.classList.contains("is-active")) {
      announceAudio();
      setActiveGamePanel(panel.dataset.gamePanel);
    }
  });

  panel.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    if (event.target.closest("button, a")) return;
    event.preventDefault();
    announceAudio();
    setActiveGamePanel(panel.dataset.gamePanel);
  });
});

setActiveGamePanel(gameAccordion?.dataset.activeGame || "fighters", true);

neonLaunch.addEventListener("click", startFight);
fightRestart.addEventListener("click", () => {
  if (gameState.running) resetFight();
  else startFight();
});
aboutModalClose.addEventListener("click", () => closeModal(aboutModal));
projectModalClose.addEventListener("click", () => closeModal(projectModal));
cvModalClose.addEventListener("click", () => closeModal(cvModal));
contactModalClose.addEventListener("click", () => closeModal(contactModal));
[aboutModal, projectModal, cvModal, contactModal].forEach((modal) =>
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal(modal);
  }),
);
cvTrigger.addEventListener("click", () => {
  announceAudio();
  pressButton(cvTrigger);
  openCV();
});
contactFormTrigger.addEventListener("click", () => {
  announceAudio();
  pressButton(contactFormTrigger);
  openContactForm();
});
ambientToggle.addEventListener("change", (event) => {
  settings.ambient = event.target.checked;
  if (settings.ambient) announceAudio();
  applyUserSettings();
});
volumeControl.addEventListener("input", (event) => {
  settings.volume = Number(event.target.value);

  if (audioContext && masterGain) {
    masterGain.gain.setTargetAtTime(
      (settings.volume / 100) * 0.72,
      audioContext.currentTime,
      0.04,
    );
  }

  scheduleSettingsSave();
});
lightsToggle.addEventListener("change", (event) => {
  settings.lights = event.target.checked;
  applyUserSettings();
});
crtToggle.addEventListener("change", (event) => {
  settings.crt = event.target.checked;
  applyUserSettings();
});
bodyScaleControl.addEventListener("input", (event) => {
  settings.bodyScale = Number(event.target.value);
  document.documentElement.style.setProperty(
    "--body-font-scale",
    String(settings.bodyScale / 100),
  );
  scheduleSettingsSave();
});
titleScaleControl.addEventListener("input", (event) => {
  settings.titleScale = Number(event.target.value);
  document.documentElement.style.setProperty(
    "--title-font-scale",
    String(settings.titleScale / 100),
  );
  scheduleSettingsSave();
});
query("#reset-settings").addEventListener("click", () => {
  settings = { ...DEFAULT_SETTINGS };
  applyUserSettings();
  showConsoleBlue(translate("resetDone"));
});
queryAll("[data-game-action]").forEach((button) => {
  const action = button.dataset.gameAction;
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    announceAudio();
    if (action === "left") gameState.keys.left = true;
    if (action === "right") gameState.keys.right = true;
    if (action === "jump") jump(gameState.player);
    if (action === "attack")
      attack(gameState.player, gameState.cpu, playerFighter);
  });
  ["pointerup", "pointercancel", "pointerleave"].forEach((name) =>
    button.addEventListener(name, () => {
      if (action === "left") gameState.keys.left = false;
      if (action === "right") gameState.keys.right = false;
    }),
  );
});
addEventListener(
  "pointermove",
  (event) => {
    if (event.pointerType !== "touch") {
      queueJoystickUpdate(event.clientX, event.clientY);
    }
  },
  { passive: true },
);
addEventListener("pointerdown", announceAudio, { once: true, capture: true });
addEventListener("keydown", announceAudio, { once: true, capture: true });
function animateJoystickClick() {
  if (!joystickZone) return;

  clearTimeout(joystickClickTimer);
  cancelAnimationFrame(joystickClickFrame);
  joystickClickPending = true;
  joystickZone.classList.remove("is-clicked");

  /* Wait one paint before reapplying the class instead of forcing layout. */
  joystickClickFrame = requestAnimationFrame(() => {
    joystickClickFrame = requestAnimationFrame(() => {
      joystickClickFrame = 0;
      joystickClickPending = false;
      joystickZone.classList.add("is-clicked");
      joystickClickTimer = window.setTimeout(() => {
        joystickZone.classList.remove("is-clicked");
      }, 300);
    });
  });
}

joystickZone.addEventListener("pointerdown", (event) => {
  announceAudio();
  animateJoystickClick();
  updateJoystick(event.clientX, event.clientY);
  playTone(220, 0.055, "sine", 0.04);
});
joystickZone.addEventListener("pointerup", (event) => {
  if (currentPage === "neon-fighters") return;
  const r = joystickZone.getBoundingClientRect();
  nextPage(event.clientX < r.left + r.width / 2 ? -1 : 1);
});
addEventListener("keydown", (event) => {
  const tag = document.activeElement?.tagName?.toLowerCase();
  if (["input", "textarea"].includes(tag)) return;
  if (event.key === "Escape") {
    [aboutModal, projectModal, cvModal, contactModal].forEach(closeModal);
    if (currentPage === "settings") toggleSettings();
    else if (currentPage === "neon-fighters") setPage("games");
    return;
  }
  if (event.code === "Space" || event.key === " ") {
    event.preventDefault();
    pressButton(coinButton);
    insertCoin();
    return;
  }
  if (currentPage === "neon-fighters") {
    const k = event.key.toLowerCase();
    if (k === "a") {
      event.preventDefault();
      gameState.keys.left = true;
    }
    if (k === "d") {
      event.preventDefault();
      gameState.keys.right = true;
    }
    if (k === "w") {
      event.preventDefault();
      jump(gameState.player);
    }
    if (k === "f") {
      event.preventDefault();
      attack(gameState.player, gameState.cpu, playerFighter);
    }
    return;
  }
  if (/^[asdfgASDFG]$/.test(event.key)) {
    const target = {
      a: "profile",
      s: "projects",
      d: "skills",
      f: "contact",
      g: "about",
    }[event.key.toLowerCase()];
    event.preventDefault();
    pressButton(query(`[data-target="${target}"]`));
    setPage(target);
  }
  if (["ArrowRight", "ArrowDown"].includes(event.key)) {
    event.preventDefault();
    nextPage(1);
  }
  if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
    event.preventDefault();
    nextPage(-1);
  }
  if (event.key === "Enter") {
    event.preventDefault();
    pressButton(startButton);
    startButton.click();
  }
  if (event.key.toLowerCase() === "i") {
    event.preventDefault();
    pressButton(coinButton);
    insertCoin();
  }
});
addEventListener("keyup", (event) => {
  if (event.key.toLowerCase() === "a") gameState.keys.left = false;
  if (event.key.toLowerCase() === "d") gameState.keys.right = false;
});
const systemThemePreference = matchMedia("(prefers-color-scheme: light)");

systemThemePreference.addEventListener?.("change", () => {
  if (settings.theme === "system") {
    applyUserSettings({ persist: false });
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopAmbient();

    if (gameState.running) {
      stopFight();
    }

    return;
  }

  if (audioReady && settings.ambient) {
    startAmbient();
  }
});

applyUserSettings({ persist: false });
updateJoystick(pointerX, pointerY);
initCanvas();

/* --------------------------------------------------------------------------
   CONTACT FORM · EMAILJS
   -------------------------------------------------------------------------- */

/* ==========================================================================
   16 · ON-DEMAND EMAIL DELIVERY
   ========================================================================== */

const EMAIL_SERVICE_CONFIG = {
  serviceId: "service_fdj38eb",
  templateId: "template_62wu7ii",
  publicKey: "7TmI1q3Ap-8CEyUam",
};

const contactSendButton = contactForm?.querySelector(".contact-form__send");
let emailClientPromise;
let emailClientConfigured = false;

/**
 * Loads EmailJS only when the visitor opens the contact form.
 */
function loadEmailClient() {
  if (window.emailjs) return Promise.resolve(window.emailjs);
  if (emailClientPromise) return emailClientPromise;

  emailClientPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => resolve(window.emailjs);
    script.onerror = () => reject(new Error("Unable to load the mail client."));
    document.head.append(script);
  });

  return emailClientPromise;
}

async function getEmailClient() {
  const client = await loadEmailClient();

  if (!emailClientConfigured) {
    client.init({ publicKey: EMAIL_SERVICE_CONFIG.publicKey });
    emailClientConfigured = true;
  }

  return client;
}

if (contactForm && contactSendButton) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    announceAudio();

    const originalText = contactSendButton.textContent;
    contactSendButton.disabled = true;
    contactSendButton.textContent =
      getCurrentLanguage() === "es" ? "ENVIANDO..." : "SENDING...";

    try {
      const emailClient = await getEmailClient();

      await emailClient.send(
        EMAIL_SERVICE_CONFIG.serviceId,
        EMAIL_SERVICE_CONFIG.templateId,
        {
          from_name: query("#contact-name").value.trim(),
          from_email: query("#contact-email").value.trim(),
          subject: query("#contact-subject").value.trim(),
          message: query("#contact-message").value.trim(),
          to_email: "pauloiisalazar@gmail.com",
          to_name: "Pedro Salazar",
        },
      );

      showConsoleBlue(
        getCurrentLanguage() === "es" ? "MENSAJE ENVIADO" : "MESSAGE SENT",
      );

      contactForm.reset();
      window.setTimeout(() => closeModal(contactModal), 500);
    } catch (error) {
      console.error("Email delivery error:", error);
      showConsoleBlue(
        getCurrentLanguage() === "es" ? "ERROR AL ENVIAR" : "SEND ERROR",
      );
    } finally {
      contactSendButton.disabled = false;
      contactSendButton.textContent = originalText;
    }
  });
}
