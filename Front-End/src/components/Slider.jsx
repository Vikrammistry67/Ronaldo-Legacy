import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Slider = () => {
    return (
        <div className='w-screen h-screen  mt-25 flex items-center justify-center'>
            <div  className='w-screen whitespace-nowrap h-[60vh]  flex-nowrap whitespace-wrap   flex px-8 items-center justify-center gap-10 '>

                <div data-scroll data-scroll-speed="0.9s" className='w-[20vw]  hover:bg-zinc-900 rounded-md shadow-2xl scale-110 relative overflow-hidden h-full hover:scale-125 transition-all .9s'>
                    <div
                        className='absolute px-2 bottom-5  z-50 text-zinc-300'>
                        <h2 className='text-[1.2vw] flex gap-2 mb-1.5  '>
                            <span className='font-bold'>CAREER</span>
                            <span>HIGHLIGHTS</span>
                        </h2>
                        <h3
                            className='text-[1vw] opacity-90 font-medium leading-[1rem]'>
                            Cristiano Ronaldo's hightlights and achievements.</h3>
                        <h2
                            className='mt-4 flex font-bold items-center  gap-2 text-zinc-300 text-[.8vw] tracking-wider'>
                            VIEW HIGHLIGHTS <FaLongArrowAltRight />
                        </h2>
                    </div>
                    <video
                        className="mask-b-from-35%"
                        autoPlay
                        muted
                        loop
                        src="https://www.cristianoronaldo.com/files/highlights/CR7_WebsiteHighlights-Carrousel-2023-Vertical.mp4"
                        alt="" />
                </div>


                <div data-scroll data-scroll-speed="0.7s" className='w-[20vw] hover:bg-zinc-900 rounded-md  scale-110 relative overflow-hidden h-full hover:scale-125 transition-all .9s'>
                    <div
                        className='absolute px-2 bottom-5 text-zinc-300'>
                        <h2 className='text-[1.2vw] flex gap-2 mb-1.5  '>
                            <span className='font-bold'>URSU</span>
                            <span>WATER</span>
                        </h2>
                        <h3
                            className='text-[1vw] opacity-90 font-medium leading-[1rem]'>
                            URSU is much more than water... It is an inspiration do drink.</h3>
                        <h2
                            className='mt-4 flex font-bold items-center  gap-2 text-zinc-300 text-[.8vw] tracking-wider'>
                            VIEW MORE <FaLongArrowAltRight />
                        </h2>
                    </div>
                    <img
                        className="mask-b-from-55%"
                        src="https://www.cristianoronaldo.com/assets/images/brand_ursu.jpg?t=2067825244"
                        alt="" />
                </div>


                <div data-scroll data-scroll-speed="0.5s" className='w-[20vw] hover:bg-zinc-900 rounded-md shadow-2xl scale-110 relative overflow-hidden h-full hover:scale-125 transition-all .9s'>
                    <div
                        className='absolute px-2 bottom-5  z-50 text-zinc-300'>
                        <h2 className='text-[1.2vw] flex gap-2 mb-1.5  '>
                            <span className='font-bold'>Erakulis</span>
                            <span>App</span>
                        </h2>
                        <h3
                            className='text-[1vw] opacity-90 font-medium leading-[1rem]'>
                            ERAKULIS® is an all-in-one wellness experience for Fitness.</h3>
                        <h2
                            className='mt-4 flex font-bold items-center  gap-2 text-zinc-300 text-[.8vw] tracking-wider'>
                            VIEW  MORE <FaLongArrowAltRight />
                        </h2>
                    </div>
                    <img
                        className="mask-b-from-35%"
                        autoPlay
                        muted
                        loop
                        src="https://www.cristianoronaldo.com/assets/images/brand_erakulis.jpg?t=2067825244"
                        alt="" />
                </div>


                <div data-scroll data-scroll-speed="0.3s" className='w-[20vw]  rounded-md hover:bg-black shadow-2xl scale-110 relative overflow-hidden h-full hover:scale-125 transition-all .9s'>
                    <div
                        className='absolute px-2 bottom-5  z-50 text-zinc-300'>
                        <h2 className='text-[1.2vw] flex gap-2 mb-1.5 '>
                            <span className='font-bold '>CR7</span>
                            <span className='uppercase'>Fragrances</span>
                        </h2>
                        <h3
                            className='text-[1vw] opacity-90 font-medium leading-[1rem]'>
                            Define your own legacy with the NEW fragrance, A long-lasting scent.</h3>
                        <h2
                            className='mt-4 flex  items-center uppercase font-extrabold  gap-2 text-zinc-300 text-[.8vw] tracking-widest'>
                            Shop Now <FaLongArrowAltRight />
                        </h2>
                    </div>
                    <img
                        className="mask-b-from-35%"
                        autoPlay
                        muted
                        loop
                        src="https://www.cristianoronaldo.com/assets/images/brand_fragrances.jpg?t=3770778324"
                        alt="" />
                </div>


                <div data-scroll data-scroll-speed="0.1s" className='w-[20vw] hover:bg-zinc-900 rounded-md shadow-2xl scale-110 relative overflow-hidden h-full hover:scale-125  transition-all .9s'>
                    <div
                        className='absolute  px-2 bottom-5
                         z-50 text-zinc-300'>
                        <h2 className='text-[1.2vw] flex items-center gap-2 mb-1.5 '>
                            <span className='font-bold '>CR7</span>
                            <span className=' uppercase'>Footwear</span>
                        </h2>
                        <h3
                            className='text-[1vw] opacity-90 font-medium leading-[1rem]'>
                            A new footwear line that further enriches the whole collection and interprets </h3>
                        <h2
                            className='mt-4 flex  items-center uppercase font-extrabold  gap-2 text-zinc-300 text-[.8vw] tracking-widest'>
                            Shop Now <FaLongArrowAltRight />
                        </h2>
                    </div>

                    <img
                        className="mask-b-from-35%"
                        src="https://www.cristianoronaldo.com/assets/images/brand_footwear.jpg?t=892735"
                        alt="" />
                </div>

                
            

            </div>
        </div>
    )
}

export default Slider