import React from 'react'

const Benefit = ({Icon, PrimaryText, SecondaryText}) => {
  return (
        <div className='flex gap-3 items-center flex-col justify-center lg:flex-row'>
            <div>
                <Icon className="text-3xl lg:text-4xl text-red-700" />
            </div>
            <div className='text-center lg:text-left'>
                <h2 className='font-primary text-[.8rem] lg:text-lg font-medium'>{PrimaryText}</h2>
                <p className='font-secondary hidden lg:block text-gray-500'>{SecondaryText}</p>
            </div>
        </div>
  )
}

export default Benefit
