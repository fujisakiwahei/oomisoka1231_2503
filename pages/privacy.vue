<template>
  <div class="wrapper mx-auto max-w-[960px] py-20">
    <SecTitle japanese="プライバシーポリシー" english="Privacy Policy" />
    <div class="flex flex-col rounded-lg border border-green-500 p-8 shadow-md">
      <p class="desc">
        このプライバシーポリシーは、当サイト（以下、「当サイト」といいます）が収集する個人情報の種類、利用目的、管理方法について説明するものです。
      </p>
      <h2 class="title">1. 個人情報の収集について</h2>
      <p class="desc">
        当サイトでは、お問い合わせフォームの送信時にお名前、メールアドレスなどの個人情報を収集することがあります。
      </p>
      <h2 class="title">2. 個人情報の利用目的について</h2>
      <p class="desc">
        収集した個人情報は、お問い合わせへの対応、サービスの提供、改善のために利用いたします。
      </p>
      <h2 class="title">3. 個人情報の管理について</h2>
      <p class="desc">
        当サイトは、個人情報の漏洩、紛失、改ざんを防止するため、適切なセキュリティ対策を講じます。
      </p>
      <h2 class="title">4. 個人情報の第三者提供について</h2>
      <p class="desc">
        当サイトは、法令に基づく場合を除き、個人情報を第三者に提供することはありません。
      </p>
      <h2 class="title">5. プライバシーポリシーの変更について</h2>
      <p class="desc">
        当サイトは、必要に応じてプライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載された時点で効力を生じるものとします。
      </p>
      <h2 class="title">6. お問い合わせ</h2>
      <p class="desc">
        プライバシーポリシーに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
      </p>
    </div>

    <NuxtLink
      to="/"
      class="mx-auto mt-16 flex h-14 w-40 items-center justify-center rounded-md border border-[#333] bg-white shadow-md transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white hover:shadow-lg"
    >
      トップへ戻る
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.title {
  margin-top: 40px;
  line-height: 1;
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

.desc {
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}
</style>
