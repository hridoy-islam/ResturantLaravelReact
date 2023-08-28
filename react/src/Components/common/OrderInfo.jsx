import { useContext, useEffect, useState } from "react";
import { userContext } from "../../Contexts/MainContext";

const OrderInfo = () => {
    const { setOrder, setFirstName, firstName, lastName, setLastName, email, setEmail, phone, setPhone, dob, setDob, country, setCountry } = useContext(userContext)

    const [disabled, setDisable] = useState(true);

    const checkInputs = () => {
        if(firstName != null && lastName != null && email != null && phone != null && dob != null && country != null){
            setDisable(false)
        }
    }

    useEffect(()=>{
        checkInputs()
    } , [firstName, lastName, email, dob, phone, country])

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleEmail = (e)=> {
        setEmail(e.target.value)
    }

    const handlePhone =(e) => {
        setPhone(e.target.value)
    }

    const handleDob = (e) => {
        setDob(e.target.value)
    }

    const handleCountry = (e) => {
        setCountry(e.target.value)  
    }

    const handleNext = () => {
        let updatedValue = { step: 3 };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));
    }
    return (
        <div className="container mx-auto  bg-white mb-12 py-12 rounded-xl">
            <div className=" px-10  rounded-xl">
                <h3 className="text-3xl text-primary font-bold mb-8">Personal Information</h3>
                
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4 mt-4 my-4">
                        <label className=" w-full"><span className="ml-1 font-normal">First Name</span>
                            <input
                            onBlur={handleFirstName}
                            defaultValue={firstName}
                            type="text" required className="input input-bordered input-secondary w-full mt-1 " /></label>
                        <label className="w-full"><span className="ml-1 font-normal">Last Name</span>
                            <input 
                            onBlur={handleLastName}
                            defaultValue={lastName}
                            type="text" required className="input input-bordered input-secondary w-full mt-1 "
                            /></label>

                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4 mt-4 my-4">
                        <label className="w-full"><span className="ml-1 font-normal">Email</span>
                            <input
                            onBlur={handleEmail}
                            defaultValue={email}
                            type="email" required className="input input-bordered input-secondary w-full mt-1 " /></label>
                        <label className="w-full"><span className="ml-1 font-normal">Phone Number</span>
                            <input
                            onBlur={handlePhone}
                            defaultValue={phone}
                            type="phone" required className="input input-bordered input-secondary w-full mt-1 "
                            /></label>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 gap-4 mt-4 my-4">
                        <label className="w-full"><span className="ml-1 font-normal">Birth Of Date</span>
                            <input type="date"
                            onBlur={handleDob}
                            defaultValue={dob}
                            required className="input input-bordered input-secondary w-full mt-1 " /></label>
                        <label className="w-full"><span className="ml-1 font-normal">Nationality</span>
                            <select 
                            onChange={handleCountry}
                            defaultValue={country}
                            required className="input input-bordered input-secondary w-full mt-1 ">
                                <option disabled>Select Nationality</option>
                                <option>Bangladesh</option>
                                <option>India</option>
                                <option>Pakistan</option>
                                <option>Dubai</option>
                            </select></label>
                    </div>
                    <div className="mt-10">
                    <button 
                    disabled={disabled}
                    type="submit" onClick={handleNext} className="btn px-16 rounded-md  bg-primary text-white hover:bg-primary">Next</button>
                    </div>
            </div>
        </div>
    );
};

export default OrderInfo;
