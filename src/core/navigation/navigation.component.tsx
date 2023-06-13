'use client'

import styles from './navigation.module.css'
import Link from 'next/link'
export const Navigation = (): JSX.Element => {
  return <header className={styles.header}>
    Sidebar
      <nav className={styles.nav}>
        <Link href='/'>Homepage</Link>
        <Link href='/movies'>Movies</Link>
      </nav>
      Options
    </header>
}
