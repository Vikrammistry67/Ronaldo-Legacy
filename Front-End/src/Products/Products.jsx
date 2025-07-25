import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "../stylesheet/product.css"
const Products = () => {
    const navigate = useNavigate();
    const productss = useSelector(state => state.productsReducer.productData);

    return (
        <div className='w-screen min-h-screen flex flex-col py-32 gap-4 items-center px-10 justify-center'>
            <h2 className='created-div w-full text-start text-[2vw] text-zinc-300'>All Created Products are Here.</h2>
            <div className='main-div  w-full flex min-h-screen  flex-wrap gap-5 '>
                {productss.map((product, id) => {
                    return <div key={id} className='product-card w-[30vw]  rounded-md flex items-center justify-center flex-col h-[60vh] bg-zinc-950'>
                        <div className=' w-full overflow-hidden  h-[40%] bg-blue-800'><img className='w-full h-full object-cover object-center' src={product.image} /></div>
                        <div className='w-full flex flex-col gap-3.5 py-2 px-3 h-[60%] '>
                            <h2 className='text-2xl font-thin'>{product.product}</h2>
                            <div className='w-full h-16 flex  items-center justify-between '>
                                <h2 className='text-2xl flex font-semibold items-center gap-2 justify-center'><FaRupeeSign className="text-lg" /> {product.price}</h2>
                                <h2 className='w-[22%] flex font-semibold items-center justify-center h-8 rounded-xs bg-zinc-200'><p className='text-black font-semibold'>{product.discount}% OFF</p></h2>
                            </div>
                            <div className='w-full flex flex-col gap-3  py-1'>
                                <button className='w-full  rounded-md py-2 bg-emerald-500 font-bold'><h2 onClick={() => navigate(`/productDetails/${product.id}`)} className="text-xl">View Details</h2></button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Products