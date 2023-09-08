'use client'
import React, {useEffect, useRef, useState} from 'react'
import './style.css'
import Header from './header'
import Footer from './footer'

import { useGSAPPlugins } from './useGSAPPlugins'
import { useScrollTriggers } from './useScrollTriggers'
export default function Page() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [scrollDom, setScrollDom] = useState<HTMLDivElement|null>(null)
    const colors = ["aqua", "purple", "orange"]
    useEffect(() => {
        if(scrollRef.current) setScrollDom(scrollRef.current)
    }, [])
    useGSAPPlugins()
    useScrollTriggers(scrollRef, colors)

    const renderSeection = (id: string, imageUrl: string) => {
        return (
            <section id={id}>
                <div className='w-full h-full flex gap-4 flex-col justify-center items-center '>
                    <div className='w-4/5 h-1/2 bg-cover bg-center md:w-[420px] md:h-[532px]' style={{backgroundImage: `url('${imageUrl}')`}}></div>
                    <p className='text-xl'>
                        Lorem, ipsum.
                    </p>
                    <div className='text-sm'>
                        <p>
                            <a href="#">
                                <span className='text-white font-bold'>lorem1 </span>
                                Lorem, ipsum.
                            </a>
                        </p>
                        <p>
                            <a href="#">
                                <span className='text-white font-bold'>lorem1 </span>
                                Lorem, ipsum.
                            </a>
                        </p>
                    </div>
                    <p className='text-sm'>
                        <a href="#">
                            Lorem, ipsum. 
                            <span className='text-white font-bold'> lorem1</span>
                        </a>
                    </p>
                </div>
            </section>
        )
    }
    return (
        <div className='page-container w-full h-screen overflow-hidden relative'>
            <Header></Header>
            <div className="scroll-container font-bold" ref={scrollRef}>
                {renderSeection('s1', '/bird.jpg')}
                {renderSeection('s2', '/yellow.jpg')}
                {renderSeection('s3', '/planet.png')}
            </div>
            <Footer scrollContainer={scrollDom as HTMLDivElement}></Footer>
        </div>
    )
}
