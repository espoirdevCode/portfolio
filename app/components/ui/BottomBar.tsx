import { Card } from "@/components/ui/card";
import { Cog, Home, User2 } from "lucide-react";
import Link from "next/link";
 
export default function BottomBar() {
    return (
        <Card className=" md:hidden bg-background fixed rounded-none bottom-0  left-0 w-full p-3" >
            <div className=" flex justify-around items-center">
                <Link href={"/portfolio"} className=" flex flex-col items-center">
                    <User2/>
                    <p className=" text-xs">Profile</p>
                </Link>
                <Link href={"/"} className=" flex flex-col items-center">
                    <Home/>
                    <p className=" text-xs">Home</p>
                </Link>
                <div className=" flex flex-col items-center">
                    <Cog/>
                    <p className=" text-xs">Options</p>
                </div>
            </div>
        </Card>
    )
}
