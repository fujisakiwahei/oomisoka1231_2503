<template>
  <ul class="flex flex-wrap items-stretch gap-6">
    <li
      v-for="work in data?.contents"
      :key="work.id"
      class="hover:border-10 flex w-[calc(33.333%-16px)] flex-col gap-4 rounded-lg border border-green-500 shadow-md transition-all duration-300 hover:border-4"
    >
      <NuxtLink :to="`/works/${work.id}`" class="p-4">
        <p class="aspect-[303/414] w-full">
          <img
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
</script>
