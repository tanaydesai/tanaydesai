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
            <Fade sentence={`Tanay Desai is a software alchemist by day & user interfaces & interactions craftsman by night. Into deep learning & neural nets & sometimes making other intiutive & puposeful software. Yay. 
            
            Tanay Desai is a software alchemist by day & user interfaces & interactions craftsman by night. Into deep learning & neural nets & sometimes making other intiutive & puposeful software. Yay.`}/>
            
            <div className="flex gap-5 items-center text-gray-500 ml-2  mt-10">
                <Link href="https://twitter.com/tanaydesai"><FaXTwitter className="inline-flex" size={20}/></Link>
                <Link href="https://github.com/tanaydesai"><BsGithub className="inline-flex" size={20}/></Link>
            </div>
        </TabsContent>

        <TabsContent value="work">
            <h1 className="[font-family:Calming] text-[39px] pt-3">Work</h1>
            <Fade sentence={`Tanay Desai is a software alchemist by day & user interfaces & interactions cra`} />
              
              <h1 className="text-[20px] mt-10 ml-2 font-LufgaLight mb-5">Projects</h1>
              <div className="grid gap-2 lg:grid-cols-2 md:grid-flow-col grid-flow-row mt-3">
                <Link href="https://uiaftersex.vercel.app/">
                  <div className="p-3 cursor-default rounded-lg hover:bg-gray-100 lg:w-[240px] md:w-[260px] max-h-[140px]">
                    <h1 className="mb-2 font-LufgaLight text-[17px] text-gray-500">uiaftersex ↗</h1>
                    <DecryptText text={`Laboratory for uniquely crafted user interfaces, interactions & components.`}/>
                  </div>
                </Link>
                <Link href="https://exploreai.vercel.app/">
                  <div className="p-3 cursor-default rounded-lg hover:bg-gray-100 lg:w-[240px] md:w-[260px] max-h-[140px]">
                    <h1 className="mb-2 font-LufgaLight text-[17px] text-gray-500">Explore AI ↗</h1>
                    <DecryptText text={`AI powered search engine for thousands of Youtube videos.`}/>
                  </div>
                </Link>
              </div>

              <h1 className=" text-[20px] mt-10 ml-2 font-LufgaLight">Open Source</h1>
              <div className="text-gray-500 ml-2 text-[17px] mt-5 cursor-default font-LufgaLight hover:underline hover:decoration-slate-400"><DecryptText text="scaling-laws - wip:)"/></div>
              <div className="text-gray-500 ml-2 text-[17px] mt-2 cursor-default font-LufgaLight hover:underline hover:decoration-slate-400"><DecryptText text="pluto - pretraining small language models from scratch. ↗"/></div>
              <div className="text-gray-500 ml-2 text-[17px] mt-2 cursor-default font-LufgaLight hover:underline hover:decoration-slate-400"><DecryptText text="atomgrad - simple vector valued autograd engine between micrograd and tinygrad ↗"/></div>
              {/* <div className="text-gray-500 ml-2 text-[17px] mt-2 cursor-default font-LufgaLight hover:underline hover:decoration-slate-400"><DecryptText text="canvasify - an open-source AI powered search ↗"/></div> */}
        </TabsContent>

        <TabsContent value="thoughts">
            <h1 className="[font-family:Calming] text-[39px] pt-3">Thoughts</h1>
            <Fade sentence={`Soon:)`} />
            {/* <div className="flex gap-1.5 cursor-default items-center mt-10 p-3 rounded-lg hover:bg-gray-100"><h1 className="text-[17px] font-LufgaLight">AGI</h1><DecryptText text="AGI by 2024"/><hr className="flex-grow h-0.2 bg-slate-300"/><h1 className="text-slate-500 ml-1 text-[14px] font-LufgaLight">2023</h1></div>
            <div className="flex gap-1.5  cursor-default items-center mt-2 p-3 rounded-lg hover:bg-gray-100"><h1 className="text-[17px] font-LufgaLight">LLMs</h1><DecryptText text="Large Language Models are awesome"/><hr className="flex-grow h-0.2 bg-slate-300"/><h1 className="text-slate-500 ml-1 text-[14px] font-LufgaLight">2023</h1></div>
            <div className="flex gap-1.5  cursor-default items-center mt-2 p-3 rounded-lg hover:bg-gray-100"><h1 className="text-[17px] font-LufgaLight">Ultra ⌘+K</h1><DecryptText text="Large Language Models are awesome"/><hr className="flex-grow h-0.2 bg-slate-300"/><h1 className="text-slate-500 ml-1 text-[14px] font-LufgaLight">2023</h1></div> */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Home
