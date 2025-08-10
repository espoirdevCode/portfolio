"use client"

import { BotMessageSquare, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import WriteText from '../ui/WriteText'
import gsap from 'gsap'

type selectChoix = {
    nom:string,
    action: () => void
}

export default function Bot({ children, isActive = false, SelectChoice, onCancel, onSubmit }: {
    children: string,
    isActive?: boolean,
    SelectChoice?:selectChoix[]
    onCancel: () => void,
    onSubmit: () => void
}) {

    const [etat, setEtat] = useState(isActive)

    const closeBot = () => {

        const tl = gsap.timeline()

        tl.to(".Bot-content", {
            display: "none",
            opacity: 0,
        }).to(".Bot", {
            width: 80,
            height: 80,
            borderRadius: "100%"
        }).to(".Bot", {
            rotate: 0,
            yPercent: 400,
            // bottom:0
        })


        setEtat(false)
    }
    
    const OpenBot = () => {

        const tl = gsap.timeline()

        tl.to(".Bot", {
            yPercent: 0,
        }).to(".Bot", {
            width: "calc(var(--spacing) * 80) ",
            height: 230,
            borderRadius: "1rem"
        }).
            to(".Bot-content", {
                opacity: 1,
                display: "block",
            })


        setEtat(true)
    }

    useEffect(() => {
        console.log(SelectChoice)
        if (!etat)
            closeBot()
    }, [])

    return (
        <div className={" Bot fixed p-5 max-w-80  py-10 top-30 md:top-40 m-2 right-10 z-10 bg-black/40 backdrop-blur-2xl shadow-2xl shadow-blue-500 " + (!etat ? " flex items-center justify-center " : "")}>
            {
                etat ? <button className=" float-end">
                    <X onClick={closeBot} />
                </button> : 
                    <button className='Bot-head' onClick={OpenBot}>
                        <BotMessageSquare className=" animate-pulse " size={40} />
                </button>
            }
            <div className=' Bot-content'>
                <div className=" text-sm flex gap-2 items-center">
                    <BotMessageSquare className=" animate-out" size={40} />
                    l&lsquo;assistant d&lsquo;orientation
                </div>
                <p className=" text-xs text-start mt-3 text-zinc-300">
                    <WriteText speed={10}>
                        {children}
                    </WriteText>
                </p>
                <div className=" flex gap-2 items-center pt-5 justify-between">
                    <button onClick={() => onCancel() ?? closeBot()} className=" text-sm rounded-full p-2 px-5 w-full bg-blue-500/10 text-white">non, merci</button>
                    <button onClick={() => onSubmit()} className=" text-sm rounded-full p-2 px-5 w-full bg-blue-500 text-white">d&lsquo;accord</button>
                </div>
            </div>
        </div>
    )
}
