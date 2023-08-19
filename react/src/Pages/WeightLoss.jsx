import OrderStep from '../Components/OrderForm/OrderStep';
import BreadCumb from '../Components/Shared/BreadCumb'
import OrderSummary from '../Components/OrderSummary';
import WeightLossCustomerInformation from '../Components/WeightLoss/WeightLossCustomerInformation';
import WeightLossCustomize from '../Components/WeightLoss/WeightLossCustomize';
import WeightLossOrderDelivery from '../Components/WeightLoss/WeightLossOrderDelivery';
import WeightLossOrderReview from '../Components/WeightLoss/WeightLossOrderReview';
import { userContext } from '../Contexts/MainContext';
import { useContext } from 'react';
const WeightLoss = () => {
    const {order} = useContext(userContext)
    console.log(order)
    return (
        <div>
            <BreadCumb title="Weight Loss" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />

            <OrderStep></OrderStep>
            <div className='  bg-gray-100'>
                <div className='lg:flex container mx-auto'>
                <div className='lg:w-7/12 lg:mr-12 mt-12'>
                    <WeightLossCustomize />
                    <WeightLossCustomerInformation />
                    <WeightLossOrderDelivery />
                    {/* <WeightLossOrderReview/> */}
                </div>
                <div className='lg:w-4/12'>
                   <OrderSummary/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default WeightLoss;