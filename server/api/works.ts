export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const response = await fetch(
    'https://oomisoka1231.microcms.io/api/v1/works',
    {
      headers: {
        'X-MICROCMS-API-KEY': config.microCMS.apiKey,
      },
    },
  )

  return response.json()
})
