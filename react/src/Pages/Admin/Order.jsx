
import PageTitle from '../../Components/Shared/PageTitle';

const Order = () => {




    return (
        <div>
            <PageTitle title="Order" />
            <div className="py-4 container mx-auto">
                
            </div>


            <div className="overflow-x-auto container mx-auto py-4">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th className='text-lg font-bold'>Order Id</th>
                            <th className='text-lg font-bold'>Email</th>
                            <th className='text-lg font-bold'>Meal Plan</th>
                            <th className='text-lg font-bold'>Payment Status</th>
                            <th className='text-lg font-bold'>Date</th>
                            <th className='text-lg font-bold'>Price</th>
                            {/* <th className='text-lg font-bold'>View</th> */}
                        </tr>
                        <tr>
                            <td className='text-md font-bold'>002342441007</td>
                            <td className='text-md font-bold'>shahed@gmail.com</td>
                            <td className='text-md font-bold'>Weight Loss</td>
                            <td className='text-md font-bold'>Success</td>
                            <td className='text-md font-bold'>8/26/2023</td>
                            <td className='text-md font-bold'>192 AED</td>
                        </tr>
                        <tr>
                            <td className='text-md font-bold'>002342441008</td>
                            <td className='text-md font-bold'>mushfik@gmail.com</td>
                            <td className='text-md font-bold'>MusclesGain</td>
                            <td className='text-md font-bold'>Success</td>
                            <td className='text-md font-bold'>8/19/2023</td>
                            <td className='text-md font-bold'>396 AED</td>
                        </tr>
                        <tr>
                            <td className='text-md font-bold'>002342441003</td>
                            <td className='text-md font-bold'>sakib@gmail.com</td>
                            <td className='text-md font-bold'>Vegetarian</td>
                            <td className='text-md font-bold'>Success</td>
                            <td className='text-md font-bold'>7/29/2023</td>
                            <td className='text-md font-bold'>284 AED</td>
                        </tr>
                    </thead>
                    <tbody>


                        


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;
