'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Card } from '../components/Card'
import { AiOutlineDown } from 'react-icons/ai'
import projects from '../../../public/Project-listings/project.listing.json'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
            duration: 1
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


export default function Projects() {
    // const [isHidden, setIsHidden] = useState('hidden')
    return (
        <motion.div variants={variants} initial='hidden' animate='show' className={`md:z-10 h-unit-8xl pl-6 pr-3 pt-28 md:pt-20 justify-center text-white-50 font-poppins`}>
            <motion.h1 variants={top} className="text-3xl md:pl-56 md:text-8xl"><span className="text-primary-purple">M</span>y Work</motion.h1>
            <motion.div variants={right} className="flex w-screen mt-2 justify-around h-unit-8xl overflow-y-scroll flex-wrap md:block md:flex-nowrap pt-10 gap-y-3 md:pl-64 md:pt-6 overflow-x-scroll md:h-4/5 absolute right-0 left-0 m-auto pb-10 md:pb-24">
                {projects.projects.map(({ name, description, imgUrl, github, live, id }) => {
                    return <Card img={imgUrl} heading={name} github={github} live={live} details={description} key={id} />
                })}

            </motion.div>
            <button className={`z-10 animate-bounce w-16 h-16 btn-emboss absolute bottom-4 right-0 left-0 m-auto bg-gray-950 rounded-full p-3 flex items-center justify-center`}><Link href='/contacts'><AiOutlineDown className='text-4xl text-primary-purple' /></Link></button>
        </motion.div>
    )
}