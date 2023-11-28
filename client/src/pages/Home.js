import React from 'react'
import Header from '../components/Header/Header'
import NewArrival from '../components/Sections/NewArrival'
import Banner from '../components/Banner/Banner'
import BestSellers from '../components/Sections/BestSellers'
import ShopByCategory from '../components/Sections/ShopByCategory'
import Benefits from '../components/Sections/Benefits'
import Newsletter from '../components/Sections/Newsletter'
import Sale from '../components/Sections/Sale'

const Home = () => {
    return (
        <div className='bg-gray-100'>
            <Header />
            <div className='max-w-7xl mx-auto pb-20'>
                <Banner />
                <section className='mt-10 md:mt-15 p-0 px-2 md:px-0'>
                    <Benefits />
                </section>
                <section className='p-0 px-2 md:px-0'>
                    <BestSellers />
                </section>
                <section className='mt-8 md:mt-16 p-0 px-2 md:px-0'>
                    <Sale />
                </section>
                <section className='mt-8 md:mt-20 p-0 px-2 md:px-0'>
                    <NewArrival />
                </section>
                
                <section className='p-0 mt-14 md:mt-18 px-2 md:px-0'>
                    <ShopByCategory />
                </section>
             
            </div>
            
        </div>
    )
}

export default Home
