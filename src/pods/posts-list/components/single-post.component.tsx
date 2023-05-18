import { type Post } from '../posts-list.vm'

interface Props {
  post: Post
}

export const SinglePost = (props: Props): JSX.Element => {
  const { post } = props

  return <div key={post.id}>
  <h2>{post.title}</h2>
  <h4>{post.body}</h4>
</div>
}
