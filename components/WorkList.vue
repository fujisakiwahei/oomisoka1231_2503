<template>
  <ul
    v-appearance-animationStagger
    class="flex flex-wrap items-stretch gap-5 md:gap-6"
  >
    <li
      v-for="work in limitedWorks"
      :key="work.id"
      class="hover:border-10 flex w-[calc(50%-10px)] flex-col gap-4 rounded-lg border border-green-500 shadow-md transition-all duration-300 hover:border-4 md:w-[calc(33.333%-16px)]"
    >
      <NuxtLink :to="`/works/${work.id}`" class="p-4">
        <p class="aspect-[303/414] w-full">
          <NuxtImg
            :src="work.main_image?.url"
            :width="work.main_image?.width"
            :height="work.main_image?.height"
            class="h-full object-contain"
          />
        </p>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface MicroCMSResponse {
  contents: Work[]
  totalCount: number
  offset: number
  limit: number
}
import type { Work } from '~/types/work'

const { data } = await useFetch('/api/works')

// 最初の8件のみを取得
const limitedWorks = computed(() => data.value?.contents.slice(0, 8))
</script>
