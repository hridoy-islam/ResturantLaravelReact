
import { useContext, useEffect, useState } from "react";
import BreadCumb from "../Components/Shared/BreadCumb";
import { userContext } from "../Contexts/MainContext";
import axios from "axios";

const Menu = () => {
    const [menu, setMenu] = useState();
    const {setLoading} = useContext(userContext);
    const loadData = () =>{
        setLoading(true);
            axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/menu`)
                .then(function (response) {
                    // handle success
                    setMenu(response.data)
                    setLoading(false)
                })
        
    }
   

    useEffect(()=> {
        loadData()
    }, []) 
    return (
        <div>
            <BreadCumb title="Our Menu" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            <div className="py-20">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">Meals packed with flavor</h2>
                <p className="mt-6 text-xl leading-8 text-gray-600 text-center">Choose the menu that’s right for you</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 container mx-auto text-center pt-6 pb-24">
            {menu?.map((plan, index) => 
                <div key={index} className="shadow-xl shadow-gray p-6 rounded-xl  ">
                        <img className="w-70 mx-auto" src={plan.img} alt="Image"/>
                        <p className="text-xl font-bold py-12 text-center">{plan.name}</p>
                        <div className="flex justify-between items-center border-t-2 pt-3">
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-3 text-gray-400">{plan.calories}  Kcal</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-2 text-gray-400">Protein {plan.protein}g</p>
                            <p className="text-normal font-medium border-r-2 border-gray-400 px-3 text-gray-400">Carbs {plan.carb}g</p>
                            <p className="text-normal font-medium px-3 text-gray-400"> Fat {plan.fat}g</p>
            </div>
                </div>
                )}
            </div>
            
        </div>
    );
};

export default Menu;