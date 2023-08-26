import { useContext } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../Contexts/MainContext";

const OrderDelivery = () => {
    const { register, handleSubmit } = useForm()
    const { setOrder } = useContext(userContext)
    const onSubmit = (data) => {
        let updatedValue = { step: 4, ...data };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));
    }


    return (
        <div className="container mx-auto bg-white mb-12 py-12 rounded-xl">
            <div className="  px-10 rounded-lg">

                <h3 className="text-3xl text-primary font-bold mb-8">Delivery Information</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    
                    <div className="flex gap-4 justify-between mt-4 my-4">
                    <label className="w-full"><span className="ml-1 font-normal">Address</span>
                            <input {...register("address")} required type="text" className="input input-bordered input-secondary w-full max-w-xs mt-1" /></label>
                    <label className="w-full"><span className="ml-1 font-normal">Apartment Number</span>
                            <input {...register("apartment")} required type="text" className="input input-bordered input-secondary w-full max-w-xs mt-1" /></label>

                    </div>
                    <div className="flex justify-between gap-4 mt-4 my-4">
                        <label className="w-full"><span className="ml-1 font-normal">Google Maps Link</span>
                            <input {...register("gmap")} required type="text" className="input input-bordered input-secondary w-full max-w-xs mt-1" /></label>

                        <label className="w-full"><span className="ml-1 font-normal">Delivery Instructions</span>
                            <input {...register("deliveryinstruction")} required type="text" className="input input-bordered input-secondary w-full max-w-xs mt-1" /></label>

                    </div>
                    <div className="flex gap-4 mt-4 my-4">
                        <label className="w-full "><span className="ml-1 font-normal">Starting Date</span>
                            <input {...register("date")} type="date" required className="input input-bordered input-secondary w-full max-w-xs mt-1" /></label>
                        <label className="w-full"><span className="ml-1 font-normal">City</span>
                            <select {...register("city")} required className="input input-bordered input-secondary w-full max-w-xs mt-1">
                                <option disabled>City</option>
                                <option value={'dhaka'}>Dhaka</option>
                                <option value={'ctg'}>Ctg</option>
                            </select>
                        </label>
                       
                    </div>
                    <div className="mt-10">
                    <button type="submit" className="btn px-16 rounded-md  bg-primary text-white hover:bg-primary">Next</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default OrderDelivery;
