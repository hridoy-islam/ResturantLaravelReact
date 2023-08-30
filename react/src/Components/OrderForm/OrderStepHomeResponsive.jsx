import { useContext } from 'react'
import { userContext } from '../../Contexts/MainContext'
import delivery from '../../assets/delivery.png'
import plan2 from '../../assets/plan2.png'
import plan from '../../assets/select_plan.png'
import user from '../../assets/user.png'
import orderImg from '../../assets/order.png'

const OrderStepHomeResponsive = () => {
    // const { setOrder } = useContext(userContext);
    // const changeStep = (step) => {

    //     let updatedValue = { step };
    //     setOrder(order => ({
    //         ...order,
    //         ...updatedValue
    //     }));


    // }
    return (
        <div className="text-center bg-gray-100 container mx-auto my-12 lg:rounded-3xl px-2 py-2">
            <div className="flex lg:justify-between align-middle items-center">
                <button className={` mx-auto text-secondary font-semibold px-4 py-3 rounded-3xl bg-[#cde4b3]`}>
                <img className=" w-full" src={plan} alt="arrow" />
                </button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-4 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>

                <button className="flex lg:mx-0 mx-auto bg-white  text-secondary font-semibold px-4 py-3 rounded-3xl">
                    <img className="w-full" src={plan2} alt="arrow" />
                    </button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-4 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button className="flex lg:mx-0 mx-auto bg-white text-secondary font-semibold px-4 py-3 rounded-3xl">
                    <img className="w-full" src={user} alt="arrow" />
                    </button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-4 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button className="flex lg:mx-0 mx-auto bg-white text-secondary font-semibold px-4 py-3 rounded-3xl">
                    <img className="w-full " src={delivery} alt="arrow" />
                    </button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-4 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button className="flex lg:mx-0 mx-auto bg-white  text-secondary font-semibold px-4 py-3 rounded-3xl">
                    <img className="w-full " src={orderImg} alt="arrow" />
                    </button>
            </div>
        </div>
    );
};

export default OrderStepHomeResponsive;
