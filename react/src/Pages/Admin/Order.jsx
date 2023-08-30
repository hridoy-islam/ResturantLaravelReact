
import axios from 'axios';
import PageTitle from '../../Components/Shared/PageTitle';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Order = () => {
    const [orders, setOrders] = useState();
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/order/`)
            .then(function (response) {
                // handle success
                setOrders(response.data);
            })
    }, [])



    return (
        <div>
            <PageTitle title="Order" />
            <div className="py-4 container mx-auto">
                
            </div>

            {/* value={`${import.meta.env.VITE_BACKEND_API_URL}/order/datequery/${orders?.createdAt}`} */}
        {/* <div>
            <input  type="date" name="" id="" />
        </div> */}
            <div className="overflow-x-auto container mx-auto py-4">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            {/* <th className='text-lg font-bold'>Order Id</th> */}
                            <th className='text-lg font-bold'>Name</th>
                            <th className='text-lg font-bold'>Email</th>
                            <th className='text-lg font-bold'>Meal Plan</th>
                            <th className='text-lg font-bold'>Status</th>
                            <th className='text-lg font-bold'>Date</th>
                            <th className='text-lg font-bold'>Price</th>
                            <th className='text-lg font-bold'>Action</th>
                            {/* <th className='text-lg font-bold'>View</th> */}
                        </tr>
                        {orders?.length > 0 && orders?.map((item, index) => <tr className='my-2' key={index}>
                            {/* <td className='text-lg font-normal'>{item._id}</td> */}
                            <td className='text-lg font-normal'>{item.firstName} {item.lastName}</td>
                            <td className='text-lg font-normal'>{item.email}</td>
                            <td className='text-lg font-normal'>{item.plan}</td>
                            <td className='text-lg font-normal'>{item.orderStatus}</td>
                            <td className='text-lg font-normal'>{item.date}</td>
                            <td className='text-lg font-normal'>{item.price} AED</td>
                            <td> <Link to={`/admin/order/${item._id}`} className='text-white bg-primary px-3 py-2'>view</Link></td>
                        </tr>)}
                    </thead>
                    <tbody>


                        


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;
