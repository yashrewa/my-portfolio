'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Pagewrapper = ({ children }: any) => {
    const path = usePathname();
    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={ path==='/'?{opacity:0, y: -window.innerHeight }: {opacity:0, y: window.innerHeight }}
                    animate={{opacity:1, y: 0 }}
                    exit={ path==='/'?{ opacity:0, y: -window.innerHeight }: {opacity:0, y: window.innerHeight }}
                    transition={ path==='/'?{ y: -window.innerHeight }: { y: window.innerHeight }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default Pagewrapper