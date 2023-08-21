import { useContext } from "react";
import { userContext } from "../Contexts/MainContext";




const OrderSummary = () => {
    const { order } = useContext(userContext)
    const breakFastLight = order.duration * order.breakFastLight.price;
    const breakFastFull = order.duration * order.breakFastFull.price;
    const snacksPrice = order.duration * order.snacks.price;
    const mealPrice = order.duration * order.basePrice * order.meal;
    const checkout = () => {
        fetch("http://localhost:5000/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            mode: "cors",
            body: JSON.stringify({
                items: [
                    { id: 1, quantity: 1, price: order.price, name: order.plan }
                ]
            })
        })
            .then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
                window.location = url
            })
            .catch(e => {
                console.log(e.error)
            })
    }
    return (
        <div className="my-12 bg-white p-8 rounded-xl sticky top-20">
            <h2 className="text-2xl font-bold px-4">Order Summary</h2>
            <p className="text-sm font-medium px-4 py-2 ">We have summarized your subscription preferences here.</p>
            <div>
                <h3 className="text-xl font-bold bg-gray-200 px-3 mt-6 mb-3">Plan Preferences</h3>
                <p className="text-sm font-medium px-4 py-1">Choosed Plan : <b>{order.plan}</b></p>
                <p className="text-sm font-medium px-4 py-1">Plan  For : <b>{order.duration} days</b></p>
                <p className="text-sm font-medium px-4 py-1">Choosed Meal Type : <b>{order.meal}</b></p>

            </div>
            <div>
                <h3 className="text-xl font-bold bg-gray-200 px-3 mt-6 mb-6">Price Detailss</h3>

                <div className="flex justify-between mx-4 my-2">
                    <p className="text-sm font-semibold">Meal Price</p>
                    <p className="text-sm font-bold">{mealPrice}</p>
                </div>
                {
                    order.breakFastLight.added &&
                    <div className="flex justify-between mx-4 my-2">
                        <p className="text-sm font-semibold">Breakfast Light</p>
                        <p className="text-sm font-bold">{breakFastLight}</p>
                    </div>
                }
                {
                    order.breakFastFull.added &&
                    <div className="flex justify-between mx-4 my-2">
                        <p className="text-sm font-semibold">Breakfast Full</p>
                        <p className="text-sm font-bold">{breakFastFull}</p>
                    </div>
                }
                {
                    order.snacks.added &&
                    <div className="flex justify-between mx-4 my-2">
                        <p className="text-sm font-semibold">Snakcs Price</p>
                        <p className="text-sm font-bold">{snacksPrice}</p>
                    </div>
                }
                <div className="flex justify-between mx-4 my-4 pt-2 border-t-2">
                    <p className="text-md font-extrabold">Total</p>
                    <p className="text-md font-extrabold">${order.price}</p>
                </div>
                <button onClick={checkout} className="bg-primary text-white w-full text-2xl px-6 py-3 my-6 rounded-lg">Pay</button>
                <p className="text-xs pt-4 font-medium text-center px-4">You can change your menu, skip weeks, or cancel at any time. Your subscription order includes future deliveries billed at $98.93, inclusive of shipping. Your weekly price may change depending on your menu selections.</p>
            </div>
        </div>
    );
};

export default OrderSummary;
