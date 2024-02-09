import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import {FaExternalLinkAlt} from 'react-icons/fa'
// import {LuExternalLink} from 'react-icons/lu'
// import {RiExternalLinkLine} from 'react-icons/ri'
import { AiOutlineLink } from 'react-icons/ai'
import { motion } from 'framer-motion'
// import Open from '../../Images/Open.svg'
// import {BsGithub} from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
// import Github from '../../Images/Socials/Github.svg'

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

const top = {
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
const bottom = {
    hidden: {
        y: 700,
        opacity: 1,
    },
    show: {
        y: 0,
        opacity: 1,
        delay: 1,
        transition: {
            duration: 0.3,
        }
    }
}
export const Card = ({ img, heading, github, live, details }: Props) => {
    return (
        <motion.div variants={right} initial='hidden' animate='show' className="index-high md:inline-block md:mr-10 bg-gray-950 md:hover:shadow-lg md:hover:scale-110 transition-all ease-in-out shadow-sm shadow-primary-purple md:hover:shadow-primary-purple h-60 w-40 md:w-64 md:h-80 flex flex-col items-center overflow-hidden rounded">
            <div className="relative overflow-hidden">
                <span className="filter brightness-50"><Image src={img} className="card-image" height={200} width={260} alt="" /></span>
                <div className="flex items-center justify-end absolute bottom-2 right-0 gap-x-1 pr-2">
                    {github && <a target="_blank" rel="noreferrer" href={github}><span className="cursor-pointer text-3xl"><AiFillGithub className='text-xl' /></span></a >}
                    {live && <a target="_blank" rel="noreferrer" href={live}><span className="cursor-pointer text-2xl"><AiOutlineLink classname='text-8xl fill-primary-purple' /></span></a>}
                </div>
            </div>
            <h4 className="text-aqua-600 font-semiBold pt-2 md:text-center md:mb-1">{heading}</h4>
            <p className="pr-3 pl-3 font-extralight text-center text-xs pb-10">{details}</p>
        </motion.div>
    )
}
