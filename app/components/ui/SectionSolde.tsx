import { Card } from "@/components/ui/card"
import Image from "next/image"
import Timer from "./Timer"
import DescriptionPromo from "./descriptionPromo"

export function SectionSolde() {

    return (
        <Card className=" bg-transparent ">
            <div className=" w-full overflow-x-hidden relative p-5 md:p-20" >
                <div className=" pt-10 grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-5">
                    <DescriptionPromo />
                    <div className=" relative ">
                        <Image src={"/img/product-sale.png"} alt="" className=" hover:scale-110 transition-all " width={500} height={500} />
                        <div className="animate-bounce absolute top-0 right-0 bg-blue-500 rounded-full size-32 flex justify-center items-center text-center">Solde de 250.000FCFA</div>
                    </div>
                    <div className="">
                        <p className=" text-white my-3">Une occasion à ne pas manqué</p>
                        <h1 className=" text-white font-bold text-3xl md:text-4xl">Le pack startup pro est en promotion </h1>
                        <Timer />
                        <button className=" rounded-full p-3 bg-blue-500 my-5">Acheter maintenant</button>
                    </div>
                </div>
            </div>
        </Card>
    )
}