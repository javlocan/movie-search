'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '@/src/core/auth/auth.context'

export default function About (): JSX.Element {
  const { userInfo } = useContext(AuthContext)
  return (
    <>
      <h1>Wellcome to about, {userInfo}!</h1>
      <Link href="/post-list">
        <button>Go to post list! </button>
      </Link>
    </>
  )
}
