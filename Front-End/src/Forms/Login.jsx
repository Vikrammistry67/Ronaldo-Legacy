import { useForm } from "react-hook-form";
import { loginUser } from "../Actions/UserAction";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const navigate = useNavigate();
    const { register, reset, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const loginHandler = (loginData) => {
        dispatch(loginUser(loginData));
        reset();
    };
    return (
        <div className="w-screen h-screen  flex-col flex items-center justify-center">
            <div className="w-full px-10 py-44 flex flex-col    items-start justify-start h-full">
                <h2 className="text-start text-[3vw] text-zinc-300 w-[80vw]">Login User.</h2>
                {/* <hr className="text-zinc-800 w-full mt-1.5 h-[1px]" /> */}
                <div className="w-full mt-3  flex items-center flex-col justify-center h-[50vh]  ">
                    <form onSubmit={handleSubmit(loginHandler)} className="w-full  flex items-center flex-col gap-6 justify-center">
                        <input {...register("email")} placeholder="Enter Your Email " className="rounded-md shadow-2xl px-5 bg-zinc-900 w-full h-[8.5vh]" type="email" />
                        <input {...register("password")} placeholder="Enter Your Password " className="rounded-md shadow-2xl px-5 bg-zinc-900 w-full h-[8.5vh]" type="password" />
                        <input className="rounded-md shadow-2xl cursor-pointer px-5 font-semibold text-[1.5vw] bg-emerald-800 w-full h-[8.5vh]" type="submit" value="Login" />
                        <h2 className="text-[1.4vw]">Don't have an account ? <span onClick={() => navigate("/register")} className="cursor-pointer text-blue-600 font-semibold">Register</span></h2>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login