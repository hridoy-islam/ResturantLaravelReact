import { useContext } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../Contexts/MainContext";

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
        console.log(order)
    }
    return (
        <div className="container mx-auto  bg-white mb-12 py-12 rounded-xl">
            <div className=" px-10  rounded-xl">

                <h3 className="text-3xl text-primary font-bold mb-8">Personal Information</h3>
                {/* <p className="text-lg text-secondary font-medium mt-3 mb-6">Tell us about yourself...</p> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-4 mt-4 my-4">
                    <label className="w-full"><span className="ml-1 font-normal">First Name</span>
                        <input {...register("firstName")} type="text" required className="input input-bordered input-secondary w-full mt-1 max-w-xs"  /></label>
                        <label className="w-full"><span className="ml-1 font-normal">Last Name</span>
                        <input {...register("lastName")} type="text" required className="input input-bordered input-secondary w-full mt-1 max-w-xs"
                             /></label>

                    </div>
                    <div className="flex gap-4 mt-4 my-4">
                    <label className="w-full"><span className="ml-1 font-normal">Email</span>
                        <input {...register("email")} type="email" required className="input input-bordered input-secondary w-full mt-1 max-w-xs"  /></label>
                        <label className="w-full"><span className="ml-1 font-normal">Phone Number</span>
                        <input {...register("phone")} type="phone" required className="input input-bordered input-secondary w-full mt-1 max-w-xs"
                             /></label>
                    </div>
                    <div className="flex gap-4 mt-4 my-4">
                    <label className="w-full"><span className="ml-1 font-normal">Birth Of Date</span>
                        <input type="date" {...register("dob")} required className="input input-bordered input-secondary w-full mt-1 max-w-xs" /></label>
                        <label className="w-full"><span className="ml-1 font-normal">Nationality</span>
                        <select {...register("nationality")} required className="input input-bordered input-secondary w-full mt-1 max-w-xs">
                            <option disabled>Select Nationality</option>
                            <option>Bangladesh</option>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option>Dubai</option>
                        </select></label>
                    </div>
                    {/* <div className="flex gap-4 mt-4">
                        
                    </div> */}
                    <div className="mt-10">
                        <button type="submit" className="btn px-16 rounded-md  bg-primary text-white hover:bg-primary">Next</button>
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

export default WeightLossCustomerInformation;
