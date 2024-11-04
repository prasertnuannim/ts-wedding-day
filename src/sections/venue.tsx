"use client";

import dynamic from 'next/dynamic';
import Map from '@/components/map';
import { useSectionInView } from '@/lib/useInView';


const MapComponent = dynamic(() => import('@/components/map'), {
  ssr: false, // Prevent server-side rendering for Google Maps
});

export default function Venue() {
  const { ref } = useSectionInView("#venue", 0.1)


  return (
    <section
      ref={ref}
      id="venue"
      className="bg-sky-100 mb-8 justify-center items-center max-w-[74rem] text-center sm:mb-8 xl:w-[600px]lg:w-[500px] md:w-[500px] shadow-xl"
    >
      <div
        ref={ref}
          className='flex flex-col h-auto shadow-xl rounded-xl'  
      >
        <div className='flex flex-col mb-8'>
          <p className='text-2xl text-gray-500 justify-center items-center text-center p-2 font-bold'>Location</p>
          <div>
            <Map />
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='text-sm justify-center items-center text-center text-gray-500 font-bold'>99 หมู่ที่ 3 ต.เชียงดา อ.สร้างคอม จ.อุดรธานี 41260</p>
          <p className='text-sm justify-center items-center text-center text-gray-500 font-bold'>
          Tel : 095-9594188, 083-0099743
          </p>
        </div>
        <div className="h-[80px] w-[100%]bg-white p-8" />
      </div>

    </section>
  );
}