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
            <div
                ref={ref}          
                className='h-auto w-full shadow-xl relative overflow-hidden'
            >
                <div className='relative z-10'>
                    <div className='flex items-center justify-center pt-5 pr-5 pb-'>
                        <p className=' text-2xl sm:text-2xl text-gray-500 font-extrabold'>
                            DRESS COLOR
                        </p>
                    </div>
                  
                    <div className='flex flex-row text-gray-200 text-lg justify-center items-center p-5 space-x-5'>
                        <div className="flex bg-[#4f80c0] justify-center items-center h-[80px] w-[80px] mt-2 rounded-full border-1 border-white shadow-lg" />
                        <div className="flex bg-[#afd7f6] justify-center items-center h-[80px] w-[80px] mt-2 rounded-full border-1 border-white shadow-lg" />
                        <div className="flex bg-white justify-center items-center h-[80px] w-[80px] mt-2 rounded-full  border-1 border-white shadow-lg" />
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default WeddingTheme;
