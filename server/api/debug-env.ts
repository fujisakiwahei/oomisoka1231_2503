export default defineEventHandler((event) => {
  const config = useRuntimeConfig()

  // セキュリティのため、APIキーの一部だけを表示
  const maskedApiKey = config.microCMS.apiKey
    ? `${config.microCMS.apiKey.slice(0, 4)}...${config.microCMS.apiKey.slice(-4)}`
    : 'not set'

  return {
    serviceDomain: config.microCMS.serviceDomain,
    apiKeyPreview: maskedApiKey,
    // APIキーの存在確認
    hasApiKey: !!config.microCMS.apiKey,
  }
})
