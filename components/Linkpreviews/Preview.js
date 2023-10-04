"use client"
import React, { useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const Preview = ({img, name}) => {
    const [popUpValue, setPopUpValue] = useState('');


    const divVariants = {
      hidden: { scaleY: 0, originY: 1 },
      visible: { scaleY: 1, originY: 1 },
      collapsed: { scaleY: 0, originY: 1 }
    };

    return (
            <div className='relative'>
                <motion.div initial="collapsed" animate={popUpValue ? 'visible' : 'hidden'} variants={divVariants} transition={{ duration: 0.2 }} className='absolute text-[white] flex w-[280px] h-[170px] shadow-[0_16px_100px_rgb(0_0_0_/_15%)] z-[2] p-1 items-center rounded-[10px] bottom-10'>
                  <div className='overflow-hidden'><Image className='rounded-[10px] w-full h-auto' src={img}></Image></div>
                </motion.div>
                <p onMouseEnter={() => setPopUpValue('Pop-up content')} onMouseLeave={() => setPopUpValue('')}>{name}</p>
            </div>
    )
  }


export default Preview;
