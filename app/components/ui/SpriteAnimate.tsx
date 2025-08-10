"use client"

import gsap from 'gsap'
import { Angry, Smile } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function SpriteAnimate() {


    const [etat, setEtat] = useState(false)

    const [mousep, setMousep] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setMousep({
                x: e.clientX,
                y: e.clientY
            })
        }

        document.addEventListener("mousemove", move)
        gsap.to(".circle", {
            left: mousep.x - 50,
            right: mousep.x + 50,
            bottom: mousep.y - 50,
            top: mousep.y + 50,

        })
    }, [mousep])

    return (
        <div onMouseEnter={() => setEtat(!etat)} className={`circle cursor-grab fixed z-[60] rounded-full flex justify-center items-center hover:bg-white hover:animate-ping animate-bounce bg-blue-500/60 size-10 md:size-14`}>
            {!etat ?
                <Smile /> :
                <Angry color='red' />
            }
        </div>
    )
}
