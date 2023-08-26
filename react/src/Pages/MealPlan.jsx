import OrderFaq from '../Components/OrderFaq';
import OrderForm from '../Components/OrderForm/OrderForm';
import OrderStepResponsive from '../Components/OrderForm/OrderStepResponsive';
import OrderHomeStep from '../Components/OrderHomeStep';
import BreadCumb from '../Components/Shared/BreadCumb';
export default function MealPlan() {


    return (
        <>
            <BreadCumb title="Meal Plan" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            <div className='lg:block md:block sm:block hidden'><OrderHomeStep/></div>
            <div className='lg:hidden md:hidden sm:hidden block'><OrderStepResponsive></OrderStepResponsive></div>

            <OrderForm />
            <OrderFaq></OrderFaq>
        </>
    )
}


