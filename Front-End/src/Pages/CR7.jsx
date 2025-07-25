import React from 'react'
import { Outlet } from 'react-router-dom'

const CR7 = () => {

  return (
    <div className='text-white flex-col gap-10 bg-zinc-900 w-screen min-h-screen flex items-center justify-start'>
      <div className='w-full bg-yellow-300  h-[80vh]'>
        <img className='w-full h-full object-cover object-center' src="https://cr7fragrances.store/cdn/shop/files/CR7Fragrances_Banner_Website_05_1400x.png?v=1685528172" alt="" />
      </div>
      <div className='w-full min-h-screen '>
        <h2 className='text-[3vw] px-5 text-start text-zinc-400  w-full font-semibold'>Explore Every Official CR7 Product.</h2>
        <hr className='text-zinc-500 w-[90vw] ml-6' />
        <div className='w-full flex items-center overflow-y-scroll flex-wrap gap-4  py-8 p-5 h-full '>
          <div className='w-[23.1vw] bg-zinc-800 shadow-2xl h-[78vh] overflow-hidden'>
            <div className='w-full h-[40vh] '>
              <img className='w-full h-full object-cover object-center' src='https://cr7fragrances.store/cdn/shop/files/Legacy100ml_400x.png?v=1740492399' />
            </div>
            <div className='w-full py-2 px-5 h-[40vh]'>
              <h2 className='font-semibold'>From 35</h2>
              <h2 className='mt-2 '>CRISTIANO RONALDO LEGACY EAU DE PERFUME</h2>
              <button className='w-full mt-5 cursor-pointer font-semibold bg-emerald-700'>Add To cart</button>
              <button className='w-full mt-3 cursor-pointer font-semibold bg-zinc-950'>Buy Now</button>
            </div>
          </div>
          <Outlet />
          <div className='w-[23.1vw] bg-zinc-800 shadow-2xl h-[78vh] overflow-hidden'>
            <div className='w-full h-[40vh] '>
              <img className='w-full h-full object-cover object-center' src='https://cr7fragrances.store/cdn/shop/files/FREEE_ebf4aa54-bef5-482f-b5cc-5260248db5c7_400x.png?v=1707322652' />
            </div>
            <div className='w-full py-2 px-5 h-[40vh]'>
              <h2 className='font-semibold'>From 35</h2>
              <h2 className='mt-2 '>CRISTIANO RONALDO LEGACY EAU DE PERFUME</h2>
              <button className='w-full mt-5 cursor-pointer font-semibold bg-emerald-700'>Add To cart</button>
              <button className='w-full mt-3 cursor-pointer font-semibold bg-zinc-950'>Buy Now</button>
            </div>
          </div>

          <div className='w-[23.1vw] bg-zinc-800 shadow-2xl h-[78vh] overflow-hidden'>
            <div className='w-full h-[40vh] '>
              <img className='w-full h-full object-cover object-center' src='https://cr7fragrances.store/cdn/shop/files/Legacy100ml_400x.png?v=1740492399' />
            </div>
            <div className='w-full py-2 px-5 h-[40vh]'>
              <h2 className='font-semibold'>From 35</h2>
              <h2 className='mt-2 '>CRISTIANO RONALDO LEGACY EAU DE PERFUME</h2>
              <button className='w-full mt-5 cursor-pointer font-semibold bg-emerald-700'>Add To cart</button>
              <button className='w-full mt-3 cursor-pointer font-semibold bg-zinc-950'>Buy Now</button>
            </div>
          </div>

          <div className='w-[23.1vw] bg-zinc-800 shadow-2xl h-[78vh] overflow-hidden'>
            <div className='w-full h-[40vh] '>
              <img className='w-full h-full object-cover object-center' src='https://cr7fragrances.store/cdn/shop/files/Legacy100ml_400x.png?v=1740492399' />
            </div>
            <div className='w-full py-2 px-5 h-[40vh]'>
              <h2 className='font-semibold'>From 35</h2>
              <h2 className='mt-2 '>CRISTIANO RONALDO LEGACY EAU DE PERFUME</h2>
              <button className='w-full mt-5 cursor-pointer font-semibold bg-emerald-700'>Add To cart</button>
              <button className='w-full mt-3 cursor-pointer font-semibold bg-zinc-950'>Buy Now</button>
            </div>
          </div>


          <div className='w-[23.1vw] bg-zinc-800 shadow-2xl h-[78vh] overflow-hidden'>
            <div className='w-full h-[40vh] '>
              <img className='w-full h-full object-cover object-center' src='https://cr7fragrances.store/cdn/shop/files/Legacy100ml_400x.png?v=1740492399' />
            </div>
            <div className='w-full py-2 px-5 h-[40vh]'>
              <h2 className='font-semibold'>From 35</h2>
              <h2 className='mt-2 '>CRISTIANO RONALDO LEGACY EAU DE PERFUME</h2>
              <button className='w-full mt-5 cursor-pointer font-semibold bg-emerald-700'>Add To cart</button>
              <button className='w-full mt-3 cursor-pointer font-semibold bg-zinc-950'>Buy Now</button>
            </div>
          </div>

          <div className='w-[23.1vw] bg-zinc-800 shadow-2xl h-[78vh] overflow-hidden'>
            <div className='w-full h-[40vh] '>
              <img className='w-full h-full object-cover object-center' src='https://cr7fragrances.store/cdn/shop/files/Legacy100ml_400x.png?v=1740492399' />
            </div>
            <div className='w-full py-2 px-5 h-[40vh]'>
              <h2 className='font-semibold'>From 35</h2>
              <h2 className='mt-2 '>CRISTIANO RONALDO LEGACY EAU DE PERFUME</h2>
              <button className='w-full mt-5 cursor-pointer font-semibold bg-emerald-700'>Add To cart</button>
              <button className='w-full mt-3 cursor-pointer font-semibold bg-zinc-950'>Buy Now</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default CR7