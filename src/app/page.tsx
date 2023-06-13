'use client'

import Link from 'next/link'

import styles from './page.module.css'
import { useContext } from 'react'
import { AuthContext } from '../core/auth/auth.context'
import { MovieCarrouselContainer } from '../pods/movie-carrousel/movie-carrousel.container'

export default function Home (): JSX.Element {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const handleClick = (): void => {
    setUserInfo('Manolito')
  }

  return (
    <main className={styles.main}>
      <h1>Hello world! Hello {userInfo}!    <Link href="/about">
        <button onClick={handleClick}>About </button>
      </Link></h1>

      <MovieCarrouselContainer type='Genre: Action' filter={{ genre: 'Action' }}/>
      <MovieCarrouselContainer type='Genre: Romance' filter={{ genre: 'Romance' }}/>
      <MovieCarrouselContainer type='Genre: Fantasy' filter={{ genre: 'Fantasy' }}/>
    </main>
  )
}
