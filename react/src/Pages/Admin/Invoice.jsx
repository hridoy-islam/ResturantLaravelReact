
import React, { useEffect, useState } from "react";
import logo from "../../assets/blacklogo.png";
import {  useParams } from "react-router-dom";
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
    return (
        <div className="bg-gray-100 p-6 h-full">

            <div className="mx-auto  w-[86%]" ref={ref}>
                <div className="bg-white rounded-xl">
                    <div className="p-6 h-full flex justify-between items-center">
                        <span>
                            <img className="w-36" src={logo} alt="logo" />
                        </span>
                        <h2 className="text-xl font-medium">ORDER #{orderDetail?._id} </h2>
                    </div>
                    <div className="p-6 h-full flex justify-between items-center">
                        <span>
                            <h2 className="text-2xl pb-2 font-semibold text-left">Customer Information </h2>
                            <h3 className="text-lg font-medium text-left">Customer Name : {orderDetail?.firstName} {orderDetail?.lastName}.</h3>
                            <h3 className="text-lg font-medium text-left">Customer Email : {orderDetail?.email}</h3>
                            <h3 className="text-lg font-medium text-left">Customer Number : {orderDetail?.phone}</h3>
                        </span>
                        <span>
                            <h3 className="text-lg font-medium text-right">Order Date : {orderDetail?.date} </h3>
                            <h3 className="text-lg font-medium text-right">Payment Method : {orderDetail?.paymentType === "cod" ? "Cash On Delivery" : "Card"} </h3>
                            <h3 className="text-lg font-medium text-right capitalize">Payment Status : {orderDetail?.orderStatus} </h3>
                        </span>
                    </div>
                    <div className="pl-6 h-full flex justify-between items-center">
                        <span>
                            <h2 className="text-2xl font-semibold text-left">Delivery Information </h2>
                            <h3 className="flex font-medium text-lg pt-2">Address : {orderDetail?.address}</h3>
                            <h3 className="flex font-medium text-lg ">Apartment : {orderDetail?.apartment}</h3>
                            <h3 className="flex font-medium text-lg ">Country : {orderDetail?.city} , {orderDetail?.country}</h3>
                            <h3 className="flex font-medium text-lg ">Instruction : {orderDetail?.deliveryinstruction}</h3>
                        </span>
                    </div>
                    <div className="p-6 h-full">
                        <h3 className="text-xl font-bold pb-4 pt-6">Order Summary</h3>
                        <table className="table table-xs">
                            <thead>
                                <tr>
                                    {/* <th className='text-lg font-bold'>Order Id</th> */}
                                    <th className='text-lg font-bold text-center'>No.</th>
                                    <th className='text-lg font-bold text-center'>Meal Plan</th>
                                    <th className='text-lg font-bold text-center'>Meal</th>
                                    <th className='text-lg font-bold text-center'>Price</th>
                                    <th className='text-lg font-bold text-center'>Quantity</th>
                                    <th className='text-lg font-bold text-center'>Subtotal</th>
                                    {/* <th className='text-lg font-bold'>View</th> */}
                                </tr>
                                <tr className='my-2' >
                                    {/* <td className='text-lg font-normal'>{item._id}</td> */}
                                    <td className='text-lg font-semibold text-center'>01</td>
                                    <td className='text-lg font-semibold text-center'>{orderDetail?.plan} {orderDetail?.breakFastLight.added === "true" ? "+ BreakFast Light" : ""} {orderDetail?.breakFastFull.added === "true" ? "+ BreakFast Full" : ""} <br/> For {orderDetail?.duration} Days   </td>
                                    <td className='text-lg font-semibold text-center'>{orderDetail?.meal} meals</td>
                                    <td className='text-lg font-semibold text-center'>{orderDetail?.price} AED</td>
                                    <td className='text-lg font-semibold text-center'>1</td>
                                    <td className='text-lg font-semibold text-center'>{orderDetail?.price} AED</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                        <h3 className="text-xl font-bold text-right pr-6 pt-1 mt-3 border-t-2">Total :  {orderDetail?.price} AED</h3>
                    </div>
                    <h3 className="text-lg font-medium py-12 pl-6 ">Thank you for Purchase from <br/> fitnessdine.com <br /> sales@fitnessdine.com <br/> +971 56 914 2494 </h3>
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