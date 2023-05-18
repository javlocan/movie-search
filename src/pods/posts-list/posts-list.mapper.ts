import type * as am from './api/api.model'
import type * as vm from './posts-list.vm'

export const mapPostListToVm = (data: am.Post[]): vm.Post[] => {
  return data.map(mapPostToVM)
}

const mapPostToVM = (data: am.Post): vm.Post => ({
  id: data.id,
  title: data.title,
  body: data.body
})
