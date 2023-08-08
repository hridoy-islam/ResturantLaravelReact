import { useContext } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../Contexts/MainContext";

import info_img from '../../assets/Healthy.png'

const WeightLossOrderDelivery = () => {
    const { register, handleSubmit } = useForm()
    const { order, setOrder } = useContext(userContext)
    const onSubmit = (data) => {
        let updatedValue = { step: 4, ...data };
        console.log(updatedValue)
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));
        console.log(order)
    }


    return (
        <div className="container mx-auto grid grid-cols-2 gap-10">
            <div className="  px-10 rounded-lg">

                <h3 className="text-3xl text-primary font-bold mb-8">Delivery Information</h3>
                {/* <p className="text-lg text-secondary font-medium mt-3 mb-6">We bring joy at your doorstep!</p> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-4 mt-4">
                        <label className="w-full ">Starting Date
                            <input {...register("date")} type="date" className="input input-bordered input-accent w-full max-w-xs mt-1" /></label>
                        <label className="w-full">City
                            <select {...register("city")} className="input input-bordered input-accent w-full max-w-xs mt-1">
                                <option>City</option>
                                <option value={'dhaka'}>Dhaka</option>
                                <option value={'ctg'}>Ctg</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <label className="w-full">Address
                            <input {...register("address")} type="text" className="input input-bordered input-accent w-full max-w-xs mt-1" /></label>
                        <label className="w-full">Apartment/Villa Number *
                            <input {...register("apartment")} type="text" className="input input-bordered input-accent w-full max-w-xs mt-1" /></label>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <label className="w-full">Google Maps Link *
                            <input {...register("gmap")} type="text" className="input input-bordered input-accent w-full max-w-xs mt-1" /></label>

                        <label className="w-full">Delivery Instructions (Optional)
                            <input {...register("deliveryinstruction")} type="text" className="input input-bordered input-accent w-full max-w-xs mt-1" /></label>

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

export default WeightLossOrderDelivery;
