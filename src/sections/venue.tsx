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
      className="bg-sky-100 justify-center items-center max-w-[74rem] text-center sm:mb-0 xl:w-[600px]lg:w-[500px] md:w-[500px]"
    >
      <div
        ref={ref}
          className='flex flex-col h-auto shadow-xl rounded-xl bg-gradient-to-r from-sky-500 to-sky-800'



    
      >
        <div className='flex flex-col mb-8'>
          <p className='text-2xl text-gray-500 justify-center items-center text-center p-2 font-bold'>Location</p>
          <div>
            <Map />
          </div>
        </div>
        <div>
          <p className='text-sm justify-center items-center text-center p-2 text-gray-500 font-bold'>บ้านเลขที่ 99 หมู่ที่ 3 ต.เชียงดา อ.สร้างคอม จ.อุดรธานี 41260</p>
          <p className='text-sm justify-center items-center text-center p-2 text-gray-500 font-bold'>
          Tel : 095-9594188, 083-0099743
          </p>
        </div>
      </div>

    </section>
  );
}