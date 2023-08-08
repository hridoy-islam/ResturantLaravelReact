import { useContext } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../Contexts/MainContext";
import info_img from '../../assets/Healthy.png'

const WeightLossCustomerInformation = () => {
    const { order, setOrder } = useContext(userContext)
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        let updatedValue = { step: 3, ...data };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));
    }
    return (
        <div className="container mx-auto grid grid-cols-2 gap-10">
            <div className=" px-10 py-6 rounded-xl">

                <h3 className="text-3xl text-primary font-bold mb-8">Tell us about yourself...</h3>
                {/* <p className="text-lg text-secondary font-medium mt-3 mb-6">Tell us about yourself...</p> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-4 mt-4">
                        <input {...register("firstName")} type="text" className="input input-bordered input-primary w-full max-w-xs" placeholder="First Name" />
                        <input {...register("lastName")} type="text" className="input input-bordered input-primary w-full max-w-xs"
                            placeholder="Last Name" />
                    </div>
                    <div className="flex gap-4 mt-4">
                        <input {...register("email")} type="email" className="input input-bordered input-primary w-full max-w-xs" placeholder="Email" />
                        <input {...register("phone")} type="phone" className="input input-bordered input-primary w-full max-w-xs"
                            placeholder="Phone" />
                    </div>
                    <div className="flex gap-4 mt-4">
                        <input type="date" {...register("dob")} className="input input-bordered input-primary w-full max-w-xs" />
                        <select {...register("nationality")} className="input input-bordered input-primary w-full max-w-xs">
                            <option>Select Nationality</option>
                        </select>
                    </div>
                    <div className="my-10">
                    <button type="submit" className="btn  py-2 px-6 rounded-md  bg-white text-primary border-2 border-primary hover:bg-gray-600 hover:border-gray-600 hover:text-white">Next</button>
                    </div>
                    <div className="border-b border-secondary"></div>
                </form>
            </div>
            {/* <div >
                <img className="rounded-xl" src={info_img} alt="" />
            </div> */}
        </div>
    );
};

export default WeightLossCustomerInformation;
