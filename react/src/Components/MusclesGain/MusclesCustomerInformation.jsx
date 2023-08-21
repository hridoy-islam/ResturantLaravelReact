import { useContext } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../Contexts/MainContext";

const MusclesCustomerInformation = () => {
    const { setOrder } = useContext(userContext)
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
        <div className="container mx-auto  bg-white my-12 py-12 rounded-xl">
            <div className=" px-10  rounded-xl">

                <h3 className="text-3xl text-primary font-bold mb-8">Personal Information</h3>
                {/* <p className="text-lg text-secondary font-medium mt-3 mb-6">Tell us about yourself...</p> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-4 mt-4 my-8">
                        <input {...register("firstName")} type="text" required className="input input-bordered input-primary w-full max-w-xs" placeholder="First Name" />
                        <input {...register("lastName")} type="text" required className="input input-bordered input-primary w-full max-w-xs"
                            placeholder="Last Name" />
                        <input {...register("email")} type="email" required className="input input-bordered input-primary w-full max-w-xs" placeholder="Email" />
                    </div>
                    <div className="flex gap-4 mt-4 ">

                        <input {...register("phone")} type="phone" required className="input input-bordered input-primary w-full max-w-xs"
                            placeholder="Phone" />
                        <input type="date" {...register("dob")} required className="input input-bordered input-primary w-full max-w-xs" />
                        <select {...register("nationality")} required className="input input-bordered input-primary w-full max-w-xs">
                            <option>Select Nationality</option>
                        </select>
                    </div>
                    {/* <div className="flex gap-4 mt-4">

                    </div> */}
                    <div className="mt-10">
                        <button type="submit" className="btn  px-6 rounded-md  bg-white text-primary border-2 border-primary hover:bg-gray-600 hover:border-gray-600 hover:text-white">Next</button>
                    </div>
                    {/* <div className="border-b border-secondary"></div> */}
                </form>
            </div>
            {/* <div >
                <img className="rounded-xl" src={info_img} alt="" />
            </div> */}
        </div>
    );
};

export default MusclesCustomerInformation;
