<template>
  <LoadingScreen />
  <ClientOnly>
    <Header />
    <NuxtPage class="mx-5 mt-20" />
    <Footer />
  </ClientOnly>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="scss">
// 出現アニメーション
.appearanceBefore {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-in-out;
}

.appearanceAfter {
  opacity: 1;
  transform: translateY(0);
}

// ページ遷移アニメーション
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  filter: blur(1rem);
}
</style>
