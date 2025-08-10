"use client"

import { plans } from "@/app/data/plants";
import ListeCardService from "../list/ListeCardService";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SectionServices() {


    const titleRef = useRef(null)
   
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(titleRef.current, { opacity: 0, y: 100 }, {
            opacity: 1, y: 0,

            scrollTrigger: {
                trigger: titleRef.current
            }
        })
        gsap.fromTo(".planBox", { opacity: 0, y: 100, x:100 }, {
            opacity: 1, y: 0, x:0, stagger:0.3,
            scrollTrigger: {
                trigger: ".planBox"
            },
            onComplete:()=>{
                gsap.fromTo(".features", {x:-100, opacity:0},{x:0, opacity:1, stagger:0.1})
                gsap.fromTo(".button-service-ref", {scaleX:-1, opacity:0},{scale:1, opacity:1})
            }
        })
    }, [])

    return (
        <>
            <ListeCardService />
            <div className=" lg:p-20 pb-5 px-3">
                <section>
                    <div className='py-14'>
                        <div className='max-w-screen-xl mx-auto px-4 text-base-content md:px-8'>
                            <div ref={titleRef} className='relative max-w-xl mx-auto sm:text-center'>
                                <h3 className='text-base-content text-3xl font-bold sm:text-4xl'>
                                    un plan adapter à votre projet
                                </h3>
                                <div className='mt-3 max-w-xl'>
                                    <p>
                                        quel que soit votre taille et votre besoin nous avons conçu des plans qui pourrons etre adapter à votre type et style
                                    </p>
                                </div>
                            </div>
                            <div  className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>

                                {
                                    plans.map((el, index) => (
                                        <div key={index} className='planBox relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
                                            <div>
                                                <span className='text-primary font-medium'>{el.name}</span>
                                                <div className='mt-4 text-base-content text-3xl font-semibold'>
                                                    <span>{el.price} FCFA</span>
                                                    <span className='text-xl text-base-content font-normal'>/mo</span>
                                                </div>
                                            </div>
                                            <ul className='py-8 space-y-3'>

                                                {
                                                    el.features.map((feature, index) => (
                                                        <li key={index} className=' features opacity-0 flex items-center gap-5'>
                                                            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-primary' viewBox='0 0 20 20' fill='currentColor'>
                                                                <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                                            </svg>
                                                            <span>{feature}</span>
                                                        </li>

                                                    ))
                                                }

                                            </ul>
                                            <div  className='flex-1 flex items-end'>
                                                <button className='button-service-ref opacity-0 w-full rounded-full  btn btn-primary duration-150 text-sm'>Commencer</button>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

