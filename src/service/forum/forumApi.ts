import { httpGet, httpPost } from '@/utils/http'

export type ForumCategory = 'all' | 'confess' | '吐槽' | 'help' | 'lost'

export interface ForumPostItem {
  id: string
  author: string
  avatar?: string
  content: string
  images: string[]
  tags: string[]
  likes: number
  liked: boolean
  comments: number
  shares: number
  category: ForumCategory
  createdAt: number
}

export interface ForumListParams {
  page?: number
  pageSize?: number
  category?: ForumCategory
  search?: string
  sort?: 'latest' | 'hot'
}

export interface ForumListResp {
  list: ForumPostItem[]
  total: number
  page: number
  pageSize: number
}

export const getForumList = (params: ForumListParams) =>
  httpGet<ForumListResp>('/api/v1/forum/list', params)

export const likeForumPost = (postId: string) =>
  httpPost<{ liked: boolean; likes: number }>(`/api/v1/forum/${postId}/like`)

export interface CreateForumPostBody {
  content: string
  images?: string[]
  category: Exclude<ForumCategory, 'all'>
  tags?: string[]
}

export const createForumPost = (data: CreateForumPostBody) =>
  httpPost<{ id: string }>('/api/v1/forum/create', data)


