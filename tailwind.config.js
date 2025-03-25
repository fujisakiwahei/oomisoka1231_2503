/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontSize: {
        sm: ['0.875rem', { lineHeight: '1.6' }], // デフォルトのline-heightを変更
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
        // 他のサイズも必要に応じて設定
      },
    },
  },
}
