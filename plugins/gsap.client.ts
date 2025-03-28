// plugins/gsap.client.ts
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger' // 必要に応じて

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger)

  return {
    provide: {
      gsap,
      ScrollTrigger,
    },
  }
})
