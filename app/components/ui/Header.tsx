"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Logo from "./Logo"


export default function Header() {


    return (
        <Card className=" fixed w-full rounded-none top-0 backdrop-blur-lg gap-0 bg-background/60  left-0 p-0 z-50">
            <div className='navbar  shadow-xl rounded-box p-2 md:px-10'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h8m-8 6h16' />
                            </svg>
                        </div>
                        <ul tabIndex={0} className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-background rounded-box w-52'>
                            <NavListe />
                        </ul>
                    </div>
                    <Link href={"/"}>
                        <Logo />
                    </Link>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu flex gap-2 menu-horizontal px-1'>
                        <NavListe />
                    </ul>
                </div>
                <div className='navbar-end'>
                    <div className=" flex gap-3"> 
                        <a href="tel:+242064716383"  >
                            <Button className="bg-blue-500 text-white hover:bg-blue-500/60 transition-all">Contactez moi</Button>
                        </a>
                    </div>
                </div>
            </div>
            {/* <div className=" scrollBarNav w-10 h-0.5 bg-blue-500"></div> */}
        </Card>
    )
}



function NavListe() {
    return (
        <>
            <NavLink name="Accueil" href="/" />
            <NavLink name="Services" href="/services" />
            <NavLink name="Portfolio" href="/portfolio" />
            <NavLink name="cv" href="/cv" />
            <NavLink name="Blog" href="/blog" />
            <NavLink name="A propos" href="/blog" />
        </>
    )
}


function NavLink({ name = "accueil", href }: { name: string, href: string }) {

    const [etat, setEtat] = useState(false)
    const pathname = usePathname()

    return (
        <li onMouseEnter={() => setEtat(true)} onMouseLeave={() => setEtat(false)}>
            <Link className={pathname === `/${(name.toLocaleLowerCase() !== "accueil" ? name.toLocaleLowerCase() : "")}` ? "text-blue-500 md:text-white" : ""} href={href}>{name}</Link>
            <motion.span initial={{ width: 0 }} animate={{ width: etat || pathname === `/${(name.toLocaleLowerCase() !== "accueil" ? name.toLocaleLowerCase() : "")}` ? "100%" : 0 }} className={"bg-blue-500 hidden md:flex py-1 px-0"}></motion.span>
        </li>
    )
}