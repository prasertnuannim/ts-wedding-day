import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GiCottonFlower } from "react-icons/gi";
import { TypeAnimation } from "react-type-animation";
import Image from 'next/image';

type Props = {};

const WeddingCard1 = (props: Props) => {

  return (
    <div

      className='flex flex-col rounded-t-[220px] -mt-20 shadow-2xl p-6 relative overflow-hidden xl:w-[600px]lg:w-[500px] md:w-[500px]' style={{ backgroundColor: '#AFD7F6' }}>


      {/* Invitation Heading */}
      <div className='text-center space-y-6'>
        <p
          className='text-5xl font-extrabold text-white mt-4 z-1 drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]'>
          <span className="relative font-extrabold text-white text-8xl -mr-4" style={{ top: '-1.5rem' }}>T</span>
          <span className="relative font-extrabold text-white text-8xl -ml-6" style={{ top: '0.8rem' }}>S</span>
        </p>
        <p
          className='text-lg font-bold text-gray-700 z-1 drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]'>
          <p>23 พฤศจิกายน 2567</p>

        </p>

        {/* Custom Message */}
        <p
          className='flex flex-row justify-start items-start font-light leading-relaxed text-white z-1 drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]'
        >
          <span className=' text-white text-[16px] text-left'>สวัสดีค่ะ ตาลกับพี่เสริฐ มีข่าวดีจะมาแจ้งให้ทุกคนทราบ! <br/> 
          กว่า 10 ปีที่เราได้รู้จักและเรียนรู้กัน และตอนนี้พวกเรากำลังจะก้าวไปอีกขั้นของชีวิตคู่แล้ว พวกเรายินดีมากๆ ที่จะเชิญเพื่อนๆ พี่ๆ น้องๆ ทุกคนที่รักมาร่วมเป็นส่วนหนึ่งในวันสำคัญนี้ <br/>งานของเราจัดขึ้นที่บ้านเกิดของตาลเอง ซึ่งเป็นงานเล็กๆ อบอุ่นและเรียบง่าย
            อย่าลืม สำหรับท่านที่สามารถมาร่วมงานได้ เรียนเชิญด้วยความยินดีเลยนะคะ และสำหรับท่านที่ไม่สะดวก ไม่เป็นไรค่ะ เพียงแค่ส่งคำอวยพรให้เราผ่าน e - card ที่เราเตรียมไว้ก็เพียงพอแล้ว คำอวยพรของทุกคนจะเป็นความทรงจำที่เราจะเก็บไว้อย่างดีตลอดไป </span>
        </p>
        <p className=' text-white text-[16px] justify-center items-center'>ขอบคุณมากๆ ค่ะ</p>
        <div className='flex flex-row justify-center items-center'>
        
          <div
            className="flex justify-center space-x-4 mt-4 text--2xl text-red-500">
         <Image
            src="/lineWedding.png"
            alt="heart"
            width={200}
            height={100}
          />
          </div>
        </div>
      </div>

    </div>

  );
};

export default WeddingCard1;
