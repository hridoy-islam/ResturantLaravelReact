import { useContext } from 'react'
import { userContext } from '../../Contexts/MainContext'
import delivery from '../../assets/delivery.png'
import plan2 from '../../assets/plan2.png'
import plan from '../../assets/select_plan.png'
import user from '../../assets/user.png'

const OrderStep = () => {
    const { order, setOrder } = useContext(userContext);
    const changeStep = (step) => {
        // const firstname = order.firstName.length;
        // const lastName = order.lastName.length;
        // const email = order.email.length;
        // const phone = order.phone.length;
        // const dob = order.dob.length;
        // const nationality = order.nationality.length;

        // const date = order.date.length;
        // const city = order.city.length;
        // const address = order.address.length;
        // const apartment = order.apartment.length;
        // const gmap = order.gmap.length;

        // let defaultStep = 1;

        // if (step > 2 && step == 2) {
        //     if (firstname && lastName && email && phone && dob && nationality) {
        //         defaultStep = 2;
        //     }
        //     let updatedValue = { step: defaultStep };
        //     setOrder(order => ({
        //         ...order,
        //         ...updatedValue
        //     }));
        // }

        // if (step === 3) {
        //     if (date && city && address && apartment && gmap) {
        //         defaultStep = 3;
        //     }
        //     let updatedValue = { step: defaultStep };
        //     setOrder(order => ({
        //         ...order,
        //         ...updatedValue
        //     }));
        // }

        // else {
        //     let updatedValue = { step: 1 };
        //     setOrder(order => ({
        //         ...order,
        //         ...updatedValue
        //     }));
        // }

        let updatedValue = { step };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));




    }
    return (
        <div className="text-center bg-gray-100 container mx-auto my-4 lg:rounded-full px-5 py-5">
            <div className="lg:flex lg:justify-between align-middle items-center">
                <button className={`flex lg:mx-0 mx-auto text-secondary font-semibold px-6 py-4 rounded-full bg-white`}>
                    <img className="w-6 mr-2" src={plan} alt="arrow" />
                    <span> Select Plan</span>
                </button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>

                <button onClick={() => changeStep(1)} className="flex lg:mx-0 mx-auto bg-[#D7E8C3] text-secondary font-semibold px-6 py-4 rounded-full">
                    <img className="w-6 mr-2" src={plan2} alt="arrow" />
                    Customize Plan</button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button onClick={() => changeStep(2)} className="flex lg:mx-0 mx-auto bg-white text-secondary font-semibold px-6 py-4 rounded-full">
                    <img className="w-6 mr-2" src={user} alt="arrow" />
                    Personal Information</button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button onClick={() => changeStep(3)} className="flex lg:mx-0 mx-auto bg-white text-secondary font-semibold px-6 py-4 rounded-full">
                    <img className="w-6 mr-2" src={delivery} alt="arrow" />
                    Delivery Information</button>
                <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h- lg:mx-0 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </div>
                <button onClick={() => changeStep(4)} className="flex lg:mx-0 mx-auto bg-white text-secondary font-semibold px-6 py-4 rounded-full">
                    <img className="w-6 mr-2 " src={order} alt="arrow" />
                    Review Order</button>
            </div>
        </div>
    );
};

export default OrderStep;
