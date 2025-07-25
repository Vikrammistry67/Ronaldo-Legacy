import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
const HeroSection = () => {
    const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
            wrapper: window,
            content: document.documentElement,
            lerp: 0.1,
            duration: 1.2,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            smoothTouch: false,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            normalizeWheel: true,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        },
    });

    return (
        <div className='w-screen flex overflow-hidden  items-center justify-center h-screen'>
            <div className="w-screen rounded-t-7xl relative  flex items-center justify-center h-screen">
                <video loop data-scroll data-scroll-speed="0.7" className="rounded-t-4xl absolute" muted autoPlay src="./Images/Legacy.mp4">
                </video>
            </div>
        </div>
    )
}

export default HeroSection