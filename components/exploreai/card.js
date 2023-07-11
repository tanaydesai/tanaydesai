"use client"
import styles from "./gradient.module.css"
import React,{useState, useEffect, useRef} from 'react';
import Image from "next/image";
import img from "@/assests/images/arc.png"
import { Fade, Zoom } from "react-awesome-reveal";

const CardExploreAI = () => {  
    return (  
        <div className="w-full flex flex-wrap gap-1 items-center justify-items-center my-10">
            <div className="min-w-[400px] max-w-2/6 mx-auto">
                {/* <Fade duration={1000}> */}
                    <div className="w-[340px] h-[560px] shadow-[0_16px_70px_rgb(0_0_0_/_20%)] [transform-style:preserve-3d] bg-paper bg-contain overflow-hidden m-auto p-2.5 rounded-[15px]">
                        <div className={styles.gradient}><div className={styles.circles}></div></div>
                        <div className="[&::-webkit-scrollbar]:hidden overflow-y-auto w-[95%] h-[300px] m-auto rounded-[15px]"><Image src={img} className='max-w-full h-auto' alt="" /></div>
                        <div className="relative text-left mt-[13px] p-2.5">
                            <p className="[font-family:'LufgaLight'] text-[#868686] text-[13px]">22.09.23</p>
                            <h2 className="[font-family:'Maglite'] text-2xl text-[black] mt-[13px]">Explore AI</h2>
                            <p className="[font-family:'LufgaLight'] text-[#868686] text-sm leading-[25px] mt-[23px]">An AI Powered Search for Youtube Videos. Enables search for answers directly inside thousands of YouTube videos, free-of-cost, easy-to-navigate and fast.</p>
                        </div>
                    </div>
                {/* </Fade> */}
            </div>

            <div className="p-10 min-w-[400px] w-fit mx-auto">
                <Fade cascade duration={600}>
                    <p className="[font-family:'LufgaLight'] text-[#868686] text-[13px]">22.09.23</p>
                    <h2 className="[font-family:'Maglite'] text-2xl text-[black] mt-[13px]">Explore AI</h2>
                    <p className="[font-family:'LufgaLight'] text-[#868686] text-sm leading-[25px] mt-[23px] max-w-[400px]">Built with Semamtic Vector search using Pinecone, GPT-4 only for summarizations and an internal transcription & encoding engine.</p>
                </Fade>
            </div>
        </div>  
    )
}

export default CardExploreAI