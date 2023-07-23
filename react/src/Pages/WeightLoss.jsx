import OrderStep from '../Components/OrderForm/OrderStep';
import BreadCumb from '../Components/Shared/BreadCumb'
import WeightLossCustomerInformation from '../Components/WeightLoss/WeightLossCustomerInformation';
import WeightLossCustomize from '../Components/WeightLoss/WeightLossCustomize';
import WeightLossOrderDelivery from '../Components/WeightLoss/WeightLossOrderDelivery';
import WeightLossOrderReview from '../Components/WeightLoss/WeightLossOrderReview';
const WeightLoss = () => {
    return (
        <div>
            <BreadCumb title="Weight Loss" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />

            <OrderStep></OrderStep>
            <WeightLossCustomize />
            <WeightLossCustomerInformation />
            <WeightLossOrderDelivery />
            <WeightLossOrderReview/>
        </div>
    );
};

export default WeightLoss;