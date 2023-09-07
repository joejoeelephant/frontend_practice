import React from 'react'
import Image from 'next/image'
export default function Footer() {
  return (
    <div className='container mx-auto'>
        <footer className='px-8 md:px-[8vw] border-t-2 border-slate-300 bg-white'>
          <div className='pt-5 md:pt-16 pb-8'>
            <div className='text-4xl font-bold pb-6 md:pb-16'>
              Lorem.
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
              <div className='order-1 md:order-3'>
                <p className='font-bold'>
                  Lorem ipsum dolor sit amet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed vel saepe nobis.
                </p>
                <div className='flex mt-4'>
                  <input type="text" name='email' placeholder='email' className='bg-slate-200 p-2 w-3/4 block' />
                  <div className='bg-blue-800 text-white flex-1 flex justify-center items-center'>
                    sign up
                  </div>
                </div>
              </div>
              <div className='order-2'>
                <ul>
                  <li><a href="#">Lorem, ipsum.</a></li>
                  <li><a href="#">Lorem, ipsum.</a></li>
                  <li><a href="#">Lorem, ipsum.</a></li>
                  <li className='flex gap-3 mt-4'>
                    <Image src={'/vercel.svg'} width={64} height={64} alt='icon'></Image>
                    <Image src={'/vercel.svg'} width={64} height={64} alt='icon'></Image>
                    <Image src={'/vercel.svg'} width={64} height={64} alt='icon'></Image>

                  </li>
                </ul>
              </div>
              <div className='order-3 md:order-1'>
                  <div className='font-bold'>
                    Lorem, ipsum dolor.
                  </div>
                  <ul className=''>
                    <li><a href="#">Lorem, ipsum.</a></li>
                    <li><a href="#">Lorem, ipsum.</a></li>
                    <li><a href="#">Lorem, ipsum.</a></li>
                  </ul>
              </div>
              <div className='order-4'>
                  <div className='font-bold'>
                    Lorem, ipsum dolor.
                  </div>
                  <ul className=''>
                    <li><a href="#">Lorem, ipsum.</a></li>
                    <li><a href="#">Lorem, ipsum.</a></li>
                    <li><a href="#">Lorem, ipsum.</a></li>
                  </ul>
              </div>
              <div className='order-5'>
                  <ul className=''>
                    <li><a href="#">Lorem, ipsum.</a></li>
                    <li><a href="#">Lorem, ipsum.</a></li>
                    <li><a href="#">Lorem, ipsum.</a></li>
                    <li><a href="#">Lorem, ipsum.</a></li>
                    <li><a href="#">Lorem, ipsum.</a></li>
                  </ul>
              </div>
            </div>
            <div className='flex items-center justify-between mt-6 md:mt-8 text-sm'>
              <ul className='hidden md:flex gap-4'>
                {
                  Array.from({length: 6}).map((item, index) => {
                    return (
                      <li key={index}><a href="#">Lorem.</a></li>
                    )
                  })
                }
              </ul>
              <div className='flex items-center gap-2'>
                <Image src={'/vercel.svg'} width={64} height={64} alt='icon' className='order-1'></Image>
                <span className='order-2 md:-order-1'>
                  Lorem, ipsum dolor.
                </span>
              </div>
            </div>
          </div>   
      </footer>
    </div>
  )
}
