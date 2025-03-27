export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const id = event.context.params?.id

  const response = await fetch(
    `https://oomisoka1231.microcms.io/api/v1/works/${id}`,
    {
      headers: {
        'X-MICROCMS-API-KEY': config.microCMS.apiKey,
      },
    },
  )

  return response.json()
})
