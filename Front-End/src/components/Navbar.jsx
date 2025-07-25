import { NavLink, useNavigate } from "react-router-dom"
import { useGSAP } from "@gsap/react";
import { RiMenu3Fill } from "react-icons/ri";
import { useSelector } from "react-redux"
import "../stylesheet/Navbar.css"
import gsap from "gsap";
import { useRef, useState } from "react";

const Navbar = () => {
    const users = useSelector(state => state.userReducer.userData);
    const navigate = useNavigate();
    const myElementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    // useGSAP(() => {
    //     let tl = gsap.timeline();
    //     tl.from(".logo-img ", {
    //         y: -30,
    //         duration: 2,
    //         opacity: 0,
    //         ease: "power4.inOut"

    //     })
    //     tl.from(".nav-links h2", {
    //         y: -20,
    //         duration: 1,
    //         opacity: 0,
    //         stagger: 0.1,
    //         ease: "power4.in"
    //     })

    // })
    const toggleVisibility = () => {
        if (myElementRef.current) {
            if (isVisible) {
                myElementRef.current.style.display = 'none';
            } else {
                myElementRef.current.style.display = 'block';
            }
            setIsVisible(!isVisible);
        }
    };
    return (
        <div
            className="nav w-screen  absolute top-0 py-8 px-10 text-white h-10 
            flex items-center justify-between">
            <div ref={myElementRef} className="menu-div">
                {users ?
                    <>
                        <h2 onClick={() => toggleVisibility} className="menu text-white"><RiMenu3Fill /></h2>
                        <NavLink className="nav-li hover:border-b-2 pb-1 tracking-[3px] text-[1vw] transition-[.5s eas]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/cr7"><h2 style={{ color: "white", zIndex: 999999999999 }}>CR7</h2></NavLink>
                        <NavLink className="nav-li hover:border-b-2  pb-1 tracking-[3px] text-[1vw]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/career"><h2 style={{ color: "white" }}>CAREER HIGHLIGHTS</h2></NavLink>
                        <NavLink className="nav-li hover:border-b-2 pb-1 tracking-[3px] text-[1vw] transition-[.5s eas]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/brands"><h2 style={{ color: "white" }}>BRANDS</h2></NavLink>
                        <NavLink className="nav-li hover:border-b-2 pb-1 tracking-[3px] text-[1vw] transition-[.5s eas]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/museum"><h2 style={{ color: "white" }}>MUSEUM</h2></NavLink>
                        <NavLink className="nav-li hover:border-b-2 pb-1 tracking-[3px] text-[1vw] transition-[.5s eas]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/partners"><h2 style={{ color: "white" }}>PARTNERS</h2></NavLink>
                        <NavLink className="nav-li  font-bold uppercase tracking-[3px] text-[1vw]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/allproducts"><h2 style={{ color: "white" }}>Products</h2></NavLink>
                        <NavLink className="nav-li  font-bold uppercase tracking-[3px] text-[1vw]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/admin/createProduct"> <h2 className="bg-emerald-800 px-5 py-1.5 rounded-md" style={{ color: "white" }}>Create products</h2></NavLink>
                    </>
                    :
                    <>
                        <NavLink className=" font-bold uppercase tracking-[3px] text-[1vw]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/register"> <h2 className="bg-emerald-800 px-5 py-1.5 rounded-md" style={{ color: "white" }}>Register</h2></NavLink>
                    </>
                }

            </div>
            <div onClick={() => navigate("/")} className="logo-img w-[25vw] flex items-center px-2 justify-start  h-full"><img className="logo-img w-32" src="https://www.cristianoronaldo.com/assets/logos/cr7.svg" alt="" /> </div>
            <div className="nav-links flex w-[75vw] items-center justify-evenly text-amber-400">
                {users ?
                    <>
                        <NavLink className="nav-li hover:border-b-2 pb-1 tracking-[3px] text-[1vw] transition-[.5s eas]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/cr7"><h2 style={{ color: "white", zIndex: 999999999999 }}>CR7</h2></NavLink>
                        <NavLink className="nav-li hover:border-b-2  pb-1 tracking-[3px] text-[1vw]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/career"><h2 style={{ color: "white" }}>CAREER HIGHLIGHTS</h2></NavLink>
                        <NavLink className="nav-li hover:border-b-2 pb-1 tracking-[3px] text-[1vw] transition-[.5s eas]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/brands"><h2 style={{ color: "white" }}>BRANDS</h2></NavLink>
                        <NavLink className="nav-li hover:border-b-2 pb-1 tracking-[3px] text-[1vw] transition-[.5s eas]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/museum"><h2 style={{ color: "white" }}>MUSEUM</h2></NavLink>
                        <NavLink className="nav-li hover:border-b-2 pb-1 tracking-[3px] text-[1vw] transition-[.5s eas]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/partners"><h2 style={{ color: "white" }}>PARTNERS</h2></NavLink>
                        <NavLink className="nav-li  font-bold uppercase tracking-[3px] text-[1vw]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/allproducts"><h2 style={{ color: "white" }}>Products</h2></NavLink>
                        <NavLink className="nav-li  font-bold uppercase tracking-[3px] text-[1vw]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/admin/createProduct"> <h2 className="bg-emerald-800 px-5 py-1.5 rounded-md" style={{ color: "white" }}>Create products</h2></NavLink>
                        <h2 className="menu text-white"><RiMenu3Fill /></h2>
                    </>
                    :
                    <>
                        <NavLink className=" font-bold uppercase tracking-[3px] text-[1vw]" style={(e) => e.isActive ? { color: "lightgray" } : {}} to="/register"> <h2 className="bg-emerald-800 px-5 py-1.5 rounded-md" style={{ color: "white" }}>Register</h2></NavLink>
                    </>
                }



            </div>

        </div>
    )
}

export default Navbar

