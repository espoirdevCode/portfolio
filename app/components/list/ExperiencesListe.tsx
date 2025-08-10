import { experiences } from "@/app/data/experiences"
import ExperienceCard from "../ui/ExperienceCard"

export default function ExperiencesListe() {


  return (
    <div className=" mt-20 w-full">
      <div className=" p-5 md:p-10">
        <h1 className=" text-2xl md:text-5xl text-start font-bold">Parcours et experiences</h1>
        <div className=" grid mt-10 gap-10">
          {
            experiences.map((el, index) => (
              <ExperienceCard key={index} title={el.title} description={el.description} dateDebut={el.dateDebut} dateFin={el.dateFin} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
