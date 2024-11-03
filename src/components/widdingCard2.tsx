import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

type Props = {};

const WeddingCard2 = (props: Props) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the component is visible
  });

  return (
    <div
      className="h-auto shadow-xl relative overflow-hidden flex justify-center" 
    >
      <div
        className=" max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
      >
        <Image
          src="/itinerary.png"
          width={480}
          height={480}
          alt="Wedding invitation image"
          quality={100}
          priority
          className="object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default WeddingCard2;
