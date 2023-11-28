import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const Layout = () => {
    return (
        <div className='h-screen w-full'>
            <Navbar />
                <Outlet />
            <section className='bg-gray-200 py-2 md:py-4'>
                <Footer />
            </section>
        </div>
    )
}

export default Layout
