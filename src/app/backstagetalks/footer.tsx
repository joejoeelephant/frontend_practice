'use client'
import React, {useRef, useEffect} from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
export default function Footer({scrollContainer}: {scrollContainer: HTMLDivElement}) {
    
    const handleClick = (id: string) => {

        const target = document.querySelector(id);
        if (target) {
            let yPos = (target as HTMLElement).offsetTop - (scrollContainer as HTMLElement).offsetTop;
            // Disabling all the scroll triggers during manual scrolling
            Array.from(ScrollTrigger.getAll()).forEach(st => {
                st.disable(true)
            });
            gsap.to(scrollContainer, {
                duration: 0.5,
                scrollTo: { y: yPos },
                ease: "power1.out",
                onComplete: () => {
                    // Enabling the triggers again after the animation completes
                    console.log('move')
                    Array.from(ScrollTrigger.getAll()).forEach(st => st.enable());
                }
            });
        }
    }
    return (
        <div className='p-5 pr-10 absolute bottom-0 w-full md:flex justify-between text-slate-900 hidden '>
            <div className='w-80'>
                <p className='font-bold text-xl leading-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium perspiciatis eius corrupti accusamus facilis pariatur aspernatur a! Ipsa, quaerat?
                </p>
                <p className='text-sm'>
                    Lorem ipsum dolor sit, amet consectetur!
                </p>
                <p className='mt-6'>
                    <a href="#" className='font-bold text-xl underline'>Lorem, ipsum.</a>
                </p>
            </div>
            <div>
                <ul>
                    {
                        Array.from({length: 3}).map((item, index) => {
                            return (
                                <li key={index} className='mb-4'><a href={`#s${index+1}`} onClick={(event) => {event.preventDefault(); handleClick(`#s${index+1}`)}}>Issue #s{index + 1}</a></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
