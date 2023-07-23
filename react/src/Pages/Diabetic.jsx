import DiabeticCustomerInformation from "../Components/Diabetic/DiabeticCustomerInformation";
import DiabeticCustomize from "../Components/Diabetic/DiabeticCustomize";
import DiabeticOrderDelivery from "../Components/Diabetic/DiabeticOrderDelivery";
import DiabeticOrderReview from "../Components/Diabetic/DiabeticOrderReview";
import OrderStep from "../Components/OrderForm/OrderStep";
import BreadCumb from "../Components/Shared/BreadCumb";

const Diabetic = () => {
    return (
        <div>
            <BreadCumb title="Diabetic" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />

            <OrderStep></OrderStep>
            <DiabeticCustomize />
            <DiabeticCustomerInformation/>
            <DiabeticOrderDelivery/>
            <DiabeticOrderReview/>
        </div>
    );
};

export default Diabetic;