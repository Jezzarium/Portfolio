import type { TransitionConfig } from 'svelte/transition';

export function fadeBlur(
  node: HTMLElement,
  { duration = 800 }: { duration?: number } = {}
): TransitionConfig {
  return {
    duration,
    css: (t: number) => {
      // easeOutExpo: t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      const opacity = eased;
      const blur = (1 - eased) * 10;

      return `
        opacity: ${opacity};
        filter: blur(${blur}px);
      `;
    },
  };
}
