import KetoCustomerInformation from '../Components/Keto/KetoCustomerInformation';
import KetoCustomize from '../Components/Keto/KetoCustomize';
import KetoOrderDelivery from '../Components/Keto/KetoOrderDelivery';
import KetoOrderReview from '../Components/Keto/KetoOrderReview';
import OrderStep from '../Components/OrderForm/OrderStep';
import BreadCumb from '../Components/Shared/BreadCumb'
const Keto = () => {
    

    return (
        <div>
            <BreadCumb title="Keto" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />

            <OrderStep></OrderStep>
            <KetoCustomize />
            <KetoCustomerInformation/>
            <KetoOrderDelivery/>
            <KetoOrderReview/>
        </div>
    );
};

export default Keto;