import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Category from '../UI/Category'
import Headband from '../../assets/Categories/Headband.jpg'
import Earphone from '../../assets/Categories/Earphone.jpg'
import TWS from '../../assets/Categories/TWS.jpg'
import Gaming from '../../assets/Categories/Gaming.jpg'

const Categories = [
    {
        name: "Headphone",
        image: Headband
    },
    {
        name: "Earphone",
        image: Earphone
    },
    {
        name: "Truly Wireless",
        image: TWS
    },
    {
        name: "Gaming",
        image: Gaming
    },
]

const ShopByCategory = () => {
    return (
        <div className='w-full mx-auto '>
            <div>
                <h1 className='font-primary text-3xl font-bold text-neutral-800 md:text-3xl'>Trending Categories</h1>
            </div>
            <div className='flex gap-4 mt-4 justify-between items-center overflow-auto scrollbar-hide'>
                {Categories.map(category=> <Category name={category.name} image={category.image} />)}
            </div>
        </div>
    )
}

export default ShopByCategory
