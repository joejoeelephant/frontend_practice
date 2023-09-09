import React from 'react'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer>
      <div className='container mx-auto'>
        <div className="container-inner py-16 border-t-2 border-slate-200">
          <div className='md:hidden'>
            <div className='flex flex-wrap'>
              {
                Array.from({length: 3}).map((item ,index) => {
                  return (
                    <div key={index} className='w-1/2 text-center mb-20'>
                      <h4 className='font-bold color-primary'>Lorem.</h4>
                      <ul className='mt-4 flex flex-col gap-4'>
                        <li><a href="#">Lorem.</a></li>
                        <li><a href="#">Lorem.</a></li>
                        <li><a href="#">Lorem.</a></li>
                        <li><a href="#">Lorem.</a></li>
                      </ul>
                    </div>
                  )
                })
              }
              <div  className='w-1/2 text-center mb-20'>
                <ul className='mt-4 flex flex-col gap-8'>
                  <li className='flex justify-center'><a href="#"><Image src={'/vercel.svg'} alt='logo' width={64} height={32}></Image></a></li>
                  <li className='flex justify-center'><a href="#"><Image src={'/vercel.svg'} alt='logo' width={64} height={32}></Image></a></li>
                  <li className='flex justify-center'><a href="#"><Image src={'/vercel.svg'} alt='logo' width={64} height={32}></Image></a></li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col gap-6 justify-center items-center'>
                <a href="#">
                  <Image src={'/next.svg'} width={64} height={32} alt='logo'></Image>
                </a>
                <p className='mt-2'>lorem2</p>
                <p>lorem2</p>
                <p>lorem2</p>
            </div>
          </div>

          <div className='hidden md:flex '>
            <div>
                <p className='h-6 flex items-center'>
                  <a href="#">
                    <Image src={'/next.svg'} width={64} height={32} alt='logo'></Image>
                  </a>
                </p>
                <div className='mt-8 flex flex-col gap-6'>
                  <p >lorem2</p>
                  <p>lorem2</p>
                  <p>lorem2</p>
                </div>
                
            </div>
            <div className='flex w-4/5'>
              {
                Array.from({length: 3}).map((item ,index) => {
                  return (
                    <div key={index} className='w-1/4 text-center mb-20'>
                      <h4 className='font-bold color-primary'>Lorem.</h4>
                      <ul className='mt-8 flex flex-col gap-6'>
                        <li><a href="#">Lorem.</a></li>
                        <li><a href="#">Lorem.</a></li>
                        <li><a href="#">Lorem.</a></li>
                        <li><a href="#">Lorem.</a></li>
                      </ul>
                    </div>
                  )
                })
              }
              <div  className='w-1/4 text-center'>
                <ul className='flex flex-row gap-6'>
                  <li className=''><a href="#"><Image src={'/vercel.svg'} alt='logo' width={64} height={32}></Image></a></li>
                  <li className=''><a href="#"><Image src={'/vercel.svg'} alt='logo' width={64} height={32}></Image></a></li>
                  <li className=''><a href="#"><Image src={'/vercel.svg'} alt='logo' width={64} height={32}></Image></a></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
