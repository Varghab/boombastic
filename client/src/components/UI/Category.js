import React from 'react'

const Category = ({image,name}) => {
    return (
        <div className='rounded-xl relative cursor-pointer'>
            <div className='w-72 rounded-xl overflow-hidden'>
                <img src={image} className='w-full rounded-xl duration-200 ease-in-out hover:scale-[1.2]' alt='boombastic double bass'></img>
            </div>
            <div className='bg-neutral-900/80 max-w-2xl rounded-full px-4 py-2 absolute top-3 left-2'>
                <p className='text-white text-center text-lg'>{name}</p>
            </div>
        </div>
    )
}

export default Category
