import MusclesCustomerInformation from "../Components/MusclesGain/MusclesCustomerInformation";
import MusclesGainCustomize from "../Components/MusclesGain/MusclesGainCustomize";
import MusclesGainOrderDelivery from "../Components/MusclesGain/MusclesGainOrderDelivery";
import MusclesGainOrderReview from "../Components/MusclesGain/MusclesGainOrderReview";
import OrderStep from "../Components/OrderForm/OrderStep";
import OrderSummary from "../Components/OrderSummary";
import BreadCumb from "../Components/Shared/BreadCumb";

const MusclesGain = () => {
    return (
        <div>
            <BreadCumb title="Muscles Gain" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />

            <OrderStep></OrderStep>
            <div className='  bg-gray-100'>
                <div className='lg:flex container mx-auto'>
                <div className='lg:w-7/12 lg:mr-12 mt-12'>
                <MusclesGainCustomize />
                <MusclesCustomerInformation/>
                <MusclesGainOrderDelivery/>
                    {/* <MusclesGainOrderReview/> */}
                </div>
                <div className='lg:w-4/12'>
                   <OrderSummary/>
                </div>
                </div>
            </div>

            
        </div>
    );
};

export default MusclesGain;