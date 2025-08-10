import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

type Blog = {
    title: string,
    subtitle?: string,
    datePublier?: string,
    img?: string,
    author: string,
    categorie: string,
    theme?: string
}



export default function BlogCard({ title, img, subtitle, datePublier, author, categorie, theme }: Blog) {
    return (
        <Card className=" bg-transparent ">
            <div className=" flex flex-col-reverse lg:flex-row p-5 justify-between items-center">
                <div className=" p-3 md:p-10 space-y-4 ">
                    <h1 className=" text-3xl md:text-4xl font-bold">{title}</h1>
                    <p className=" text-zinc-300">
                        {subtitle}
                    </p>
                    <div className=" flex-wrap flex gap-3 items-center">
                        <div className=" bg-slate-700/50 p-2 w-32 text-center text-xs rounded-full">{datePublier}</div>
                        <div className=" bg-slate-700/50 p-2 w-32 text-center text-xs rounded-full">par {author}</div>
                        <div className=" bg-slate-700/50 p-2 w-32 text-center text-xs rounded-full">{categorie}</div>
                    </div>
                    <Button className=" mt-5 bg-blue-500 w-full md:w-fit text-white px-10">Lire la suite</Button>
                </div>
                <div className="relative size-full">
                    {theme && <div className=" m-5 right-0 absolute bg-emerald-500/50 p-2 w-32 text-center text-xs rounded-full">{theme}</div>}
                    {img && <Image src={img} alt="img-1.jpg" width={500} height={500} className=" h-80 w-full object-cover rounded-2xl " ></Image>}
                </div>
            </div>
        </Card>
    )
}
