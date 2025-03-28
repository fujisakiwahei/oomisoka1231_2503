import { useNuxtApp } from '#app'
import { gsap } from 'gsap'
import type { Directive } from 'vue'

export const appearanceAnimationStagger: Directive = {
  mounted(el) {
    const { $ScrollTrigger } = useNuxtApp()
    const children = Array.from(el.children) as HTMLElement[]

    gsap.set(children, {
      onComplete: () => {
        children.forEach((child, index) => {
          child.classList.add('appearanceBefore')
        })
      },
    })

    $ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      markers: false,
      onEnter: () => {
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('appearanceAfter')
          }, index * 100)
        })
      },
    })
  },
}
