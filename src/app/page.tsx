'use client'
import Image from 'next/image'
import Pagewrapper from './components/Pagewrapper'
import { MainPage } from './components/MainPage'
import Navbar from './components/Navbar'
export default function Home() {
  return (
    <>
      
      <Pagewrapper>
        <MainPage />
      </Pagewrapper>
    </>
  )
}
