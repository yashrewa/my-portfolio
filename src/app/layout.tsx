import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './components/Provider'
import Appbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })
import { NextUIProvider } from '@nextui-org/react'

export const metadata: Metadata = {
  title: 'Yash',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Appbar />
        </Providers>
        {children}
      </body>
    </html>
  )
}
