import plan from '../../assets/select_plan.png'
import plan2 from '../../assets/plan2.png'
import user from '../../assets/user.png'
import delivery from '../../assets/delivery.png'
import order from '../../assets/order.png'

const OrderStep = () => {

    return (
        <div className="text-center bg-gray-100 container mx-auto my-4 rounded-full px-5 py-5">
            <div className="flex justify-between align-middle items-center">
                <button className="flex bg-white text-parimary font-semibold px-6 py-4 rounded-full">
                <img className="w-6 mr-2" src={plan} alt="arrow" />
                <span>    Select Plan</span>
                </button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button className="flex bg-white text-parimary font-semibold px-6 py-4 rounded-full">
                <img className="w-6 mr-2" src={plan2} alt="arrow" />
                    Customize Plan</button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button className="flex bg-white text-parimary font-semibold px-6 py-4 rounded-full">
                <img className="w-6 mr-2" src={user} alt="arrow" />
                    Personal Information</button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button className="flex bg-white text-parimary font-semibold px-6 py-4 rounded-full">
                <img className="w-6 mr-2" src={delivery} alt="arrow" />
                    Delivery Information</button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button className="flex bg-white text-parimary font-semibold px-6 py-4 rounded-full">
                <img className="w-6 mr-2" src={order} alt="arrow" />
                    Review Order</button>
            </div>
        </div>
    );
};

export default OrderStep;
