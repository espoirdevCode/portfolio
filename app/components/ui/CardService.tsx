import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

export function CardService({ icon, title, subtitle }: { icon: ReactNode, title: string, subtitle?: string }) {
    return (
        <Card className=" rounded bg-transparent text-center text-foreground w-full">
            <CardHeader>
                <CardTitle className=" p-2 flex flex-col justify-center items-center">
                    {icon}
                    <h1 className=" font-bold text-sm">
                        {title}
                  </h1>
                </CardTitle>
                <CardContent>
                    <p className=" text-xs">
                        {subtitle}
                    </p>
                </CardContent>
            </CardHeader>
        </Card>
    )
}