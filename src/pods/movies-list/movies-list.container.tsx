'use client'

import { getMoviesList } from '@/core/getMoviesList'
import { MoviesList } from './movies-list.component'
import { mapMoviesListToVM } from './movies-list.mapper'
import { type IMovieCard } from '../../common/movie-card/movie-card.vm'
import { useEffect, useState } from 'react'

export const MoviesListContainer = (): JSX.Element => {
  const [list, setList] = useState<IMovieCard[]>([])
  /*   const [queryObject, setQueryObject] = useState({
    title: '',
    rating: 0
  }) */

  useEffect(() => {
    getMoviesList()
      .then(mapMoviesListToVM)
      .then(setList)
      .catch(console.error)
  }, [])

  return <MoviesList list={list} />
}
