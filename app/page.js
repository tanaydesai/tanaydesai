"use client"
import {TbTopologyStarRing3} from "react-icons/tb"
import {BsCodeSlash} from "react-icons/bs"
import Slab from '@/components/Slab/slab'
import {FaLocationArrow} from "react-icons/fa"
import {FaXTwitter} from "react-icons/fa6"
import { BsGithub } from "react-icons/bs"
import Link from "next/link"
import img1 from "@/assests/images/uiaftersex.png"
import img2 from "@/assests/images/exploreai.png"
import { TypeAnimation } from 'react-type-animation';


export default function Home() {
  const projects = [
      {title: "explore ai", description: "an AI Powered Search for Youtube Videos. Enables search for answers directly inside thousands of YouTube videos, free-of-cost, easy-to-navigate & fast.",tag:"31.12.2022",links:["https://exploreai.vercel.app/"],img:img2},
      {title: "uiaftersex", description: "an open-source intuitive laboratory that showcases uniquely crafted user interfaces, interactions & components that make you wanna (hopefully) come back to, after sex.",tag:"31.12.2022",links:["https://uiaftersex.vercel.app/","https://github.com/tanaydesai/uiaftersex"],img:img1},
]

  return (
    <div className='main'>

      <TypeAnimation sequence={["Tanay",1000,'Tanay Desai',1000,"Tanay",1000,"Tanay Desai",1000,"Tanay",1000,"Tanay Desai",1000,]} wrapper="div" cursor={true} className='title'/>    
      {/* <div className='title'>Tanay Desai</div> */}
      <div className='tag'><FaLocationArrow size={12}/> Mumbai, India.</div>
      <p className='description'>18, a software alchemist by day & user interfaces & interactions craftsman by night. Into deep learning & neural nets & sometimes making other intiutive & puposeful software.</p>
      <div className='icons'><Link href="https://twitter.com/tanaydesaii"><FaXTwitter /></Link> <Link href="https://github.com/tanaydesai"><BsGithub /></Link></div>

      <div className='mt-[200px] md:mt-[200px]'>
        <div className='header'><BsCodeSlash /> Projects</div>
          {projects.map((project,index) => (
            <Slab key={index} data={project} type="projects"/>
          ))}
        {/* <div className='header'><TbTopologyStarRing3 /> Research soon...</div> */}
      </div>

    </div>
  )
}
