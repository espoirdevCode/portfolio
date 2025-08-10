"use client"

import { useEffect, useState } from "react"


export default function Timer() {


    const [currentDate, setCurrentDate] = useState<Date>()

    const [seconde, setSeconde] = useState<number | undefined>(0)
    const [minute, setMinute] = useState<number | undefined>(0)
    const [heure, setHeure] = useState<number | undefined>(0)
    const [day, setDay] = useState<number | undefined>(0)



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date())
            setSeconde(currentDate?.getSeconds())
            setMinute(currentDate?.getMinutes())
            setHeure(currentDate?.getHours())
            setDay(currentDate?.getDay())
        }, 1000)

        return () => clearInterval(interval);
    })



    return (
        <div className=" flex gap-5 text-white font-bold text-4xl my-5">
            <div className=" flex flex-col gap-3 justify-center items-center">
                <h1>{day}</h1>
                <p className=" text-sm text-zinc-400 font-light">jours</p>
            </div>:
            <div className=" flex flex-col gap-3 justify-center items-center">
                <h1>{heure}</h1>
                <p className=" text-sm text-zinc-400 font-light">heures</p>
            </div>:
            <div className=" flex flex-col gap-3 justify-center items-center">
                <h1>{minute}</h1>
                <p className=" text-sm text-zinc-400 font-light">Minutes</p>
            </div>:
            <div className=" flex flex-col gap-3 justify-center items-center">
                <h1>{seconde}</h1>
                <p className=" text-sm text-zinc-400 font-light">secondes</p>
            </div>
        </div>
    )
}
