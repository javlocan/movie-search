'use client'

import { getPostsList } from './api/api'
import { PostsList } from './posts-list.component'
import { mapPostListToVm } from './posts-list.mapper'
import { type Post } from './posts-list.vm'
import { useEffect, useState } from 'react'

export const PostsListContainer = (): JSX.Element => {
  const [list, setList] = useState<Post[]>([])

  useEffect(() => {
    getPostsList()
      .then(mapPostListToVm)
      .then(setList)
      .catch(console.error)
  }, [list])

  return <PostsList list={list} />
}
