import React from 'react'
import Benefit from '../UI/Benefit'
import {FaTruck} from 'react-icons/fa'
import {BsCheck2Circle, BsHeadphones, BsCreditCard2Back} from 'react-icons/bs'



const AllBenefits = [
    {
        Icon: FaTruck,
        PrimaryText: "Free Shipping",
        SecondaryText: "Free Shipping On All Orders",
    },
    {
        Icon: BsCheck2Circle,
        PrimaryText: "Money Guarabtee",
        SecondaryText: "30 Days Money Back",
    },
    {
        Icon: BsHeadphones,
        PrimaryText: "Online Support",
        SecondaryText: "Technial Support 24/7",
    },
    {
        Icon: BsCreditCard2Back,
        PrimaryText: "Secure Payment",
        SecondaryText: "Hassle Free Payment",
    },
]

const Benefits = () => {
    return (
        <div>
        
            <div className='flex justify-around gap-2 items-center bg-gradient-to-r from-gray-200 to-gray-300 p-8'>
                {AllBenefits.map(benefit=><Benefit Icon={benefit.Icon} PrimaryText={benefit.PrimaryText} SecondaryText={benefit.SecondaryText} />)}
            </div>
        </div>
    )
}

export default Benefits
