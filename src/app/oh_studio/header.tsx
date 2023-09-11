import React from 'react'

export default function Header({navName, navChange}: {navName: string, navChange: (name: string) => void}) {
  return (
    <header className='fixed w-full top-0 left-0 z-10'>
      <div className='p-5 md:pt-8 flex justify-center'>
        <div className='w-[280px] grid grid-cols-3 rounded-3xl backdrop-blur-md p-1 overflow-hidden gap-2 bgSecondary'>
          {
            ["Home","Profile","Contact"].map((item, index) => {
              return (
                <div className='h-10'  key={index}>
                  <a href="#"
                    onClick={(event) => {event.preventDefault(); navChange(item.toLowerCase())}} 
                    className={` text-sm md:text-base flex w-full h-full justify-center items-center rounded-3xl ${item.toLowerCase() == navName ? "bg-white" : ""} colorPrimary nav-item`}>
                    {item}
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </header>
  )
}
