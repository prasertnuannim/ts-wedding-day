import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

type Props = {}

const Event = (props: Props) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2, // Adjust when the animation should trigger (20% in view)
    });

    useEffect(() => {
        if (inView) {
            controls.start({ y: 0, opacity: 1 });
        } else {
            controls.start({ y: 100, opacity: 0 });
        }
    }, [controls, inView]);

    return (
        <>
            <motion.div
                ref={ref}
                animate={controls}
                initial={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className='flex flex-col h-auto w-full bg-gradient-to-t from-sky-500 to-sky-800 rounded-xl mt-8 shadow-xl relative overflow-hidden xl:w-[600px]lg:w-[500px] md:w-[500px]'
            >
                    <p className='text-xl justify-center items-center text-start pl-5 pt-5 pb-2 text-white font-extrabold'>EVENT</p>
                    <div className='pr-5 pl-5'>
                             <div className="flex justify-center items-center h-[2px] w-[100%] rounded-md bg-gray-200"/>
                    </div>
           
                <div className='flex flex-col text-white text-lg justify-start items-start p-5'>
                    <p>08:00 พิธีแห่ขันหมาก</p>
                    <p> 08:29 พิธีหมั้น</p>
                    <p> 11:00 รับประทานอาหารเที่ยง</p>

                </div>
            </motion.div>
        </>
    );
}

export default Event