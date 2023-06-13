import './globals.css'

import { AuthProvider } from '../core/auth/auth.context'
import { NavigationContainer } from '../core/navigation/navigation.container'

export const metadata = {
  title: 'Project X',
  description: 'Next.js boilerplate'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <NavigationContainer/>
          <main>
        {children}
        </main>
        </AuthProvider>
        </body>
    </html>
  )
}
