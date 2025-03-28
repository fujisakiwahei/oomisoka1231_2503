<template>
  <footer>
    <div class="bg-gray-500 p-10 py-10 text-center text-sm text-white md:py-20">
      <NuxtLink
        to="/privacy"
        class="inline-block text-sm transition-all duration-200 hover:text-green-500"
        >プライバシーポリシー
      </NuxtLink>
      <div
        class="mt-8 flex flex-col justify-center gap-4 md:mt-16 md:flex-row md:gap-8"
      >
        <NuxtLink
          to="/works"
          class="group flex h-32 w-full flex-col items-center justify-center gap-2 rounded-md border border-white shadow-sm transition-all duration-200 hover:border-4 hover:border-green-500 hover:shadow-lg md:w-64"
        >
          <p class="text-3xl font-medium transition-all">Gallery</p>
          <p class="text-sm">ギャラリー</p>
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="group flex h-32 w-full flex-col items-center justify-center gap-2 rounded-md border border-white shadow-sm transition-all duration-200 hover:border-4 hover:border-green-500 hover:shadow-lg md:w-64"
        >
          <p class="text-3xl font-medium transition-all">Contact</p>
          <p class="text-sm">お問い合わせ</p>
        </NuxtLink>
      </div>
      <small class="mt-8 block md:mt-16">Copyright © 2025 oomisoka1231</small>
    </div>
  </footer>
</template>
