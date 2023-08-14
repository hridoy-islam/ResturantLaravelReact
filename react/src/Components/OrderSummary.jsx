import { Link } from "react-router-dom";


const OrderSummary = () => {
    return (
        <div className="my-12 bg-white p-8 rounded-xl sticky top-20">
            <h2 className="text-2xl font-bold px-4">Order Summary</h2>
            <p className="text-sm font-medium px-4 py-2 ">We have summarized your subscription preferences here.</p>
            <div>
                <h3 className="text-xl font-bold bg-gray-200 px-3 mt-6 mb-3">Plan Preferences</h3>
                <p className="text-sm font-medium px-4 py-1">Weight Loss</p>
                <p className="text-sm font-medium px-4 py-1">First delivery 24/6</p>
            </div>
            <div>
                <h3 className="text-xl font-bold bg-gray-200 px-3 mt-6 mb-6">Price Detailss</h3>
                <div className="flex justify-between mx-4 my-2">
                    <p className="text-sm font-semibold">Plan duration</p>
                    <p className="text-sm font-bold">6</p>
                </div>
                <div className="flex justify-between mx-4 my-2">
                    <p className="text-sm font-semibold">Meal Type</p>
                    <p className="text-sm font-bold">2</p>
                </div>
                <div className="flex justify-between mx-4 my-2">
                    <p className="text-sm font-semibold">Plan price</p>
                    <p className="text-sm font-bold">$384.00</p>
                </div>
                <div className="flex justify-between mx-4 my-2">
                    <p className="text-sm font-semibold">Snacks</p>
                    <p className="text-sm font-bold">$42.00</p>
                </div>
                <div className="flex justify-between mx-4 my-2">
                    <p className="text-sm font-semibold">Shipping</p>
                    <p className="text-sm font-bold">FREE</p>
                </div>
                <div className="flex justify-between mx-4 my-2">
                    <p className="text-sm font-semibold">Discounts Applied</p>
                    <p className="text-sm font-bold">-$28.00</p>
                </div>
                <div className="flex justify-between mx-4 my-4 pt-2 border-t-2">
                    <p className="text-md font-extrabold">Total</p>
                    <p className="text-md font-extrabold">$398.00</p>
                </div>
                <Link to='/payment'><button className="bg-primary text-white w-full text-2xl px-6 py-3 my-6 rounded-lg">Pay</button></Link>
                <p className="text-xs pt-4 font-medium text-center px-4">You can change your menu, skip weeks, or cancel at any time. Your subscription order includes future deliveries billed at $98.93, inclusive of shipping. Your weekly price may change depending on your menu selections.</p>
            </div>
        </div>
    );
};

export default OrderSummary;