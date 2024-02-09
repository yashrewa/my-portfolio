'use client'
import Image from 'next/image'
import { motion, stagger } from 'framer-motion'
import { AiOutlineDown } from 'react-icons/ai'
import Link from 'next/link'

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
            duration: .3,
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




export default function Skills() {


    return (
        <motion.div variants={variants} initial='hidden' animate='show' className={`md:z-10 pt-24 z-10 pl-6 pr-3 pt-18 md:pt-10 justify-center text-white-50 font-poppins`}>
            <motion.h1 variants={bottom} className="text-3xl  md:pl-56 md:text-8xl"><span className="text-primary-purple">S</span>kills</motion.h1>
            <motion.div variants={variants} initial='hidden' animate='show' className="md:pl-56 flex md:flex-wrap h-unit-8xl md:h-unit-7xl md:gap-y-2 lg:h-4/5 md:gap-x-4 no-scrollbar  md:w-full md:pr-0 md:overflow-hidden overflow-hidden md:flex-row md:pt-4 flex-col overflow-y-scroll scrollbar-thumb-primary-purple gap-y-3 pb-2 pr-1">
                <motion.div variants={right} className="btn-emboss-plus rounded index-low md:index-high bg-gray-950 md:w-96 shadow-sm shadow-primary-purple h-44 pt-2 pb-2 pl-2 pr-2 md:pb-0 md:pt-0 md:h-32 flex items-center gap-x-5 ">
                    <Image alt='html-css=js' src='/Skills/html-css-js.svg' className='w-1/3' width={50} height={50} />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">HTML,CSS &#38; JS</h4>
                        <p className="text-sm  font-light text-center">The essential components of every website. Love creating UI-designs using Vanilla CSS from scratch. </p>
                    </div>
                </motion.div>
                <motion.div variants={right} className="btn-emboss-plus rounded index-low md:index-high bg-gray-950 md:w-96 h-44 pt-2 pb-2 shadow-sm shadow-primary-purple md:pb-0 md:pt-0 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <Image alt='react-redux' src='/Skills/react-redux.svg' className='w-1/3' width={150} height={150} />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">React &#38; Redux</h4>
                        <p className="text-sm  font-light text-center">React Function components, React Hooks and React Router and state maintainance using Redux </p>
                    </div>
                </motion.div>
                <motion.div variants={right} className="btn-emboss-plus rounded index-low md:index-high bg-gray-950 md:w-96 h-44 pt-2 shadow-sm shadow-primary-purple pb-2 md:pb-0 md:pt-0 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <Image alt='recoil' src='/Skills/yash.png' className="w-1/3 " width={150} height={150} />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">Recoil State-Management</h4>
                        <p className="text-sm  font-light text-center">Made full stack applications using REST APIs, MongoDB &#38; Firebase</p>
                    </div>
                </motion.div>
                <motion.div variants={right} className="btn-emboss-plus rounded index-low md:index-high bg-gray-950 md:w-96 h-44 pt-2 pb-2 md:pb-0 shadow-sm shadow-primary-purple md:pt-0 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <Image alt='mern' src='/Skills/express-mongo-firebase.svg' className="w-1/3" width={150} height={150} />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">Express, MongoDB &#38; Firebase</h4>
                        <p className="text-sm  font-light text-center">Made full stack applications using REST APIs, MongoDB &#38; Firebase</p>
                    </div>
                </motion.div>
                {/* <div className="btn-emboss-plus rounded z-10 bg-gray-950 md:w-84 h-44 pt-2 pb-2 md:pb-0 md:pt-0 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <Image alt='figma' src='/Skills/graphql-hasura.svg' className="w-1/3" width={150} height={150} />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">GraphQl &#38; Hasura</h4>
                        <p className="text-sm  font-light text-center">Explored GraphQl query language with Hasura and postgreSql integration</p>
                    </div>
                </div> */}
                <motion.div variants={right} className="btn-emboss-plus rounded index-low md:index-high bg-gray-950 md:w-96 h-44 pt-2 pb-2 md:pb-0 shadow-sm shadow-primary-purple md:pt-0 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <Image alt='typescript' src='/Skills/Typescript.svg' className="w-1/3" width={150} height={150} />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">Typescript</h4>
                        <p className="text-sm  font-light text-center">Worked on typescript for type checking and code scaling </p>
                    </div>
                </motion.div>
                <motion.div variants={right} className="btn-emboss-plus rounded index-low md:index-high bg-gray-950 md:w-96 h-44 pt-2 pb-2 md:pb-0 shadow-sm shadow-primary-purple md:pt-0 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <Image alt='Tailwind' src='/Skills/Tailwind.svg' className="w-1/3" width={150} height={150} />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">Tailwind</h4>
                        <p className="text-sm  font-light text-center">Used tailwind for beautiful &#38; flexible UI development </p>
                    </div>
                </motion.div>
                <motion.div variants={right} className="btn-emboss-plus rounded index-low md:index-high bg-gray-950 md:w-96 h-44 pt-2 pb-2 md:pb-0 shadow-sm shadow-primary-purple md:pt-0 md:h-32 flex items-center gap-x-5 pl-2 pr-2">
                    <Image alt='nextjs' src='/Skills/Next.svg' className="w-1/3 fill-white" width={150} height={150} />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">NextJs</h4>
                        <p className="text-sm  font-light text-center">Used NextJs for server side rendering to make react app more performant.</p>
                    </div>
                </motion.div>
                <motion.div variants={right} className="btn-emboss-plus rounded index-low md:index-high bg-gray-950 md:w-96 h-44 pt-2 pb-2 md:h-32 shadow-sm shadow-primary-purple flex items-center gap-x-5 pl-2 pr-2 ">
                    <Image alt='vite' src='/Skills/vitejs.svg' className="p-4 w-1/3" width={150} height={150} />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">Vite</h4>
                        <p className="text-sm  font-light text-center">Learnt how to make code more efficient by using different methods like code-splitting, caching, lazy loading etc. </p>
                    </div>
                </motion.div>
                {/* <div className="btn-emboss-plus rounded z-10 bg-gray-950 md:w-96 h-44 pt-2 pb-2 md:h-32 shadow-sm shadow-primary-purple flex items-center gap-x-5 pl-2 pr-2">
                    <Image alt='figma' src='/Skills/Figma.svg' className="w-1/3" width={150} height={150} />
                    <div className="w-4/5">
                        <h4 className="text-center text-aqua-600">Figma</h4>
                        <p className="text-sm  font-light text-center">Explored for making better UI designs and collaborations</p>
                    </div>
                </div> */}
            </motion.div>
            <motion.button variants={bottom} className={`z-10 animate-bounce w-16 h-16 btn-emboss absolute bottom-4 right-0 left-0 m-auto bg-gray-950 rounded-full p-3 flex items-center justify-center`}><Link href='/projects'><AiOutlineDown className='text-4xl text-primary-purple' /></Link></motion.button>
        </motion.div>
    )
}