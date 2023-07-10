"use client"
import React,{useState, useEffect, useRef} from 'react';
import Image from "next/image"; 
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import {AiOutlineGithub, AiOutlineTwitter, AiOutlineMan} from 'react-icons/ai'
import { AttentionSeeker } from "react-awesome-reveal";
import {PiMusicNotesLight, PiDressLight, PiCampfireLight} from "react-icons/pi"
import {SlLocationPin} from "react-icons/sl"
import {BsCodeSlash} from "react-icons/bs"
import {FcCommandLine} from "react-icons/fc"
import img from "@/assests/images/mac.png"

const Intro = () => {
    const [hover,setHover] = useState(false)
    const [hover2,setHover2] = useState(false)

    return (
        <div className="w-full px-10 md:px-20 h-screen items-center text-left flex-wrap text-[30px] lg:text-[45px]">
            <AttentionSeeker effect='headShake'>
                <h1 className='[font-family:"Maglite"] my-20 w-full'><AiOutlineMan className='inline' /> Tanay Desai,</h1>
                <div className="[font-family:'Maglite'] max-w-[1000px] leading-loose">a <span className='[font-family:"LufgaLight"] inline-flex text-[25px] rounded-[25px] h-[55px] lg:min-h-[40px] bg-pink-400 p-2 -rotate-6 justify-items-center items-center'>Mumbai <SlLocationPin className='inline'/></span> based  
                    <motion.span onHoverStart={()=>setHover2(true)} onHoverEnd={()=>setHover2(false)} className='[&::-webkit-scrollbar]:hidden inline-flex h-[50px] lg:h-[70px] mx-3 p-2 items-center overflow-hidden border-solid whitespace-nowrap border-2 w-fit border-black rounded-[17px]  hover:bg-black  hover:text-white'>
                        {!hover2 ? "software" : <Marquee className='[&::-webkit-scrollbar]:hidden max-w-[118px] lg:max-w-[177px]' direction="left" loop={0} speed={200}>software-web-app-</Marquee>}
                    </motion.span>
                    <Image className='inline w-20' src={img} />
                    <span className='inline [font-family:"Courier"]'>alchemist</span> by day and <span className='[font-family:"LufgaLight"] inline-flex text-[25px] rounded-[25px] h-[55px] lg:min-h-[40px] bg-blue-400 p-2 rotate-6 justify-items-center items-center'>UI/UX</span>
                    <motion.span onHoverStart={()=>setHover(true)} onHoverEnd={()=>setHover(false)} className='[&::-webkit-scrollbar]:hidden inline-flex h-[50px] lg:h-[70px] mx-3 p-2 items-center overflow-hidden border-solid whitespace-nowrap border-2 w-fit border-black rounded-[17px]  hover:bg-black  hover:text-white'>
                        {!hover ? "craftsman" : <Marquee className='[&::-webkit-scrollbar]:hidden max-w-[138.5px] lg:max-w-[208px]' direction="left" loop={0} speed={200}>craftsman-designer-developer-</Marquee>}
                    </motion.span>
                    by night. Making intiutive <PiCampfireLight className='inline text-orange-300' />, <span className='inline font-default'>puposeful</span> & problem-solving software <BsCodeSlash className='inline'/>.
                     Born <span className='inline font-Old'>2005</span>, outside coding <FcCommandLine className="inline" />, I'm into <span className='inline font-default'>music</span> <PiMusicNotesLight className='inline' />, <span className='[font-family:"LufgaLight"] inline-flex text-[25px] rounded-[25px] h-[55px] lg:min-h-[40px] bg-green-400 p-2 -rotate-6 justify-items-center items-center'>fashion <PiDressLight className='inline' /></span>  & <span className='inline font-Calming'>astronomy</span>🪐.
                    See <AiOutlineGithub onClick={() => {window.open("https://github.com/tanaydesai")}} className='inline'/> or <AiOutlineTwitter onClick={() => {window.open("https://twitter.com/tanaydesaii")}} className='inline text-blue-400'/>.
                </div>
            </AttentionSeeker>
        </div>
    )
}


export default Intro