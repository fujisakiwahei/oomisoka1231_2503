<template>
  <ul v-if="isTopPage" class="mb-8 flex items-center justify-center gap-4">
    <li>
      <NuxtLink
        to="/works"
        class="flex h-12 items-center justify-center rounded-full border border-black bg-white px-6 text-sm shadow-sm transition-all duration-200 hover:border-green-500 hover:bg-green-500 hover:text-[white]"
        >すべてのイラストを見る</NuxtLink
      >
    </li>
  </ul>
  <ul v-else class="mb-8 flex items-center justify-center gap-4">
    <li>
      <NuxtLink
        to="/works"
        :class="[
          // 基本のクラス
          'flex h-10 items-center justify-center rounded-full border px-4 text-sm shadow-sm transition-all duration-200',
          // 現在のカテゴリと一致する場合とそれ以外で分岐
          isWorksPage
            ? 'pointer-events-none cursor-default border-green-500 bg-green-500 text-white' // アクティブ時のスタイル
            : 'border-black bg-white hover:border-green-500 hover:bg-green-500 hover:text-[white]', // 非アクティブ時のスタイル
        ]"
      >
        すべてのイラスト
      </NuxtLink>
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
</template>

<script setup lang="ts">
import { useRoute } from 'nuxt/app'
import type { Category } from '~/types/category'

interface MicroCMSResponse {
  contents: Category[]
  totalCount: number
  offset: number
  limit: number
}

const { data: categories } = await useFetch<MicroCMSResponse>('/api/categories')

const route = useRoute()

// トップページかどうかをチェック
const isTopPage = computed(() => {
  return route.path === '/' || route.path === ''
})

// トップページかどうかをチェック
const isWorksPage = computed(() => {
  return route.path === '/works'
})
</script>
