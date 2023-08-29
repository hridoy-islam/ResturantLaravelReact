import { useContext, useEffect, useState } from "react";
import { userContext } from "../../Contexts/MainContext";

const OrderDelivery = () => {
    const { setOrder, address, setAddress, apartment, setApartment, gmap, setGmap, deliveryinstruction, setDeliveryinstruction, date, setDate, city, setCity } = useContext(userContext)

    const [disabled, setDisable] = useState(true);

    const checkInputs = () => {
        if(address != null && apartment != null && gmap != null && deliveryinstruction != null && date != null && city != null){
            setDisable(false)
        }
    }

    useEffect(()=>{
        checkInputs()
    } , [address, apartment, gmap, deliveryinstruction, date, city])





    const handleAddress = (e) => {
        setAddress(e.target.value)
    }
    const handleApartment = (e) => {
        setApartment(e.target.value)
    }
    const handleGmap = (e) => {
        setGmap(e.target.value)
    }

    const handleDeliveryinstruction = (e) => {
        setDeliveryinstruction(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleCity = (e) => {
        setCity(e.target.value)
    }
    const handleNext = () => {
        let updatedValue = { step: 4 };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));
    }

    return (
        <div className="container mx-auto bg-white mb-12 py-12 rounded-xl">
            <div className="  px-10 rounded-lg">

                <h3 className="text-3xl text-primary font-bold mb-8">Delivery Information</h3>


                <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4 justify-between mt-4 my-4">
                    <label className="w-full"><span className="ml-1 font-normal">Address</span>
                        <input
                            onChange={handleAddress}
                            defaultValue={address}
                            required type="text" className="input input-bordered input-secondary w-full  mt-1" /></label>
                    <label className="w-full"><span className="ml-1 font-normal">Apartment Number</span>
                        <input
                            onChange={handleApartment}
                            defaultValue={apartment}
                            required type="text" className="input input-bordered input-secondary w-full  mt-1" /></label>

                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 justify-between gap-4 mt-4 my-4">
                    <label className="w-full"><span className="ml-1 font-normal">Google Maps Link</span>
                        <input onChange={handleGmap}
                            defaultValue={gmap} required type="text" className="input input-bordered input-secondary w-full  mt-1" /></label>

                    <label className="w-full"><span className="ml-1 font-normal">Delivery Instructions</span>
                        <input onChange={handleDeliveryinstruction}
                            defaultValue={deliveryinstruction} required type="text" className="input input-bordered input-secondary w-full  mt-1" /></label>

                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4 mt-4 my-4">
                    <label className="w-full "><span className="ml-1 font-normal">Starting Date</span>
                        <input onChange={handleDate}
                            defaultValue={date} type="date" required className="input input-bordered input-secondary w-full  mt-1" /></label>
                    <label className="w-full"><span className="ml-1 font-normal">City</span>
                        <select onChange={handleCity}
                            defaultValue={city} required className="input input-bordered input-secondary w-full  mt-1">
                            <option disabled>City</option>
                            <option value={'dhaka'}>Dhaka</option>
                            <option value={'ctg'}>Ctg</option>
                        </select>
                    </label>

                </div>
                <div className="mt-10">
                    <button disabled={disabled} onClick={handleNext} className="btn px-16 rounded-md  bg-primary text-white hover:bg-primary">Next</button>
                </div>

            </div>
        </div>
    );
};

export default OrderDelivery;
