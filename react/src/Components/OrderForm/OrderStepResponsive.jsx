import { useContext } from 'react'
import { userContext } from '../../Contexts/MainContext'
import delivery from '../../assets/delivery.png'
import orderImg from '../../assets/order.png'
import plan2 from '../../assets/plan2.png'
import plan from '../../assets/select_plan.png'
import user from '../../assets/user.png'

const OrderStepResponsive = () => {
    const { order, setOrder, firstName, lastName, email, phone, dob, country, address, apartment, gmap, deliveryinstruction, date, city } = useContext(userContext);
    const changeStep = (step) => {
        let data = order.step;

        if(step == 1){
            data = 1
        }

        if(step == 2 && firstName != null && lastName != null && email != null && phone != null && dob != null && country != null){
            data = 2
        }

        if(step == 3 && address != null && apartment != null && gmap != null && deliveryinstruction != null && date != null && city != null){
            data = 3
        }
        if(step == 4 && date != null && city != null && country != null){
            data = 4
        }

        let updatedValue = { step: data };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));


    }
    return (
        <div className="text-center bg-gray-100 w-full lg:container mx-auto my-4 lg:rounded-full px-5 py-5">
            <div className="flex lg:justify-between align-middle items-center">
                <button className={`flex lg:mx-0 mx-auto text-secondary font-semibold px-6 py-4 rounded-full bg-white`}>
                    <img className="w-full" src={plan} alt="arrow" />
                </button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-4 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>

                <button onClick={() => changeStep(1)} className={`flex lg:mx-0 mx-auto text-secondary font-semibold px-6 py-4 rounded-full ${order.step == 1 ? 'bg-[#cde4b3] focus:bg-[#cde4b3]' : 'bg-white'} `}>
                    <img className="w-full" src={plan2} alt="arrow" />
                    </button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-4 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button onClick={() => changeStep(2)} className={`flex lg:mx-0 mx-auto text-secondary font-semibold px-6 py-4 rounded-full ${order.step == 2 ? 'bg-[#cde4b3] focus:bg-[#cde4b3]' : 'bg-white'} `}>
                    <img className="w-full" src={user} alt="arrow" />
                   </button> 
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-4 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button onClick={() => changeStep(3)} className={`flex lg:mx-0 mx-auto text-secondary font-semibold px-6 py-4 rounded-full ${order.step == 3 ? 'bg-[#cde4b3] focus:bg-[#cde4b3]' : 'bg-white'} `}>
                    <img className="w-full" src={delivery} alt="arrow" />
                    </button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-4 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button onClick={() => changeStep(4)}className={`flex lg:mx-0 mx-auto text-secondary font-semibold px-6 py-4 rounded-full ${order.step == 4 ? 'bg-[#cde4b3] focus:bg-[#cde4b3]' : 'bg-white'} `}>
                    <img className="w-full" src={orderImg} alt="arrow" />
                   </button>
            </div>
        </div >
    );
};

export default OrderStepResponsive;
