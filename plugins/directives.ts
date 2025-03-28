import { defineNuxtPlugin } from '#app'
import { appearanceAnimation } from '~/directives/appearanceAnimation'
import { appearanceAnimationStagger } from '~/directives/appearanceAnimationStagger'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('appearanceAnimation', appearanceAnimation)
  nuxtApp.vueApp.directive(
    'appearanceAnimationStagger',
    appearanceAnimationStagger,
  )
})
