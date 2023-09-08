import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg1 text-white pt-12 pb-12'>
      <div className="container mx-auto">
        <div className="container-inner flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:mb-20'>
            {
              Array.from({length:4}).map((item, index) => {
                return (
                  <div key={index}>
                    <h3 className='text-2xl font-bold break-words mb-4'>Lorem,ipsum.</h3>
                    <ul>
                      <li>
                        <a href="#">Lorem.</a>
                      </li>
                      <li>
                        <a href="#">Lorem.</a>
                      </li>
                      <li>
                        <a href="#">Lorem.</a>
                      </li>
                      <li>
                        <a href="#">Lorem.</a>
                      </li>
                      <li>
                        <a href="#">Lorem.</a>
                      </li>
                      {
                        index === 3 && <li className='mt-8'><a href="#">contact us</a></li>
                      }
                      {
                        index === 3 && <li><a href="#">info@some.com</a></li>
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>
          <div className='text-xl'>
            <div className='mb-4'>
              <Image src={'/next2.svg'} alt='logo' width={394} height={80} className='w-16 max-h-8'></Image>
            </div>
            <p>Lorem, ipsum.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
