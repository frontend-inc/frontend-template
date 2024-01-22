import React from 'react'
import RootLayout from './RootLayout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webstudio',
  description: 'No-code builder for Shopify',
}

export default function Layout({ children }: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          as="style" 
          href="https://fonts.googleapis.com/css?family=Inter:400,500,600,700,800|Roboto:400,500,600,700,800" 
        />
      </head>
      <body>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  )
}