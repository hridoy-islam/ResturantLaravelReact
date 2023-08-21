import { useContext, useEffect } from 'react';
import OrderStep from '../Components/OrderForm/OrderStep';
import OrderSummary from '../Components/OrderSummary';
import BreadCumb from '../Components/Shared/BreadCumb';
import WeightLossCustomerInformation from '../Components/WeightLoss/WeightLossCustomerInformation';
import WeightLossCustomize from '../Components/WeightLoss/WeightLossCustomize';
import WeightLossOrderDelivery from '../Components/WeightLoss/WeightLossOrderDelivery';
import WeightLossOrderReview from '../Components/WeightLoss/WeightLossOrderReview';
import { userContext } from '../Contexts/MainContext';
const WeightLoss = () => {
    const { order, setOrder } = useContext(userContext)
    useEffect(() => {
        let basePrice = 32
        let defaultPrice = basePrice * 6
        let updatedValue = {
            plan: 'Weight Loss',
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
            <BreadCumb title="Weight Loss" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />

            <OrderStep></OrderStep>
            <div className='  bg-gray-100'>
                <div className='lg:flex container mx-auto'>
                    <div className='lg:w-7/12 lg:mr-12 mt-12'>
                        {(order?.step === 1) && < WeightLossCustomize />}
                        {(order?.step === 2) && <WeightLossCustomerInformation />}
                        {(order?.step === 3) && <WeightLossOrderDelivery />}
                        {(order?.step === 4) && <WeightLossOrderReview />}

                    </div>
                    <div className='lg:w-4/12'>
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeightLoss;
