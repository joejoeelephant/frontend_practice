'use client'
import React, {useState} from 'react'
import { CurrentURLProvider } from './useCurrentURLContext'
import Header from './header'
import Footer from './footer'
import Home from './home'
import Profile from './profile'
import Contact from './contact'
import './style.css'
export default function Page() {
    return (
        <div className="page-container relative bgPrimary">
            <CurrentURLProvider>
                <Header></Header>
                <main className='pt-20'>
                    <Home></Home>
                    <Profile></Profile>
                    <Contact></Contact>
                </main>
                <Footer></Footer>
            </CurrentURLProvider>
        </div>
    )
}
