import React, { useEffect, useState } from 'react'
import ProductCard from '../UI/ProductCard'
import Slider from "react-slick";
import {AiOutlineArrowRight} from 'react-icons/ai'

const NewArrival = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive:[
            {
            breakpoint: 563,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
                arrows:false,
            }
        },{
            breakpoint:750,
            settings:{
                slidesToShow:3,
                slidesToScroll:3,
                dots: true, 
                infinite: true
            }
        }
    ]
    }

    return (
        <div className='w-full mx-auto '>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-primary text-2xl font-bold text-neutral-800 md:text-3xl'>New Arrivals</h1>
                    <p className='text-gray-600 text-md md:text-xl w-64 md:w-full'>Explore Our Newly Launched Headphones</p>
                </div>
                <div>
                    <div className='group flex items-center gap-1 cursor-pointer '>
                        <p className='group-hover:text-neutral-900 group-hover:underline text-gray-600 font-medium duration-150'>View All</p>
                        <AiOutlineArrowRight className='group-hover:text-neutral-100 text-gray-600 font-medium rounded-full bg-neutral-300 p-[3px] text-xl text-bold group-hover:bg-neutral-900 duration-150'/>    
                    </div>    
                </div> 
            </div>
            <div className='py-2 md:py-4 flex gap-2 overflow-auto scrollbar-hide'>
                <button className='rounded-full shrink-0 text-md md:text-xl border-2 px-2 py-2 md:px-4 md:py-2 duration-150 ease-in hover:bg-neutral-200 box-border translate-z-0'>Over Ear</button>
                <button className='rounded-full shrink-0 text-md md:text-xl border-2 px-2 py-2 md:px-4 md:py-2 duration-150 ease-in hover:bg-neutral-200 box-border translate-z-0'>Gaming</button>
                <button className='rounded-full shrink-0 text-md md:text-xl border-2 px-2 py-2 md:px-4 md:py-2 duration-150 ease-in hover:bg-neutral-200 box-border translate-z-0'>Sports</button>
                <button className='rounded-full shrink-0 text-md md:text-xl border-2 px-2 py-2 md:px-4 md:py-2 duration-150 ease-in hover:bg-neutral-200 box-border translate-z-0'>Wireless</button>
                <button className='rounded-full shrink-0 text-md md:text-xl border-2 px-2 py-2 md:px-4 md:py-2 duration-150 ease-in hover:bg-neutral-200 box-border translate-z-0'>Kids</button>
            </div>
                <Slider {...settings} swipeToSlide={true} className=''>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Slider>

        </div>
    )
}

export default NewArrival
