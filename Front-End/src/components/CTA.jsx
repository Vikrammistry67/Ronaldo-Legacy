import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
const CTA = () => {
    useGSAP(() => {
        let tl = gsap.timeline();
        gsap.registerPlugin(ScrollTrigger)
        tl.from(".img", {
            y: 50,
            opacity: 0,
            duration: 2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".img",
                start: "top 50%",
                scrub: 2
            }
        })
        tl.from(".text-h2", {
            y: 30,
            duration: 1,
            ease: "expo.in",
            opacity: 0,
        })
        tl.from(".text-span", {
            y: 30,
            ease: "power4.in",
            opacity: 0,
            stagger: 0.1,
        })
        tl.from(".input-div", {
            y: 30,
            duration: 0.4,
            ease: "power4.in",
            opacity: 0,
            stagger: 0.1,
        })
        tl.from(".h2T", {
            y: 30,
            duration: 0.5,
            ease: "power4.in",
            opacity: 0,
            stagger: 0.1,
        })
    })
    return (
        <div className='w-screen h-screen   flex items-center justify-center'>
            <div className='w-[70vw]  gap-0 flex flex-col items-center justify-center '>
                <div className='img w-[16vw]   '>
                    <img src="./Images/ronaldo.png" alt="" />
                </div>
                <h2 className='text-h2 text-[3.3vw] font-semibold'>Score Precision Moves Like Ronaldo</h2>

                <div className=' mt-5 flex w-[44vw] opacity-65 leading-[1.5rem]  flex-wrap whitespace-nowrap gap-2 object-center justify-center '>
                    {"Subscribe my newsletter and don’t  miss any update on new products promotions or even career events.".split(" ").map((elm, index) => <span className='text-span text-[1.7vw] ' key={index}>{elm}</span>)}
                </div>
                <input
                    placeholder='Please Enter Your Email'
                    className='input-div w-[32vw] mt-10 px-30  shadow-2xl border-b-[.1px] border-b-emerald-600   h-12 rounded-full ' type="text" />
                <h2 className='h2T bg-emerald-900 h-[3rem] flex items-center justify-center rounded-full mt-5 w-[30vw] text-center'>SUBSCRIBE TO NEWSLETTER</h2>
            </div>
        </div>
    )
}
export default CTA