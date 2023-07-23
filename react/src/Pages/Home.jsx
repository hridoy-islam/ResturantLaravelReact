
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


const Home = () => {
    return (
        <div>
            <Banner />
            {/* <VarityMeals /> */}
            <OrderHomeStep />
            <OrderHome />
            <VarityMeal />
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
