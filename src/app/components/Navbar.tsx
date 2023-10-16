'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import yash from '../../../public/yash.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const AppBar = () => {
    const path = usePathname();
    const [show, setShow] = useState(false)

    console.log(path)


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
        link: '/contact'
    }]
    return (
        <>
            {/* Desktop Nav */}
            <nav className="desktop-nav hidden md bg-[#141414] z-20 border-r borderteal-400 w-48 h-full fixed top-0 left-0 md:flex flex-col justify-center items-end gap-y-4 ">
                <span className={`w-40 absolute top-2 link desktop ${path === "/" ? 'border-r-4 border-r-primary-purple' : 'border-r-4 border-[#141414]'}`} id='home'> <Link href="/"><Image src={yash} alt='logo' width={120} height={120} ></Image></Link></span>
                <div className="slider w-full absolute h-10"></div>
                <Link href='/about' id="about" className={`link text-white font-poppins text-xl w-full text-right pr-10 ${path === "/about" ? 'border-r-4 border-r-primary-purple' : 'border-r-4 border-[#141414]'}`}>About</Link>
                <Link href='/skills' id="skills" className={`link text-white-50 font-poppins text-xl w-full text-right pr-10 ${path === "/skills" ? 'border-r-4 border-r-primary-purple' : 'border-r-4 border-[#141414]'}`}>Skills</Link>
                <Link href='/projects' id="projects" className={`link text-white-50 font-poppins text-xl w-full text-right pr-10 ${path === "/projects" ? 'border-r-4 border-r-primary-purple' : 'border-r-4 border-[#141414]'}`}>Projects</Link>
                <Link href='/about' id="contact" className={`link text-white-50 font-poppins text-xl w-full text-right pr-10 ${path === "/contact" ? 'border-r-4 border-r-primary-purple' : 'border-r-4 border-[#141414]'}`}>Contact</Link>
                <div className="socials absolute bottom-0 pt-10 pb-10 flex gap-x-1 w-full justify-center">
                    <span className="mr-2"></span>
                    <span className="mr-2"></span>
                    <span className="mr-2"></span>
                    <span className="mr-2"></span>
                </div>
            </nav>

            {/* Mobile Header */}
            <div className="z-20  w-46 pt-2 absolute link mobile header"><span className="logo"></span></div>

            {/* Mobile Nav */}
            <nav className={`md:hidden z-20 nav mobile-nav border-right bg-gray-950 w-48 h-full fixed top-0 left-0 hidden justify-center items-end gap-y-4 ${show && "flex flex-col"}`}>
                <div className="w-40 absolute top-2 link mobile"><span className="logo"></span></div>
                {mobileHeaderInfo.map((data, index) => {
                    return <>
                        <Link href={data.link} className={`link text-white-50 font-poppins text-xl w-full text-right pr-10`}>{data.name}</Link>
                    </>
                })}
                <div className="socials absolute bottom-0 pt-10 pb-10 flex gap-x-1 w-full justify-center">
                    <span className="mr-2"></span>
                    <span className="mr-2"></span>
                    <span className="mr-2"></span>
                    <span className="mr-2"></span>
                </div>
            </nav>
        </>

    )
}

export default AppBar