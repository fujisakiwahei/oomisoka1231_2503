export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const categoryId = event.context.params?.id

  const response = await fetch(
    `https://oomisoka1231.microcms.io/api/v1/works?filters=categories[contains]${categoryId}`,
    {
      headers: {
        'X-MICROCMS-API-KEY': config.microCMS.apiKey,
      },
    },
  )

  return response.json()
})
