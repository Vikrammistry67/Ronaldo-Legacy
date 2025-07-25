import "./App.css"
import Navbar from "./components/Navbar"
import MainRoutes from "./AllRoutes/MainRoutes"
import HeroSection from "./components/HeroSection"
import Marque from "./components/Marque"
import Slider from "./components/Slider"
import Intracftion from "./components/Intraction"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { currentUser } from "./Actions/UserAction"
import { getProducts } from "./Actions/ProductAction"
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(currentUser());
  dispatch(getProducts())
  }, [])
  return (
    <div className="main w-screen h-screen">
      <MainRoutes />
      <Navbar />
      <HeroSection />
      <Marque />
      <Slider />
      <Intracftion />
      <CTA />
      <Footer />
    </div>
  )
}
export default App