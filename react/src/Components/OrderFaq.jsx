import img from "../../src/assets/order-faq-img.png"
import order1 from "../../src/assets/order1.svg"
import order2 from "../../src/assets/order2.svg"
import order3 from "../../src/assets/order3.svg"
const OrderFaq = () => {
    return (
        <div className=" bg-gray-200 lg:my-24 my-12 py-12">
            <div className="lg:flex justify-between items-center container mx-auto  lg:py-12 py-6">
                <div> 
                    <h1 className="lg:text-6xl text-4xl text-center lg:text-left text-secondary font-bold pb-6">How to Get Started?</h1>
                    <div className="flex justify-between items-center my-4">
                        <span className="lg:text-6xl text-4xl font-bold text-primary lg:pr-4 px-6">01.</span>
                        <div>
                        <h3 className="lg:text-3xl text-xl font-bold text-secondary">Choose your plan</h3>
                        <p className="lg:text-md text-sm font-semibold w-3/4 py-2 text-secondary">The first step in your fitness journey is selecting the best food plan from our wide range of options. Every plan is unique in its features and benefits.</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <span className="lg:text-6xl text-4xl font-bold text-primary lg:pr-4 px-6">02.</span>
                        <div>
                        <h3 className="lg:text-3xl text-xl font-bold text-secondary">Customise your plan</h3>
                        <p className="lg:text-md text-sm font-semibold w-3/4 py-2 text-secondary">Your meals can be tailored based on your health objectives, diet choices, portions, food sensitivities, intolerances, and several other factors.</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <span className="lg:text-6xl text-4xl font-bold text-primary lg:pr-4 px-6">03.</span>
                        <div>
                        <h3 className="lg:text-3xl text-xl font-bold text-secondary">
                        Enter your information</h3>
                        <p className="lg:text-md text-sm font-semibold w-3/4 py-2 text-secondary">Enter your preferences and information, such as the number of meals, delivery address, portion size, plan duration, and any special requirements.</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <span className="lg:text-6xl text-4xl font-bold text-primary lg:pr-4 px-6">04.</span>
                        <div>
                        <h3 className="lg:text-3xl text-xl font-bold text-secondary">Place your order</h3>
                        <p className="lg:text-md text-sm font-semibold w-3/4 py-2 text-secondary">Take a quick look to make sure all the submitted information is accurate. Check out to confirm your order and our chefs will be in action for you.</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <span className="lg:text-6xl text-4xl font-bold text-primary lg:pr-4 px-6">05.</span>
                        <div>
                        <h3 className="lg:text-3xl text-xl font-bold text-secondary">Enjoy your meals</h3>
                        <p className="lg:text-md text-sm font-semibold w-3/4 py-2 text-secondary">Your wholesome meal is delivered to your door in eco-friendly and microwavable packaging. Simply heat and enjoy the goodness of nutritious foods.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img} alt="img" />
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-3 container mx-auto">
                 <div className="bg-primary py-12 px-8 rounded-3xl my-4 mx-3">
                   <h2 className="text-xl pt-6 font-medium text-white">BUILT FOR YOU</h2>
                    <h3 className="text-3xl py-4 font-bold text-white">Why do customers choose us?</h3>
                </div>
                 <div className="bg-white py-6 px-3 rounded-3xl my-4 mx-3 text-center">
                    <img className="w-5/12 mx-auto my-3" src={order1} alt="" />
                    <h3 className="text-3xl py-4 font-bold text-secondary">Free Nutritionist Consultation</h3>
                </div>
                 <div className="bg-white py-6 px-3 rounded-3xl my-4 mx-3 text-center">
                    <img className="w-5/12 mx-auto my-3" src={order2} alt="" />
                    <h3 className="text-3xl py-4 font-bold text-secondary">Allergies & Intolerance</h3>
                </div>
                 <div className="bg-white py-6 px-3 rounded-3xl my-4 mx-3 text-center">
                    <img className="w-5/12 mx-auto my-3" src={order3} alt="" />
                    <h3 className="text-3xl py-4 font-bold text-secondary">Macro-Specific & Custom Menus</h3>
                </div>
            </div>
            

        </div>
    );
};

export default OrderFaq;