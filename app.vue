<template>
  <ClientOnly>
    <Header />
    <NuxtPage class="mt-20" />
    <Footer />
  </ClientOnly>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
