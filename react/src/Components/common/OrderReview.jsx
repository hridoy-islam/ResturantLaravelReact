import { useContext } from "react";
import { userContext } from "../../Contexts/MainContext";
import { Link, Navigate, useLocation } from "react-router-dom";
const OrderReview = () => {
    const location = useLocation()
    const { order, firstName, lastName, email, dob, phone, country, deliveryinstruction, gmap, address, apartment, city, date, user } = useContext(userContext)
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return (
        <>
            <div className="container mx-auto grid lg:grid-cols-1 gap-8 lg:pb-12">
                <div className=" bg-white shadow  rounded-2xl p-6">
                    <h2 className="text-3xl text-primary font-bold pb-6">Plan Information</h2>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <p className="py-2  text-md font-medium">Plan Name : {order.plan}</p>

                        <p className="py-2  text-md font-medium">Plan Duration : {order.duration} Days</p>

                        <p className="py-2  text-md font-medium">Meal Type : {order.meal}  </p>
                        {
                            order?.snacks.added && <p className="py-2  text-md font-medium">Snacks: Yes  </p>
                        }

                        {
                            order?.breakFastLight.added && <p className="py-2  text-md font-medium">Breakfast Light : Yes  </p>
                            
                        }
                        {
                            order?.breakFastFull.added && <p className="py-2  text-md font-medium">Breakfast Full : Yes  </p>
                            
                        }
                    </div>
                </div>
                <div className="bg-white rounded-2xl p-6">
                    <h2 className="text-3xl text-primary font-bold pb-6">Personal Information</h2>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <p className="py-2  text-md font-medium"> Name : {firstName} {lastName}</p>

                        <p className="py-2  text-md font-medium"> Email : {email} </p>

                        <p className="py-2  text-md font-medium">Mobile : {phone} </p>

                        <p className="py-2  text-md font-medium">Date of Birth : {dob} </p>
                        <p className="py-2  text-md font-medium">Nationality : {country} </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6">
                    <h2 className="text-3xl text-primary font-bold pb-6">Billing Information</h2>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <p className="py-2  text-md font-medium">Starting Date : {date}</p>

                        <p className="py-2  text-md font-medium"> City : {city}</p>

                        <p className="py-2  text-md font-medium"> Address : {address} </p>

                        <p className="py-2  text-md font-medium">Apartment/Villa Number : {apartment} </p>
                        
                        <p className="py-2  text-md font-medium ">Delivery Instructions : {deliveryinstruction}</p>

                        <div className="py-2  text-md font-medium ">Google Maps :  <Link className="underline" to={gmap}>Link Here</Link> </div>
                    </div>
                </div>
            </div >
            <div className="max-w-lg mx-auto container">

                 
            </div>
        </>


    );
};

export default OrderReview;
