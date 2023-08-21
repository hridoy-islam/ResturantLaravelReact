
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
                            <th className='text-lg font-bold'>Name</th>
                            <th className='text-lg font-bold'>Email</th>
                            <th className='text-lg font-bold'>Meal Name</th>
                            <th className='text-lg font-bold'>Price</th>
                        </tr>
                        <tr>
                            <td className='text-md font-bold'>Shahed Ahmed</td>
                            <td className='text-md font-bold'>shahed@gmail.com</td>
                            <td className='text-md font-bold'>Weight Loss</td>
                            <td className='text-md font-bold'>192 AED</td>
                        </tr>
                        <tr>
                            <td className='text-md font-bold'>Mushfik Ahmed</td>
                            <td className='text-md font-bold'>mushfik@gmail.com</td>
                            <td className='text-md font-bold'>MusclesGain</td>
                            <td className='text-md font-bold'>384 AED</td>
                        </tr>
                        <tr>
                            <td className='text-md font-bold'>Sakib Ahmed</td>
                            <td className='text-md font-bold'>sakib@gmail.com</td>
                            <td className='text-md font-bold'>Vegetarian</td>
                            <td className='text-md font-bold'>576 AED</td>
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
