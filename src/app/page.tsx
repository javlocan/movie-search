'use client'

import Link from 'next/link'

import styles from './page.module.css'
import { useContext } from 'react'
import { AuthContext } from '../core/auth/auth.context'

export default function Home (): JSX.Element {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const handleClick = (): void => {
    setUserInfo('Manolito')
  }

  return (
    <main className={styles.main}>
      <h1>Hello world! Hello {userInfo}!</h1>
      <Link href="/about">
        <button onClick={handleClick}>About </button>
      </Link>
    </main>
  )
}
