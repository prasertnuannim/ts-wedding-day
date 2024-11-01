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

  // Animation variants for the container and image
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="h-auto w-full shadow-xl relative overflow-hidden flex justify-center xl:w-[600px] lg:w-[500px] md:w-[500px] mt-4"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
        variants={imageVariants}
        initial="hidden"
        animate={controls}
      >
        <Image
          src="/itinerary.png"
          width={480}
          height={480}
          alt="Wedding invitation image"
          quality={100}
          priority
          className="object-cover rounded-b-lg shadow-lg w-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default WeddingCard2;
