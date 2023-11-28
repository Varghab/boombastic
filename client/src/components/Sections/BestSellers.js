import React, { useEffect, useState } from 'react'
import ProductCard from '../UI/ProductCard'
import Slider from "react-slick";
import {AiOutlineArrowRight} from 'react-icons/ai'

const BestSellers = () => {
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
        <div className='w-full mx-auto mt-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='font-primary text-2xl font-bold text-neutral-800 md:text-3xl'>Best Sellers</h1>
                    <p className='text-gray-600 text-md md:text-xl'>Grab the best of our headphones</p>
                </div>
                <div>
                    <div className='group flex items-center gap-1 cursor-pointer '>
                        <p className='group-hover:text-neutral-900 group-hover:underline text-gray-600 font-medium duration-150'>View All</p>
                        <AiOutlineArrowRight className='group-hover:text-neutral-100 text-gray-600 font-medium rounded-full bg-neutral-300 p-[3px] text-xl text-bold group-hover:bg-neutral-900 duration-150'/>    
                    </div>    
                </div> 
            </div>
                <Slider {...settings} swipeToSlide={true} className='mt-6' >
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

export default BestSellers
