<template>
  <footer>
    <div class="bg-gray-500 p-10 py-20 text-center text-sm text-white">
      <div class="flex justify-center gap-8">
        <NuxtLink
          to="/works"
          class="group mb-12 flex h-32 w-64 flex-col items-center justify-center gap-2 rounded-md border border-white shadow-sm transition-all duration-200 hover:border-4 hover:border-green-500 hover:shadow-lg"
        >
          <p class="text-3xl font-medium transition-all">Gallery</p>
          <p class="text-sm">ギャラリー</p>
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="group flex h-32 w-64 flex-col items-center justify-center gap-2 rounded-md border border-white shadow-sm transition-all duration-200 hover:border-4 hover:border-green-500 hover:shadow-lg"
        >
          <p class="text-3xl font-medium transition-all">Contact</p>
          <p class="text-sm">お問い合わせ</p>
        </NuxtLink>
      </div>
      <NuxtLink
        to="/privacy"
        class="text-sm transition-all duration-200 hover:text-green-500"
        >プライバシーポリシー
      </NuxtLink>
      <small class="mt-4 block">Copyright © 2025 oomisoka1231</small>
    </div>
  </footer>
</template>
