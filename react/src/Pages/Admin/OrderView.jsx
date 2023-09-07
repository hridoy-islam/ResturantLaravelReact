import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserAlt, FaTruck, FaCcAmazonPay } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useContext } from "react";
import { userContext } from "../../Contexts/MainContext";

// Create styles

// import Pdf from "react-to-pdf";
// import Invoice from "./Invoice";
// const ref = React.createRef();
const OrderView = () => {
    const [orderDetail, setOrderDetail] = useState();
    const {user} = useContext(userContext)
    console.log(user)
    const { id } = useParams();
    const fetchData = () => {
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/order/${id}`)
            .then(function (response) {
                // handle success
                setOrderDetail(response.data);
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="">

            <div className="flex items-center justify-between rounded-lg py-3 px-4 bg-gray-100 mt-6">
                <h3 className="text-xl font-semibold">Order Details  #{orderDetail?._id}</h3>
                {/* <Link className="btn btn-outline font-semibold px-6">PDF</Link> */}
                {/* {
                    user?.role == "admin" ?
                    <form action="">
                    <select name="" id="" className="px-3 py-3 rounded-lg mr-2 bg-gray-100 border border-black">
                        <option value="">Order Status</option>
                        <option value="">Pending</option>
                        <option value="">Approved</option>
                        <option value="">Complete</option>
                    </select>
                    <button className="btn btn-outline font-semibold px-3">Change Status</button>
                    <Link to={`/user/order/invoice/${id}`} className="btn btn-outline font-semibold px-3 ml-3">Invoice </Link ></form>
                    :
                    ""
                } */}
                
                    
                    

                
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-6 justify-center pt-6">
                <div className="shadow-md shadow-gray-400 px-6 py-8 rounded-lg">
                    <h2 className="font-bold text-2xl flex items-center"><span className="pr-2"><FaUserAlt /></span>Customer Info</h2>
                    <h3 className="flex font-medium text-lg pt-2">Name : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.firstName} {orderDetail?.lastName}</span></h3>
                    <h3 className="flex font-medium text-lg ">Email : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.email}</span></h3>
                    <h3 className="flex font-medium text-lg ">Number : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.phone}</span></h3>
                    <h3 className="flex font-medium text-lg ">Date Of Birth : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.dob}</span></h3>
                </div>
                <div className="shadow-md shadow-gray-400 px-6 py-8  rounded-lg">
                    <h2 className="font-bold text-2xl flex items-center"><span className="pr-2"><BsFillCartCheckFill /></span>Order Info</h2>
                    <h3 className="flex font-medium text-lg pt-2">Selected Plan : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.plan}</span></h3>
                    <h3 className="flex font-medium text-lg ">Plan Selected For : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.duration} Days</span></h3>
                    <h3 className="flex font-medium text-lg ">BreakFast Full : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.breakFastFull.added === "true" ? "Yes" : "No"}</span></h3>
                    <h3 className="flex font-medium text-lg ">BreakFast Light : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.breakFastLight.added === "true" ? "Yes" : "No"}</span></h3>
                </div>
                <div className="shadow-md shadow-gray-400 px-6 py-8  rounded-lg">
                    <h2 className="font-bold text-2xl flex items-center"><span className="pr-2"><FaTruck /></span>Delivery Info</h2>
                    <h3 className="flex font-medium text-lg pt-2">Address : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.address}</span></h3>
                    <h3 className="flex font-medium text-lg ">Apartment : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.apartment}</span></h3>
                    <h3 className="flex font-medium text-lg ">City : <span className="font-medium text-lg pl-2 text-gray-500">{orderDetail?.city}</span></h3>
                    <h3 className="flex font-medium text-lg ">Country : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.country}</span></h3>
                    <h3 className="flex font-medium text-lg ">Instruction: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.deliveryinstruction}</span></h3>
                </div>
                <div className="shadow-md shadow-gray-400 px-6 py-8  rounded-lg">
                    <h2 className="font-bold text-2xl flex items-center"><span className="pr-2"><FaCcAmazonPay /></span>Payment Info</h2>
                    <h3 className="flex font-medium text-lg pt-2">Order Status : <span className="font-medium text-lg pl-2 text-gray-500 capitalize"> {orderDetail?.orderStatus}</span></h3>
                    <h3 className="flex font-medium text-lg ">Payment Method : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.paymentType === "cod" ? "Cash On Delivery" : "Card"}</span></h3>
                    <h3 className="flex font-medium text-lg ">Price : <span className="font-medium text-lg pl-2 text-gray-500">{orderDetail?.price} AED</span></h3>
                </div>
            </div>

        </div>
    );
};

export default OrderView;