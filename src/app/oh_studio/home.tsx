'use client'
import React, {useRef} from 'react'
import Image from 'next/image'
import { useScrollTrigger } from './useScrollTrigger'
export default function Home() {
    const headingRef = useRef<HTMLHeadingElement>(null)
    const projectsRef = useRef<HTMLDivElement>(null)
    useScrollTrigger(headingRef)
    useScrollTrigger(projectsRef)
    return (
       <>
            <div>
                <div className="container mx-auto">
                    <section className='h-[50vh] md:h-[70vh] flex flex-col justify-center items-center p-5 md:p-8 gap-10'>
                        <h1 className='text-4xl md:text-7xl max-w-2xl font-medium text-center colorPrimary' ref={headingRef}>
                            Lorem ipsum dolor sit amet consectetur  elit.
                        </h1>
                        <div className='hidden md:flex justify-center gap-10'>
                            {
                                Array.from({length: 4}).map((item, index) => {
                                    return (
                                        <div key={index} className='rounded-2xl bgSecondary colorPrimary px-3 py-2 text-sm'>
                                            Loremrem.
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                </div>
            </div>
            <div>
                <div className="container mx-auto">
                    <section className='p-5 pb-0 grid grid-cols-1 md:grid-cols-2 gap-5 maxWidth mx-auto' ref={projectsRef}>
                        {
                            Array.from({length: 10}).map(((item, index) => {
                                return (
                                    <div key={index} className='md:pt-5 card-item'>
                                        <a href="#">
                                            <div className='rounded-xl overflow-hidden relative'>
                                                <Image src={index % 2 == 0 ? "/c1.png" : '/c2.png'} width={573} height={573} alt='card' className='w-full aspect-square'></Image>
                                                <div className='absolute inset-0 backdrop-blur-md opacity-0 transition duration-300 card-mask'>
                                                    <div className='p-5 flex justify-between'>
                                                        <span className='text-white'>Corem</span>
                                                        <div className='w-12 h-12 flex justify-center items-center -translate-x-3 translate-y-3 rounded-full bgPrimary transition duration-300 card-item-icon'>
                                                            <Image src={'/upper-right-arrow.svg'} alt='arrow' width={64} height={64} className='w-4'></Image>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className='text-sm mt-3 md:hidden'>
                                                lorem
                                            </p>
                                        </a>
                                    </div>
                                )
                            }))
                        }
                    </section>
                </div>
            </div>
       </>
    )
}
