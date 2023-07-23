import OrderStep from '../Components/OrderForm/OrderStep';
import BreadCumb from '../Components/Shared/BreadCumb'
import WeightGainCustomerInformation from '../Components/WeightGain/WeightGainCustomerInformation';
import WeightGainCustomize from '../Components/WeightGain/WeightGainCustomize';
import WeightGainOrderDelivery from '../Components/WeightGain/WeightGainOrderDelivery';
import WeightGainOrderReview from '../Components/WeightGain/WeightGainOrderReview';
const WeightGain = () => {
    return (
        <div>
            <BreadCumb title="Weight Gain" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />

            <OrderStep></OrderStep>
            <WeightGainCustomize />
            <WeightGainCustomerInformation />
            <WeightGainOrderDelivery />
            <WeightGainOrderReview/>
        </div>
    );
};

export default WeightGain;