import OrderStep from "../Components/OrderForm/OrderStep";
import OrderSummary from "../Components/OrderSummary";
import BreadCumb from "../Components/Shared/BreadCumb";
import VegatarianOrderReview from "../Components/Vegetarian/VegatarianOrderReview";
import VegetarianCustomerInformation from "../Components/Vegetarian/VegetarianCustomerInformation";
import VegetarianCustomize from "../Components/Vegetarian/VegetarianCustomize";
import VegetarianOrderDelivery from "../Components/Vegetarian/VegetarianOrderDelivery";

const Vegetarian = () => {
    return (
        <div>
            <BreadCumb title="Vegetarian" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />

            <OrderStep></OrderStep>

            <div className='  bg-gray-100'>
                <div className='lg:flex container mx-auto'>
                <div className='lg:w-7/12 lg:mr-12 mt-12'>
                <VegetarianCustomize />
                <VegetarianCustomerInformation />
                <VegetarianOrderDelivery/>
                    {/* <VegatarianOrderReview/> */}
                </div>
                <div className='lg:w-4/12'>
                   <OrderSummary/>
                </div>
                </div>
            </div>            
            
        </div>
    );
};

export default Vegetarian;