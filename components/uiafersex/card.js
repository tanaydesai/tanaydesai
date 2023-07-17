"use client"
import React,{useState, useEffect, useRef} from 'react';
import Image from "next/image";
import img from "@/assests/images/uiaftersex.png"
import { Fade, Zoom } from "react-awesome-reveal";
import {BsLink45Deg, BsGithub} from "react-icons/bs"
import Link from 'next/link';

const CardUiaftersex = () => {  
    return (   
        <div className="w-full min-h-[600px] flex flex-wrap-reverse gap-1 items-center justify-items-center my-10">
            <div className="p-10 min-w-[400px] mx-auto w-fit">
                <Fade cascade duration={600}>
                    <p className="[font-family:'LufgaLight'] text-[#868686] text-[13px]">22.09.23</p>
                    <h2 className="[font-family:'Maglite'] text-2xl text-[black] mt-[13px]">uiaftersex</h2>
                    <p className="[font-family:'LufgaLight'] text-[#868686] text-sm leading-[25px] mt-[23px] max-w-[400px]">An open-source library of intuitive UI components, interactions and interfaces that aim to feel good, inspire to build more or just some "fuck-it why not"s.</p>
                    <div className="flex my-10 gap-5 items-center text-[20px]"><Link href="https://uiaftersex.vercel.app/"><BsLink45Deg /></Link> <Link href="https://github.com/tanaydesai/uiaftersex"><BsGithub /></Link> </div>
                </Fade>
            </div>

            <div className="min-w-[400px] max-w-2/6 mx-auto">
                {/* <Fade triggerOnce> */}
                    <div className="w-[340px] h-[560px] shadow-[0_16px_70px_rgb(0_0_0_/_20%)] [transform-style:preserve-3d] bg-dirt bg-contain overflow-hidden m-auto p-2.5 rounded-t-[100px]">
                        <div className="absolute w-full h-full z-[-1] overflow-hidden bg-cyan-400 bg-[radial-gradient(at_2%_35%,rgb(191,219,254)_0,transparent_28%),radial-gradient(at_13%_50%,rgb(252,165,165)_0,transparent_13%),radial-gradient(at_25%_48%,rgb(226,232,240)_0,transparent_8%),radial-gradient(at_59%_44%,rgb(209,213,219)_0,transparent_18%),radial-gradient(at_94%_83%,rgb(254,249,195)_0,transparent_46%),radial-gradient(at_24%_54%,rgb(245,208,254)_0,transparent_69%)] [--mask:linear-gradient(to_bottom,rgba(0,0,0,1)_0,rgba(0,0,0,1)_40%,rgba(0,0,0,0)_95%,rgba(0,0,0,0)_0)_100%_100%_/_100%_100%_repeat-x] [-webkit-mask:var(--mask)] [mask:var(--mask)] rounded-t-[100px] left-0 top-0"></div>
                        <div className="[&::-webkit-scrollbar]:hidden overflow-y-auto w-[95%] h-[300px] m-auto rounded-t-[100px]"><Image src={img} className='max-w-full h-auto' alt="" /></div>
                        <div className="relative text-center mt-[35px] p-2.5">
                            <p className="[font-family:'Calming'] text-[#acacac] w-fit text-[13px] m-auto">22.09.23</p>
                            <h2 className="[font-family:'Allenoire'] text-2xl text-[rgb(114,192,255)] mt-[13px]">uiaftersex</h2>
                            <p className="[font-family:'Calming'] text-[#acacac] text-sm leading-[25px] mt-[23px]">an intuitive laboratory canvas that showcases uniquely crafted user interfaces & interactions that make you wanna (hopefully) come back to, after sex.</p>
                        </div>
                    </div>
                {/* </Fade> */}
            </div>
        </div>  
    )
}

export default CardUiaftersex