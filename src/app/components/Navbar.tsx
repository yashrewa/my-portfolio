'use client'
import React, { useState } from 'react';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import { CiMenuKebab } from 'react-icons/ci';
import Image from 'next/image';
import yash from '../../../public/new-logo-removebg-preview.png';
import {AiOutlineClose} from 'react-icons/ai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs';
const AppBar = () => {
    const path = usePathname();
    const [navbar, toggleNavbar] = useCycle(false, true);
    const [mobileNav, setMobileNav] = useState(false)

    const child = {
        open: {
            y: '0%',
            opacity: 1,
        },
        closed: {
            y: '25%',
            opacity: 0
        }
    }

    const mobileHeaderInfo = [{
        name: 'About',
        link: '/about'
    },
    {
        name: 'Skills',
        link: '/skills'
    },
    {
        name: 'Projects',
        link: '/projects'
    },
    {
        name: 'Contact',
        link: '/contacts'
    }]
    return (
        <>
            {/* Desktop Nav */}
            <nav className="desktop-nav hidden md bg-[#141414] z-20 border-r borderteal-400 w-48 h-full fixed top-0 left-0 md:flex flex-col justify-center items-end gap-y-4 ">
                <span className={`w-40 absolute top-2 link desktop ${path === "/" ? 'border-r-4 border-r-primary-purple' : 'border-r-4 border-[#141414]'}`} id='home'> <Link href="/"><Image src={yash} className='mix-blend-screen' alt='logo' width={160} height={160} ></Image></Link></span>
                <div className="slider w-full absolute h-10"></div>
                <Link href='/about' id="about" className={`link text-white font-poppins text-xl w-full text-right pr-10 ${path === "/about" ? 'border-r-4 border-r-primary-purple' : 'border-r-4 border-[#141414]'}`}>About</Link>
                <Link href='/skills' id="skills" className={`link text-white-50 font-poppins text-xl w-full text-right pr-10 ${path === "/skills" ? 'border-r-4 border-r-primary-purple' : 'border-r-4 border-[#141414]'}`}>Skills</Link>
                <Link href='/projects' id="projects" className={`link text-white-50 font-poppins text-xl w-full text-right pr-10 ${path === "/projects" ? 'border-r-4 border-r-primary-purple' : 'border-r-4 border-[#141414]'}`}>Projects</Link>
                <Link href='/contacts' id="contact" className={`link text-white-50 font-poppins text-xl w-full text-right pr-10 ${path === "/contact" ? 'border-r-4 border-r-primary-purple' : 'border-r-4 border-[#141414]'}`}>Contact</Link>
                <div className="socials absolute bottom-0 pt-10 pb-10 flex gap-x-1 w-full justify-center">
                    <span className="mr-2 text-xl"><BsGithub /></span>
                    <span className="mr-2 text-xl"><BsInstagram /></span>
                    <span className="mr-2 text-xl"><BsLinkedin /></span>
                    <span className="mr-2 text-xl"><BsTwitter /></span>
                </div>
            </nav>

            {/* Mobile Header */}
            <div className="w-46 pt-8 top-0 flex md:hidden cursor-pointer justify-between mx-8 right-0">
                <span><Link href='/'><Image src={yash} className='mix-blend-screen index-low absolute top-2' alt='logo' width={60} height={60} ></Image></Link></span>
                <span className="logo relative index-high" onClick={() => toggleNavbar()}><CiMenuKebab className='text-2xl' /></span>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {navbar &&
                    <motion.div variants={{
                        open: {
                            x: "0%",
                            transition: {
                                delayChildren: 1,
                            }
                        },
                        closed: {
                            x: "-100%",
                        }
                    }}
                        initial={'closed'}
                        animate={'open'}
                        exit={'closed'}

                        className={`border-right relative index-low bg-[rgb(17,17,17)] w-48 -top-14 left-0 gap-y-4 flex-col h-screen items-end nav mobile-nav`}>
                        <motion.div className="w-40 mt-4 absolute index-high top-2 link mobile"><span className="logo mix-blend-screen"><Link href="/"><Image src={yash} className='index-low absolute' alt='logo' width={60} height={60} ></Image></Link></span><span onClick={()=>toggleNavbar()} className='index-low absolute top-2 right-8 cursor-pointer'><AiOutlineClose className='text-2xl' /></span></motion.div>
                        {mobileHeaderInfo.map((data, index) => {
                            return <motion.div variants={child} className='flex justify-start h-1/12' onClick={()=>toggleNavbar()} key={index}>
                                <Link href={data.link} className={`link text-white-50 font-poppins text-3xl w-full text-right leading-loose pr-10`}>{data.name}</Link>
                            </motion.div>
                        })}
                        <motion.div variants={child} className="socials absolute index-high bottom-0 pt-10 pb-10 flex gap-x-1 w-full justify-center">
                            <span className="mr-2"><BsGithub/></span>
                            <span className="mr-2"><BsInstagram /></span>
                            <span className="mr-2"><BsLinkedin /></span>
                            <span className="mr-2"><BsTwitter /></span>
                        </motion.div>
                    </motion.div>}
            </AnimatePresence>

        </>

    )
}

export default AppBar