'use client'
import React, {useState} from 'react'
import Header from './header'
import Footer from './footer'
import Home from './home'
import Profile from './profile'
import Contact from './contact'
import './style.css'
export default function Page() {
    const [currentURL, setCurrentURL] = useState<string>("home")
    return (
        <div className="page-container relative bgPrimary">
            <Header navName={currentURL} navChange={(name: string) => {setCurrentURL(name)}}></Header>
            <main className='pt-20'>
                {currentURL === "home" && <Home></Home>}
                {currentURL === "profile" && <Profile></Profile>}
                {currentURL === "contact" && <Contact></Contact>}
            </main>
            {currentURL !== "contact" && <Footer></Footer>}
        </div>
    )
}
