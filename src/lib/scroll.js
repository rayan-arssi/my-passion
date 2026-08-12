import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenis = null;

export function initLenis() {
  if (lenis) return lenis;
  lenis = new Lenis({
    lerp: 0.09,
    smoothWheel: true,
    wheelMultiplier: 1,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

export function getLenis() {
  return lenis;
}

export function destroyLenis() {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
}

export function scrollToId(id, offset = 0) {
  if (!lenis) return;
  if (id === 'top' || id === null) {
    lenis.scrollTo(0, { duration: 1.4 });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  lenis.scrollTo(el, { offset, duration: 1.4 });
}
