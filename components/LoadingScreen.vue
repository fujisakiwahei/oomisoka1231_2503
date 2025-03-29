<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-white"
  >
    <div class="flex flex-col items-center">
      <!-- ローディングアニメーション -->
      <div
        class="h-12 w-12 animate-spin rounded-full border-4 border-green-500 border-t-transparent"
      ></div>
      <p class="mt-4 text-green-500">Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp()
const isLoading = ref(false)

// ページ遷移開始時
nuxtApp.hook('page:start', () => {
  isLoading.value = true
})

// ページ遷移完了時
nuxtApp.hook('page:finish', () => {
  isLoading.value = false
})
</script>
