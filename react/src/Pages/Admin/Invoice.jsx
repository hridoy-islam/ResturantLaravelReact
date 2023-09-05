
import React, { useEffect, useState } from "react";
import logo from "../../assets/blacklogo.png";
import { useParams } from "react-router-dom";
import {  FaTruck, FaCcAmazonPay } from "react-icons/fa";
import axios from "axios";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Invoice = () => {
    const [orderDetail, setOrderDetail] = useState();
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
    console.log(orderDetail)
    return (
        <div className="bg-gray-100 p-6 h-full">

            <div  className="mx-auto  w-[86%]" ref={ref}>
                <div className="bg-white rounded-xl">
                    <div className="p-6 h-full flex justify-between items-center">
                        <span>
                            <img className="w-36" src={logo} alt="logo" />
                        </span>
                        <h2 className="text-2xl font-bold">INVOICE </h2>
                    </div>
                    <div className="p-6 h-full flex justify-between items-center">
                        <span>
                            <h2 className="text-lg font-medium text-left">Hello, {orderDetail?.firstName} {orderDetail?.lastName}.</h2>
                            <h2 className="text-lg font-medium text-left">{orderDetail?.email}</h2>
                            <h3 className="text-lg font-medium text-left">Thank you for shopping from our store <br /> and for your order.</h3>
                        </span>
                        <span>
                            <h2 className="text-lg font-medium text-right">ORDER #{orderDetail?._id}</h2>
                            <h3 className="text-lg font-medium text-right">{orderDetail?.date} </h3>
                        </span>
                    </div>
                    <div className="p-6 h-full">
                        <h3 className="text-xl font-bold pb-4 ">Order Summary</h3>
                        <table className="table table-xs">
                            <thead>
                                <tr>
                                    {/* <th className='text-lg font-bold'>Order Id</th> */}
                                    <th className='text-lg font-bold text-center'>No.</th>
                                    <th className='text-lg font-bold text-center'>Meal Plan</th>
                                    <th className='text-lg font-bold text-center'>Price</th>
                                    <th className='text-lg font-bold text-center'>Quantity</th>
                                    <th className='text-lg font-bold text-center'>Subtotal</th>
                                    {/* <th className='text-lg font-bold'>View</th> */}
                                </tr>
                                <tr className='my-2' >
                                    {/* <td className='text-lg font-normal'>{item._id}</td> */}
                                    <td className='text-lg font-semibold text-center'>01</td>
                                    <td className='text-lg font-semibold text-center'>{orderDetail?.plan} </td>
                                    <td className='text-lg font-semibold text-center'>{orderDetail?.price} AED</td>
                                    <td className='text-lg font-semibold text-center'>1</td>
                                    <td className='text-lg font-semibold text-center'>{orderDetail?.price} AED</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    <h3 className="text-xl font-bold text-right pr-10 pt-1 mt-3 border-t-2">Total:  {orderDetail?.price} AED</h3>
                    </div>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1  gap-6 justify-center pt-6">
                    <div className=" px-6 py-8  rounded-lg">
                        <h2 className="font-bold text-2xl flex items-center"><span className="pr-2"><FaTruck /></span>Delivery Information</h2>
                        <h3 className="flex font-medium text-lg pt-2">Address : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.address}</span></h3>
                        <h3 className="flex font-medium text-lg ">Apartment : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.apartment}</span></h3>
                        <h3 className="flex font-medium text-lg ">Country : <span className="font-medium text-lg pl-2 text-gray-500">{orderDetail?.city} , {orderDetail?.country}</span></h3>
                        {/* <h3 className="flex font-medium text-lg ">Country : <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.country}</span></h3> */}
                        <h3 className="flex font-medium text-lg ">Instruction: <span className="font-medium text-lg pl-2 text-gray-500"> {orderDetail?.deliveryinstruction}</span></h3>
                    </div>
                    <div className=" px-6 py-8  rounded-lg">
                        <h2 className="font-bold text-2xl flex items-center"><span className="pr-2"><FaCcAmazonPay /></span>Payment Method</h2>
                        <h3 className="flex font-medium text-lg pt-2">Payment Type : <span className="font-medium text-lg pl-2 text-gray-500"> Card</span></h3>
                        <h3 className="flex font-medium text-lg ">Transaction ID : <span className="font-medium text-lg pl-2 text-gray-500">4185939336</span></h3>
                    </div>
                    </div>
                    <h3 className="text-lg font-medium py-12 pl-6">Have a nice day.</h3>
                </div>
                
            </div>

            <Pdf targetRef={ref} filename={`${orderDetail?.plan}.pdf`}>
                {({ toPdf }) => (
                    <div className="text-end mt-4 mr-16">
                        <button className="pdf-btn text-xl font-base rounded-lg text-white bg-secondary border px-3 py-2" onClick={toPdf}>
                        Download
                    </button>
                    </div>
                )}
            </Pdf>
        </div>
    );
};

export default Invoice;