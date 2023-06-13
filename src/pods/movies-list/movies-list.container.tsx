'use client'

import { getMoviesList } from '@/core/getMoviesList'
import { MoviesList } from './movies-list.component'
import { mapMoviesListToVM } from './movies-list.mapper'
import { type IMovieCard } from '../../common/movie-card/movie-card.vm'
import { useEffect, useState } from 'react'
import { mapQueryToVM } from '@/src/core/getMoviesList/query.mapper'
import styles from './movies-list.module.css'
export const MoviesListContainer = (): JSX.Element => {
  const [list, setList] = useState<IMovieCard[]>([])
  /*   const [queryObject, setQueryObject] = useState({
    title: '',
    rating: 0
  }) */

  useEffect(() => {
    const query = mapQueryToVM({ rating: '5', p: 0, q: 24 })
    getMoviesList(query)
      .then(mapMoviesListToVM)
      .then(setList)
      .catch(console.error)
  }, [])

  return <section className={styles.container}>
    <h1 className={styles.search}>MEGASEARCH</h1>
  <MoviesList list={list} />
  </section>
}
