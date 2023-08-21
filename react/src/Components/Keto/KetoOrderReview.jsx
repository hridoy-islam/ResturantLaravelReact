// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useContext } from "react";
// import { toast } from "react-hot-toast";
import { userContext } from "../../Contexts/MainContext";
const KetoOrderReview = () => {
    const { order } = useContext(userContext)
    return (
        <>

            <div className="container mx-auto grid lg:grid-cols-3 gap-8 lg:py-12">
                <div className=" bg-green-100 shadow shadow-slate-400 rounded-2xl p-6">
                    <h2 className="text-3xl text-primary font-bold pb-6">Plan Information</h2>
                    <p className="py-2  text-md font-medium">Plan Name:
                        GlutenAndDairyFreeDiet </p>

                    <p className="py-2  text-md font-medium"> Deliveries per week: {order.days}</p>

                    <p className="py-2  text-md font-medium"> Off-Day(s):{order.offday} </p>

                    <p className="py-2  text-md font-medium">Plan Duration:{order.duration} </p>

                    <p className="py-2  text-md font-medium">Meal Type:  </p>

                </div>
                <div className="bg-green-100 shadow shadow-slate-400 rounded-2xl p-6">
                    <h2 className="text-3xl text-primary font-bold pb-6">Personal Information</h2>
                    <p className="py-2  text-md font-medium">First Name: {order.firstName}</p>

                    <p className="py-2  text-md font-medium"> Last Name: {order.lastName}</p>

                    <p className="py-2  text-md font-medium"> Email:{order.email} </p>

                    <p className="py-2  text-md font-medium">Mobile:{order.phone} </p>

                    <p className="py-2  text-md font-medium">Date of Birth: {order.dob} </p>
                </div>

                <div className="bg-green-100 shadow shadow-slate-400 rounded-2xl p-6">
                    <h2 className="text-3xl text-primary font-bold pb-6">Delivery Information</h2>
                    <p className="py-2  text-md font-medium">Starting Date: {order.date}</p>

                    <p className="py-2  text-md font-medium"> City: {order.city}</p>

                    <p className="py-2  text-md font-medium"> Address:{order.address} </p>

                    <p className="py-2  text-md font-medium">Apartment/Villa Number:{order.apartment} </p>

                    <p className="py-2  text-md font-medium">Google Maps Link: {order.gmap} </p>
                    <p className="py-2  text-md font-medium">Delivery Instructions : {order.deliveryinstruction}</p>
                </div>
            </div >
        </>


    );
};

export default KetoOrderReview;
