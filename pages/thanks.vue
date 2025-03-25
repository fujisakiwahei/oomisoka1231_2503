<template>
  <div class="wrapper mx-auto max-w-[960px] py-20">
    <SecTitle japanese="送信完了" english="Thank you" />

    <div class="flex flex-col gap-4">
      <p class="text-center text-3xl font-bold">
        お問い合わせありがとうございました！
      </p>
      <p class="mx-auto w-96">
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
        内容を確認次第、oomisoka1231よりご連絡させていただきます。<br />
        通常3営業日以内にご返信いたしますので、今しばらくお待ちくださいませ。
      </p>
    </div>

    <NuxtLink
      to="/"
      class="mx-auto mt-8 flex h-14 w-40 items-center justify-center rounded-md border border-[#333] bg-white shadow-md transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white hover:shadow-lg"
    >
      トップへ戻る
    </NuxtLink>
  </div>
</template>
