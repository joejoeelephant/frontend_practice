'use client'
import React, {useRef} from 'react'
import Image from 'next/image'
import { useScrollTrigger } from './useScrollTrigger'
export default function Profile() {
    const headingRef = useRef<HTMLHeadingElement>(null)
    const section1Ref = useRef<HTMLDivElement>(null)
    const section2Ref = useRef<HTMLDivElement>(null)
    const section3Ref = useRef<HTMLDivElement>(null)
    const section4Ref = useRef<HTMLDivElement>(null)
    useScrollTrigger(headingRef)
    useScrollTrigger(section1Ref, 0.5)
    useScrollTrigger(section2Ref, 0.5)
    useScrollTrigger(section3Ref, 0.5)
    useScrollTrigger(section4Ref, 0.5)
    return (
        <>
            <div className='p-5 md:p-10 maxWidth mx-auto h-[50vh] md:h-[70vh] flex justify-center items-center'>
                <h1 className='text-4xl md:text-7xl font-semibold colorPrimary text-center' ref={headingRef}>
                    Lorem, ipsum.
                </h1>
            </div>
            <div className='p-5 md:p-10 maxWidth mx-auto grid grid-cols-1 md:grid-cols-2 gap-5' ref={section1Ref}>
                <div className='rounded-xl overflow-hidden'>
                    <Image src={'/c2.png'} width={573} height={573} alt='about' className='w-full aspect-video'></Image>
                </div>
                <div className='rounded-xl overflow-hidden hidden md:block'>
                    <Image src={'/c1.png'} width={573} height={573} alt='about' className='w-full aspect-video'></Image>
                </div>
            </div>
            <div className='p-5 md:py-32 md:px-10 maxWidth mx-auto flex flex-col items-center justify-center gap-5' ref={section2Ref}>
                <div className='px-3 py-2 bgSecondary text-sm rounded-2xl'>
                    lorem
                </div>
                <h3 className='text-2xl font-medium colorPrimary text-center max-w-2xl md:text-4xl md:font-semibold'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, maxime?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
            </div>
            <div className='p-5 md:p-10 maxWidth mx-auto' ref={section3Ref}>
                <div className='flex flex-col justify-center items-center gap-5 p-5'>
                    <div className='px-3 py-2 bgSecondary text-sm rounded-2xl'>
                        lorem
                    </div>
                    <h3 className='text-2xl font-medium colorPrimary text-center max-w-2xl md:text-4xl md:font-semibold'>
                        Lorem ipsum dolor.
                    </h3>
                </div>
                <div className='p-5 pt-16 md:p-10 grid grid-cols-2 md:grid-cols-3 gap-10'>
                    {
                        Array.from({length: 11}).map((item, index) => {
                            return (
                                <div className='flex flex-col justify-center items-center gap-4 text-center' key={index}>
                                    <p className='text-sm colorSecondary'>
                                        Lorem-ipsum.
                                    </p>
                                    <p className='text-2xl md:font-semibold'>
                                        Lorem, ip.
                                    </p>
                                    <p className='text-sm colorSecondary'>
                                        Lorem, ipsum.
                                    </p>
                                    <div className="flex justify-center">
                                        <span className='px-3 py-2 bgSecondary text-xs rounded-2xl'>
                                            lorem
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }    
                </div>
            </div>
            <div className='p-5 md:p-10 maxWidth mx-auto' ref={section4Ref}>
                <div className='flex flex-col justify-center items-center gap-5 p-5'>
                    <div className='px-3 py-2 bgSecondary text-sm rounded-2xl'>
                        lorem
                    </div>
                    <h3 className='text-2xl font-medium colorPrimary text-center max-w-2xl md:text-4xl md:font-semibold'>
                        Lorem ipsum dolor.
                    </h3>
                </div>
                <div className='p-5 pt-16 md:p-10 grid grid-cols-2 md:grid-cols-3 gap-10'>
                    {
                        Array.from({length: 11}).map((item, index) => {
                            return (
                                <div className='flex flex-col justify-center items-center gap-4 text-center h-32' key={index}>
                                <Image src={index % 2 === 0 ? '/next.svg' : '/vercel.svg'} width={394} height={80} alt='logo' className='w-4/5 md:w-1/3'></Image>
                                </div>
                            )
                        })
                    }    
                </div>
            </div>
        </>
    )
}
