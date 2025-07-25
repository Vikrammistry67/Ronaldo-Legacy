import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import "../stylesheet/home.css"
import { CgArrowLongRight } from "react-icons/cg";
import DRender from "../components/DRender"
import { Bloom, EffectComposer, EffectComposerContext, ToneMapping } from '@react-three/postprocessing'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
const Home = () => {
  // useGSAP(() => {
  //   let tl = gsap.timeline();
  //   gsap.registerPlugin(ScrollTrigger)
  //   tl.from(".canvas", {
  //     y: 1000,
  //     duration: 2,
  //     delay: 3.5,
  //     opacity: 0,
  //     ease: "power3.out",
  //   })


  //   tl.from(".h1Text", {
  //     y: 20,
  //     opacity: 0,
  //     delay: -1,
  //     stagger: 0.1,
  //     ease: "power4.out"
  //   })
  //   tl.from(".text-2", {
  //     y: 20,
  //     opacity: 0,
  //     stagger: 0.1,
  //     ease: "power4.in"
  //   })
  //   tl.from(".btn", {
  //     y: 20,
  //     opacity: 0,
  //     ease: "power4.i"
  //   })
  // })
  return (
    <div className='div-1  text-white w-screen h-screen  flex items-end   justify-center text-center'>
      <div className="text-div  flex items-center justify-end pb-12 gap-5 flex-col text-start px-10 w-[50vw] h-full ">
        <h2 className="h2-Text text-[5vw]   w-full flex-wrap flex gap-4 items-start text-start justify-start whitespace-nowrap leading-[4rem] font-bold">
          {"CR7 Fragrances — The Signature Scent of Cristiano Ronaldo".split(" ").map((elm, idx) => {
            return <span className="h1Text " key={idx}>{elm}</span>
          })}
        </h2>
        <h2 className="text-2 text-[1.5vw] opacity-70">Each fragrance captures a different aspect of Ronaldo's persona—sporty confidence, global charisma, and personal heritage_</h2>
        <div className=" w-full flex items-center justify-start">
          <button className="btn flex  px-8 bg-emerald-800 gap-3 items-center justify-between py-2 rounded-full font-semibold uppercase tracking-[.2vw]">CR7 Fragrances <CgArrowLongRight />
          </button>
        </div>
      </div>


      <div className="canvas-div   w-[50vw]  items-start py-1 justify-start h-full">
        <Canvas className="canvas w-full h-[95vh]" camera={{ fov: 25 }}>
          <OrbitControls />
          <ambientLight />
          <DRender />
          <EffectComposerContext>
            <Bloom
              mipmapBlur
              intensity={1}
              luminanceThreshold={0}
              luminanceSmoothing={0}
            />
            <ToneMapping adaptive />
          </EffectComposerContext>
        </Canvas>
      </div>
    </div>
  )
}

export default Home