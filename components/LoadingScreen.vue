<template>
  <div
    v-if="isLoading && !hasVisited"
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
const hasVisited = ref(false)

// 初期化時にローカルストレージをチェック
onMounted(() => {
  const visited = localStorage.getItem('hasVisitedSite')
  hasVisited.value = !!visited

  if (!visited) {
    // 初回訪問時はローカルストレージに記録
    localStorage.setItem('hasVisitedSite', 'true')
  }
})

// ページ遷移開始時
nuxtApp.hook('page:start', () => {
  // 初回訪問時のみローディングを表示
  if (!hasVisited.value) {
    isLoading.value = true
  }
})

// ページ遷移完了時
nuxtApp.hook('page:finish', () => {
  isLoading.value = false
})
</script>
