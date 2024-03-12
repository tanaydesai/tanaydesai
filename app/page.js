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
    <div className="main">
      <Tabs defaultValue="about">
        <div className="fixed left-[50%] bottom-10 w-fit translate-x-[-50%]"><Navbar /></div>

        <TabsContent value="about">
            <h1 className="[font-family:Calming] text-[39px] pt-3">Tanay Desai</h1>
            <div className="tag font-LufgaLight mb-10"><DecryptText text="Mumbai, India."/></div>
            <Fade sentence={`I am 19ys old and a developer focused on deep learning and neural nets. Also like to get my feet wet with interfaces and interaction design. Generally building towards the democratization of LLMs and contributing my half to accelerate the age of abundance. \n \n Truly believe everyone should leverage this increase in intelligence and creativity brought about by generative models to build incredible tools. \n \n Currently building my first major venture focused on open source LLM frameworks.`}/>
            <div className="flex gap-5 items-center text-gray-500 ml-2  mt-10">
                <Link href="https://twitter.com/tanaydesaii"><FaXTwitter className="inline-flex" size={20}/></Link>
                <Link href="https://github.com/tanaydesai"><BsGithub className="inline-flex" size={20}/></Link>
            </div>
        </TabsContent>

        <TabsContent value="work">
            <h1 className="[font-family:Calming] text-[39px] pt-3">Work</h1>
            <Fade sentence={`Some of my major projects, always a work in progress:)`} />
              
              <h1 className="text-[20px] mt-10 ml-2 font-LufgaLight mb-5">Projects</h1>
              <div className="grid gap-2 md:grid-cols-2 md:grid-flow-col grid-flow-row mt-3">
                <Link href="https://uiaftersex.vercel.app/" className="w-[100%]">
                  <div className="p-3 cursor-default rounded-lg hover:bg-gray-100 max-h-[140px]">
                    <h1 className="mb-2 font-LufgaLight text-[17px]">uiaftersex ↗</h1>
                    <h1 className="text-gray-500 text-[17px] font-LufgaLight">Laboratory for uniquely crafted user interfaces, interactions & components.</h1>
                  </div>
                </Link>
                <Link href="https://exploreai.vercel.app/"  className="w-[100%]">
                  <div className="p-3 cursor-default rounded-lg hover:bg-gray-100 max-h-[140px]">
                    <h1 className="mb-2 font-LufgaLight text-[17px]">Explore AI ↗</h1>
                    <h1 className="text-gray-500 text-[17px] font-LufgaLight">AI powered search engine for thousands of Youtube videos.</h1>
                  </div>
                </Link>
              </div>

              <h1 className=" text-[20px] mt-10 ml-2 font-LufgaLight">Open Source</h1>
              <Link href=""><div className="text-gray-500 ml-2 text-[17px] mt-5 cursor-default font-LufgaLight hover:underline hover:decoration-slate-400"><DecryptText text="scaling-laws - wip:)"/></div></Link>
              <Link href="https://github.com/tanaydesai/pluto"><div className="text-gray-500 ml-2 text-[17px] mt-2 cursor-default font-LufgaLight hover:underline hover:decoration-slate-400"><DecryptText text="pluto - build small language models with synthetic data from scratch ↗"/></div></Link>
              <Link href="https://github.com/tanaydesai/atomgrad"><div className="text-gray-500 ml-2 text-[17px] mt-5 cursor-default font-LufgaLight hover:underline hover:decoration-slate-400"><DecryptText text="atomgrad - simple autograd engine between micrograd and tinygrad ↗"/></div></Link>
        </TabsContent>

        <TabsContent value="thoughts">
            <h1 className="[font-family:Calming] text-[39px] pt-3">Thoughts</h1>
            <Fade sentence={`Some small thoughts through my tweets:) Will maybe write longer blogs someday.`} />
            <Link href="https://x.com/tanaydesaii/status/1751765130004607179?s=20" className="flex gap-1.5  cursor-default items-center mt-10 p-3 rounded-lg hover:bg-gray-100"><h1 className="text-[17px] font-LufgaLight  shrink-0 ">Age of Abundance</h1><DecryptText text="Accelerate & expand throughout the universe" truncate/><hr className="flex-grow h-0.2 bg-slate-300"/><h1 className="text-slate-500 ml-1 text-[14px] font-LufgaLight">2023</h1></Link>
            <Link href="https://x.com/tanaydesaii/status/1759289321037713657?s=20" className="flex gap-1.5 cursor-default items-center mt-2 p-3 rounded-lg hover:bg-gray-100"><h1 className="text-[17px] font-LufgaLight  shrink-0 ">TinyStories</h1><DecryptText text="Training small models on synthetic data" truncate/><hr className="flex-grow h-0.2 bg-slate-300"/><h1 className="text-slate-500 ml-1 text-[14px] font-LufgaLight">2023</h1></Link>
            <Link href="https://x.com/tanaydesaii/status/1732190130340024622?s=20" className="flex gap-1.5  cursor-default items-center mt-2 p-3 rounded-lg hover:bg-gray-100"><h1 className="text-[17px] font-LufgaLight  shrink-0 ">Art</h1><DecryptText text="Generative models & The barrier to entry." truncate/><hr className="flex-grow h-0.2 bg-slate-300"/><h1 className="text-slate-500 ml-1 text-[14px] font-LufgaLight">2023</h1></Link>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Home