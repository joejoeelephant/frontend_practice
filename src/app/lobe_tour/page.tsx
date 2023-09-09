'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Header from './header'
import Footer from './footer'
import YoutubeEmbed from './youtubeEmbed'
import './style.css'

export default function Page() {
    const [videoVisible, setVideoVisible] = useState<boolean>(false)
    return (
        <div className='page-container relative'>
            <Header></Header>
            <main className='pt-20'>
                <section className='py-11'>
                    <div className="container mx-auto">
                        <div className="container-inner text-center flex flex-col justify-center items-center">
                            <div className='max-w-2xl'>
                                <h1 className='font-bold text-4xl mb-2 md:mb-3 md:text-6xl'>
                                    Lom, <span className='color-accent'>ism.</span>
                                </h1>
                                <p className='leading-8 text-xl md:text-2xl'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non reprehenderit ullam beatae praesentium dicta quidem?
                                </p>
                            </div>
                            <div className=' mt-10 py-3 px-8 md:py-10 md:px-32 rounded-2xl bg-slate-200 max-w-5xl hover:shadow-2xl shadow-slate-400 hover:scale-105 transition duration-300  '>
                                <div className='rounded-3xl overflow-hidden'>
                                    <Image src={'/video_thumb.PNG'} alt='video' width={1277} height={715} className='w-full' onClick={() => {setVideoVisible(true)}}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='pb-12 md:py-24'>
                    <div className="container mx-auto">
                        <div className="container-inner text-center flex flex-col justify-center items-center">
                            <div className='max-w-2xl mb-8'>
                                <h2 className='font-bold text-4xl mb-2 md:mb-3 md:text-6xl'>
                                    Lorem ipsum dolor sit amet.
                                </h2>
                            </div>
                            <div className='px-4 py-3 md:px-10 md:py-4 text-white text-xl font-bold h-12 flex justify-center items-center bg-accent rounded-3xl '>
                                Download
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <YoutubeEmbed visible={videoVisible} hide={() => {setVideoVisible(false)}}></YoutubeEmbed>
            <Footer></Footer>
        </div>
    )
}
