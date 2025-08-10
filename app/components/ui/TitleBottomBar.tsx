"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

export default function TitleBottomBar({ children }: { children: string }) {


    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        gsap.to(".text-3xl",{
            scale: 1,
            scrollTrigger: {
                trigger : ".text-3xl"
            }
        }
    )
    },[])


    return (
        <div className=" box-title flex flex-col justify-center items-center">
            <h1 className=" scale-0  text-3xl md:text-4xl font-bold">{children}</h1>
            <div className=" skeleton bg-blue-500 w-40 mt-3 h-3 rounded-full"></div>
        </div>
    )
}
