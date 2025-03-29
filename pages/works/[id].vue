<template>
  <div
    v-if="data"
    :key="data.id"
    class="wrapper mx-auto max-w-[960px] px-5 py-10 md:py-20"
  >
    <p
      v-appearance-animation
      class="relative mb-8 block aspect-[303/414] w-full"
    >
      <div
        v-if="!data?.main_image"
        class="absolute inset-0 animate-pulse rounded-lg bg-gray-200"
      ></div>
      <NuxtImg
        :src="data.main_image?.url"
        :width="500"
        :height="800"
        class="absolute inset-0 h-full w-full object-contain"
      />
    </p>
    <div v-if="data">
      <ul class="my-12 flex flex-wrap items-center justify-center gap-4">
        <li v-for="category in data.categories" :key="category.id">
          <NuxtLink
            :to="`/works/category/${category.id}`"
            class="flex h-10 w-fit items-center justify-center rounded-full border border-black bg-white px-4 text-sm shadow-sm transition-all duration-200 hover:border-green-500 hover:bg-green-500 hover:text-[white]"
          >
            # {{ category.name }}
          </NuxtLink>
        </li>
      </ul>
      <div v-if="data.description">
        <div
          class="mb-12 flex w-full flex-col gap-2 rounded-lg border border-green-500 p-4"
        >
          <div class="flex items-center gap-2">
            <p class="text-lg text-green-500">⚫︎</p>
            <p class="block text-sm font-bold">Comment</p>
          </div>
          <p>{{ data.description }}</p>
        </div>
      </div>
      <NuxtLink
        to="/works"
        class="mx-auto flex h-16 w-full items-center justify-center rounded-full border border-[#333] bg-[#333] px-4 text-white shadow-md transition-all duration-200 hover:bg-white hover:text-[#333] lg:w-96"
      >
        ギャラリーに戻る</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Work } from '~/types/work'
import type { Category } from '~/types/category'

// Workの型を拡張して、categoriesをCategory[]型に
interface WorkDetail extends Omit<Work, 'categories'> {
  categories: Category[]
}

const route = useRoute()
const id = route.params.id

const { data } = await useFetch<WorkDetail>(`/api/works/${id}`)
</script>
