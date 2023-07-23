import { useContext } from "react";
import { useForm } from "react-hook-form";
import { userContext } from "../../Contexts/MainContext";

import info_img from '../../assets/Healthy.png'

const DiabeticOrderDelivery = () => {
    const { register, handleSubmit } = useForm()
    const { order, setOrder } = useContext(userContext)
    const onSubmit = (data) => {
        let updatedValue = { step: 4, ...data };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));
    }


    return (
        <div className="container mx-auto grid grid-cols-2 gap-10">
            <div className="bg-green-50 p-10 rounded-lg">

                <h3 className="text-3xl text-primary font-bold">Delivery Information</h3>
                <p className="text-lg text-secondary font-medium mt-3 mb-6">We bring joy at your doorstep!</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-4 mt-4">
                        <label className="w-full">Starting Date
                            <input {...register("date")} type="date" className="input input-bordered input-accent w-full max-w-xs" /></label>
                        <label className="w-full">City
                            <select {...register("city")} className="input input-bordered input-accent w-full max-w-xs">
                                <option>City</option>
                                <option value={'dhaka'}>Dhaka</option>
                                <option value={'ctg'}>Ctg</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <label className="w-full">Address
                            <input {...register("address")} type="text" className="input input-bordered input-accent w-full max-w-xs" /></label>
                        <label className="w-full">Apartment/Villa Number *
                            <input {...register("apartment")} type="text" className="input input-bordered input-accent w-full max-w-xs" /></label>
                    </div>
                    <div className="flex gap-4 mt-4">
                        <label className="w-full">Google Maps Link *
                            <input {...register("gmap")} type="text" className="input input-bordered input-accent w-full max-w-xs" /></label>

                        <label className="w-full">Delivery Instructions (Optional)
                            <input {...register("deliveryinstruction")} type="text" className="input input-bordered input-accent w-full max-w-xs" /></label>

                    </div>
                    <div className="mt-4 ">
                        <button type="submit" className="btn text-white rounded-md bg-primary py-2 px-6 hover:bg-secondary hover:text-white">Next</button>
                    </div>
                </form>
            </div>
            <div >
                <img className="rounded-xl" src={info_img} alt="" />
            </div>
        </div>
    );
};

export default DiabeticOrderDelivery;
