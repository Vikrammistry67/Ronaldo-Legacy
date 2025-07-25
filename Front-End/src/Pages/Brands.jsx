import React, { useRef, useState } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../stylesheet/brands.css';
import { Pagination } from 'swiper/modules';
import Navbar from '../components/Navbar';
const Brands = () => {
    return (
        <div className='w-screen flex items-center  justify-end h-screen'>

            <div className='w-full h-full  flex items-center  justify-center '>
                <Swiper
                    direction={'horizontal'}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className='flex items-center  justify-center '
                >
                    <SwiperSlide>
                        <div className="text-div text-white  px-5 py-3 flex shadow-2xl items-start gap-2  justify-start text-start flex-col absolute left-10 bottom-8 w-fit z-50">
                            <div className='z-50 text-white'>
                                <h2 className='text-white opacity-100m font-semibold opacity-95 '>WATER</h2>
                                <h2 className='font-bold tracking-[3px] uppercase'>URSU
                                </h2></div>
                            <h3 className='leading-5 opacity-85  font-normal'>URSU is much more than water... It is an inspiration to drink health and a lifestyle.

                            </h3>
                            <button className='flex text-xl tracking-wider items-center mt-2 w-[15vw] text-white bg-zinc-800 justify-center gap-3'>SHOP NOW <FaLongArrowAltRight /> </button>
                        </div>
                        <img className='w-full h-full object-cover object-center' src="https://www.cristianoronaldo.com/files/brands/ursu/brands_mobile_ursu.jpg" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="text-div text-white  px-5 py-3 flex shadow-2xl items-start gap-2  justify-start text-start flex-col absolute left-10 bottom-8 w-fit z-50">
                            <div className='z-50 text-white'>
                                <h2 className='text-white opacity-100m font-semibold opacity-95 '>CR7

                                </h2>
                                <h2 className='font-bold tracking-[3px] uppercase'>erakulis</h2></div>
                            <h3 className='leading-5 opacity-85  font-normal'>ERAKULIS® is an all-in-one wellness experience for Fitness, Nutrition and Mental Balance, founded by Cristiano Ronaldo.
                            </h3>
                            <h2 className='flex text-[1vw] tracking-wider items-center mt-2  text-white  justify-center gap-3'>SHOP NOW <FaLongArrowAltRight /> </h2>
                        </div>
                        <img className='w-full h-full object-cover object-center' src="	https://www.cristianoronaldo.com/files/brands/erakulis/brands_mobile_erakulis.jpg" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="text-div text-white  px-5 py-3 flex shadow-2xl items-start gap-2  justify-start text-start flex-col absolute left-10 bottom-8 w-fit z-50">
                            <div className='z-50 text-white'>
                                <h2 className='text-white opacity-100m font-semibold opacity-95 '>
                                </h2>
                                <h2 className='font-bold tracking-[3px] uppercase'>AVACR7</h2></div>
                            <h3 className='leading-5 opacity-85  font-normal'>Developed for CR7 and for athletes like you.</h3>
                            <h2 className='flex text-[1vw] tracking-wider items-center mt-2  text-white  justify-center gap-3'>SHOP NOW <FaLongArrowAltRight /> </h2>
                        </div>
                        <img className='w-full h-full object-cover object-center' src="	https://www.cristianoronaldo.com/files/brands/ava/brands_mobile_ava_20241212.jpg" alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="text-div text-white  px-5 py-3 flex shadow-2xl items-start gap-2  justify-start text-start flex-col absolute left-10 bottom-8 w-fit z-50">
                            <div className='z-50 text-white'>
                                <h2 className='text-white opacity-100m font-semibold opacity-95 '>CR7

                                </h2>
                                <h2 className='font-bold tracking-[3px] uppercase'>Fragrances</h2></div>
                            <h3 className='leading-5 opacity-85  font-normal'>Define your own legacy with the NEW fragrance, Cristiano Ronaldo Legacy. A long-lasting woody aromatic amber scent, inspired by Ronaldo's relentless drive and modern masculinity, this fragrance is a testament to greatness.</h3>
                            <h2 className='flex text-[1vw] tracking-wider items-center mt-2  text-white  justify-center gap-3'>SHOP NOW <FaLongArrowAltRight /> </h2>
                        </div>
                        <img className='w-full h-full object-cover object-center' src="https://www.cristianoronaldo.com/files/brands/fragrances/brands_mobile_fragrances_20250313.jpg" alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="text-div text-white  px-5 py-3 flex shadow-2xl items-start gap-2  justify-start text-start flex-col absolute left-10 bottom-8 w-fit z-50">
                            <div className='z-50 text-white'>
                                <h2 className='text-white opacity-100m font-semibold opacity-95 '>CR7

                                </h2>
                                <h2 className='font-bold tracking-[3px] uppercase'>Underwear</h2></div>
                            <h3 className='leading-5 opacity-85  font-normal'>Working with quality materials and many years of experience of producing underwear, the CR7 collections delivers a perfect and unique fit.</h3>
                            <button className='flex text-xl tracking-wider items-center mt-2 w-[15vw] text-white bg-zinc-800 justify-center gap-3'>SHOP NOW <FaLongArrowAltRight /> </button>
                        </div>
                        <img className='w-full h-full object-cover object-center' src="https://www.cristianoronaldo.com/files/brands/underwear/brands_mobile_underwear.jpg" alt="" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="text-div text-white  px-5 py-3 flex shadow-2xl items-start gap-2  justify-start text-start flex-col absolute left-10 bottom-8 w-fit z-50">
                            <div className='z-50 text-white'>
                                <h2 className='text-white opacity-100m font-semibold opacity-95 '>CR7
                                </h2>
                                <h2 className='font-bold tracking-[3px] uppercase'>Footwear</h2></div>
                            <h3 className='leading-5 opacity-85  font-normal'>A new footwear line that further enriches the whole collection and interprets the style of the most demanding and eccentric man.</h3>
                            <button className='flex text-xl tracking-wider items-center mt-2 w-[15vw] text-white bg-zinc-800 justify-center gap-3'>SHOP NOW <FaLongArrowAltRight /> </button>
                        </div>
                        <img className='w-full h-full object-cover object-center' src="https://www.cristianoronaldo.com/files/brands/footwear/brands_mobile_footwear.jpg" alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default Brands
