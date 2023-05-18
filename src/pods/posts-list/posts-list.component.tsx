import { type Post } from './posts-list.vm'
import { SinglePost } from './components/single-post.component'

interface Props {
  list: Post[]
}

export const PostsList = (props: Props): JSX.Element => {
  const { list } = props
  return <>
  {list.map((post) => <SinglePost post={post} key={post.id}/>)}
  </>
}
