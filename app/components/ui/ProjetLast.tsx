"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"



export default function ProjetLast({src}:{src:string}) {

    const boxRef = useRef(null)

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)

        gsap.fromTo(boxRef.current, {scale:0}, {
            scale:1,
            scrollTrigger:{
                trigger:boxRef.current,

            }
        })
    },[])

    return (
        <div ref={boxRef} className=' transition-all  relative h-96 w-full rounded flex justify-center items-center'>
            <video src={src} className='size-full rounded object-cover' autoPlay loop muted></video>
            <div className=' absolute top-0 left-0 size-full bg-gradient-to-br rounded from-black/60 via-black/60 to-blue-500/90 flex justify-center items-center'>
                <div className=' relative size-full flex justify-center items-center'>
                    <div className=' absolute top-0 left-0 p-2 px-5 text-xs md:text-sm bg-yellow-500 rounded-full m-3'>mon dernier projet</div>
                    <div>
                        <h1 className='text-transparent text-3xl md:text-4xl font-extrabold bg-clip-text bg-gradient-to-r from-blue-200 via-blue-200 to-blue-900'>Creation d&lsquo;un jeux vidéo en 3D</h1>
                        <p className=' text-xs md:text-lg md:mx-10'>j&lsquo;ai crée un jeux vidéo en 3D en utilisant godot engine avec le GdScript (python) ce jeux m&lsquo;a permit d&lsquo;approfondire mes connaissances en développement de jeux en 3D</p>
                        <button className=' text-xs md:text-sm p-3 px-5 bg-blue-500 mt-5 rounded-full'>Explorer le projet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
