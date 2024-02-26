import React from 'react'
import Image from 'next/image'
import { AiOutlineLink } from 'react-icons/ai'
import { motion } from 'framer-motion'
// import Open from '../../Images/Open.svg'
// import {BsGithub} from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
interface Props {
    img: string,
    heading: string,
    github: string,
    live: string,
    details: string
}
const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 3,
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
            duration: 0.3,
            delay: 0.5
        }
    }
}

export const Card = ({ img, heading, github, live, details }: Props) => {
    return (
        <>
            <motion.div variants={right} initial='hidden' animate='show' className="index-high  md:inline-block md:mr-10 bg-transparent shadow-primary-purple focus:shadow-primary-purple md:hover:shadow-primary-purple md:hover:shadow-lg transition-all ease-in-out shadow-sm  h-[21rem] w-40 md:w-64 md:h-auto flex flex-col justify-between items-center overflow-hidden rounded">
                <div className="relative overflow-hidden">

                    <span className="filter brightness-50"><Image src={img} className="card-image" height={200} width={260} alt="" /></span>
                    <div className="flex items-center justify-between px-4 md:px-6 py-4 pt-4 z-30 w-full gap-x-1">
                        <button className="p-[3px] relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-purple to-green-600 rounded-full" />
                            <div className="px-2 py-2  bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
                                {github && <a target="_blank" rel="noreferrer" href={github}><span className="cursor-pointer text-3xl"><AiFillGithub className='text-base lg:text-2xl' /></span></a >}
                            </div>
                        </button>
                        <button className="p-[3px] relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-purple to-green-600 rounded-full" />
                            <div className="px-2 py-2  bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
                                {live && <a target="_blank" rel="noreferrer" href={live}><span className="cursor-pointer text-2xl "><AiOutlineLink className='text-base lg:text-2xl' /></span></a>}                            </div>
                        </button>
                    </div>
                </div>
                <h4 className="text-aqua-600 font-semibold pt-2 md:text-center md:mb-1">{heading}</h4>
                <p className="pr-3 pl-3 font-extralight text-center text-xs pb-10">{details}</p>

            </motion.div>
        </>
    )
}
