import React from 'react'
import ProductImage from '../../assets/headpng.png'
import { Link } from 'react-router-dom'

const ProductCard = () => {
    return (
        <Link to={`/product/4324`}>
        <div className='rounded-lg slide bg-neutral-200 py-2 px-4 ml-2 relative'>
            <div className='flex flex-col gap-4 '>
                <div className='w-full '>
                    <img src={ProductImage} alt='boombastic double bass'></img>
                </div>
                <div className=''>
                    <h1 className='text-primary text-lg md:text-xl font-medium'>Boombastic Double Bass</h1>
                    <p className='text-secondary font-medium'>₹ 2999</p>
                    <button className='py-2 px-4 duration-200 ease-in-out rounded-xl text-sm md:text-base bg-neutral-700 hover:bg-neutral-900 text-white mt-3 mb-2'>Add to Cart</button>
                </div>
            </div>
            
        </div>
        </Link>
    )
}

export default ProductCard
