"use client"

import SkillListe from "../list/SkillListe"
import ProjetListe from "../list/ProjetListe"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ExperiencesListe from "../list/ExperiencesListe"

enum Tabs {
  competences,
  projets,
  experiences
}

export default function SectionPortfolio() {

  const [tabs, setTabs] = useState(Tabs.competences)

  const starterRef = useRef(null)
  const competenceRef = useRef(null)
  const projetRef = useRef(null)
  const experienceRef = useRef(null)

  const currStyle = "bg-blue-500"
  const defaultStyle = "border border-blue-500"



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(competenceRef.current, { x: -100 }, {
      x: 0,
      scrollTrigger: {
        trigger: competenceRef.current,
      }
    })
    gsap.fromTo(projetRef.current, { y: 100 }, {
      y: 0,
      scrollTrigger: {
        trigger: projetRef.current,
      }
    })
    gsap.fromTo(experienceRef.current, { x: 100 }, {
      x: 0,
      scrollTrigger: {
        trigger: experienceRef.current,
      }
    })

  }, [])

  return (
    <div className=" flex justify-center items-center mt-5 w-full h-full ">

      <div className=" flex flex-col justify-center items-center w-full">
        <div ref={starterRef} className=" flex text-xs md:text-lg gap-2 md:gap-5">
          <button ref={competenceRef} onClick={() => setTabs(Tabs.competences)} className={" p-3  rounded-full px-5 " + (tabs === Tabs.competences ? currStyle : defaultStyle)}>
            Compétences
          </button>
          <button ref={projetRef} onClick={() => setTabs(Tabs.projets)} className={" p-3 rounded-full px-5 " + (tabs === Tabs.projets ? currStyle : defaultStyle)}>
            Projets
          </button>
          <button ref={experienceRef} onClick={() => setTabs(Tabs.experiences)} className={" p-3  rounded-full px-5 " + (tabs === Tabs.experiences ? currStyle : defaultStyle)}>
            Expèrience
          </button>
        </div>
        <div className="w-full flex justify-center items-center">
          {tabs === Tabs.competences && <SkillListe />}
          {tabs === Tabs.projets && <ProjetListe />}
          {tabs === Tabs.experiences && <ExperiencesListe />}
        </div>
      </div>

    </div>
  )
}
