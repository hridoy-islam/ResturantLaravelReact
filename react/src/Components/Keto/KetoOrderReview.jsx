// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useContext } from "react";
// import { toast } from "react-hot-toast";
import { userContext } from "../../Contexts/MainContext";
import { Link } from "react-router-dom";
const KetoOrderReview = () => {
    // const [paidFor, setPaidFor] = useState(false);
    // const [error, setError] = useState(null);
    const { order } = useContext(userContext)
    // const amount = 200;
    // const createOrder = (data, actions) => {
    //     console.log("Creating order for amount", amount);
    //     return actions.order
    //         .create({
    //             purchase_units: [
    //                 {
    //                     amount: {
    //                         value: amount
    //                     }
    //                 }
    //             ]
    //         })
    //         .then((order) => {
    //             console.log(order)
    //             return order;
    //             // post data to laravel api
    //         });
    // }

    // const onApprove = async (data, actions) => {
    //     const order = await actions.order.capture();
    //     handleApprove(order);
    // }

    // const handleApprove = (order) => {
    //     // Call backend function to fulfill order

    //     // if response is success
    //     if (order.status == "COMPLETED") {
    //         setPaidFor(true);
    //         toast.success('Thank you for your purchase!');
    //     }

    //     // Refresh user's account or subscription status

    //     // if response is error

    //     if (order.status !== "COMPLETED") {
    //         setError(true);
    //         toast.error('Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.');
    //     }

    // };




    // const onError = (err) => {
    //     setError(err);
    //     console.log(err);
    // }

    // if (error) {
    //     // Display error message, modal or redirect user to error page
    //     alert(error);
    // }
    // const onCancel = () => {
    //     // Display cancel message, modal or redirect user to cancel page or back to cart
    //     toast.error('Transaction is Cancelled')
    // }



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
                    {/* <p className="py-2  text-md font-medium">Meal Type: {order.meal[0]} + {order.meal[1]} </p> */}
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
            <div className="max-w-lg mx-auto container">
            <Link to='/payment'><button className="bg-primary text-white text-2xl px-6 py-3 my-6">Pay</button></Link>

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

export default KetoOrderReview;
