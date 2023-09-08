'use client'
import React, {use, useState} from 'react'
import Image from 'next/image'
export default function Header() {
  const [menueState, setMenueState] = useState<boolean>(false)
  const [searchBoxState, setSearchBoxState] = useState<boolean>(false)
  return (
    <header className='bg1'>
      <div className="container bg1 color3 mx-auto h-[88px] flex items-center relative">
        <div className="container-inner flex justify-between">
          <div className='flex items-center'>
            <Image src={'/next2.svg'} alt='logo' width={394} height={80} className='w-32 max-h-8'></Image>
            <span className='border-l-2 border-white text-2xl pl-1 md:pl-3 ml-1 md:ml-3 tracking-tight flex items-center'>
              Help Center
            </span>
          </div>
          <div className='flex md:hidden'>
            <div className='flex items-center' onClick={() => {setSearchBoxState(true)}}>
              <Image src={'/magnifier.svg'} alt='magnifier' width={64} height={64} className='w-6'></Image>
            </div>
            <div className={`menue-button ${menueState ? 'active' : ''}`} onClick={() => {setMenueState(prev => !prev)}}>
              <div className="menue-line"></div>
            </div>
          </div>
          <div className='hidden md:flex gap-4'>
            <div className='border-2 border-white rounded-2 py-2 px-6 text-2xl rounded-md'>Submit a request</div>
            <div className='py-2 px-6 text-2xl rounded-md bg3'>Sign In</div>
          </div>
        </div>
        <div className={`absolute top-full w-full py-8 px-4 bg1 border-t-2 border-slate-500 flex justify-center items-center ${menueState ? '' : 'hidden'}`}>
          <div className='text-2xl text-center'>
            <div className='p-4 border-b-2 border-slate-50'>
              Submit a request
            </div>
            <div className='p-4'>
              Sign In
            </div>
          </div>
        </div>
        <div className={`absolute inset-0 bg-white flex justify-center items-center container-inner ${searchBoxState ? '' : 'hidden'}`}>
          <form action="#" className='flex items-center gap-4'>
            <input type="text" name='text' placeholder='Search' className='border-2 border-slate-950 rounded-sm py-2 text-xl px-4 text-black'/>
            <div className='cross-button' onClick={() => {setSearchBoxState(false)}}></div>
          </form>
        </div>
      </div>
    </header>
  )
}
