import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './components/Provider'
import Appbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })
import { NextUIProvider } from '@nextui-org/react'
import * as logo from '../../public/logo-new.svg'
import Head from 'next/head'
// export const metadata: Metadata = {
//   title: 'YashPort',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Yash POrt</title>
        <link rel='icon' href='/favicon.ico'></link>
      </head>
      <body className={`${inter.className} min-h-full no-scrollbar bg-black`}>

        <Providers>
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
