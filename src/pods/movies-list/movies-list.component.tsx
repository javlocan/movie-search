import { type IMovieCard } from '@/common/movie-card'
import { MovieCard } from '@/common/movie-card/movie-card.component'
import styles from './movies-list.module.css'
interface Props {
  list: IMovieCard[]
}

export const MoviesList = (props: Props): JSX.Element => {
  const { list } = props
  return <section className={styles.list}>
    {list.map((movie) =>
       <MovieCard
            movie={movie}
            key={movie._id.toString()}
        />)
      }
  </section>
}
