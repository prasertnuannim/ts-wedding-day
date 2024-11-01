"use client";

import { useSectionInView } from "@/lib/useInView";
import React from "react";
import Image from "next/image";
import WiddingTheme from "@/components/widdingTheme";
import Gift from "@/components/gift";
import Event from "@/components/event";
import WiddingCard2 from "@/components/widdingCard2";
import WiddingCard1 from "@/components/widdingCard1";

type Props = {};

const Itinerary = (props: Props) => {
  const { ref } = useSectionInView("#itinerary", 0.5);

  return (
    <section
      ref={ref}
      id="itinerary"
      className=""
    >
      <div className="justify-center items-center xl:w-[600px]lg:w-[500px] md:w-[500px]">
       <div>
       <WiddingCard1/>
      </div> 
      <div>
       <WiddingCard2/>
      </div> 
      <div>
        <Event/>
      </div>
      <div>
        <WiddingTheme />
      </div>
      <div>
        <Gift/>
      </div>
      </div>
    </section>
  );
};

export default Itinerary;
