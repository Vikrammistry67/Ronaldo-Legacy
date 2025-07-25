import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
import { nanoid } from "nanoid"
import { toast } from "react-toastify";
import { getProducts } from "../Actions/ProductAction";
const CreateProduct = () => {
    const { register, reset, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const productHandler = (productData) => {
        productData.id = nanoid();
        dispatch(getProducts(productData))
        toast.success("producted Created Successfully")
        reset()
    };
    return (
        <div className="w-screen h-screen  flex-col flex items-center justify-center">
            <div className="w-full px-10 py-18 flex flex-col  items-start justify-start h-full">
                <h2 className="text-start text-[2.2vw] text-zinc-200 w-[80vw]">Create Product.</h2>
                <div className="w-full flex items-start flex-col justify-start mt-2 h-full  ">
                    <form onSubmit={handleSubmit(productHandler)} className="w-full  flex items-start flex-col gap-4 justify-start">
                        <input {...register("product")} placeholder="Enter Your product Name " className="outline-0 rounded-md shadow-2xl px-5  bg-zinc-900 w-full h-[8.5vh]" type="text" />
                        <input {...register("price")} placeholder="Enter Your Product Price " className="outline-0 rounded-md shadow-2xl px-5 bg-zinc-900 w-full h-[8.5vh]" type="number" />
                        <input {...register("image")} placeholder="Enter Your Product Image URL " className="outline-0 rounded-md shadow-2xl px-5 bg-zinc-900 w-full h-[8.5vh]" type="url" />
                        <input {...register("discount")} placeholder="discount do you want to give on your Product" className="outline-0 rounded-md shadow-2xl px-5 bg-zinc-900 w-full h-[8.5vh]" type="number" />
                        <input {...register("orignalPrice")} placeholder="Enter Orignal Price" className="outline-0 rounded-md shadow-2xl px-5 bg-zinc-900 w-full h-[8.5vh]" type="number" />
                        <input {...register("description")} placeholder="Enter Product Description" className="outline-0 rounded-md shadow-2xl px-5 bg-zinc-900 w-full h-[8.5vh]" type="text" />
                        <input className="rounded-md shadow-2xl cursor-pointer px-5 font-semibold text-[1.5vw] bg-teal-900 w-full h-[8.5vh]" type="submit" value="Create an product" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct