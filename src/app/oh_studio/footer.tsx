'use client'
import React, {useRef} from 'react'
import Image from 'next/image'
import { useScrollTrigger } from './useScrollTrigger'
export default function Footer() {
  const h2Ref = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)

  useScrollTrigger(h2Ref)
  useScrollTrigger(paragraphRef, 0.3)

  return (
    <footer>
      <div className='h-[50vh] max-w-7xl mx-auto px-5 flex flex-col justify-center items-center'>
          <h2 className='text-3xl font-normal md:text-4xl md:font-medium colorPrimary' ref={h2Ref}>
            Lorem ipsum dolor.
          </h2>
          <p className='text-3xl font-normal colorSecondary' ref={paragraphRef}>
            <a href="#">Lorem, ipsum.</a>
          </p>
      </div>
      <div className='px-10 py-10 pb-20 flex flex-col md:flex-row items-center md:justify-between gap-3 text-sm'>
        <div className='flex flex-col items-center gap-4 md:flex-row'>
          <p>
            <Image src={'/next.svg'} alt='logo' width={394} height={80} className='w-16'></Image>
          </p>
          <p>
            Lorem, ipsum dolor.
          </p>
        </div>
        <ul className='flex gap-4'>
          {
            Array.from({length:3}).map((item, index) => {
              return (
                <li key={index}><a href="#">lorem</a></li>
              )
            })
          }
        </ul>
      </div>
    </footer>
  )
}
