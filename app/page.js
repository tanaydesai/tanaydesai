"use client"
import React, { useState, useEffect } from "react"
import { DecryptText } from "@/components/decrypt"
import { Fade } from "@/components/fade"
import {FaXTwitter} from "react-icons/fa6"
import { BsGithub } from "react-icons/bs"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import Link from "next/link"

const Home = () => {
 
  return (
    <Tabs defaultValue="about" className="w-full h-fit">
        <div className="fixed left-[50%] bottom-10 w-fit translate-x-[-50%]"><Navbar /></div>
        <TabsContent value="about" className="w-full h-fit pb-10 mb-5">
          <div className="body bg-[#191919]">
            <div className="main">
                <h1 className="font-Copernicus2 text-[39px] pt-3 text-white">Tanay Desai</h1>
                <div className="tag mb-10"><DecryptText text="Mumbai, India."/></div>
                <Fade sentence={`I am a 19 year old developer focused on deep learning and neural networks, with a keen interest in user interface and interaction design. My overarching goal is to build towards the democratization of LLMs and help catalyze progress towards an age of abundance. \n \n I firmly believe in empowering individuals to harness the intelligence and creativity facilitated by generative models, enabling the creation of remarkable tools. \n \n Currently building my first major venture focused on embedding large text corpora.`}/>
                <div className="flex gap-5 items-center text-gray-500 ml-2  mt-10">
                    <Link href="https://twitter.com/tanaydesaii"><FaXTwitter className="inline-flex hover:text-white" size={20}/></Link>
                    <Link href="https://github.com/tanaydesai"><BsGithub className="inline-flex hover:text-white" size={20}/></Link>
                </div>
            </div>
        </div>
        </TabsContent>

        <TabsContent value="work" className="w-full h-fit pb-10 mb-5">
        <div className="body bg-[#ebeaea]">
          <div className="main">
              <h1 className="font-Copernicus2 text-[39px] pt-3">Work</h1>
                <Fade sentence={`Some of my major projects, always a work in progress:)`} />
                
                <h1 className="text-[20px] mt-10 ml-2 font-LufgaLight mb-5">Projects</h1>
                <div className="mt-3">
                  <Link href="https://uiaftersex.vercel.app/" >
                    <div className="p-3 cursor-default rounded-lg hover:bg-gray-300">
                      <h1 className="mb-2 font-LufgaLight text-[15px] flex items-center gap-2.5 justify-between"><p>uiaftersex ↗</p><DecryptText text="2023"/></h1>
                      <h1 className="text-[#7f7f7d] text-[14px] font-ABC">Laboratory for uniquely crafted user interfaces, interactions & components.</h1>
                    </div>
                  </Link>
                  <Link href="https://exploreai.vercel.app/">
                    <div className="p-3 cursor-default rounded-lg hover:bg-gray-300">
                      <h1 className="mb-2 font-LufgaLight  text-[15px] flex items-center gap-2.5 justify-between"><p>Explore AI ↗</p><DecryptText text="2023"/></h1>
                      <h1 className="text-[#7f7f7d] font-ABC text-[14px]">AI powered semantic search engine for thousands of Youtube videos.</h1>
                    </div>
                  </Link>
                </div>

                <h1 className=" text-[20px] mt-10 ml-2 font-LufgaLight">Open Source</h1>
                <Link href=""><div className="text-[#91918d] ml-2 font-ABC text-[14px] mt-5 cursor-default  hover:underline hover:decoration-[#7f7f7d]"><div className="text-[#7f7f7d] text-[14px] font-ABC">scaling-laws - wip:)</div></div></Link>
                <Link href="https://github.com/tanaydesai/pluto"><div className=" ml-2 text-[14px] mt-2 cursor-default font-ABC hover:underline hover:decoration-[#7f7f7d]"><div className="text-[#7f7f7d] text-[14px] font-ABC">pluto - build small language models with synthetic data from scratch ↗</div></div></Link>
                <Link href="https://github.com/tanaydesai/atomgrad"><div className=" ml-2 text-[14px] mt-2 cursor-default font-ABC hover:underline hover:decoration-[#7f7f7d]"><div className="text-[#7f7f7d] text-[14px] font-ABC">atomgrad - simple autograd engine between micrograd and tinygrad ↗</div></div></Link>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="thoughts" className="w-full h-fit pb-10 mb-5">
        <div className="body bg-[#191919]">
          <div className="main">
              <h1 className="font-Copernicus2 text-[39px] pt-3 text-white">Thoughts</h1>
              <Fade sentence={`Some of my small thoughts through my tweets:) Will maybe write longer form stuff someday.`} />
              <Link href="https://x.com/tanaydesaii/status/1751765130004607179?s=20" className="flex gap-1.5  cursor-default items-center mt-10 p-3 rounded-lg hover:bg-gray-600/80"><h1 className="text-[14px] font-ABC  shrink-0 text-white">Age of Abundance</h1><DecryptText text="Accelerate & expand throughout the universe" truncate/><hr className="flex-grow h-0.2 bg-[#7f7f7d]"/><h1 className="text-[#7f7f7d] ml-1 text-[14px] font-ABC">2023</h1></Link>
              <Link href="https://x.com/tanaydesaii/status/1759289321037713657?s=20" className="flex gap-1.5 cursor-default items-center mt-2 p-3 rounded-lg hover:bg-gray-600/80"><h1 className="text-[14px] font-ABC  shrink-0 text-white ">TinyStories</h1><DecryptText text="Training small models on synthetic data" truncate/><hr className="flex-grow h-0.2 bg-[#7f7f7d]"/><h1 className="text-[#7f7f7d] ml-1 text-[14px] font-ABC">2023</h1></Link>
              <Link href="https://x.com/tanaydesaii/status/1732190130340024622?s=20" className="flex gap-1.5  cursor-default items-center mt-2 p-3 rounded-lg hover:bg-gray-600/80"><h1 className="text-[14px] font-ABC  shrink-0 text-white">Art</h1><DecryptText text="Generative models & The barrier to entry." truncate/><hr className="flex-grow h-0.2 bg-[#7f7f7d]"/><h1 className="text-[#7f7f7d] ml-1 text-[14px] font-ABC">2023</h1></Link>
          </div>
        </div>
        </TabsContent>
    </Tabs>
  )
}

export default Home