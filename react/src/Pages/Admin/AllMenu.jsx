import { Link } from 'react-router-dom';
import PageTitle from '../../Components/Shared/PageTitle';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AllMenu = () => {
    const [menus, setMenus] = useState();
    useEffect(() => {
        axios.get('http://localhost:5000/menu/')
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
            <div className='grid grid-cols-2 gap-4'>
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
                
            </div>
        </div>
    );
};

export default AllMenu;

