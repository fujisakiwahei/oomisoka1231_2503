<template>
  <div class="wrapper">
    <section class="mx-auto max-w-[960px] py-12">
      <SecTitle japanese="私について" english="About me" />
      <div class="flex items-center justify-between gap-20">
        <div class="flex flex-col gap-4">
          <p class="text-2xl font-bold text-green-500">oomisoka1231</p>
          <p class="text-sm">
            oomisoka1231です。<br />
            私のイラストレーションは、「こんな子になりたい」と思わせるような女の子を、<br />
            ファッション、表情、仕草を通じて繊細に描き出すことを得意としています。<br />
            可愛らしさの中に少しの憂いや儚さを感じさせる、独特の世界観を表現しています。<br /><br />
            oomisoka1231です。<br />
            私のイラストレーションは、「こんな子になりたい」と思わせるような女の子を、<br />
            ファッション、表情、仕草を通じて繊細に描き出すことを得意としています。<br />
            可愛らしさの中に少しの憂いや儚さを感じさせる、独特の世界観を表現しています。
          </p>
        </div>
        <figure class="flex flex-1 items-center justify-center">
          <img
            src="@/assets/images/pages/front/illust1.webp"
            width="300"
            height="400"
            alt="女の子のイラスト"
            loading="lazy"
            decoding="async"
            class="w-full"
          />
        </figure>
      </div>
    </section>
    <section class="mx-auto max-w-[960px] py-12">
      <SecTitle japanese="ギャラリー" english="Gallery" />
      <WorkList />
      <CategoryList class="mt-12" />
    </section>
  </div>
</template>

<script setup lang="ts"></script>
