"use client"


import Image from "next/image"
import { useEffect, useRef } from "react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import { skills } from "@/app/data/skills";
import SkillCard from "../ui/SkillCard";
import SkillRange from "../ui/SkillRange";

export default function SkillListe() {

    const skillRef = useRef(null)
    const title = useRef(null)
    const title2 = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.registerPlugin(TextPlugin)


        gsap.fromTo(title.current, { y: 100, x: -100, opacity: 0 }, {
            y: 0, opacity: 1, x: 0,
            stagger: 0.1,
            duration: 0.5,
            scrollTrigger: {
                trigger: title.current,

            }
        })

        gsap.fromTo(".skillRef", { x: -300, rotate: -30, scale: 1.5, opacity: 0 }, {
            x: 0, rotate: 12, scale: 1, opacity: 1, yoyo: true,
            stagger: 0.3,
            scrollTrigger: {
                trigger: skillRef.current,
            },
            onComplete: () => {
                gsap.to(".skillRef", {
                    left: 0,
                    x: 100,
                    rotate: -12,
                    stagger: 0.3
                })
                const chaine = "Ainsi donc j'ai approfondie ma connaissance de la syntaxe en explorant tous ce panel de technologies completement différentes"
              
                gsap.to(title.current, { opacity: 0, display: "none" })

                gsap.to(title2.current, {
                    opacity: 1,
                    textAlign: "start",
                    duration: 8,
                    text: chaine,
                })
                gsap.fromTo(".flexChange", { opacity: 0 }, {
                    opacity: 1,
                    justifyContent: "space-between",
                })
            }
        })
        gsap.fromTo(".skillRangeBox", { opacity: 0, y: 100 }, {
            opacity: 1, y: 0, stagger: 0.3,
            scrollTrigger: {
                trigger: ".skillRange",
            }
        })
    }, [])

    return (
        <div className=" p-5 md:p-0  lg:w-full">
            <div className=" flexChange w-full md:p-10 gap-10 md:gap-10 items-center justify-between md:my-20 md:mx-5 flex flex-col">
                <h1 ref={title} className="  text-2xl md:text-4xl font-bold text-center mb-10 float-start  w-80 md:w-full">
                    Tout au long de mon parcours j&lsquo;ai eu à utiliser de nombreuses technologies que j&lsquo;ai plus ou moins maitrisé
                </h1>
                <div className="  w-full flex flex-col md:flex-row">
                    <div className=" relative  my-10 w-full flex h-80 md:my-0 top-0">
                        {
                            skills.map((el, index) => {
                                // changeTile(el.title)
                                return (
                                    index < 19 && <div style={{ left: `${(index * 50)}px` }} ref={skillRef} key={index} className={" skillRef absolute bg-transparent rounded-2xl w-52 h-60 md:w-64 md:h-80  shadow-2xl rotate-12 shadow-blue-500   "}>
                                        <Image src={el.imgSkill} className=" object-cover size-full rounded-2xl" width={500} height={500} alt=""></Image>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h1 ref={title2} className=" opacity-0 text-2xl md:text-4xl font-bold text-start mb-10 float-start   md:w-full">
                    </h1>
                </div>
            </div>
            <div className="p-5 skillRangeBox">
                <h1 className="  text-2xl md:text-3xl py-5">Tableau de compétences</h1>
                <div className="  md:m-10 grid gap-10 md:grid-cols-3 justify-between items-center">
                    <SkillRange title="Développement frontend" niveau={75} />
                    <SkillRange title="Développement backend" niveau={65} />
                    <SkillRange title="Concepion d'API" niveau={60} />
                    <SkillRange title="Base de donnée" niveau={50} />
                    <SkillRange title="Architecture logiciel" niveau={80} />
                    <SkillRange title="Conception UI/UX" niveau={70} />
                </div>
            </div>
            {/* <h1 className=" flex flex-col-reverse md:flex-row my-10 justify-around font-black md:text-4xl items-center"><label htmlFor="prev" className="bg-blue-500 rounded-full p-2 px-10 "> <Code2 /> </label>Liste complète des technologies utilisées<label className="bg-blue-500 rounded-full p-2 px-10 " htmlFor="next"><Code2 /></label></h1> */}
            <div className=" w-full p-5 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {
                    skills.map((el, index) => (
                        <SkillCard key={index} level={el.level} imgSkill={el.imgSkill} title={el.title} subtitle={el.subtitle} />
                    ))
                }
            </div>
        </div>
    )
}

