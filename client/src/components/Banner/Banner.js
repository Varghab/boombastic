import React, { useLayoutEffect, useRef } from 'react'
import BannerImage from '../../assets/Categories/BannerImage.png'
import gsap, { Power3 , Power1, Power4} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Banner = () => {
    const BannerRef = useRef();
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.Banner',
                    scrub: true,

                }
            });
            tl.from('.Banner', {
                opacity:0,
                duration: 4,
                rotate: 360,
                ease: Power3.easeOut
            });
            gsap.from('.BannerPrimary',{
                scrollTrigger: {
                    trigger: '.BannerPrimary',
                    scrub: true,
                },
                opacity: -0.3,
                duration: 1,
            })
        }, BannerRef);
        return ()=>{
            ctx.revert();
        }
    },[]);
    return (
        <div className='w-full mx-auto mt-0 md:mt-28'>
            <div ref={BannerRef} className='py-6 px-8 pt-28 md:pt-6 flex flex-col md:flex-row gap-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg'>
                <div className='max-w-4xl order-last md:order-1'>
                    <h1 className='BannerPrimary font-primary text-3xl font-medium'>Discover Incredible Headphones for an Amazing Sound Experience!</h1>
                    <p className='BannerPrimary font-secondary text-xl mt-2'>Begin an explorative journey with our extensive headphone collection, designed to cater to your individual listening preferences!</p>
                    <button className='py-2 mt-4 px-4 w-full md:w-48 rounded-full text-white hover:bg-[#B20000] transition-all duration-200 bg-[#C81A06]'>Shop All</button>
                </div>
                <div className='Banner min-w-[10rem] max-w-[13rem] md:min-w-[22rem] relative -top-24 md:top-0 -translate-y-[35%] order-1 md:order-2'>
                    <img className='absolute' width='100%' src={BannerImage}></img>
                </div>
            </div>
        </div>
    )
}

export default Banner
