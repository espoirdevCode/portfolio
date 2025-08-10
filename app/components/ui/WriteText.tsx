"use client"


import { useEffect, useState } from "react";


const WriteText = ({ children, speed = 100 }: { children: string, speed?: number}) => {

    const [text, setText] = useState("")
   
    useEffect(() => {

        const chaine = children
        const tableChar = Array.from(chaine)
        let counter = speed

        const timers: NodeJS.Timeout[] = []

        tableChar.forEach((e) => {
            const inter = setTimeout(() => {
                setText((curr) => curr + e)
            }, counter)
            counter += speed

            timers.push(inter)
        })

        return () =>{
            timers.forEach((timer)=> clearInterval(timer))
        }

    }, [])

    return (

        < >
            {text}
        </>

    )
}

export default WriteText;




