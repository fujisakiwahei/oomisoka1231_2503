export type Category = {
  id: string
  slug: string
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export type CategoryResponse = {
  contents: Category[]
  totalCount: number
  offset: number
  limit: number
}
