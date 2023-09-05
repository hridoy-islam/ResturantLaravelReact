import OrderFaq from '../Components/OrderFaq';
import OrderHomeStep from '../Components/OrderHomeStep';
import meal_plan_bg from '../assets/meal_plan_bg.jpeg';
import BreadCumb from '../Components/Shared/BreadCumb';
import OrderHome from "../Components/OrderForm/OrderForm";
import OrderStepResponsive from '../Components/OrderForm/OrderStepResponsive';
export default function MealPlan() {


    return (
        <>
            <BreadCumb title="Meal Plan" image={meal_plan_bg} />

            <div className='lg:block md:hidden sm:hidden hidden'><OrderHomeStep /></div>
            <div className='lg:hidden md:block sm:block block'><OrderStepResponsive></OrderStepResponsive></div>
            <OrderHome />

            <OrderFaq></OrderFaq>
        </>
    )
}


