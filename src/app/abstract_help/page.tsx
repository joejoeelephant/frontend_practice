import React from 'react'
import Header from './header'
import Footer from './footer'
import './style.css'
import Image from 'next/image'
export default function Page() {
  return (
    <div className='help-container'>
        <Header></Header>
        <main>
            <section className='bg2'>
                <div className="container mx-auto">
                    <div className="container-inner max-w-3xl mx-auto pt-20 pb-32">
                        <h2 className='text-4xl md:text-7xl tracking-tighter text-center mb-12'>
                            How Can We Help?
                        </h2>
                        <div className='border-2 border-slate-600 rounded-md p-4 bg-white shadow-lg shadow-slate-400'>
                            <form action="#" className='flex'>
                                <input type="text" name='text' placeholder='Search' className='flex-1 pl-1'/>
                                <Image src={'/right-arrow.svg'} alt='right-arrow' width={64} height={64} className='w-8 h-8'></Image>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white md:py-20">
                <div className='container mx-auto'>
                    <div className="container-inner">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 py-12'>
                            {
                                Array.from({length: 6}).map((item, index) => {
                                    return (
                                        <div className='flex gap-5' key={index}>
                                            <div className='w-16 flex justify-center shrink-0'>
                                                <Image src={'/key.svg'} alt='keys' width={64} height={64} className='w-16 h-16'></Image>
                                            </div>
                                            <div className='flex flex-col gap-5 text-2xl '>
                                                <h4 className='font-bold'>
                                                    Lorem, ipsum.
                                                </h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dicta.
                                                </p>
                                                <a href="#" className='text-base color2 flex items-center'>
                                                    Lorem, ipsum dolor.
                                                    <Image src={'/right-arrow.svg'} alt='right-arrow' width={64} height={64} className='w-4 h-4'></Image>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer></Footer>
    </div>
  )
}
