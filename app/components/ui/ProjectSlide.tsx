"use client"

import Image from 'next/image'
import React, { useEffect } from 'react'
import { gsap } from "gsap"

export default function ProjectSlide() {

    useEffect(() => {

       // const tl = gsap.timeline()
        // gsap.from(".projetslide", { xPercent: 0, rotate:0,  stagger: 0.03,  })
        gsap.fromTo(".projetslide", { xPercent: -1000, rotate:0,  stagger: 0.03},{xPercent:1000, rotate:30, stagger:0.03}).repeat(-1)


    }, [])

    return (
        <div className=' absolute top-0 left-0 p-2 flex w-full'>
            <div className='projetslide border-0 rounded-3xl shadow-2xl w-80 h-60 bg-transparent'>
                <Image alt='card-proet' src={"/taf/film-7.png"} width={500} height={500} className='   size-full  object-cover'></Image>
            </div>   
            <div className='projetslide border-0 rounded-3xl shadow-2xl w-80 h-60 bg-transparent'>
                <Image alt='card-proet' src={"/taf/film-7.png"} width={500} height={500} className='   size-full  object-cover'></Image>
            </div>
            <div className='projetslide border-0 rounded-3xl shadow-2xl w-80 h-60 bg-transparent'>
                <Image alt='card-proet' src={"/taf/film-7.png"} width={500} height={500} className='   size-full  object-cover'></Image>
            </div>
            <div className='projetslide border-0 rounded-3xl shadow-2xl w-80 h-60 bg-transparent'>
                <Image alt='card-proet' src={"/taf/film-7.png"} width={500} height={500} className='   size-full  object-cover'></Image>
            </div>
         
        </div>
    )
}
