import { useForm } from "react-hook-form";
import { registerUser } from "../Actions/UserAction";
import { useDispatch } from "react-redux"
import { nanoid } from "nanoid"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
const Register = () => {
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const registerHandler = (registerData) => {
    registerData.id = nanoid();
    registerData.isAdmin = false;
    dispatch(registerUser(registerData))
    toast.success("User registered Successfully !")
    reset()
  };
  return (
    <div className="w-screen h-screen  flex-col flex items-center justify-center">
      <div className="w-full px-10 py-25 flex flex-col gap-2 items-start justify-start h-full">
        <h2 className="text-start text-[3vw] text-zinc-200 w-[80vw]">Register User.</h2>
        <div className="w-full flex items-center mt-2 flex-col justify-center h-full  ">
          <form onSubmit={handleSubmit(registerHandler)} className="w-full  flex items-center flex-col gap-6 justify-center">
            <input {...register("username")} placeholder="Enter Your Username " className="rounded-md shadow-2xl px-5  bg-zinc-900 w-full h-[8vh]" type="text" />
            <input {...register("email")} placeholder="Enter Your Email " className="rounded-md shadow-2xl px-5 bg-zinc-900 w-full h-[8vh]" type="email" />
            <input {...register("password")} placeholder="Enter Your Password " className="rounded-md shadow-2xl px-5 bg-zinc-900 w-full h-[8vh]" type="password" />
            <input {...register("image")} placeholder="Enter Your Profile Image URL " className="rounded-md shadow-2xl px-5 bg-zinc-900 w-full h-[8vh]" type="url" />
            <input className="rounded-md shadow-2xl cursor-pointer px-5 font-semibold text-[1.5vw] bg-blue-900 w-full h-[8vh]" type="submit" value="Register" />
            <h2 className="text-[1.4vw]">Already have an account ? <span onClick={() => navigate("/login")} className="cursor-pointer text-blue-600 font-semibold">Login</span></h2>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register