import Image from 'next/image'
import CardExploreAI from '@/components/exploreai/card'
import CardUiaftersex from '@/components/uiafersex/card'
import Intro from '@/components/intro/intro'
import {TbTopologyStarRing3} from "react-icons/tb"


export default function Home() {
  return (
   <div className='mx-auto mb-100'>
      <Intro />
      <h1 className='[font-family:"Maglite"] lg:mt-[200px] mb-[150px] px-10 md:px-20 text-left text-[30px] lg:text-[45px] w-full'><TbTopologyStarRing3 className='inline'/> Projects</h1>
      <CardExploreAI />
      <CardUiaftersex />
      <hr className='my-[100px] mx-auto h-[1px] w-[50px] relative border-gray-400'></hr>
   </div>
  )
}
