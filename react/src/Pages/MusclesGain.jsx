import { useContext, useEffect } from "react";
import MusclesCustomerInformation from '../Components/MusclesGain/MusclesCustomerInformation';
import MusclesGainCustomize from '../Components/MusclesGain/MusclesGainCustomize';
import MusclesGainOrderReview from '../Components/MusclesGain/MusclesGainOrderReview';
import OrderStep from "../Components/OrderForm/OrderStep";
import OrderSummary from "../Components/OrderSummary";
import BreadCumb from "../Components/Shared/BreadCumb";
import { userContext } from "../Contexts/MainContext";
import MusclesGainOrderDelivery from '../components/MusclesGain/MusclesGainOrderDelivery';

const MusclesGain = () => {
    const { order, setOrder } = useContext(userContext);
    useEffect(() => {
        let basePrice = 32
        let defaultPrice = basePrice * 6
        let updatedValue = {
            plan: 'Muscles Gain',
            step: 1,
            price: defaultPrice,
            duration: 6,
            meal: 1,
            basePrice: basePrice,
            breakFastLight: { price: 10, added: false },
            breakFastFull: { price: 32, added: false },
            snacks: { price: 7, added: false },
        };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));
    }, []);
    return (
        <div>
            <BreadCumb title="Muscles Gain" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />

            <OrderStep></OrderStep>
            <div className='  bg-gray-100'>
                <div className='lg:flex container mx-auto'>
                    <div className='lg:w-7/12 lg:mr-12 mt-12'>
                        {(order?.step === 1) && < MusclesGainCustomize />}
                        {(order?.step === 2) && <MusclesCustomerInformation />}
                        {(order?.step === 3) && <MusclesGainOrderDelivery />}
                        {(order?.step === 4) && <MusclesGainOrderReview />}
                    </div>
                    <div className='lg:w-4/12'>
                        <OrderSummary />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MusclesGain;
