'use client'

import { createContext, useState } from 'react'

interface AuthContextModel {
  userInfo: string
  setUserInfo: (userInfo: string) => void
}

export const AuthContext = createContext<AuthContextModel>({
  userInfo: '',
  setUserInfo: (userInfo: string) => {
    console.log('User is setted', userInfo)
  }
})

export const AuthProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [userInfo, setUserInfo] = useState<string>('')
  return (
  <AuthContext.Provider value={{ userInfo, setUserInfo }}>
    {children}
    </AuthContext.Provider>
  )
}
