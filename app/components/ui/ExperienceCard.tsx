"use client"

import { Card } from "@/components/ui/card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TextPlugin from "gsap/TextPlugin"
import { useEffect, useRef } from "react"

type experiences = {
    title: string
    description?: string
    dateDebut?: string
    dateFin?: string
}


export default function ExperienceCard({ title, description, dateDebut, dateFin }: experiences) {

    const experiences = {
        current: useRef(null),
        date: useRef(null),
        jauge: useRef(null),
        circleJauge: useRef(null),
        title: useRef(null)
    }


    const getDate = () => {
        if (dateDebut && dateFin)
            return dateDebut + "-" + dateFin
        else
            return dateDebut + "-" + dateDebut
    }


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(TextPlugin)

        gsap.to(experiences.date.current, {
            x: 0, opacity: 1, text: getDate(),
            scrollTrigger: {
                trigger: experiences.current.current
            }
        })

        gsap.to(experiences.title.current, {
            opacity: 1, y: 0,
            scrollTrigger: {
                trigger: experiences.title.current
            }
        })

        gsap.to(experiences.jauge.current, {
            height: "100%",
            duration: 3,
            onComplete: () => {
                gsap.to(experiences.circleJauge.current, { background: "oklch(0.623 0.214 259.815)" })
            },
            scrollTrigger: {
                trigger: experiences.jauge.current
            }
        })





    }, [])

    return (
        <Card className=" bg-transparent shadow shadow-blue-500">
            <div ref={experiences.current} className=" p-5 md:px-10 flex items-center justify-center">
                <div className="  md:flex-1/3  flex items-start">
                    <div className="">
                        <h1 className=" text-sl md:text-2xl -translate-x-5 opacity-0" ref={experiences.date}></h1>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                        <div className=" h-80 w-3 md:w-5 translate-y-5 bg-zinc-500 rounded-full">
                            <div ref={experiences.jauge} className=" h-3 w-3 md:w-5 rounded-full bg-blue-500"></div>
                        </div>
                        <div ref={experiences.circleJauge} className=" size-8 md:size-10  bg-zinc-500  rounded-full"></div>
                    </div>
                </div>
                <div ref={experiences.title} className="md:flex-2/3 translate-y-40 opacity-0 text-start ">
                    <h2 className=" text-3xl font-bold">{title}</h2>
                    <p className=" mt-2">
                        {description}
                    </p>
                </div>
            </div>
        </Card>
    )
}
