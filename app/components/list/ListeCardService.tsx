"use client"

import { Laptop2, Paintbrush, Smartphone, Users } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap"
import { CardService } from "../ui/CardService";

export default function ListeCardService() {


    useEffect(() => {
        gsap.fromTo(".box", { yPercent: 200 }, { yPercent: 0, stagger: 0.1 })
    },)


    const services = [
        {
            // 1
            title: "développement web",
            icon: <Laptop2 size={40} />
        },
        {
            // 1
            title: "développement mobile",
            icon: <Smartphone size={40} />
        },
        {
            // 1
            title: "design graphique",
            icon: <Paintbrush size={40} />
        },
        {
            // 1
            title: "marketing digital",
            icon: <Users size={40} />
        },
    ]

    return (
        <div className=" bg-background grid md:mt-14 grid-cols-2 p-5 lg:p-2 md:grid-cols-4 gap-5 lg:gap-5  lg:px-20">
            {
                services.map((el, index) => (
                    <div key={index} className="box">
                        <CardService title={el.title} icon={el.icon} />
                    </div>
                ))
            }
        
        </div>
    )
}
