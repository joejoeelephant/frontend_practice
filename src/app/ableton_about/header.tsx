'use client'
import React, {useState} from 'react'
import Image from 'next/image'
export default function Header() {
    const [mobileNavState, setMobileNavState] = useState<boolean>(false)
    return (
       <div className='container mx-auto'>
            <div className='pt-5 pr-4 relative bg-white'>
                <div className={`h-12 flex border-b-2 border-slate-300 relative z-10 ${mobileNavState ? 'text-white' : ''}`}>
                    <a href="#" className='inline-block mx-5'>
                        <Image src={'/next.svg'} alt='logo' property='true' width={394} height={80} style={{width: 60, height: "auto"}}></Image>
                    </a>
                    <div className={`mb-6 text-xl font-bold relative header-menue md:hidden ${mobileNavState ? 'arrow-up' : 'arrow-down'}`} onClick={() => {setMobileNavState(prev => !prev)}}>
                        Menu
                    </div>
                    <ul className='hidden md:flex gap-5 text-xl ml-5 mb-5 flex-1 items-center'>
                        {
                            Array.from({length: 8}).map((item, index) => {
                                return (
                                    <li key={index}><a href="#">Lorem.</a></li>
                                )
                            })
                        }
                        <li className='color4'><a href="#">More+.</a></li>
                        <li className='ml-auto color6'><a href="#">Lorem, ipsum.</a></li>
                        <li className='text-base'><a href="#">Lorem, ipsum.</a></li>
                    </ul>
                </div>
                <div className='p-5 flex gap-4 text-sm md:font-bold'>
                    <a href="#" className='color4'>
                        Lorem
                    </a>
                    <a href="#">
                        Lorem
                    </a>
                    <a href="#">
                        Lorem
                    </a>
                    <a href="#">
                        Lorem
                    </a>
                </div>
                <div className={`absolute w-full min-h-screen top-0 left-0 bg-blue-700 pt-20 px-5 text-white transition-transform duration-500 ${mobileNavState ? "translate-y-0": "-translate-y-full"}`}>
                    <ul className='font-bold text-xl'>
                        {
                            Array.from({length: 8}).map((item, index) => {
                                return (
                                    <li key={index} className='mb-5'>
                                        <a href="#">
                                            Lorem.{index}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <li className='mb-5 text-sm font-light'>
                            <a href="#">
                                Lorem.link
                            </a>
                        </li>
                    </ul>
                    <section>
                        <h2 className='text-xl font-bold mb-5'>
                            Lorem, ipsum dolor.
                        </h2>
                        <ul className='text-sm'>
                            {
                                Array.from({length: 6}).map((item, index) => {
                                    return (
                                        <li key={index} className={`mb-4 ${index == 2 ? 'color4': ''}`}>
                                            <a href="#">
                                                Lorem.
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>

                    <section>
                        <h2 className='text-xl font-bold mb-5'>
                            Lorem, ipsum dolor.
                        </h2>
                        <div className='overflow-x-scroll w-full pb-5'>
                            <div>
                                <ul className='flex gap-2 flex-nowrap'>
                                    {
                                        Array.from({length: 5}).map((item, index) => {
                                            return (
                                                <li key={index} className='shrink-0 text-sm' style={{width: "15rem"}}>
                                                    <a href="#">
                                                        <div>
                                                            <h2>Lorem, ipsum.</h2>
                                                            <p>
                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, placeat.
                                                            </p>
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
       </div>
    )
}
