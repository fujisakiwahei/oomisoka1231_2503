import type { MicroCMSImage, MicroCMSListContent } from 'microcms-js-sdk'

export type Work = {
  main_image: MicroCMSImage
  date: Date
  categories: string[]
  post_url: string
  description: string
}
