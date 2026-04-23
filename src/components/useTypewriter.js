import Typed from "typed.js";
import { onMount } from "astro/client";

export default function useTypewriter(targetSelector, strings, options = {}) {
  onMount(() => {
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
  });
}
