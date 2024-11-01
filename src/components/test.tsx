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

const NestedScrollForm = (props: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const [forms, setForms] = useState<Form[]>([]);

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>


  
        <motion.form
          ref={ref}
          className="bg-white p-2 w-'90%'space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
              <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-start mb-4">Blessing</h2>
        <div className="relative mb-4 content-end">
          <OTPModal fetchForms={fetchForms} />
        </div>


          <div className="h-96 overflow-y-auto border p-4 rounded-lg space-y-4 bg-white">
            <p className="block text-lg font-semibold">คำอวยพร</p>
            <div className="flex flex-wrap justify-center content-start gap-4">
              {forms.map((item, index) =>
                item.name ? (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card name={item.name} description={item.description} />
                  </motion.div>
                ) : null
              )}
            </div>
          </div>
          {/* </div> */}
          </div>
        </motion.form>
      
    </>
  );
};

export default NestedScrollForm;