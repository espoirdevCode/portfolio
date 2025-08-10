"use client"

import { useEffect } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function SkillCard({ imgSkill, title, subtitle, level }: { imgSkill: string, title: string, subtitle?: string, level: number }) {


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
      
        gsap.fromTo(".skillCard", {opacity:0, y:10}, {
            opacity:1, y:0,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".skillCard",
            }
        })
    }, [])

    return (
        <Card className=" hover:shadow-2xl h-[430px] skillCard  shadow-blue-500 w-72 bg-transparent flex flex-col justify-between">
            <CardHeader>
                <CardTitle className="  flex flex-col w-full justify-center items-center">
                    <Image src={imgSkill} alt="image" width="500" height={"500"} className=" border-10 border-y-transparent border-blue-500 size-60 rounded-full object-cover" />
                    <h3 className=" mt-2">{title}</h3>
                </CardTitle>
                <CardDescription className=" text-xs">{subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Taux de maitrise</p>
                <Progress value={level} />
            </CardContent>
        </Card>
    )
}