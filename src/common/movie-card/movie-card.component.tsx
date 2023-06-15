import { type IMovieCard } from './movie-card.vm'
import styles from './movie-card.module.css'
import { useEffect } from 'react'
import { getMoviePoster } from '../getMoviePoster'
interface Props {
  movie: IMovieCard
  // id: string
}

export const MovieCard = (props: Props): JSX.Element => {
  const { movie } = props
  useEffect(() => {
    getMoviePoster(movie.poster)
      .then(console.log)
      .catch(console.error)
  })

  return <div className={styles.card}
    style={{ background: `url(${movie.poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className={styles.caption}>
    <h1>{movie.title} ({movie.year})</h1>
    </div>
</div>
}
