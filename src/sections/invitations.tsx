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

  return (
    <section
      ref={ref}
      id="invitations"
      className=""
    >     
        <div
        className="flex items-center justify-center">
          <Image
            src="/kokrdok.png"
            width={480}
            height={480}
            alt="Invitation photo"
            quality={100}
            priority
            className="object-cover shadow-lg"
          />
    
      </div>
    </section>
  );
};

export default Invitations;
