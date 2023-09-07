import { useContext, useEffect, useState } from "react";
import PageTitle from "../../Components/Shared/PageTitle";
import axios from "axios";
import { userContext } from "../../Contexts/MainContext";
import { Link } from "react-router-dom";

const Orders = () => {
    const [orders, setOrders] = useState();
    const { user } = useContext(userContext)
    
    const fetchData = () => {
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/order/order/${user.email}`)
            .then(function (response) {
                // handle success
                setOrders(response.data);
            })
    }
    useEffect(() => {
        fetchData();
    }, [])



    return (
        <div>
            <PageTitle title="My Orders" />
            <div className="overflow-x-auto container mx-auto py-4">

                {orders?.length == 0 ? <p className="text-2xl font-medium"> No Orders Yet </p> :
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th className='text-lg font-bold'>Meal Plan</th>
                            <th className='text-lg font-bold'>Duration</th>
                            <th className='text-lg font-bold'>Meal</th>
                            <th className='text-lg font-bold'>Starting Date</th>
                            <th className='text-lg font-bold'>Price</th>
                            <th className='text-lg font-bold'>Status</th>
                            <th className='text-lg font-bold'>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        

                        {orders?.length > 0 && orders?.map((item, index) => <tr className='my-2' key={index}>
                            <td className='text-lg font-normal'>{item.plan}</td>
                            <td className='text-lg font-normal'>{item.duration} Days</td>
                            <td className='text-lg font-normal'>{item.meal} Times</td>
                            <td className='text-lg font-normal'>{item.date}</td>
                            <td className='text-lg font-normal'>{item.price} AED</td>
                            <td className='text-lg font-normal'>{item.orderStatus}</td>
                            <td className='text-md font-normal '> <Link to={`/user/order/${item._id}`} className='text-white bg-primary px-3 py-2'>view</Link></td>

                        </tr>)}
                    </tbody>
                </table> 
                }
            </div>
        </div>
    );
};

export default Orders;
