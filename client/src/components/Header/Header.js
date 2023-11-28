import React, { useLayoutEffect, useRef, useState } from 'react'
import HeaderVideo from '../../assets/_import_6166f83d27e9a4.52384163_FPpreview.mp4'
import gsap, { Power3 } from 'gsap';

const Header = () => {
    const Header = useRef();
    useLayoutEffect(()=>{
        console.log(Header);
        const ctx = gsap.context(()=>{
            gsap.from('.Header',{
                x:-50,
                opacity: 0,
                duration: 0.6,
                stagger:0.1,
                ease: Power3.easeInOut
            });
            gsap.from('.Button',{
                x:-50,
                stagger:0.2,
                ease: Power3.easeInOut,
                opacity: 0
            })
        }, Header);
        return ()=>{
            ctx.revert();
        }
    },[]);
    return (
        <header className='w-full relative'>
                <video className='w-full h-screen object-cover' autoPlay muted={true} loop playsInline>
                    <source src={HeaderVideo} type='video/mp4'></source>
                </video>
                <div className="absolute inset-0 bg-black opacity-70 flex h-full w-full">
                </div>
                <div ref={Header} className="text-white absolute top-28 md:top-40 ml-8 mr-8 md:left-32 max-w-xl md:w-96">
                    <h1 className='Header text-5xl font-primary font-bold leading-[43px]'>Tune into <span className='text-[#C81A06]'>Perfection</span></h1>
                    <p className='Header mt-4 text-xl font-secondary'>Elevate Your Listening Experience with Our Expertly Crafted Range of Premium Audio Solutions.</p>
                    <div className='Header flex gap-3 mt-6 '>
                        <button className='font-secondary rounded-full hover:bg-[#B20000] transition-all duration-200 bg-[#C81A06] px-4 py-2 w-full text-xl'>Discover</button>
                        <button className='font-secondary rounded-full hover:bg-[#B20000] transition-all duration-200 bg-[#C81A06] px-4 py-2 w-full text-xl'>Best Seller</button>
                    </div>
                </div>
            </header>
    )
}

export default Header
