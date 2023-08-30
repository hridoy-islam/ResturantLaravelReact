
import Clean from "../Components/Clean";
import Location from "../Components/Location";
import Banner from "../Components/Shared/Banner";
import Step from "../Components/Step";
import Subscribe from "../Components/Subscribe";
import OrderSlider from "../Components/OrderSlider";
import VarityMeal from "../Components/VarityMeal";
import BlogHome from "../Components/BlogHome";
import OrderHome from "../Components/OrderHome";
import OrderHomeStep from "../Components/OrderHomeStep";
import OrderStepResponsive from "../Components/OrderForm/OrderStepResponsive";
import OrderStepHomeResponsive from "../Components/OrderForm/OrderStepHomeResponsive";

const Home = () => {
    
    return (
        <div>
            <Banner />
            
            <div className='lg:block md:hidden sm:hidden hidden'><OrderHomeStep /></div>
            <div className='lg:hidden md:block sm:block block'><OrderStepHomeResponsive/></div>
            <OrderHome />
            <VarityMeal/>
            
            <Step />
            <Clean />
            <OrderSlider />
            <BlogHome />
            
            <Location />
            <Subscribe />
        </div>
    );
};

export default Home;
