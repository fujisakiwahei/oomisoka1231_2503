<template>
  <div class="wrapper mx-auto max-w-[960px] py-10 md:py-20">
    <SecTitle japanese="送信完了" english="Thank you" />

    <div class="flex flex-col gap-4">
      <p class="text-center text-xl font-bold md:text-3xl">
        お問い合わせ<br class="md:hidden" />ありがとうございました！
      </p>
      <p class="mx-auto w-full md:w-96">
        <img
          src="@/assets/images/thanks/thanks_illust.webp"
          width="384"
          height="600"
          alt="お問い合わせ完了"
          loading="lazy"
          decoding="async"
        />
      </p>
      <p class="mt-3 text-center">
        内容を確認次第、oomisoka1231より<br
          class="md:hidden"
        />ご連絡させていただきます。<br />
        通常3営業日以内にご返信いたしますので、<br
          class="md:hidden"
        />今しばらくお待ちくださいませ。
      </p>
    </div>

    <NuxtLink
      to="/"
      class="mx-auto mt-8 flex h-14 w-40 items-center justify-center rounded-md border-[#333] bg-green-500 text-white shadow-md transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white hover:shadow-lg md:border md:bg-white md:text-[#333]"
    >
      トップへ戻る
    </NuxtLink>
  </div>
</template>
