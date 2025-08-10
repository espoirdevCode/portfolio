"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function DescriptionPromo() {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(".description-promo-pack", { y: 100, opacity: 0, rotate: 12, x: 100 }, {
            x: 0, y: 0, opacity: 1, rotate: 0, stagger: 0.3,
            scrollTrigger: {
                trigger: ".description-promo-pack-box"
            }
        })
    }, [])

    return (
        <div className=".description-promo-pack-box text-4xl text-zinc-400 font-bold  flex flex-col gap-5 ">
            <h1 className="description-promo-pack">le plus haut pack</h1>
            <h1 className="description-promo-pack text-white">en promotion</h1>
            <h1 className="description-promo-pack">pour vous</h1>
        </div>
    )
}
