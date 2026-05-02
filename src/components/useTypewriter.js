
import Typed from "typed.js";

  // Ejecutar el efecto al llamar a la función (solo en cliente)
  if (typeof window !== "undefined") {
    const target = document.querySelector(targetSelector);
    if (!target) return;
    const typed = new Typed(target, {
      strings,
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1200,
      loop: true,
      showCursor: true,
      cursorChar: "_",
      ...options,
    });
    return () => typed.destroy();
  }
}
