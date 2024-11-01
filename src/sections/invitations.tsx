"use client";
import React, { FC, useEffect } from 'react';
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Invitations: FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

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
    <section
      ref={ref}
      id="invitations"
      className=""
    >     
        <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="flex items-center justify-center">
          <Image
            src="/Invitations.jpg"
            width={480}
            height={480}
            alt="Invitation photo"
            quality={100}
            priority
            className="object-cover shadow-lg rounded-xl"
          />
    
      </motion.div>
    </section>
  );
};

export default Invitations;
