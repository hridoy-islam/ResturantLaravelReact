import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderView = () => {
    const [orderDetail, setOrderDetail] = useState();
    const {id} = useParams();
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/order/${id}`)
            .then(function (response) {
                // handle success
                setOrderDetail(response.data);
            })
    }, [])
    return (
        <div className="">
            <div className="flex items-center justify-between rounded-lg py-3 px-4 bg-gray-100 mt-6">
                <h3 className="text-xl font-semibold">Order Details  #{orderDetail?._id}</h3>
                {/* <Link className="btn btn-outline font-semibold px-6">PDF</Link> */}
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 justify-center pt-6">
                <div className="shadow-lg shadow-gray-400 px-4 py-6 rounded-lg">
                    <h2 className="font-bold text-2xl">Customer</h2>
                    <h3 className="flex font-medium text-lg pt-2">Name: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.firstName} {orderDetail?.lastName}</span></h3>
                    <h3 className="flex font-medium text-lg ">Email: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.email}</span></h3>
                    <h3 className="flex font-medium text-lg ">Number: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.phone}</span></h3>
                    <h3 className="flex font-medium text-lg ">Date Of Birth: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.dob}</span></h3>
                </div>              
                <div className="shadow-lg shadow-gray-400 px-4 py-6 rounded-lg">
                    <h2 className="font-bold text-2xl">Order Info</h2>
                    <h3 className="flex font-medium text-lg pt-2">Selected Plan: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.plan}</span></h3>
                    <h3 className="flex font-medium text-lg ">Plan Selected For: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.duration}</span></h3>
                    <h3 className="flex font-medium text-lg ">BreakFast Full: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.breakFastLight.added === true ? "Yes" : "No"}</span></h3>
                    <h3 className="flex font-medium text-lg ">BreakFast Light: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.breakFastLight.added === true ? "Yes" : "No"}</span></h3>
                </div>              
                <div className="shadow-lg shadow-gray-400 px-4 py-6 rounded-lg">
                    <h2 className="font-bold text-2xl">Delivery Info</h2>
                    <h3 className="flex font-medium text-lg pt-2">Address: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.address}</span></h3>
                    <h3 className="flex font-medium text-lg ">Apartment: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.apartment}</span></h3>
                    <h3 className="flex font-medium text-lg ">City: <span className="font-medium text-lg pl-2 text-gray-500">{orderDetail?.city}</span></h3>
                    <h3 className="flex font-medium text-lg ">Country: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.country}</span></h3>
                </div>              
                <div className="shadow-lg shadow-gray-400 px-4 py-6 rounded-lg">
                    <h2 className="font-bold text-2xl">Payment Info</h2>
                    <h3 className="flex font-medium text-lg pt-2">Order Status: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.orderStatus}</span></h3>
                    <h3 className="flex font-medium text-lg ">Payment Type: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.paymentType}</span></h3>
                    <h3 className="flex font-medium text-lg ">Price: <span className="font-medium text-lg pl-2 text-gray-500">{orderDetail?.price}</span></h3>
                    <h3 className="flex font-medium text-lg ">Delivery Instruction: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.deliveryinstruction}</span></h3>
                </div>              
            </div>
            {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 ml-12 justify-center pt-6">
                <div>
                    <h2 className="font-bold text-xl">Selected Plan</h2>
                    <h3 className=" text-md">{orderDetail?.plan}</h3>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Plan Selected For</h2>
                    <h3 className=" text-md">{orderDetail?.duration} days</h3>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Price</h2>
                    <h3 className=" text-md">{orderDetail?.price}</h3>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Breakfast Full</h2>
                    <h3 className=" text-md">{orderDetail?.breakFastFull.added === true ? "Yes" : "No"}</h3>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Breakfast Light</h2>
                    <h3 className=" text-md">{orderDetail?.breakFastLight.added === true ? "Yes" : "No"}</h3>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Order Status</h2>
                    <h3 className=" text-md">{orderDetail?.orderStatus}</h3>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Customer Name</h2>
                    <h3 className=" text-md">{orderDetail?.firstName} {orderDetail?.lastName}</h3>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Customer Email</h2>
                    <h3 className=" text-md">{orderDetail?.email}</h3>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Starting Date</h2>
                    <h3 className=" text-md">{orderDetail?.date}</h3>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Payment Type</h2>
                    <h3 className=" text-md">{orderDetail?.paymentType}</h3>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Address</h2>
                    <h3 className=" text-md">{orderDetail?.address}</h3>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Apartment</h2>
                    <h3 className=" text-md">{orderDetail?.apartment}</h3>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Date of Birth</h2>
                    <h3 className=" text-md">{orderDetail?.dob}</h3>
                </div>
                <div>
                    <h2 className="font-bold text-xl">City</h2>
                    <h3 className=" text-md">{orderDetail?.city}</h3>
                </div>

                <div>
                    <h2 className="font-bold text-xl">Country</h2>
                    <h3 className=" text-md">{orderDetail?.country}</h3>
                </div>

                <div>
                    <h2 className="font-bold text-xl">Delivery Instruction</h2>
                    <h3 className=" text-md">{orderDetail?.deliveryinstruction}</h3>
                </div>                
            </div> */}
        </div>
    );
};

export default OrderView;