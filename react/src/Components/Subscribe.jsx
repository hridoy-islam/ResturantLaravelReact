
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Subscribe = () => {
    const [errors, setErrors] = useState(null)
    const navigate = useNavigate()
    const { register,handleSubmit, reset, } = useForm();
    const onsubmit = data =>
    axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/subscribe`, data)
        .then(({ data }) => {
            if (data.success) {
                toast.success(data.message);
                navigate('/');
            }
            else {
                toast.error(data.message);
                navigate('/');
            }
            reset()
        })
        .catch(error => {
            const res = error.response;
            if (res && res.status === 422) {
                setErrors(res.data.errors);
            }
        });
    return (
        <div className="container lg:w-10/12 px-6 mx-auto py-12 my-24 lg:flex lg:justify-around rounded-xl bg-primary relative mb-[-100px] z-10" >
            <div className="lg:w-7/12 pl-8">
                <h2 className="text-4xl lg:w-3/4 text-white  font-bold pr-24 pb-4">SUBSCRIBE TO OUR NEWSLETTER</h2>
                <p className="text- text-white" >Get news on our latest products and ongoing updates.</p>
            </div>
            <form onSubmit={handleSubmit(onsubmit)} className="flex justify-between items-center lg:w-5/12 lg:mt-0 mt-8">
                <input type="email" className="rounded-full px-3  lg:py-4 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full sm:text-sm focus:ring-1" {...register("email", {required:"Email is required" })} placeholder="you@example.com"/>
                <button className="bg-secondary rounded-full ml-[-50px]  py-3.5 text-md font-medium px-8 text-white" type="submit" value="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default Subscribe;