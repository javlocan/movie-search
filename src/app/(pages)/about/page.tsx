'use client'

import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { AuthContext } from '@/src/core/auth/auth.context'
import { getMoviePoster } from '@/src/common/getMoviePoster'

export default function About (): JSX.Element {
  const { userInfo } = useContext(AuthContext)

  useEffect(() => {
    getMoviePoster('?searchType=image&exactTerms=poster+movie+jackie+chan')
      .then(console.log)
      .catch(console.error)
  })

  return (
    <>
      <h1>Wellcome to about, {userInfo}!</h1>
      <Link href="/movies">
        <button>Search movies </button>
      </Link>
    </>
  )
}
