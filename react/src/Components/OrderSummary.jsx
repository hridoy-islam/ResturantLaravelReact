import { useContext, useEffect, useState } from "react";
import { userContext } from "../Contexts/MainContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";




const OrderSummary = () => {
    
    const { order, firstName, lastName, email, dob, phone, country, deliveryinstruction, gmap, address, apartment, city, date, setOrder, setFirstName, setLastName, setEmail, setDob, setPhone, setCountry, setDeliveryinstruction, setGmap, setAddress, setApartment, setCity, setDate, user } = useContext(userContext)
    const [payType, setPayType] = useState('')
    const breakFastLight = order.duration * order.breakFastLight.price;
    const breakFastFull = order.duration * order.breakFastFull.price;
    const snacksPrice = order.duration * order.snacks.price;
    const mealPrice = order.duration * order.basePrice * order.meal;
    const navigate = useNavigate()

    const [disabled, setDisable] = useState(true);
    const userEmail = user.email
    const data = {
        firstName, lastName, email, dob, phone, country, deliveryinstruction, gmap, address, apartment, city, date, payType, userEmail
    }
    const orderData = { ...order, ...data }

    const resetData = () => {
        let updatedValue = { plan: '',
        step: 0,
        duration: 0,
        meal: 0,
        price: 0,
        basePrice: 0,
        snacks: {
            price: 0,
            added: false,
        },
        breakFastLight: {
            price: 0,
            added: false,
        },
        breakFastFull: {
            price: 0,
            added: false,
        }, };
        setOrder(
            ...updatedValue
        );
        setFirstName(null);
        setLastName(null);
        setEmail(null)
        setDob(null);
        setPhone(null);
        setCountry(null);
        setDeliveryinstruction(null)
        setGmap(null);
        setAddress(null);
        setApartment(null);
        setCity(null)
        setDate(null);
    }

    const checkInputs = () => {
        if (order.step == 4) {
            setDisable(false)
        }
    }

    useEffect(() => {
        checkInputs()
    }, [order])

    // const checkout = async () => {
         

    //     const stripe = await loadStripe("pk_test_51NcNz2IAO3eCB4qJOsMuDggP29ab9oDnshYEg6QGQHKNYQLTjkmIULq5bGPRqq1tOVyaWdoY3M4Oi6smb3unkjt200VtB3O92q");

    //     const headers = {
    //         "Content-Type": "application/json",
    //     };

    //     const response = await fetch(
    //         `${import.meta.env.VITE_BACKEND_API_URL}/create-checkout-session`,
    //         {
    //             method: "POST",
    //             headers: headers,
    //             body: JSON.stringify(orderData),
    //         }
    //     );

    //     const session = await response.json();

    //     const result = stripe.redirectToCheckout({
    //         sessionId: session.id,
    //     });

    //     if (result.error) {
    //         console.log(result.error);
    //     }


    // }

    const checkPayType = (data) => {
        setPayType(data)
    }

    const codCheckout = async () => {

        const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/order`, orderData);
        if (response.data.success) {
            navigate(`/success`);
            resetData();
        }
        else {
            toast.error('error')
        } 
    }

    return (
        <div className="my-12 bg-white p-8 rounded-xl sticky top-20">
            <h2 className="text-3xl text-primary font-bold px-4">Order Summary</h2>
            <p className="text-sm font-medium px-4 py-2 ">We have summarized your subscription preferences here.</p>
            <div>
                <h3 className="text-xl font-bold bg-[#cde4b3] px-3 mt-6 mb-3">Plan Preferences</h3>
                <p className="text-sm font-medium px-4 py-1">Choosed Plan : <b>{order.plan}</b></p>
                <p className="text-sm font-medium px-4 py-1">Plan  For : <b>{order.duration} days</b></p>
                <p className="text-sm font-medium px-4 py-1">Choosed Meal Type : <b>{order.meal}</b></p>

            </div>
            <div>
                <h3 className="text-xl font-bold bg-[#cde4b3] px-3 mt-6 mb-6">Price Details</h3>

                <div className="flex justify-between mx-4 my-2">
                    <p className="text-sm font-semibold">Meal Price</p>
                    <p className="text-sm font-bold">{mealPrice} AED</p>
                </div>
                {
                    order.breakFastLight.added &&
                    <div className="flex justify-between mx-4 my-2">
                        <p className="text-sm font-semibold">Breakfast Light</p>
                        <p className="text-sm font-bold">{breakFastLight} AED</p>
                    </div>
                }
                {
                    order.breakFastFull.added &&
                    <div className="flex justify-between mx-4 my-2">
                        <p className="text-sm font-semibold">Breakfast Full</p>
                        <p className="text-sm font-bold">{breakFastFull} AED</p>
                    </div>
                }
                {
                    order.snacks.added &&
                    <div className="flex justify-between mx-4 my-2">
                        <p className="text-sm font-semibold">Snakcs Price</p>
                        <p className="text-sm font-bold">{snacksPrice} AED</p>
                    </div>
                }
                <div className="mt-4">
                    <h2 className="text-sm font-normal">Do you have any coupon?</h2>
                    <input
                        id="coupon"
                        name="coupon"
                        type="coupon"
                        className="block w-full rounded-md border-0 mt-4 py-1 text-gray-900 shadow-sm ring-1 ring-secondary ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 px-2"
                    />
                    <button className="bg-outline text-secondary border-2 border-primary w-full text-md font-medium px-6 py-1 mt-4 mb-6 rounded-lg">Apply Coupon</button>
                </div>
                <div className="flex justify-between mx-4 my-4 pt-2 border-t-2">
                    <p className="text-md font-extrabold">Total</p>
                    <p className="text-md font-extrabold">{order.price} AED</p>
                </div>

                <label className="block text-sm font-medium leading-6 text-gray-900">
                        <input className="mr-2" defaultChecked onChange={() => checkPayType('cod')} type="radio" name="paymentType" />
                        Cash On Delivery
                    </label>

                {/* <div className="flex flex-col">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        <input className="mr-2" defaultChecked onChange={() => checkPayType('cod')} type="radio" name="paymentType" />
                        Cash On Delivery
                    </label>

                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        <input className="mr-2" onChange={() => checkPayType('stripe')} type="radio" name="paymentType" />
                        Credit/Debit card
                    </label>
                </div> */}

                <button disabled={disabled} onClick={codCheckout} className="btn px-16 rounded-md w-full bg-primary text-white hover:bg-primary">Confirm Order</button>

                {/* {
                    payType === 'stripe' ?
                        <button disabled={disabled} onClick={checkout} className="btn px-16 rounded-md w-full bg-primary text-white hover:bg-primary">Checkout</button>
                        :
                        <button disabled={disabled} onClick={codCheckout} className="btn px-16 rounded-md w-full bg-primary text-white hover:bg-primary">Confirm Order</button>
                } */}

                <p className="text-xs pt-4 font-medium text-center px-4">You can change your menu, skip weeks, or cancel at any time. Your subscription order includes future deliveries billed at $192 inclusive of shipping. Your weekly price may change depending on your menu selections.</p>
            </div>
        </div>
    );
};

export default OrderSummary;
