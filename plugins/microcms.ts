import { createClient } from 'microcms-js-sdk'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const client = createClient({
    serviceDomain: config.microCMS.serviceDomain,
    apiKey: config.microCMS.apiKey,
  })

  return {
    provide: {
      microcms: client,
    },
  }
})
