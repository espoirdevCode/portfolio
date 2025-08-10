"use client"

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { skills } from '@/app/data/skills'
import 'swiper/css';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'


type Props = {
    id?:number,
    title: string,
    children?: string,
    imgMockup?: string,
    isVideo?: boolean,
    linkName?: string,
    stacks?: number[]
}

export default function ProjetCard({id, title, children, imgMockup, isVideo = false, linkName, stacks }: Props) {

    const leftRef = useRef(null)
    const rightRef = useRef(null)

    useEffect(()=>{


        gsap.registerPlugin(ScrollTrigger)


        gsap.fromTo(leftRef.current, { x:100, y:-100, opacity:0, rotate:-20,}, {
            x:0, y:0, rotate:0, opacity:1, stagger:0.3,
            scrollTrigger:{
                trigger:leftRef.current
            }
        })
        gsap.fromTo(rightRef.current, { y:100, x:-100, opacity:0, rotate:20,}, {
            y:0, x:0, rotate:0, opacity:1, stagger:0.3,
            scrollTrigger:{
                trigger:rightRef.current
            }
        })

    },[])

    return (
        <Card className='p-5 bg-background w-full'>
            <div className=" flex gap-10 h-full flex-col-reverse md:flex-row md:items-center   w-full px-2 md:px-0 justify-between">
                <div ref={leftRef} className='max-w-md text-start '>
                    <h1 className='text-3xl md:text-4xl mb-5  font-extrabold mx-auto '>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-foreground via-blue-200 to-blue-900'> {title}</span>
                    </h1>
                    <p className='mb-5'>
                        {children}
                    </p>
                    {/* <h3 className=' bg-zinc-900/90 w-60 my-3 p-2 px-5 rounded-full text-sm'>Technologies utilisées</h3> */}
                    {stacks && <div className='  mb-10 flex flex-wrap gap-3'>
                        {
                            stacks?.map((el: number, index) => (
                                <Image key={index} src={skills[el].imgSkill} alt='' width={500} height={500} className=' object-cover rounded-full size-10' ></Image>
                            ))
                        }

                    </div>}
                    <Link href={`/portfolio/projet/${id}`} className=" p-2 px-5 rounded-full hover:scale-105 transition-all hover:bg-blue-500/40 active:scale-95 bg-blue-500 text-white">Explorer le projet</Link>
                </div>

                <div ref={rightRef}  className="mockup-browser bg-background md:max-w-6/12  border h-80 ">
                    <div className="mockup-browser-toolbar bg-background">
                        <div className="input border text-white  ">https://{linkName}</div>
                    </div>
                    <div className="flex justify-center w-full p-0 border-t bg-no-repeat bg-cover h-full" >
                        {!imgMockup
                            ?
                            <div className=" flex flex-col w-full gap-5">
                                <div className=" flex gap-5 items-center w-full">
                                    <div className="skeleton w-52 h-32"></div>
                                    <div className=" w-full flex flex-col items-center gap-5">
                                        <div className="skeleton w-full h-10"></div>
                                        <div className="skeleton w-full h-10"></div>
                                    </div>
                                </div>
                                <div className="skeleton w-80 h-80"></div>
                            </div>
                            : (isVideo) ? <div className=' w-full h-full'><video src={imgMockup} className='  w-full h-full object-center md:object-cover' muted autoPlay loop></video></div>
                                : <Image src={imgMockup} alt={"image"} width={500} height={500} className=' w-full h-full object-cover' />
                        }
                    </div>
                </div>
            </div>
            {/* <div className='w-full max-w-5xl mx-auto'>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={3}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <Image
                            src="/taf/film-7.png"
                            className=" rounded-2xl shadow-2xl shadow-blue-500 h-80 w-96 object-cover"
                            width={500}
                            height={500}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/taf/film-1.png"
                            className=" rounded-2xl shadow-2xl shadow-blue-500 h-80 w-96 object-cover"
                            width={500}
                            height={500}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/taf/film-4.png"
                            className=" rounded-2xl shadow-2xl shadow-blue-500 h-80 w-96 object-cover"
                            width={500}
                            height={500}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/taf/film-4.png"
                            className=" rounded-2xl shadow-2xl shadow-blue-500 h-80 w-96 object-cover"
                            width={500}
                            height={500}
                            alt=""
                        />
                    </SwiperSlide>
                </Swiper>
            </div> */}

        </Card>
    )
}
