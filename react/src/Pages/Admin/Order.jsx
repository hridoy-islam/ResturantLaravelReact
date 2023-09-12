
import axios from 'axios';
import PageTitle from '../../Components/Shared/PageTitle';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment/moment';
// import OrderView from './OrderView';
const Order = () => {
    const [startDate, setStartDate] = useState(new Date());
    let [search, setSearch] = useState("");
    var today = moment().format('YYYY-MM-DD');
    // const [orders, setOrders] = useState([]);
    // const fetchData = () => {
    //     axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/order/`)
    //         .then(function (response) {
    //             // handle success
    //             setOrders(response.data);
    //         })
    // }
    // useEffect(() => {
    //     fetchData()
    // }, [])

    // let [orders, setOrders] = useState([]);
    // let [orderStatus, setOrderStatus] = useState(`${import.meta.env.VITE_BACKEND_API_URL}/order`);
    // const filterData = () => {
    //     axios.get(orderStatus)
    //         .then(function (response) {
    //             // handle success

    //             setOrders(response.data);
    //         })
    // }
    // useEffect(() => {
    //     filterData()
    // }, [orderStatus, setOrderStatus])

    const [orders, setOrders] = useState([]);
    let [orderStatus, setOrderStatus] = useState(`${import.meta.env.VITE_BACKEND_API_URL}/order`)
    useEffect(() => {
        fetch(orderStatus)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [orderStatus, setOrderStatus]);
 console.log(orders?.date)
    return (
        <div>
            <PageTitle title="Order" />
            <div className="py-4 container mx-auto">
                <div className="flex items-center justify-between rounded-lg py-3 px-4 bg-gray-100 mt-6">

                    {/* <button className="btn btn-outline font-semibold px-3">All Order</button> */}
                    <select
                        // onChange={handleChange}
                        onClick={(e) => setOrderStatus(e.target.value)}
                        className="select select-bordered max-w-xs seleted-value orderfood-dropdown"
                    >
                        <option value={`${import.meta.env.VITE_BACKEND_API_URL}/order`}>
                            All Orders
                        </option>
                        <option value={`${import.meta.env.VITE_BACKEND_API_URL}/order/?orderStatus=Pending`}>
                            Pending Order
                        </option>
                        <option value={`${import.meta.env.VITE_BACKEND_API_URL}/order/?orderStatus=Running`}>
                            Running order
                        </option>
                        <option value={`${import.meta.env.VITE_BACKEND_API_URL}/order/?orderStatus=Completed`}>
                            Completed order
                        </option>
                    </select>

                    <div onClick={(e) => setOrderStatus(e.target.value)}>
                    <DatePicker value={`${import.meta.env.VITE_BACKEND_API_URL}/order/datequery/?createdAt=2023-08-31`} selected={startDate} onChange={(date) => setStartDate(date)} />
                    <button type="submit" >Submit</button>
                        </div>

                    <form   onClick={(e) => setOrderStatus(e.target.value)}>
                        <input  type="date" name="date" id="date"  className="px-2 py-3 rounded-lg mr-2 bg-gray-100 border border-black" />
                        <button type="submit" value={`${import.meta.env.VITE_BACKEND_API_URL}/order/datequery/?date=2023-09-15`}>Submit</button>
                    </form>
                    {/* <button className="btn btn-outline font-semibold px-3">Apply Filter</button> */}
                </div>
            </div>
            <div className="overflow-x-auto container mx-auto py-4">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th className='text-lg font-bold'>Email</th>
                            <th className='text-lg font-bold'>Meal Plan</th>
                            <th className='text-lg font-bold'>Status</th>
                            <th className='text-lg font-bold'>Date</th>
                            <th className='text-lg font-bold'>Price</th>
                            <th className='text-lg font-bold'>Action</th>
                        </tr>
                    </thead>
                        
                    <tbody>
                    {orders.filter((data) => {
                                return search.toLocaleLowerCase() === ""
                                    ? data
                                    : data.toLocaleLowerCase().includes(search);
                            })
                            .map((item, index) => <tr className='my-2' key={index}>
                                <td className='text-lg font-normal'>{item.email}</td>
                                <td className='text-lg font-normal'>{item.plan}</td>
                                <td className='text-lg font-normal'>{item.orderStatus}</td>
                                <td className='text-lg font-normal'>{item.createdAt}</td>
                                <td className='text-lg font-normal'>{item.price} AED</td>
                                <td> <Link to={`/admin/order/${item._id}`} className='text-white bg-primary px-3 py-2'>view</Link></td>
                            </tr>)}
                    </tbody>
                </table>
                
                <div className="join mt-12 flex justify-center">
                            <button className="join-item btn btn-active">1</button>
                            <button className="join-item btn ">2</button>
                            <button className="join-item btn">3</button>
                            <button className="join-item btn">4</button>
                        </div>
            </div>
        </div>
    );
};

export default Order;
