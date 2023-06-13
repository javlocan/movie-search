import { type IMovieCard } from './movie-card.vm'
import styles from './movie-card.module.css'
interface Props {
  movie: IMovieCard
  // id: string
}

export const MovieCard = (props: Props): JSX.Element => {
  const { movie } = props

  return <div className={styles.card}
    style={{ background: `url(${movie.poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className={styles.caption}>
    <h1>{movie.title} ({movie.year})</h1>
    </div>
</div>
}
