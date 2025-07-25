import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import "../stylesheet/marquee.css"
const Marque = () => {
    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from(".text-1", {
            x: 800,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".text-1",
                start: "top 70%",
                scrub: 1,
            }
        })

        tl.from(".ht-2", {
            x: -800,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".ht-2",
                start: "top 90%",
                scrub: 1,
            }
        })

        tl.from(".text-3", {
            x: 800,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".text-3",
                start: "top 130%",
                scrub: 1,
            }
        })
    })
    return (
        <div className='w-screen leading-[22vh]   flex flex-col items-center justify-center h-screen'>
            <div className="webkit   flex items-center justify-center overflow-x-auto whitespace-nowrap  w-full  relative"><h2 className="text-1   text-[10vw] font-semibold whitespace-nowrap tracking-tighter uppercase">CR7 Legacy</h2></div>
            <div className="webkit flex items-center justify-center overflow-x-auto whitespace-nowrap  w-full  relative"><h2 className="ht-2  text-[10vw] font-semibold whitespace-nowrap tracking-tighter uppercase">CR7 Origins </h2></div>
            <div className="webkit   flex items-center justify-center overflow-x-auto whitespace-nowrap  w-full  relative"><h2 className="text-3   text-[10vw] font-semibold whitespace-nowrap tracking-tighter uppercase">CR7 Game On</h2></div>
        </div>
    )
}
export default Marque