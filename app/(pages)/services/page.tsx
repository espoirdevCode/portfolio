
"use client"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Service() {


    // Mes useRef
    const boxContent = useRef(null)
    const boxSlider = useRef(null)

    // Mes useStates
    const [MenuOpen, setMenuOpen] = useState(false)

    // Mes useEffets
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(TextPlugin)
    })


    const onToggleMenu = () => {

        setMenuOpen(!MenuOpen)

        if (!MenuOpen) {
            gsap.to(boxContent.current, { y: -1000, opacity: 0 })
            gsap.to(boxSlider.current, { y: -1000, opacity: 0 })
        }
        else {
            gsap.to(boxContent.current, { y: 0, opacity: 1 })
            gsap.to(boxSlider.current, { y: 0, opacity: 1 })
        }
    }

    return (
        <>
            <div className=" h-screen  bg-white">
                <section className=" md:flex size-full gap-5">
                    <div className="w-full h-full flex justify-between items-center bg-blue-600">
                        <div className="p-5 space-y-20">
                            <div className=" transition-all">
                                <button className=" ms-2" onClick={onToggleMenu}>
                                    {MenuOpen ? <X size={50} /> : <Menu size={50} />}
                                </button>
                                <h1 className=" text-2xl">  <sub className=" text-3xl">.</sub> The Leader  <sup className=" text-3xl">.</sup> </h1>
                            </div>
                            <div ref={boxContent}>
                                <h1 className=" mt-10 text-6xl font-bold">Découvrez nos services</h1>
                                <p className=" text-zinc-300 mt-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat minus laboriosam consequatur architecto! Cum, eaque asperiores laudantium dolorem incidunt cumque dolores libero praesentium dicta hic magnam explicabo. Ab, incidunt.
                                </p>

                            </div>
                            <div ref={boxSlider} className=" flex justify-center items-center gap-3">
                                <div className=" rounded-full size-3 bg-white"></div>
                                <div className=" rounded-full size-3 bg-white/40"></div>
                                <div className=" rounded-full size-3 bg-white/40"></div>
                            </div>
                           
                        </div>
                    </div>
                    <div style={{ backgroundImage: "url(/img/labo.png)" }} className=" bg-cover bg-center w-full h-full flex justify-center items-center ">

                    </div>
                </section>
            </div>
        </>
    )
}
