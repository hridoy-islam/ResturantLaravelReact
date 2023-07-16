// import arrow from "../assets/arrow"
import { Link } from 'react-router-dom';
import plan from '../../src/assets/select_plan.png'
import plan2 from '../../src/assets/plan2.png'
import user from '../../src/assets/user.png'
import delivery from '../../src/assets/delivery.png'
import order from '../../src/assets/order.png'
const StepButton = () => {
    return (
        <div className="grid grid-cols-9 items-center mx-auto bottom-2 border-primary rounded-full py-2 px-8 my-12 bg-gray-200">
            <div className="flex justify-center items-center">

                <Link className="bg-primary  py-3 px-3 text-white rounded-full text-md font-semibold"><p className="flex items-center"><span><img className="w-6 mr-2" src={plan} alt="arrow" /></span>Select Plan</p></Link>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-6 mx-auto text-center">
                <path className="w-full" strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            <div className="flex justify-center items-center">
                <Link className="bg-white text-gray-800  py-3 px-3  rounded-full text-md font-semibold"><p className="flex items-center">
                    <span><img className="w-6 mr-2" src={plan2} alt="arrow" /></span>Customize Plan</p></Link>


            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-6 mx-auto">
                <path className="w-full" strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            <div className="flex justify-center items-center">
                <Link className="bg-white text-gray-800 py-3 px-3  rounded-full text-md font-semibold"><p className="flex items-center"><span><img className="w-6 mr-2" src={user} alt="arrow" /></span>Personal Information</p></Link>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-6 mx-auto">
                <path className="w-full" strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            <div className="flex justify-center items-center">
                <Link className="bg-white text-gray-800  py-3 px-3 rounded-full text-md font-semibold"><p className="flex items-center"><span><img className="w-6 mr-2" src={delivery} alt="arrow" /></span>Delivery Information</p></Link>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-6 mx-auto">
                <path className="w-full" strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            <div className="flex justify-center items-center">
                <Link className="bg-white text-gray-800  py-3 px-3 rounded-full text-md font-semibold"><p className="flex items-center"><span><img className="w-6 mr-2" src={order} alt="arrow" /></span>Review Order</p></Link>
            </div>

        </div>
    );
};

export default StepButton;