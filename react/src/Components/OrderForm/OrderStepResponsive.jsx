import { useContext } from 'react'
import { userContext } from '../../Contexts/MainContext'
import delivery from '../../assets/delivery.png'
import plan2 from '../../assets/plan2.png'
import plan from '../../assets/select_plan.png'
import user from '../../assets/user.png'
import orderImg from '../../assets/order.png'

const OrderStepResponsive = () => {
    const { setOrder } = useContext(userContext);
    const changeStep = (step) => {

        let updatedValue = { step };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));


    }
    return (
        <div className="text-center bg-gray-100 container mx-auto my-4 lg:rounded-full px-2 py-2">
            <div className="flex justify-between items-center">
                <button className={` mx-auto text-secondary font-semibold px-4 py-3 rounded-full bg-white`}>
                <img className="w-10" src={plan} alt="arrow" />
                </button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-4 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>

                <button onClick={() => changeStep(1)} className="flex lg:mx-0 mx-auto bg-[#cde4b3]  text-secondary font-semibold px-4 py-3 rounded-full">
                    <img className="w-10" src={plan2} alt="arrow" />
                    </button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-4 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button onClick={() => changeStep(2)} className="flex lg:mx-0 mx-auto bg-white focus:bg-[#cde4b3] text-secondary font-semibold px-4 py-3 rounded-full">
                    <img className="w-10" src={user} alt="arrow" />
                    </button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-4 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button onClick={() => changeStep(3)} className="flex lg:mx-0 mx-auto bg-white focus:bg-[#cde4b3] text-secondary font-semibold px-4 py-3 rounded-full">
                    <img className="w-10 " src={delivery} alt="arrow" />
                    </button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-4 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button onClick={() => changeStep(4)} className="flex lg:mx-0 mx-auto bg-white focus:bg-[#cde4b3] text-secondary font-semibold px-4 py-3 rounded-full">
                    <img className="w-10 " src={orderImg} alt="arrow" />
                    </button>
            </div>
        </div>
    );
};

export default OrderStepResponsive;
