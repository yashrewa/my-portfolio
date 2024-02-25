'use client'
import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import Link from 'next/link'
import { motion } from 'framer-motion'
// import { useRoute } from '../../Context'
import { TypewriterEffectSmooth } from './ui/typewritter-effect'


export


    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0,
            }
        }
    }

const fadeIn = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
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


const words = [
    {
        text: "Build",
    },
    {
        text: "awesome",
    },
    {
        text: "apps",
    },
    {
        text: "with",
    },
    {
        text: "Aceternity.",
        className: "text-blue-500 dark:text-blue-500",
    },
];

const firstLine = [
    {
        text: "TypeScript"
    },
    {
        text: "/"
    },

    {
        text: "JavaScript"
    },
    {
        text: "/"
    },
    {
        text: "NextJs"
    },
    {
        text: "/"
    },
    {
        text: "MERN"
    },
    {
        text: "/"
    },

    {
        text: "Tailwind"
    },
    {
        text: "/"
    },
    {
        text: "A lot more",
        className: "text-primary-purple dark:text-primary-green"
    },


]




export const MainPage = () => {
    return (
        <>
            <motion.div variants={variants} initial="hidden" animate="show" className={`index-low px-6 flex items-start flex-col md:pt-64 xl:text-4xl justify-center text-white-50 font-poppins font-black text-5xl md:pl-60 md:text-8xl`}>
                <motion.div variants={fadeIn} className="z-30 index-low md:index-high tracking-widest pt-2"><span className="text-aqua-600" ></span>Hi</motion.div>
                <motion.div variants={fadeIn} className="z-30 index-low md:index-high tracking-widest pt-2">I&apos;m <span className="text-primary-purple">Yash</span></motion.div>
                <motion.div variants={fadeIn} className="z-30 index-low md:index-high tracking-widest text-3xl md:text-7xl pt-2"><span className="text-primary-purple">W</span>eb <span className="text-primary-purple">D</span>eveloper</motion.div>
                <div className="z-30 index-low md:index-high font-medium text-sm md:text-xl max-w-screen-sm text-gray-850 pt-2"><TypewriterEffectSmooth words={firstLine} className='' cursorClassName='xl:h-6'/> </div>
                <motion.button variants={fadeIn} className={`animate-bounce w-16 h-16 z-50 absolute right-0 bottom-4 left-0 m-auto bg-gray-950 rounded-full p-3 flex items-center justify-center`}><Link href='/about'><AiOutlineDown className='text-4xl text-primary-purple' /></Link></motion.button>
            </motion.div>

            {/* <div className={`index-low h-full px-6 flex items-start flex-col md:pt-64 xl:text-4xl justify-center text-white-50 font-poppins font-black text-5xl md:pl-60 md:text-8xl`} >
                <div className="z-30 index-low md:index-high tracking-widest pt-2"><TypewriterEffectSmooth words={firstLine} /></div>
                <div className="z-30 index-low md:index-high tracking-widest pt-2"><TypewriterEffectSmooth words={secondLine} /> </div>
                <div className="z-30 index-low md:index-high tracking-widest text-3xl md:text-7xl pt-2"><span className="text-primary-purple">W</span>eb <span className="text-primary-purple">D</span>eveloper</div>
            </div > */}
        </>
    )
}


// JavaScript <span className="text-aqua-450">/</span> MERN <span className="text-aqua-450">/</span> NextJs <span className="text-aqua-450">/</span> GraphQl <span className="text-aqua-450">/</span> Typescript <span className="text-aqua-450">/</span> Firebase <span className="text-aqua-450">/</span> Tailwind




