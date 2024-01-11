'use client'
import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import Link from 'next/link'
import { motion } from 'framer-motion'
// import { useRoute } from '../../Context'

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: .3,
        }
    }
}

const top = {
    hidden: {
        y: -800,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}

const right = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}
const bottom = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
        }
    }
}



export const MainPage = () => {
    return (
        <>
            <motion.div variants={variants} initial="hidden" animate="show" className={`index-high h-full pl-10 flex items-start flex-col md:pt-64 md: xl:text-4xl justify-center text-white-50 font-poppins font-black text-5xl md:pl-60 md:text-8xl`}>
                <motion.div variants={top} className="z-30 tracking-widest pt-2"><span className="text-aqua-600" ></span>Hi</motion.div>
                <motion.div variants={right} className="z-30 tracking-widest pt-2">I&apos;m <span className="text-primary-purple">Yash</span></motion.div>
                <motion.div variants={bottom} className="z-30 tracking-widest text-3xl md:text-7xl pt-2">web <span className="text-aqua-600">d</span>eveloper</motion.div>
                <motion.div variants={bottom} className="z-30 font-medium text-sm md:text-xl  text-gray-850 pt-2">JavaScript <span className="text-aqua-450">/</span> MERN <span className="text-aqua-450">/</span> NextJs <span className="text-aqua-450">/</span> GraphQl <span className="text-aqua-450">/</span> Typescript <span className="text-aqua-450">/</span> Firebase <span className="text-aqua-450">/</span> Tailwind </motion.div>
                <motion.button variants={top} className={`animate-bounce w-16 h-16 z-50 absolute right-0 bottom-4 left-0 m-auto bg-gray-950 rounded-full p-3 flex items-center justify-center`}><Link href='/about'><AiOutlineDown className='text-4xl text-primary-purple' /></Link></motion.button>
            </motion.div>

        </>
    )
}