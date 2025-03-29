import { defineNuxtPlugin } from '#app'
import { appearanceAnimation } from '~/directives/appearanceAnimation'
import { appearanceAnimationBottom } from '~/directives/appearanceAnimationBottom'
import { appearanceAnimationStagger } from '~/directives/appearanceAnimationStagger'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('appearanceAnimation', appearanceAnimation)
  nuxtApp.vueApp.directive(
    'appearanceAnimationBottom',
    appearanceAnimationBottom,
  )
  nuxtApp.vueApp.directive(
    'appearanceAnimationStagger',
    appearanceAnimationStagger,
  )
})
