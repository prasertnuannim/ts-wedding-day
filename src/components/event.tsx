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
            <div
                ref={ref}

                className='flex flex-col h-auto w-full bg-blue-300 shadow-xl relative overflow-hidden xl:w-[600px]lg:w-[500px] md:w-[500px]'
            >
                    <p className='text-2xl justify-center items-center text-start pl-5 pt-5 pb-2 text-gray-500 font-extrabold'>EVENT</p>
                    <div className='pr-5 pl-5'>
                             <div className="flex justify-center items-center h-[2px] w-[100%] rounded-md bg-gray-200"/>
                    </div>
           
                <div className='flex flex-col text-white text-lg justify-start items-start p-5'>
                    <p>09:09 พิธีแห่ขันหมาก</p>
                    <p>09:30 พิธีบายศรีสู่ขวัญ</p>
                    <p>10:00 พิธีผูกข้อมือ</p>
                    <p>11:00 ฉลองมงคลสมรส (โต๊ะจีน)</p>
                </div>
            </div>
        </>
    );
}

export default Event