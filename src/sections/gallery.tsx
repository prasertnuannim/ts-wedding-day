"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const widthImg = 450;
const heightImg = 520;

const images = [
  { id: 1, src: '/image3.png', alt: '', width: widthImg, height: heightImg },
  { id: 2, src: '/image8.png', alt: '',width: widthImg, height: heightImg },
  { id: 3, src: '/image1.png', alt: '',width: widthImg, height: '600' },
  { id: 4, src: '/image5.png', alt: '', width: widthImg, height: heightImg }, 
  { id: 5, src: '/image2.png', alt: '', width: widthImg, height: '600' },
  { id: 6, src: '/image6.png', alt: '', width: widthImg, height: heightImg },
  { id: 7, src: '/Image7.png', alt: '', width: widthImg, height: '600' },
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
    <section  ref={ref}
    id="gallery"
    className="justify-center items-centermax-w-[74rem] text-center sm:mb-0 xl:w-[600px]lg:w-[500px] md:w-[500px]">
      {/* <div className="container mx-auto px-4"> */}
      <div
      ref={ref}
      className="container mx-auto px-4"
    
    >

        <h2
          className="text-2xl font-semibold"
    
        >
            <p className="text-2xl font-semibold mb-6 mt-4 text-gray-500 mt-8 mb-4 text-center">
            GALLERY
            </p>
    
        </h2>
        
        <div className="flex flex-wrap justify-center">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden shadow-lg"
              style={{
                width: `${image.width}px`,  // Custom width for each image
                height: `${image.height}px`, // Custom height for each image
              }}
            
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center text-white font-medium text-lg transition-opacity"
               
              >
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
