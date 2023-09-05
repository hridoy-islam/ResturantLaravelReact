import { useContext, useEffect } from 'react';
import OrderStep from '../Components/OrderForm/OrderStep';
import OrderSummary from '../Components/OrderSummary';
import BreadCumb from '../Components/Shared/BreadCumb';
import { userContext } from '../Contexts/MainContext';
import OrderReview from '../Components/common/OrderReview';
import OrderDelivery from '../Components/common/OrderDelivery';
import OrderInfo from '../Components/common/OrderInfo';
import OrderCustomize from '../Components/common/OrderCustomize';
import OrderStepResponsive from '../Components/OrderForm/OrderStepResponsive';
import weightloss_bg from '../assets/weight-loss.jpg';
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
            <BreadCumb title="Weight Loss" image={weightloss_bg} />

            <div className='lg:block md:hidden sm:hidden hidden'><OrderStep/></div>
            <div className='lg:hidden md:block sm:block block'><OrderStepResponsive></OrderStepResponsive></div>
            <div className='  bg-gray-100 lg:pt-0 pt-2'>
                <div className='lg:flex container mx-auto'>
                    <div className='lg:w-7/12 lg:mr-12 mt-12'>
                        {(order?.step === 1) && <OrderCustomize />}
                        {(order?.step === 2) && <OrderInfo />}
                        {(order?.step === 3) && <OrderDelivery />}
                        {(order?.step === 4) && <OrderReview />}

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
