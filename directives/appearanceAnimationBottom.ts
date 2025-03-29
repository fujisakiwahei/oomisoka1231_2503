import { useNuxtApp } from '#app'
import { gsap } from 'gsap'
import type { Directive } from 'vue'

export const appearanceAnimationBottom: Directive = {
  mounted(el) {
    const { $ScrollTrigger } = useNuxtApp()

    gsap.set(el, {
      onComplete: () => {
        el.classList.add('appearanceBefore')
      },
    })

    $ScrollTrigger.create({
      trigger: el,
      start: 'top bottom',
      once: true,
      markers: false,
      onEnter: () => {
        el.classList.add('appearanceAfter')
      },
    })
  },
}
