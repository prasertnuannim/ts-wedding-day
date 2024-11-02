"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/cardBlessing";
import OTPModal from "@/components/modalOTP";
import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

type Props = {};
type Form = {
  phone: string;
  name: string;
  description: string;
};

const Blessing = (props: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: 100, opacity: 0 });
    }
  }, [controls, inView]);


  const [forms, setForms] = useState<Form[]>([]);

  // Fetch forms on page load
  useEffect(() => {
    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const response = await axios.get("/api/forms");
      setForms(response.data.forms);
    } catch (error) {
      console.log(error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },  // Start below and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Slide to position
  };
  return (
    <section
      ref={ref}
      id="blessing"
      className="justify-center items-center mb-4 mt-4 max-w-[74rem] text-center sm:mb-0 xl:w-[600px]lg:w-[500px] md:w-[500px]"
    >

      <motion.div
        ref={ref}
        className="bg-gradient-to-t from-gray-200 to-sky-200 rounded-lg p-2 pace-y-4 mb-8 shadow-xl"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-end p-2">
          <p className="text-xl font-extrabold text-red-200">
            Wedding Wish
          </p>
        </div>
        <div className="relative mb-4">
          <OTPModal fetchForms={fetchForms} />
        </div>

        <form className="flex flex-col justify-center">
          <div className="h-96 overflow-y-auto border p-4 rounded-lg space-y-4 bg-white">
            <p className="block text-lg font-semibold">คำอวยพร</p>
            <div className="flex flex-wrap justify-center content-start gap-4">
              {forms.map((item) =>
                item.name ? (
                  <div
                  >
                    <Card name={item.name} description={item.description} />
                  </div>
                ) : null
              )}
            </div>
          </div>
          {/* </div> */}
        </form>
      </motion.div>

    </section>
  );
};

export default Blessing;
