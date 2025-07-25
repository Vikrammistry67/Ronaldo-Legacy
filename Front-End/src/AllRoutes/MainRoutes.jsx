import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home"
import Career from "../Pages/Career"
import Brands from "../Pages/Brands"
import Museum from "../Pages/Museum"
import Partners from "../Pages/Partners"
import CR7 from "../Pages/CR7"
import Register from "../forms/Register"
import Login from '../forms/Login'
import CreateProduct from "../Admin/CreateProduct"
import Products from '../Products/Products'
import ProductDetails from '../Products/ProductDetails'

const MainRoutes = () => {
  return (
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cr7' element={<CR7 />} />
        <Route path='/career' element={<Career />} />
        <Route path='/brands' element={<Brands />} />
        <Route path='/museum' element={<Museum />} />
        <Route path='/partners' element={<Partners />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/allProducts' element={<Products />} />
        <Route path='/productDetails/:id' element={< ProductDetails />} />
        <Route path='/admin/createProduct' element={<CreateProduct />} />
      </Routes>
    </div>
  )
}

export default MainRoutes