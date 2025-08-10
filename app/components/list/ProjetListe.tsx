import React from 'react'
import ProjetCard from '../ui/ProjetCard'
import { Card } from '@/components/ui/card'
import { projets } from '@/app/data/projets'
import ProjetLast from '../ui/ProjetLast'



export default function ProjetListe() {




    return (
        <div className=" py-5 p-4 md:p-5 lg:p-10">

            <div className=' md:py-10'>
                <ProjetLast src="/projet/jeux3D.mkv" />
            </div>

            <div className=' mt-5 md:mt-20  flex flex-col gap-20'>
                {
                    projets.map((el, index) => (
                        <ProjetCard id={index} key={index} stacks={el?.stacks} linkName={el.linkName} imgMockup={el.imgMockup} title={el.title} isVideo={el.isVideo}  >
                            {el.subtitle || "pas de description pour ce proet"}
                        </ProjetCard>
                    ))
                }

                <Card>
                    <p className=' text-xs text-zinc-200'>
                        Pour l&lsquo;instant cette platforme est en pleine construction et certains des projets n&lsquo;y sont pas encore
                    </p>
                </Card>
            </div>
        </div>
    )
}
