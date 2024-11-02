"use client";

import dynamic from 'next/dynamic';
import Map from '@/components/map';
import { useSectionInView } from '@/lib/useInView';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';


const MapComponent = dynamic(() => import('@/components/map'), {
  ssr: false, // Prevent server-side rendering for Google Maps
});

export default function Venue() {
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
    <section
      ref={ref}
      id="venue"
      className="justify-center items-center mt-2 max-w-[74rem] text-center sm:mb-0 xl:w-[600px]lg:w-[500px] md:w-[500px]"
    >
      <motion.div
        ref={ref}
          className='flex flex-col  h-auto shadow-xl rounded-xl bg-gradient-to-r from-sky-500 to-sky-800'
        animate={controls}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      
      >
        <div className='flex flex-col text-white text-lg justify-start items-start'>
          <p className='text-xl justify-center items-center text-center pl-5 pt-4 pb-2 text-white font-bold'>Location</p>
          <div>
            <Map />
          </div>
        </div>

      </motion.div>

    </section>
  );
}