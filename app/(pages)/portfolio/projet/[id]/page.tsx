import Header from "@/app/components/ui/Header"
import { projets } from "@/app/data/projets"
import Image from "next/image"

export default async function Projet({ params }: { params: Promise<{ id: string }> }) {

    const id = Number((await params).id)

    // const firstImage = projets[id].poster
    return (
        <div className="py-20">
            <Header />
            <div className=" flex h-full w-full bg-transparent pt-20 lg:pt-0 text-foreground">
                <div className=" flex gap-10 h-full flex-col-reverse md:flex-row items-center  w-full px-10 md:px-5 justify-around">
                    <div className='max-w-md '>
                        <h1 className='text-4xl mb-5  font-extrabold mx-auto md:text-5xl'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-900'>{projets[id].title}</span>
                        </h1>
                        <p className='mb-5'>
                            {projets[id].subtitle || "pas de description sur ce proet pour l'instant"}
                        </p>
                        {/* <Button className=" bg-blue-500 text-white">Contacter nous maintenant</Button> */}
                    </div>


                    <div className="flex justify-center px-4 py-16 border-t bg-no-repeat bg-cover h-full" >
                        {
                            projets[id].isVideo ? 
                            <video src={projets[id].imgMockup} className=" object-cover w-full h-80" autoPlay loop></video>:
                            <Image src={projets[id].imgMockup} alt="" className=" object-cover w-full h-80" width={500} height={500}/>
                            
                      }
                        {/* <div className=" flex flex-col w-full gap-5">
                                <div className=" flex gap-5 items-center w-full">
                                    <div className="skeleton w-52 h-32"></div>
                                    <div className=" w-full flex flex-col items-center gap-5">
                                        <div className="skeleton w-full h-10"></div>
                                        <div className="skeleton w-full h-10"></div>
                                    </div>
                                </div>
                                <div className="skeleton w-80 h-80"></div>
                            </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
