'use client'
import Image from 'next/image'
import {AiOutlineDown} from 'react-icons/ai'
import Pagewrapper from '@/app/components/Pagewrapper'
import {motion} from 'framer-motion';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const variants = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0,
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
        y: 800,
        opacity: 1,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .3,
        }
    }
}



export default function About() {
    
  return (

    <Pagewrapper>
      <motion.div variants={variants} initial="hidden" animate="show" className={`h-full px-6 pr-3 md:pt-32 justify-center text-white-50 font-poppins`}>
            <motion.h1 variants={bottom} transition={{delay: 0}} className="text-3xl md:pl-56 md:text-8xl"><span className="text-primary-purple">M</span>e &#38; <span className="text-primary-purple">M</span>yself</motion.h1>
            <motion.div variants={bottom} transition={{delay: 0}} className="h-5/6 overflow-y-auto md:w-11/12 inline-block">
                <p className="text-sm pt-2 md:pl-56 md:w-11/12 md:pt-4">Hi, I am a <span className="text-primary-purple">Full Stack Web Developer</span>. I have been working on the MERN stack for about 6 months in this span I have developed multiple projects which helped me to enhance my skills. Yes, having your strong base really helps and hence I am open to adapting to whichever framework is required. While I was working on different tech stacks, to give a kick start to my career</p>

                <p className="text-sm pt-2 md:pl-56 md:w-11/12 md:pt-4"> After all this, I joined <span className="text-primary-purple">Namaste React</span> & <span className="text-primary-purple">COHORT MERN Stack</span> Bootcamp for <span className="text-aqua-600">web developers</span>, there I learned about <span className="text-aqua-600">React ecosystem</span>, <span className="text-aqua-600">UI/UX</span>, <span className="text-aqua-600">web performances</span>, and <span className="text-aqua-600">tooling</span> which helped me to grow overall, and equipped me with some of the latest technologies.</p>
                <p className='text-sm pt-2 md:pl-56 md:w-11/12 md:pt-4'>I have also explored different technologies on my own understanding the inner workings of websites and browsers</p>

                <p className="text-sm pt-2 md:pl-56 md:w-11/12 md:pt-4"> I believe Project Based Learning is the best approach to learn anything. Hence, I&apos;ve got projects in all the different technologies that I&apos;ve learned over time.</p>

                <p className="text-sm pt-2 md:pl-56 md:w-11/12 md:pt-4">By the way, when I&apos;m not coding, you&apos;ll find me tinkering with my operating system. </p>
            </motion.div>
            <motion.button variants={bottom} className={`animate-bounce w-16 h-16 absolute bottom-4 right-0 left-0 m-auto bg-gray-950 rounded-full p-3 flex items-center justify-center`}><Link href='/skills'><AiOutlineDown className='text-4xl text-primary-purple'/></Link></motion.button>
        </motion.div>
    </Pagewrapper>
  )
}
