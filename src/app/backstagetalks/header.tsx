import React from 'react'
import Image from 'next/image'
export default function Header() {
    return (
        <header className='absolute w-screen p-5 pr-10 z-10  flex justify-between'>
            <Image src={'/next.svg'} alt='logo' width={394} height={80} className='w-40'></Image>
            <span className='hidden font-bold md:block'>Lorem ipsum dolor.</span>
        </header>
    )
}
