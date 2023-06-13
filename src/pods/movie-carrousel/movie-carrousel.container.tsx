import { useEffect, useState } from 'react'
import { MovieCarrousel } from './movie-carrousel.component'
import { getMoviesList } from '@/src/core/getMoviesList'
import { mapMoviesListToVM } from '../movies-list/movies-list.mapper'
import { type IMovieCard } from '@/src/common/movie-card'
import { mapQueryToVM } from '@/src/core/getMoviesList/query.mapper'
import styles from './movies-carrousel.module.css'
interface Props {
  type: string
  filter: Record<string, string | number>
}
export const MovieCarrouselContainer = (props: Props): JSX.Element => {
  const { type = 'List of movies', filter = { genre: 'Action' } } = props

  const [carrousel, setCarrousel] = useState<IMovieCard[]>([])
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    if (slide * 8 >= carrousel.length) {
      const query = mapQueryToVM({ ...filter, p: slide, q: 7 }) // prepara la query de los siguientes
      getMoviesList(query)
        .then(mapMoviesListToVM)
        .then((list) => { list = carrousel.concat(list); setCarrousel(list) })
        .catch(console.error)
    }
  }, [slide])

  return <section className={styles.container}>
    <h1>{type}</h1>
    <MovieCarrousel
        carrousel={carrousel}
        slide={slide}
        setSlide={setSlide}
      />
    </section>
}
