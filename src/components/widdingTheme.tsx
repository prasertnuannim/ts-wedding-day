import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

type Props = {}

const WeddingTheme = (props: Props) => {
    // Framer Motion Animation Controls
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2, // Adjust when the animation should trigger (20% in view)
    });

    useEffect(() => {
        if (inView) {
            controls.start({ x: 0, opacity: 1 });
        } else {
            controls.start({ x: 100, opacity: 0 });
        }
    }, [controls, inView]);

    return (
        <>
            <motion.div
                ref={ref}
                animate={controls}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className='h-auto w-full bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-200 rounded-bl-[50px] rounded-bl-[30px] mt-8 shadow-xl relative overflow-hidden'
            >
                {/* Decorative Border Glow */}
                <div className='absolute inset-0 rounded-bl-[50px] rounded-tr-[50px] bg-gradient-to-r from-cyan-300 via-white to-emerald-300 opacity-20' />

                {/* Background message */}
                <p className='absolute inset-0 flex -mt-16 items-center justify-center text-8xl sm:text-8xl text-white font-extrabold drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]'>
                    THEME
                </p>

                {/* Content */}
                <div className='relative z-10'>
                    <div className='flex items-center justify-end pt-5 pr-5 pb-'>
                        <p className='text-2xl sm:text-2xl text-white font-extrabold'>
                            DRESS COLOR
                        </p>

                    </div>
                    <div className="flex justify-end items-end mb-2">
                          <div className="h-[3px] w-[100%] rounded-md bg-white relative w-2/3"/>
                    </div>
                  
                    <div className='flex flex-row text-white text-lg justify-center items-center p-5'>
                        <Image
                            src="/theme.png"
                            alt="theme"
                            width={250}
                            height={250}
                            quality={100}
                            className='mt-2'
                        />
                        <div className="flex bg-gray-200 justify-center items-center h-[80px] w-[80px] mt-2 rounded-full bg-gradient-to-r from-sky-700 to-white border-2 border-white shadow-lg" />

                    </div>
                </div>

                {/* Additional Decoration */}
                <div className='absolute top-0 right-0 bg-gradient-to-br from-white/40 to-transparent rounded-full h-[200px] sm:h-[150px] w-[200px] sm:w-[150px] blur-xl opacity-30'></div>
                <div className='absolute bottom-0 left-0 bg-gradient-to-tl from-white/40 to-transparent rounded-full h-[150px] sm:h-[100px] w-[150px] sm:w-[100px] blur-xl opacity-30'></div>
            </motion.div>
        </>
    );
}

export default WeddingTheme;
