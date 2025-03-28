<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'
import { required, email } from '@vee-validate/rules'
import { defineRule } from 'vee-validate'

// 日本語のエラーメッセージを設定
defineRule('required', (value: string) => {
  if (!value || !value.length) {
    return '必須項目です'
  }
  return true
})

// メールアドレス用のエラーメッセージ
defineRule('email', (value: string) => {
  if (!value) return true
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return '正しいメールアドレス形式で入力してください'
  }
  return true
})

// const onSubmit = async (values: any) => {
//   try {
//     console.log('送信開始', values) // デバッグ用

//     const formData = new FormData()
//     Object.entries(values).forEach(([key, value]) => {
//       formData.append(key, value as string)
//     })

//     const response = await fetch('https://ssgform.com/s/B0Clp8lPbXye', {
//       method: 'POST',
//       body: formData,
//     })

//     if (response.ok) {
//       console.log('送信成功')
//       // 成功時の処理（例：成功メッセージの表示やリダイレクト）
//       alert('送信が完了しました')
//     } else {
//       console.error('送信失敗')
//       alert('送信に失敗しました。もう一度お試しください。')
//     }
//   } catch (error) {
//     console.error('エラーが発生しました:', error)
//     alert('エラーが発生しました。もう一度お試しください。')
//   }
// }
</script>

<template>
  <div class="wrapper mx-auto max-w-[960px] px-5 py-10 md:py-20">
    <SecTitle japanese="お問い合わせ" english="Contact" />
    <p class="mb-10 text-center md:-mt-4">
      お問い合わせを頂きましたら、<br
        class="md:hidden"
      />通常3日以内にご返信いたします。<br />
      些細なことでもお気軽に<br
        class="md:hidden"
      />お問い合わせお待ちしております！
    </p>
    <Form
      action="https://ssgform.com/s/B0Clp8lPbXye"
      method="POST"
      v-slot="{ errors }"
      class="rounded-lg border border-green-500 p-5 shadow-lg md:p-16"
    >
      <div class="formItem">
        <div class="formContents">
          <label class="formItemLabel" for="company">会社名</label>
          <Field type="text" name="会社名" />
        </div>
        <ErrorMessage name="会社名" class="error-message" />
      </div>
      <div class="formItem">
        <div class="formContents">
          <label class="formItemLabel required" for="name">お名前</label>
          <Field rules="required" type="text" name="お名前" required />
        </div>
        <ErrorMessage name="お名前" class="error-message" />
      </div>
      <div class="formItem">
        <div class="formContents">
          <label rules="email" class="formItemLabel required" for="email"
            >メールアドレス</label
          >
          <Field
            :rules="{ required: true, email: true }"
            type="email"
            name="メールアドレス"
            required
          />
        </div>
        <ErrorMessage name="メールアドレス" class="error-message" />
      </div>
      <div class="formItem">
        <div class="formContents">
          <label class="formItemLabel required" for="inquiry"
            >お問い合わせ内容</label
          >
          <div class="radio-group flex flex-wrap gap-4">
            <label class="flex items-center">
              <Field
                rules="required"
                type="radio"
                name="お問い合わせ内容"
                value="制作のご相談"
              />
              制作のご相談
            </label>
            <label class="flex items-center">
              <Field
                rules="required"
                type="radio"
                name="お問い合わせ内容"
                value="ご質問"
              />
              ご質問
            </label>
            <label class="flex items-center">
              <Field
                rules="required"
                type="radio"
                name="お問い合わせ内容"
                value="その他"
              />
              その他
            </label>
          </div>
        </div>
        <ErrorMessage name="お問い合わせ内容" class="error-message" />
      </div>
      <div class="formItem">
        <div class="formContents">
          <label class="formItemLabel required" for="inquiryDetail"
            >お問い合わせ内容(詳細)</label
          >
          <Field
            rules="required"
            as="textarea"
            name="お問い合わせ内容（詳細）"
            required
          />
        </div>
        <ErrorMessage name="お問い合わせ内容（詳細）" class="error-message" />
      </div>
      <div class="formItem flex justify-center">
        <button
          type="submit"
          class="mx-auto h-14 w-40 items-center justify-center rounded-md border-[#333] bg-green-500 text-white shadow-md transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white hover:shadow-lg md:border md:bg-white md:text-[#333]"
        >
          送信する
        </button>
      </div>
    </Form>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  form {
    display: flex;
    flex-direction: column;

    .formItem:not(:last-child) {
      padding-bottom: 40px;
      margin-bottom: 40px;
      border-bottom: 1px solid #c5f2d6;

      @media (max-width: 768px) {
        padding-bottom: 24px;
        margin-bottom: 24px;
      }

      &:last-child,
      &:nth-child(5) {
        border-bottom: none;
        margin-bottom: 0;
      }

      .formContents {
        display: flex;
        align-items: center;
        gap: 32px;

        @media (max-width: 768px) {
          flex-direction: column;
          gap: 16px;
        }

        label {
          flex-shrink: 0;
        }

        .formItemLabel {
          font-size: 14px;
          font-weight: 600;
          width: 220px;
          display: flex;
          align-items: center;

          &::before {
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            background-color: #22c55e;
            border-radius: 50%;
            margin-right: 16px;
          }

          @media (max-width: 768px) {
            width: 100%;

            &::before {
              margin-right: 8px;
            }
          }
        }

        .required {
          &::after {
            content: '*';
            color: rgb(153, 0, 0);
            margin-left: 6px;
          }
        }

        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #333;
          border-radius: 5px;
        }

        input[type='radio'] {
          cursor: pointer;
        }

        textarea {
          width: 100%;
          height: 200px;
          padding: 10px;
          border: 1px solid #333;
          border-radius: 5px;
        }

        .radio-group {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;

          @media (max-width: 768px) {
            column-gap: 16px;
            row-gap: 8px;
          }

          input {
            width: 16px;
            height: 16px;
            font-size: 14px;
          }

          label {
            cursor: pointer;
            width: fit-content;
            display: flex;
            align-items: center;
            gap: 8px;
          }
        }
      }
    }
  }
}

.error-message {
  display: flex;
  color: rgb(153, 0, 0);
  font-size: 0.875rem;
  margin-top: 16px;
  margin-left: 252px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
}
</style>
