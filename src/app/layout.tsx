import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './components/Provider'
import Appbar from './components/Navbar'
const inter = Inter({ subsets: ['latin'] })
import { NextUIProvider } from '@nextui-org/react'
import * as logo from '../../public/logo-new.svg'
import Head from 'next/head'
import { usePathname } from 'next/navigation'


export const metadata: Metadata = {
  title: 'Yash Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const pathName = usePathname()
  // console.log(pathName)

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-full no-scrollbar bg-[rgb(17,17,17)] bg-dot-white/[.2]`}>
        <div className="absolute pointer-events-none inset-1 flex items-center justify-center  bg-black [mask-image:radial-gradient(ellipse_at_left,transparent_50%,black)]"></div>
        <Providers>
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
