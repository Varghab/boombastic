import React, { useLayoutEffect, useRef } from 'react'
import Logo from '../../assets/Untitled design (6).png'
import {AiOutlineHeart, AiOutlineSearch, AiOutlineShopping, AiOutlineUser} from 'react-icons/ai'
import gsap, { Power0, Power3 } from 'gsap';

const Navbar = () => {
    const NavRef = useRef();
    const PromoRef = useRef();

    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{
            var tl = gsap.timeline();
            tl.from('.navLinks', {
                y: 20,
                stagger: 0.1,
                ease: Power3.easeIn,
                opacity:0,
            })
            gsap.from('.Logo',{
                opacity: 0,
                duration: 1,
                ease: Power3.easeIn,
            })
        }, NavRef)

        return ()=>{
            ctx.revert();
        }
    },[])

    return (
        <nav ref={NavRef}>
            <div  className='px-6 py-2'>
                <div   className='flex font-secondary-300 items-center justify-between'>
                    {/* //Navlinks */}
                    <ul  className='hidden gap-3 md:flex'>
                        <li className='navLinks hover:cursor-pointer p-1'>Categories</li>
                        <li className='navLinks hover:cursor-pointer p-1'>Featured</li>
                        <li className='navLinks hover:cursor-pointer p-1'>Best Seller</li>
                        <li className='navLinks hover:cursor-pointer p-1'>All Products</li>
                    </ul>
                    {/* //logo */}
                    <div className='w-20 h-20 md:w-24 md:h-24 mr-14'>
                        <img className='w-full Logo' src={Logo}></img>
                    </div>
                    {/* //SignIn */}
                    <div className=' hidden md:flex gap-7 pr-6'>
                        <div className='navLinks flex flex-col items-center cursor-pointer'>
                            <AiOutlineSearch />
                            <p>Search</p>
                        </div>
                        <div className='navLinks flex flex-col items-center cursor-pointer'>
                            <AiOutlineUser />
                            <p>Sign in</p>
                        </div>
                        <div className='navLinks flex flex-col items-center cursor-pointer'>
                            <AiOutlineHeart />
                            <p>Wishlist</p>
                        </div>
                        <div className='navLinks flex flex-col items-center cursor-pointer'>
                            <AiOutlineShopping />
                            <p>Cart</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </nav>
    )
}

export default Navbar
