import type { MicroCMSImage, MicroCMSListContent } from 'microcms-js-sdk'

export type Work = {
  id: string
  main_image: MicroCMSImage
  date: Date
  categories: string[]
  post_url: string
  description: string
}
