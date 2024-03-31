import api from '@/api/api'
import type { IPost } from '@/types/interfaces'

export const enrichPostsWithUser = async (posts: IPost[]) => {
  const userPromises = posts.map((post) => api.getUserById(post.userId))
  const users = await Promise.all(userPromises)

  return posts.map((post, index) => ({
    id: post.id,
    title: post.title,
    body: post.body,
    userId: post.userId,
    user: users[index]
  }))
}
