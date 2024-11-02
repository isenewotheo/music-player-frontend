import React from 'react'
import AuthHeader from './components/AuthHeader'

function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <AuthHeader />
        {children}
    </div>
  )
}

export default AuthLayout
