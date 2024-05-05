"use client"
import React, { useState, useEffect } from "react"
import { DecryptText } from "@/components/decrypt"
import { FadeBox } from "@/components/fade"
import { GoArrowUpRight, GoArchive  } from "react-icons/go";
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import Link from "next/link"

const Home = () => {
 
  return (
    <Tabs defaultValue="about" className="w-full h-fit bg-[#f4f2f2]">
        <div className="fixed left-[50%] bottom-10 w-fit z-[100] translate-x-[-50%]"><Navbar /></div>
        <TabsContent value="about" className="w-full h-fit pb-10">
          <div className="body bg-[#f4f2f2]">
            <div className="main bg-[#f4f2f2]">
                <h1 className="font-Copernicus2 text-[49px] pt-3 text-[#29261b]">Tanay Desai</h1>
                <div className="tag mb-10"><DecryptText text="Mumbai, India."/></div>
                <FadeBox sentence={`I am a 19 year old developer focused on deep learning and neural networks, with a keen interest in user interface and interaction design. My overarching goal is to build and design technology that helps catalyze progress towards an age of abundance, intelligence and creativity. \n \n I believe nature is governed by Power Laws and to truly only work on something that you're passionate about and creates value. \n \n I am currently focused on a project that aims to blend LLMs with speed, storytelling and data.`}/>
                <div className="flex gap-5 items-center text-[#7f7f7d]  ml-2  mt-10">
                    <Link href="https://twitter.com/tanaydesaii" className="border-2 border-grey-600 px-2 py-1 rounded-full flex gap-1 items-center justify-center text-[11px]"><div className="w-3 h-3 p-1/3 rounded-full flex items-center justify-center bg-[#d2a999]/50"><div className="w-1/2 h-1/2 shrink-0 rounded-full bg-[#d2a999]"/></div> github <GoArrowUpRight /></Link>
                    <Link href="https://github.com/tanaydesai" className="border-2 border-grey-600 px-2 py-1 rounded-full flex gap-1 items-center justify-center text-[11px]"><div className="w-3 h-3 p-1/3 rounded-full flex items-center justify-center bg-[#d2a999]/50"><div className="w-1/2 h-1/2 shrink-0  rounded-full bg-[#d2a999]"/></div> twitter <GoArrowUpRight /></Link>
                </div>
            </div>
        </div>
        </TabsContent>

        <TabsContent value="work" className="w-full h-fit pb-10 bg-[#f4f2f2]">
        <div className="body bg-[#f4f2f2]">
          <div className="main bg-[#f4f2f2]">
              <h1 className="font-Copernicus2 text-[39px] pt-3 text-[#29261b]">Work</h1>
                <FadeBox sentence={`Some of my major projects, this is always a work in progress:)`} />
                
                <h1 className="text-[20px] mt-10 ml-2 font-STY">Projects</h1>
                <div className="mt-3">
                  <Link href="https://uiaftersex.vercel.app/" >
                    <div className="p-3 cursor-default rounded-lg">
                      <h1 className="mb-2 font-STY text-[14px] flex items-center gap-2.5 "><p>uiaftersex</p></h1>
                      <h1 className="text-[#7f7f7d] text-[13px] font-STY  hover:underline hover:decoration-[#7f7f7d]">Laboratory for uniquely crafted user interfaces, interactions & components.</h1>
                    </div>
                  </Link>
                  <Link href="https://exploreai.vercel.app/">
                    <div className="p-3 cursor-default rounded-lg ">
                      <h1 className="mb-2 font-STY  text-[14px] flex items-center gap-2.5 "><p>explore ai</p><div className="border-2 border-grey-600 px-2 py-1 rounded-full flex gap-1 items-center font-normal text-[#7f7f7d] justify-center text-[11px]">archived</div></h1>
                      <h1 className="text-[#7f7f7d] font-STY text-[13px]  hover:underline hover:decoration-[#7f7f7d]">AI powered semantic search engine for thousands of Youtube videos.</h1>
                    </div>
                  </Link>
                </div>

                <h1 className=" text-[20px] mt-10 ml-2 font-STY">Open Source</h1>
                <div className="mt-3">
                  <Link href="">
                    <div className="p-3 cursor-default rounded-lg">
                      <h1 className="mb-2 font-STY text-[14px] flex items-center gap-2.5 justify-between"><p>scaling-laws</p></h1>
                      <h1 className="text-[#7f7f7d] text-[13px] font-STY  hover:underline hover:decoration-[#7f7f7d]">coming soon:)</h1>
                    </div>
                  </Link>
                  <Link href="https://github.com/tanaydesai/pluto">
                    <div className="p-3 cursor-default rounded-lg ">
                      <h1 className="mb-2 font-STY  text-[14px] flex items-center gap-2.5 justify-between"><p>pluto</p></h1>
                      <h1 className="text-[#7f7f7d] font-STY text-[13px]  hover:underline hover:decoration-[#7f7f7d] ">Build small language models with synthetic data from scratch.</h1>
                    </div>
                  </Link>
                  <Link href="https://github.com/tanaydesai/atomgrad">
                    <div className="p-3 cursor-default rounded-lg ">
                      <h1 className="mb-2 font-STY  text-[14px] flex items-center gap-2.5 justify-between"><p>atomgrad</p></h1>
                      <h1 className="text-[#7f7f7d] font-STY text-[13px] hover:underline hover:decoration-[#7f7f7d] ">Simple autograd engine between micrograd and tinygrad</h1>
                    </div>
                  </Link>
                </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="thoughts" className="w-full bg-[#f4f2f2] h-fit pb-10">
        <div className="body bg-[#f4f2f2]">
          <div className="main">
              <h1 className="font-Copernicus2 text-[39px] pt-3 text-[#29261b]">Thoughts</h1>
              <FadeBox sentence={`Peek into my thoughts and late night tweets. Will maybe share longer form stuff in the future.`} />
              <Link href="https://x.com/tanaydesaii/status/1751765130004607179?s=20" className="flex gap-2  cursor-default items-center mt-10 p-3  shrink-0 rounded-lg hover:underline hover:decoration-[#7f7f7d] "><div className="w-3 h-3 p-1/3 rounded-full flex items-center justify-center bg-[#d2a999]/50"><div className="w-1/2 h-1/2 shrink-0 rounded-full bg-[#d2a999]"/></div><DecryptText text="Accelerate & expand throughout the universe" truncate/><hr className="flex-grow h-0.2 bg-[#7f7f7d]"/><h1 className="text-[#7f7f7d] ml-1 text-[12px] font-STY">2024</h1></Link>
              <Link href="https://x.com/tanaydesaii/status/1759289321037713657?s=20" className="flex gap-2 cursor-default items-center mt-2 p-3  shrink-0 rounded-lg hover:underline hover:decoration-[#7f7f7d]"><div className="w-3 h-3 p-1/3 rounded-full flex items-center justify-center bg-[#d2a999]/50"><div className="w-1/2 h-1/2 shrink-0 rounded-full bg-[#d2a999]"/></div><DecryptText text="Training small models on synthetic data" truncate/><hr className="flex-grow h-0.2 bg-[#7f7f7d]"/><h1 className="text-[#7f7f7d] ml-1 text-[12px] font-STY">2024</h1></Link>
              <Link href="https://x.com/tanaydesaii/status/1761847156590207177" className="flex gap-2 cursor-default items-center mt-2 p-3 rounded-lg  shrink-0 hover:underline hover:decoration-[#7f7f7d]"><div className="w-3 h-3 p-1/3 rounded-full flex items-center justify-center bg-[#d2a999]/50"><div className="w-1/2 h-1/2 shrink-0 rounded-full bg-[#d2a999]"/></div><DecryptText text="Age of Abundance" truncate/><hr className="flex-grow h-0.2 bg-[#7f7f7d]"/><h1 className="text-[#7f7f7d] ml-1 text-[12px] font-STY">2024</h1></Link>
          </div>
        </div>
        </TabsContent>
    </Tabs>
  )
}

export default Home