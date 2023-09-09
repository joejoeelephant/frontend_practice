'use client'
import React, {useState} from 'react'
import Image from 'next/image'
export default function Header() {
  const [navListState, setNavListState] = useState<boolean>(false)

  return (
    <header className={`fixed left-0 top-0 w-full md:px-10  ${navListState ? "active-shadow" : ""}`}>
      <div className='absolute inset-0 backdrop-blur-md' style={{backgroundColor: "rgba(255,255,255,0.8)"}}></div>
      <div className='relative z-10 h-20 px-8 flex justify-between items-center header-nav-container'>
        <a href="#">
          <Image src={'/next.svg'} alt='logo' width={394} height={80} className='w-20'></Image>
        </a>
        <ul className='hidden md:flex gap-12'>
          {
            Array.from({length: 5}).map((item, index) => {
              return (
                <li key={index}>
                  <a href="#" className={`block text-xl font-bold ${index == 2 ? "color-primary" : "color-secondary"}`}>
                    Lorem
                  </a>
                </li>
              )
            })
          }
        </ul>
        <button className='hidden md:flex w-32 h-12  justify-center items-center text-white font-bold bg-accent rounded-3xl text-xl transition hover:scale-105'>
          Download
        </button>
        <div className='w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center md:hidden' onClick={() => {setNavListState(prev => !prev)}}>
          <div className={`hamburger ${navListState ? 'active' : ""}`}><span></span></div>
        </div>
      </div>
      <div className={`relative z-10  border-slate-200 transition-all duration-500 overflow-hidden md:hidden ${navListState ? "shadow-top opacity-1 h-[520px]" : "h-0 opacity-0"}`}>
        <nav className='pb-10'>
          <ul className='pt-3'>
            {
              Array.from({length: 5}).map((item, index) => {
                return (
                  <li key={index}>
                    <a href="#" className={`block px-8 py-5 text-xl font-bold ${index == 2 ? "color-primary" : "color-secondary"}`}>
                      Lorem, ipsum.
                    </a>
                  </li>
                )
              })
            }
          </ul>
          <div className='my-10 mx-8 text-white text-xl font-bold h-12 flex justify-center items-center bg-accent rounded-3xl '>
            Download
          </div>
        </nav>
      </div>
    </header>
  )
}
