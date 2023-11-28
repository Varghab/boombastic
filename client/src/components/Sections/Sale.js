import React from 'react'
import gaming from '../../assets/Sale/gaming.png'
import airbud from '../../assets/Sale/airbud.png'
const Sale = () => {
    return (
        <div className='flex flex-col md:flex-row gap-3 md:gap-6'>
            <div className='cursor-pointer flex p-4 w-full md:w-1/2 bg-sky-100/80 items-center justify-between md:justify-center gap-6 duration-200 shadow-sm hover:shadow-md'>
                <div>
                    <h1 className='font-primary text-2xl md:text-3xl text-red-600 font-bold'>Flat 30%</h1>
                    <p className='font-secondary text-lg md:text-xl'>Gaming Headphones</p>
                </div>
                <div className='w-1/2 '>
                    <img className='w-full' src={gaming}></img>
                </div>
            </div>
            <div className='cursor-pointer flex p-4 w-full md:w-1/2 bg-red-100/80 items-center justify-between md:justify-center gap-6 duration-200 shadow-sm hover:shadow-md'>
                <div>
                    <h1 className='font-primary text-2xl md:text-3xl text-red-600 font-bold'>Flat 15%</h1>
                    <p className='font-secondary text-lg md:text-xl'>Truly Wireless</p>
                </div>
                <div className='w-1/2'>
                    <img className='w-full' src={airbud}></img>
                </div>
            </div>
        </div>
    )
}

export default Sale
