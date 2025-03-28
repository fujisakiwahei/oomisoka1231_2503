<template>
  <div
    class="relative mb-6 flex flex-col items-center justify-center gap-2 lg:mb-12"
  >
    <h2 class="text-center text-sm font-bold leading-none text-green-500">
      {{ japanese }}
    </h2>
    <p class="text-center text-3xl font-bold leading-none text-green-500">
      {{ english }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  japanese: string
  english: string
}>()
</script>
