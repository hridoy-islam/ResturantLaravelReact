import { Link } from 'react-router-dom';
import PageTitle from '../../Components/Shared/PageTitle';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AllMenu = () => {
    const [menus, setMenus] = useState();
    useEffect(() => {
        axios.get('https://fitnessdineserver-seven.vercel.app/menu/')
            .then(function (response) {
                // handle success
                console.log(menus)
                setMenus(response.data)
            })
    }, [])
    return (
        <div>
            <PageTitle title="All Menu" />
            <div className="py-8 container mx-auto">
                <Link className='py-4 px-10 bg-primary text-white rounded-md' to='/admin/menu/create'>Create Menu</Link>
            </div>
            <div className="overflow-x-auto container mx-auto py-4">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th className='text-lg font-bold'>Name</th>
                            <th className='text-lg font-bold'>Title</th>
                            <th className='text-lg font-bold'>Calories</th>
                            <th className='text-lg font-bold'>Protein</th>
                            <th className='text-lg font-bold'>Carb</th>
                            <th className='text-lg font-bold'>Fat</th>
                            <th className='text-lg font-bold'>Price</th>
                        </tr>
                       
                        
                        {menus?.length > 0 && menus?.map((item, index) => <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.title}</td>
                            <td>{item.calories}</td>
                            <td>{item.protein}</td>
                            <td>{item.carb}</td>
                            <td>{item.fat}</td>
                            <td>{item.price}</td>
                        </tr>)}

                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            {/* <div className='grid grid-cols-2 gap-4'>
            {menus?.length > 0 && menus?.map((item, index) => 
                    <div key={index} className="shadow p-6 hover:bg-[#7ab3354c] hover:text-red w-11/12 mx-auto rounded-3xl my-4">
                    <img className="w-70 mx-auto" src="https://fitbar.ae/wp-content/uploads/2022/07/clean-new.png" />
                    <p className="text-xl font-bold py-12 text-center">Shrimp Penne Pasta</p>
                    <div className="flex justify-between items-center border-t-2 pt-3">
                    <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">{item.calories} Calories</p>
                        <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">{item.protein} Protein</p>
                        <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">{item.carb} Carb</p>
                        <p className="text-normal font-medium px-2 text-gray-400">{item.fat}  Fat</p>
                    </div>
                    </div>
                )}
                
            </div> */}
        </div>
    );
};

export default AllMenu;

