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
      className=" max-w-[74rem] sm:mb-0"
    >
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className='bg-gray-200 flex flex-col h-auto w-full'>
        <p className='text-xl justify-center items-center text-start pl-5 pt-4 pb-2 text-gray-700 font-extrabold'>Location</p>
        <div>
          <Map />
        </div>

      </motion.div>

    </section>
  );
}