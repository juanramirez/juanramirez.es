// Script de animación typewriter para el hero en español
// Puedes personalizar las frases en el objeto 'frases' de abajo

const introPrefix = "Soy";
const introName = "Juan Ramírez";
const frases = {
  husbandPrefix: "Soy ",
  husbandInsert: "padre y ",
  husbandBase: "marido",
  writerPrefix: "Soy ",
  writerInsert: "aún ",
  writerBase: "escritor",
  runnerPrefix: "Soy un ",
  runnerInsert: "corredor adaptado ",
  runnerBase: "corredor",
  developerPrefix: "Soy ",
  developerInsert: "ex-",
  developerBase: "desarrollador de software",
  abi: "superviviente de un daño cerebral sobrevenido",
  alive: "SIGO VIVO"
};

const introTarget = document.querySelector("#hero-intro");
const heroLines = document.querySelector("#hero-lines");
const heroImage = document.querySelector("#hero-image");
const defaultHeroImage = "/images/profile/juan.png";
const introStartDelay = 250;
const afterIntroPause = 1200;
const introText = `${introPrefix} ${introName}`;
const heroImages = [
  "/images/hero/abi-survivor.jpeg",
  "/images/hero/father-husband.jpeg",
  "/images/hero/writer.svg",
  "/images/hero/adaptive-runner.png",
  "/images/hero/developer.png",
];
const typingSpeed = 45;
const editTypingSpeed = 55;
const linePause = 1100;
const editPause = 620;
const timers = [];
const heroCursor = document.createElement("span");
heroCursor.className = "hero-edit-cursor";
heroCursor.textContent = "_";
const setHeroImage = (indexOrSrc) => {
  if (!heroImage) return;
  const nextImage = typeof indexOrSrc === "string" ? indexOrSrc : (heroImages[indexOrSrc] ?? heroImages[0]);
  if (heroImage.getAttribute("src") === nextImage) return;
  heroImage.classList.add("opacity-0");
  window.setTimeout(() => {
    heroImage.setAttribute("src", nextImage);
    heroImage.classList.remove("opacity-0");
  }, 120);
};
setHeroImage(defaultHeroImage);
const delay = (ms) => new Promise((resolve) => { timers.push(window.setTimeout(resolve, ms)); });
const placeCursor = (target) => { target.append(heroCursor); };
const typeText = async (target, text, speed = typingSpeed) => {
  placeCursor(target);
  for (const character of text) {
    target.insertBefore(document.createTextNode(character), heroCursor);
    await delay(speed);
  }
};
const typeSegments = async (segments) => {
  for (const segment of segments) {
    if (segment.target) {
      await typeText(segment.target, segment.text);
    }
  }
};
const startHeroSequence = async () => {
  if (!introTarget || !heroLines) return;
  await delay(introStartDelay);
  await typeText(introTarget, introText);
  heroCursor.remove();
  await delay(afterIntroPause);
  introTarget.classList.add("shrink");
  introTarget.classList.add("is-dimmed");
  introTarget.innerHTML = `${introPrefix} <span class=\"hero-intro-name\">${introName}</span>`;
  heroLines.classList.add("is-visible");
  const husbandPrefix = document.querySelector("#hero-husband-prefix");
  const husbandInsert = document.querySelector("#hero-husband-insert");
  const husbandBase = document.querySelector("#hero-husband-base");
  const writerInsert = document.querySelector("#hero-writer-insert");
  const writerPrefix = document.querySelector("#hero-writer-prefix");
  const writerBase = document.querySelector("#hero-writer-base");
  const runnerPrefix = document.querySelector("#hero-runner-prefix");
  const runnerInsert = document.querySelector("#hero-runner-insert");
  const runnerBase = document.querySelector("#hero-runner-base");
  const developerPrefix = document.querySelector("#hero-developer-prefix");
  const developerInsert = document.querySelector("#hero-developer-insert");
  const developerBase = document.querySelector("#hero-developer-base");
  const abiTarget = document.querySelector("#hero-abi");
  setHeroImage(1);
  await typeSegments([
    { target: husbandPrefix, text: frases.husbandPrefix },
    { target: husbandBase, text: frases.husbandBase },
  ]);
  await delay(linePause);
  setHeroImage(2);
  await typeSegments([
    { target: writerPrefix, text: frases.writerPrefix },
    { target: writerBase, text: frases.writerBase },
  ]);
  await delay(linePause);
  setHeroImage(3);
  await typeSegments([
    { target: runnerPrefix, text: frases.runnerPrefix },
    { target: runnerBase, text: frases.runnerBase },
  ]);
  await delay(linePause);
  setHeroImage(4);
  await typeSegments([
    { target: developerPrefix, text: frases.developerPrefix },
    { target: developerBase, text: frases.developerBase },
  ]);
  await delay(linePause);
  if (abiTarget) {
    setHeroImage(0);
    await delay(linePause);
    await typeText(abiTarget, frases.abi);
  }
  await delay(900);
  if (runnerPrefix && runnerInsert) {
    setHeroImage(3);
    runnerPrefix.textContent = frases.runnerPrefix;
    placeCursor(runnerInsert);
    await delay(editPause);
    await typeText(runnerInsert, frases.runnerInsert, editTypingSpeed);
  }
  if (developerInsert) {
    setHeroImage(4);
    placeCursor(developerInsert);
    await delay(editPause);
    await typeText(developerInsert, frases.developerInsert, editTypingSpeed);
  }
  if (husbandInsert) {
    setHeroImage(1);
    placeCursor(husbandInsert);
    await delay(editPause);
    await typeText(husbandInsert, frases.husbandInsert, editTypingSpeed);
  }
  if (writerPrefix && writerInsert && writerBase) {
    setHeroImage(2);
    await delay(editPause);
    writerPrefix.textContent = frases.writerPrefix;
    writerInsert.textContent = "";
    placeCursor(writerInsert);
    await typeText(writerInsert, frases.writerInsert, editTypingSpeed);
    writerBase.textContent = frases.writerBase;
  }
  const aliveTarget = document.querySelector("#hero-alive");
  if (aliveTarget) {
    setHeroImage("/images/hero/alive.jpeg");
    await delay(linePause);
    await typeText(aliveTarget, frases.alive);
  }
};

window.addEventListener("DOMContentLoaded", startHeroSequence);
window.addEventListener("pagehide", () => {
  timers.forEach((timer) => window.clearTimeout(timer));
  heroCursor.remove();
});
