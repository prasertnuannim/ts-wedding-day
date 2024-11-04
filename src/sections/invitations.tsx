"use client";
import React, { FC, useEffect } from 'react';
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useSectionInView } from '@/lib/useInView';

const Invitations: FC = () => {
  const { ref } = useSectionInView("#invitations", 0.1);
  return (
    <section
      ref={ref}
      id="invitations"
      className=""
    >     
        <div
        className="flex items-center justify-center shadow-xl">
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
