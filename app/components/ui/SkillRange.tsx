"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TextPlugin from "gsap/TextPlugin"
import { useEffect } from "react"


export default function SkillRange({ title, niveau }: { title: string, niveau: number }) {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(TextPlugin)

        gsap.to(".skillRange", {
            width: `100%`,
            duration: 2,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".skillRange",
            }
        })
    }, [])



    return (
        <div >
            <p>{title}</p>
            <div className=" flex gap-5 justify-between">
                <div className=" w-80 md:w-[100%] rounded-full h-5 bg-zinc-900">
                    <div style={{ maxWidth: niveau + "%" }} className={`skillRange h-full w-0 bg-blue-500 rounded-full`}>{niveau}%</div>
                </div>
            </div>
        </div>
    )
}
