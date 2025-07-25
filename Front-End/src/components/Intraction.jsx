import { FaLongArrowAltRight } from "react-icons/fa";
import "../stylesheet/Intraction.css"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Intraction = () => {
    useGSAP(() => {
        let tl = gsap.timeline();
        tl.from(".first-div", {
            x: -500,
            opacity: 0,
            scrollTrigger: {
                trigger: ".first-div",
                scrub: 1,
                start: "top 100%",
            }
        })

        tl.from(".second-div", {
            x: 500,
            opacity: 0,
            scrollTrigger: {
                trigger: ".first-div",
                scrub: 1,
                start: "top 60%"
            }

        })
    })
    return (
        <div className='w-screen relative h-screen  flex items-center  justify-center'>
            <div className='first-div  w-[50vw] flex items-start px-7 justify-start h-full '>
                <div data-scroll data-scroll-speed="0.5" className='w-[45vw]   overflow-hidden flex flex-col gap-5  h-[80vh] '>
                    <video className=' w-full h-full object-cover object-center' muted loop autoPlay src="https://www.cristianoronaldo.com/files/highlights/CR7_WebsiteHighlights-Portugal_desktop.mp4"></video>
                    <div className="w-[18vw] flex items-center justify-center gap-2 cursor-pointer font-semibold overflow-hidden rounded-full h-[8vh] bg-emerald-700 shadow-2xl">
                        <h2>CAREER HIGHLIGHTS</h2>
                        <FaLongArrowAltRight />
                    </div>
                </div>
            </div>

            <div className='w-[50vw] overflow-hidden relative flex items-end px-7  justify-end h-full '>
                <div data-scroll data-scroll-speed="0.9" className='second-div  w-[45vw] overflow-hidden  flex flex-col gap-5 items-start justify-start h-[80vh] '>
                    <video className=' w-full h-full object-cover object-center' muted loop autoPlay src="https://www.cristianoronaldo.com/files/campaigns/CR7Life-OpeningMuseum.mp4"></video>
                    <div className="w-[18vw] cursor-pointer font-semibold flex items-center justify-center gap-3 px-10 rounded-full h-[8vh] bg-yellow-600 shadow-2xl">
                        <h2>CR7Life Museum</h2>
                        <FaLongArrowAltRight />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Intraction