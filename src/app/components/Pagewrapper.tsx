'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';


// Dynamic import
const MotionDiv = dynamic(
    () => {
        return import('framer-motion').then((mod) => mod.motion.div)
    },
    { ssr: false } // This line is important. It's what prevents server-side render
);

const Pagewrapper = ({ children }: any) => {
    const path = usePathname();
    const [initialY, setInitialY] = React.useState(0);
    const [transitionY, setTransitionY] = React.useState(0);

    React.useEffect(() => {
        setInitialY(path === '/' ? -window.innerHeight : window.innerHeight);
        setTransitionY(path === '/' ? -window.innerHeight : window.innerHeight);
    }, [path]);

    return (
        <>
            <AnimatePresence>
                <MotionDiv className='pt-28 lg:pt-0'
                    initial={{ opacity: 0, y: initialY }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: initialY }}
                    transition={{ y: transitionY }}
                >
                    {children}
                </MotionDiv>
            </AnimatePresence>
        </>
    )
}

export default Pagewrapper