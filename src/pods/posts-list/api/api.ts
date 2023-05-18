import { type Post } from './api.model'

export const getPostsList = async (): Promise<Post[]> => {
  return await fetch('https://jsonplaceholder.typicode.com/posts').then(async r => await r.json())
}
