"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [
  { id: 1, src: '/image1.png', alt: '', width: 200, height: 450 },
  { id: 2, src: '/image2.png', alt: '', width: 200, height: 400 },
  { id: 3, src: '/image3.png', alt: '', width: 200, height: 300 },
  { id: 4, src: '/Invitations.png', alt: '', width: 200, height: 350 },
  { id: 5, src: '/image4.png', alt: 'พี่นวล', width: 200, height: 350 },
  { id: 6, src: '/image5.png', alt: 'น้องราม', width: 200, height: 250 },
];

const Gallery = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger animation when 20% of the component is visible
      });
    
      // Animation Variants
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5 } },
      };
    
      const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
      };
    
      useEffect(() => {
        if (inView) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      }, [controls, inView]);
  return (
    <section className="py-8">
      {/* <div className="container mx-auto px-4"> */}
      <motion.div
      ref={ref}
      className="container mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >

        <motion.h2
          className="text-2xl font-semibold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
            <p className="text-4xl font-semibold mb-6 text-sky-500 mt-8 mb-4 text-center">
            Gallery
            </p>
    
        </motion.h2>
        
        <div className="flex flex-wrap gap-4 justify-center">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg"
              style={{
                width: `${image.width}px`,  // Custom width for each image
                height: `${image.height}px`, // Custom height for each image
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300"
                loading="lazy"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center text-white font-medium text-lg transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              
              >
            
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
