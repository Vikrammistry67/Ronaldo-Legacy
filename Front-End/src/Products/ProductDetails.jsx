import { useForm } from 'react-hook-form';
import "../stylesheet/productDetail.css"
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteProduct, updateProduct } from '../Actions/ProductAction';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const products = useSelector(state => state.productsReducer.productData);
    const Allproducts = products?.find((product) => product.id == id);
    console.log(Allproducts);
    const { register, reset, handleSubmit } = useForm({
        defaultValues: {
            image: Allproducts?.image,
            discount: Allproducts?.discount,
            orignalPrice: Allproducts?.orignalPrice,
            price: Allproducts?.price,
            description: Allproducts?.description,
        }
    });
    const updateHandler = (updateProductData) => {
        dispatch(updateProduct(id, updateProductData))
        toast.success("producted Updated Successfully")
        reset()
    };

    const deleteHandler = () => {
        dispatch(deleteProduct(id));
        toast.error("Product Deleted Successfully ")
    }
    return Allproducts ? (
        <div className="w-screen h-screen  flex-col flex items-center justify-center">
            <div className="w-full px-10 b  flex  items-center py-10 justify-between h-full">
                <div className='w-1/2 mt-16 flex flex-col items-center justify-center'>
                    <div className="w-full flex items-start flex-col  justify-start h-full  ">
                        <form onSubmit={handleSubmit(updateHandler)} className="w-full  flex items-start flex-col gap-10 justify-start">
                            <input {...register("product")} placeholder="Your Product Name " className="rounded-lg outline-0 leading-none py-3 border-b-[.1px] border-zinc-600 shadow-2xl px-5  w-full h-[8.5vh]" type="text" />
                            <input {...register("price")} placeholder="Your Product Price " className="rounded-lg outline-0 leading-none py-3 border-b-[.1px] border-zinc-600 shadow-2xl px-5  w-full h-[8.5vh]" type="number" />
                            <input {...register("image")} placeholder="Your Product Image URL " className="rounded-md outline-0 shadow-2xl py-3 px-5 leading-0 border-b-[.1px] border-zinc-600 w-full h-[8.5vh]" type="url" />
                            <input {...register("discount")} placeholder="discount do you want to give omn your Product" className="rounded-md py-3 outline-0 shadow-2xl px-5 leading-0 border-b-[.1px] border-zinc-600 w-full h-[8.5vh]" type="text" />
                            <input type="submit" value="Update Product" className="rounded-md outline-0 shadow-2xl text-white cursor-pointer px-5 font-bold text-[1.5vw] bg-zinc-700 w-full h-[8.5vh]" />
                        </form>
                        <button onClick={deleteHandler} className='rounded-md outline-0 shadow-2xl text-white cursor-pointer px-5 font-bold text-[3vw] bg-red-800  w-full h-[8.5vh]'>Delete Product</button>
                    </div>
                </div>

                <div className=' w-[43%] gap-4 flex rounded-xs items-center mt-16  flex-col h-[67vh] '>
                    <div className='w-full overflow-hidden h-[70%] bg-blue-950'>
                        <img className='w-full h-full object-cover object-center' src={Allproducts.image} />
                    </div>
                    <div className='w-full flex items-center justify-start gap-3 h-10'>
                        <h2 className='text-[40px] font-thin tracking-[5px] opacity-65'>{Allproducts.product}</h2>
                        <h2>{Allproducts.description}</h2>
                    </div>
                    <div className='w-full px-1 mt-5 rounded-xs flex items-center justify-evenly  gap-1  h-12'>
                        <div className=' w-[33%] flex items-center gap-3 justify-center h-full'>
                            <div className='flex-col  items-center'>
                                <p className='text-emerald-600 font-semibold'>Limited time Discount</p>
                                <div className='flex items-center justify-between'>
                                    <FaRupeeSign className='text-lg' />
                                    <h2 className='text-3xl'>{Allproducts.price}</h2>
                                    <h2 className='flex items-cente justify-center font-thin text-xl ml-3'>(+ GST)</h2>
                                </div>
                            </div>
                        </div>
                        <div className=' text-zinc-400 font-semibold  gap-1 text-2xl flex items-end px-8 justify-start w-[43%] h-full'>
                            <div className='flex items-center'>
                                <FaRupeeSign className='text-lg' />
                                <del>{Allproducts.orignalPrice}</del>
                            </div>
                        </div>
                        <div className='w-[20%] flex items-start justify-center h-full'><h2 className='px-2.5 rounded-xs text-black font-semibold py-0.5 bg-zinc-300'>{Allproducts.discount}% OFF</h2></div>
                    </div>
                </div>
            </div>
        </div>
    ) : <div className='flex text-zinc-400 w-[25vw] h-[20vh] font-thin text-5xl absolute top-32 left-[40%] items-center justify-center gap-10'>
        <h2>Loading</h2>
        <h2 className='loader mt-10'></h2>
    </div>
}

export default ProductDetails
