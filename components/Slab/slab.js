"use client"
import {BsLink45Deg} from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import Link from "next/link"
import Preview from "@/components/Linkpreviews/Preview"


const Slab = ({data,type}) => {
    return (
        <div className="box">
            <div className="box-tag">{data.tag}</div>
            {/* <div className="box-title">{data.title}</div><hr className="h-[1px] w-1/2 bg-gray-500"></hr> */}
            <div className="box-title"><Preview name={data.title} img={data.img}/></div>
            <div className="box-description">{data.description}</div>
            
            {type === "projects" ? 
            <div className="box-icons">
                <Link href={data.links[0]}><BsLink45Deg /></Link> 
                {data.links[1] && <Link href={data.links[1]}><BsGithub /></Link>}
            </div> :  
            <div className="ml-1 text-[14px] mt-4 py-1 px-2 hover:bg-[#eeeeee] hover:opacity-90 rounded-lg w-fit">
                <Link href={data.links[0]}>View →</Link> 
            </div>}
        </div>
    )
}

export default Slab