<template>
  <div class="wrapper">
    <section class="mx-auto max-w-[960px] py-12">
      <SecTitle japanese="ギャラリー" english="Gallery" />
      <ul
        class="mb-8 mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4"
      >
        <li>
          <NuxtLink
            to="/works"
            class="flex h-10 items-center justify-center rounded-full border border-black bg-white px-4 text-sm shadow-sm transition-all duration-200 hover:border-green-500 hover:bg-green-500 hover:text-[white]"
            >すべてのイラスト</NuxtLink
          >
        </li>
        <li v-for="category in categories?.contents" :key="category.id">
          <NuxtLink
            :to="`/works/category/${category.id}`"
            :class="[
              // 基本のクラス
              'flex h-10 items-center justify-center rounded-full border px-4 text-sm shadow-sm transition-all duration-200',
              // 現在のカテゴリと一致する場合とそれ以外で分岐
              route.params.id === category.id
                ? 'pointer-events-none cursor-default border-green-500 bg-green-500 text-white' // アクティブ時のスタイル
                : 'border-black bg-white hover:border-green-500 hover:bg-green-500 hover:text-[white]', // 非アクティブ時のスタイル
            ]"
          >
            # {{ category.name }}
          </NuxtLink>
        </li>
      </ul>
      <ul
        v-appearance-animationStagger
        class="flex flex-wrap items-stretch gap-5 md:gap-6"
      >
        <li
          v-for="work in data?.contents"
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
    </section>
  </div>
</template>

<script setup lang="ts">
// 作品のリスト
import type { Work } from '~/types/work'

interface WorksResponse {
  contents: Work[]
  totalCount: number
  offset: number
  limit: number
}

const route = useRoute()
const id = route.params.id

const { data } = await useFetch<WorksResponse>(`/api/works/category/${id}`)

// 以下はカテゴリのリスト
import type { Category } from '~/types/category'

interface MicroCMSResponse {
  contents: Category[]
  totalCount: number
  offset: number
  limit: number
}

const { data: categories } = await useFetch<MicroCMSResponse>('/api/categories')
</script>
