import { MovieCard, type IMovieCard } from '@/src/common/movie-card'
import styles from './movies-carrousel.module.css'
import { useRef } from 'react'

interface Props {
  carrousel: IMovieCard[]
  slide: number
  setSlide: (slide: number) => void
}
export const MovieCarrousel = (props: Props): JSX.Element => {
  const { carrousel, slide, setSlide } = props

  const cols = useRef(carrousel.length)
  if (carrousel.length >= cols.current) {
    cols.current = carrousel.length
  }
  const handleSlides = (go: number): void => {
    setSlide(slide + go)
  }

  return <div className={styles.outer}>
        {slide !== 0
          ? <button
      className={styles.button + ' ' + styles.left}
      onClick={() => { handleSlides(-1) }}
      >
        {'<'}
      </button>
          : null}
       <div className={styles.carrousel} style={{ marginLeft: `${slide * -88}vw` /* gridTemplateColumns: `repeat(${cols.current}, 16vw)` */ }} >

        {carrousel.map((movie, index) =>
          <MovieCard
                movie={movie}
                key={index}
            />)
          }

      </div>
      <button
      className={styles.button + ' ' + styles.right}
      onClick={() => { handleSlides(1) }}
      >
      {'>'}
      </button>
      </div>
}
