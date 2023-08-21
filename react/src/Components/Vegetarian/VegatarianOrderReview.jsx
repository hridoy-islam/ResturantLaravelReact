// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useContext } from "react";
// import { toast } from "react-hot-toast";
import { userContext } from "../../Contexts/MainContext";
const VegatarianOrderReview = () => {
    const { order } = useContext(userContext)
    return (
        <>

            <div className="container mx-auto grid lg:grid-cols-1 gap-8 lg:pb-12">
                <div className=" bg-white shadow  rounded-2xl p-6">
                    <h2 className="text-3xl text-primary font-bold pb-6">Plan Information</h2>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <p className="py-2  text-md font-medium">Plan Name: </p>

                        <p className="py-2  text-md font-medium"> Deliveries per week: {order.days}</p>


                        <p className="py-2  text-md font-medium">Plan Duration:{order.duration} </p>

                        <p className="py-2  text-md font-medium">Meal Type:  </p>
                    </div>
                    {/* <p className="py-2  text-md font-medium">Meal Type: {order.meal[0]} + {order.meal[1]} </p> */}
                </div>
                <div className="bg-white rounded-2xl p-6">
                    <h2 className="text-3xl text-primary font-bold pb-6">Personal Information</h2>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <p className="py-2  text-md font-medium"> Name: {order.firstName} {order.lastName}</p>

                        <p className="py-2  text-md font-medium"> Email:{order.email} </p>

                        <p className="py-2  text-md font-medium">Mobile:{order.phone} </p>

                        <p className="py-2  text-md font-medium">Date of Birth: {order.dob} </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6">
                    <h2 className="text-3xl text-primary font-bold pb-6">Billing Information</h2>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <p className="py-2  text-md font-medium">Starting Date: {order.date}</p>

                        <p className="py-2  text-md font-medium"> City: {order.city}</p>

                        <p className="py-2  text-md font-medium"> Address:{order.address} </p>

                        <p className="py-2  text-md font-medium">Apartment/Villa Number:{order.apartment} </p>

                        <p className="py-2  text-md font-medium">Google Maps Link: {order.gmap} lorem30</p>
                        <p className="py-2  text-md font-medium">Delivery Instructions : {order.deliveryinstruction}</p>
                    </div>
                </div>
            </div >
            <div className="max-w-lg mx-auto container">

                {/* <PayPalScriptProvider options={{ "client-id": "test" }}>
                    <PayPalButtons
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                        onCancel={onCancel}
                    />
                </PayPalScriptProvider> */}
            </div>
        </>


    );
};

export default VegatarianOrderReview;
