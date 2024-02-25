'use client'
import Image from 'next/image'
import Pagewrapper from './components/Pagewrapper'
import { MainPage } from './components/MainPage'
import Navbar from './components/Navbar'
export default function Home() {
  return (
    <>

      <Pagewrapper>
        {/* <div className='h-screen bg-[rgb(17,17,17)] bg-dot-white/[.2]'>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
          <MainPage />
        {/* </div> */}
      </Pagewrapper>
    </>
  )
}
