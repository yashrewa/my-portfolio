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
        <motion.div variants={right} initial='hidden' animate='show' className="index-high md:inline-block md:mr-10 bg-gray-950 md:hover:shadow-lg md:hover:scale-110 transition-all ease-in-out shadow-sm shadow-primary-purple md:hover:shadow-primary-purple h-72 w-40 md:w-64 md:h-80 flex flex-col justify-between items-center overflow-hidden rounded">
            <div className="relative overflow-hidden ">
                <span className="filter brightness-50"><Image src={img} className="card-image" height={200} width={260} alt="" /></span>
                <div className="flex items-center justify-end w-full absolute left-0 bottom-2 right-0 gap-x-1 pr-2">
                    {github && <a target="_blank" rel="noreferrer" href={github}><span className="cursor-pointer text-3xl"><AiFillGithub className='text-3xl lg:text-4xl text-primary-purple' /></span></a >}
                    {live && <a target="_blank" rel="noreferrer" href={live}><span className="cursor-pointer text-2xl "><AiOutlineLink className='text-3xl lg:text-4xl text-primary-purple' /></span></a>}
                </div>
            </div>
            <h4 className="text-aqua-600 font-semibold pt-2 md:text-center md:mb-1">{heading}</h4>
            <p className="pr-3 pl-3 font-extralight text-center text-xs pb-10">{details}</p>
        </motion.div>
    )
}
