import React from 'react'
import Image from 'next/image'
import Header from './header'
import Footer from './footer'
import './style.css'
export default function Page() {
  return (
    <div className='about-page bg-slate-100'>
        <Header></Header>
        <div className='container mx-auto bg-white'>
          <div className=' divide-wrap'>
              <div className='col-start-2 col-end-4 h-[720px] bg-center bg-cover flex justify-center items-center' style={{backgroundImage: "url('/card2.jpeg')"}}>
                <span className='text-6xl font-bold color4 drop-shadow-md' style={{textShadow: "4px 4px 8px #fff"}}>
                  Lorem.
                </span>
              </div>
          </div>
          <div className='mx-8 md:mx-auto md:w-[50vw] mt-6 leading-6 mb-8  md:mb-[8vw]'>
            <p className='font-bold text-xl md:text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minima sapiente cum, vero repudiandae possimus!
            </p>
            <p className='mt-3 md:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae eius, a excepturi corrupti doloribus earum possimus error molestias debitis.
            </p>
          </div>
          <div className='divide-wrap h-[58vw] lg:h-[933px] overflow-hidden mb-8 md:mb-[8vw]'>
            <div className='col-start-2 col-end-3 flex items-center'>
              <div className='w-[41vw] h-[41vw] lg:w-[666px] lg:h-[666px] bg-center bg-cover z-10' style={{backgroundImage: "url('/c1.png')"}}></div>
            </div>
            <div className='col-start-3 col-end-4 relative flex justify-end items-center'>
              <div className='w-[68vw] h-full bg-yellow-200 absolute -left-10 md:-left-32'></div>
              <div className='w-[33vw] h-[25vw] lg:w-[533px] lg:h-[400px] lg:ml-36  bg-center bg-cover relative z-10' style={{backgroundImage: "url('/c2.png')"}}></div>
            </div>
          </div>
          <div className='mx-8 md:mx-auto md:w-[50vw] mt-6 leading-6 mb-8  md:mb-[8vw]'>
            <p className='font-bold text-xl md:text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minima sapiente cum, vero repudiandae possimus!
            </p>
            <p className='mt-3 md:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae eius, a excepturi corrupti doloribus earum possimus error molestias debitis.
            </p>
          </div>
          <div className='mx-8 md:mx-auto md:w-[50vw] mt-6 leading-6 mb-8  md:mb-[8vw]'>
            <Image src={'/card2.jpeg'} alt='card2' width={1120} height={750} className='w-full'></Image>
            <p className='mt-3'>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className='mx-8 md:mx-auto md:w-[50vw] mt-6 leading-6 mb-8  md:mb-[8vw]'>
            <p className='font-bold text-xl md:text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minima sapiente cum, vero repudiandae possimus!
            </p>
            <p className='mt-3 md:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae eius, a excepturi corrupti doloribus earum possimus error molestias debitis.
            </p>
          </div>
          <div className='divide-wrap h-[75vw] lg:h-[1200px] overflow-hidden relative mb-8 md:mb-[8vw]'>
            <div className='w-[68vw] h-full bg-green-200 absolute -left-10 md:-left-32'></div>
            <div className='col-start-2 col-end-3 flex flex-col items-start justify-center gap-5 lg:gap-32 z-10'>
              <div className='w-[33vw] h-[25vw] lg:w-[533px] lg:h-[400px] bg-center bg-cover' style={{backgroundImage: "url('/c1.png')"}}></div>
              <div className='w-[33vw] h-[25vw] lg:w-[533px] lg:h-[400px] bg-center bg-cover' style={{backgroundImage: "url('/c2.png')"}}></div>
            </div>
            <div className='col-start-3 col-end-4 relative flex justify-start items-center z-10'>
              <div className='w-[41vw] h-[41vw] lg:w-[666px] lg:h-[666px] lg:ml-32 bg-center bg-cover relative' style={{backgroundImage: "url('/c2.png')"}}></div>
            </div>
          </div>
          <div className='mx-8 md:mx-auto md:w-[50vw] mt-6 leading-6 mb-8  md:mb-[8vw]'>
            <p className='font-bold text-xl md:text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minima sapiente cum, vero repudiandae possimus!
            </p>
            <p className='mt-3 md:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae eius, a excepturi corrupti doloribus earum possimus error molestias debitis.
            </p>
          </div>
          <div className='divide-wrap overflow-hidden relative mb-8 md:mb-[8vw]'>
            <div className='col-start-2 col-end-4'>
              <Image src={'/card2.jpeg'} alt='card2' width={1120} height={750} className='w-full'></Image>
            </div>
          </div>
          <div className='mx-8 md:mx-auto md:w-[50vw] mt-6 leading-6 mb-8  md:mb-[8vw]'>
            <p className='font-bold text-xl md:text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minima sapiente cum, vero repudiandae possimus!
            </p>
            <p className='mt-3 md:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae eius, a excepturi corrupti doloribus earum possimus error molestias debitis.
            </p>
          </div>
          <div className='divide-wrap h-[58vw] overflow-hidden relative mb-8 md:mb-[8vw]'>
            <div className='w-[66vw] h-full lg:w-[1066px] bg-purple-300 absolute left-1/2 -translate-x-1/2'></div>
            <div className='col-start-2 col-end-3 flex justify-start items-center z-10'>
              <div className='w-[33vw] h-[25vw] lg:w-[533px] lg:h-[400px] bg-center bg-cover' style={{backgroundImage: "url('/c2.png')"}}></div>
            </div>
            <div className='col-start-3 col-end-5 flex justify-end items-center z-10'>
              <div className='w-[41vw] h-[41vw] lg:w-[666px] lg:h-[666px] bg-center bg-cover' style={{backgroundImage: "url('/c1.png')"}}></div>
            </div>
          </div>
          <div className='mx-8 md:mx-auto md:w-[50vw] mt-6 leading-6 mb-8  md:mb-[8vw]'>
            <p className='font-bold text-xl md:text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium minima sapiente cum, vero repudiandae possimus!
            </p>
            <p className='mt-3 md:text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi beatae eius, a excepturi corrupti doloribus earum possimus error molestias debitis.
            </p>
          </div>
          <div className='divide-wrap overflow-hidden relative mb-8 md:mb-[8vw]'>
            <div className='col-start-2 col-end-4 flex flex-col md:flex-row'>
              <div className='w-full md:w-1/2 h-[50vw] lg:h-[666px] bg-center bg-cover' style={{backgroundImage: "url('/c2.png')"}}></div>
              <div className='w-full md:w-1/2 p-8 md:p-[8vw] flex justify-center items-center flex-col  bg-blue-300 md:gap-8'>
                <h1 className='text-xl mb-4 font-bold md:text-4xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A, cupiditate!
                  Lorem ipsum dolor sit.
                </h1>
                <a href="#" className='color6 font-bold md:font-normal flex justify-start w-full md:text-2xl'>
                  Lorem ipsum dolor.{'>'}
                </a>
              </div>
            </div>
          </div>
          <div className='pt-1'></div>
        </div>
        <Footer></Footer>
    </div>
  )
}
