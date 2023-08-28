import { useContext } from "react";
import { userContext } from "../../Contexts/MainContext";
import MealPlan from "../Shared/MealPlan";
import help from "../../assets/help.png";
import book_appointment from "../../assets/book_appointment.png";
import weight_loss from "../../assets/weight_loss.png";
import MUSCLES from "../../assets/MUSCLES-gain.png";
import KETO from "../../assets/KETO.png";
import VEGETARIAN from "../../assets/VEGETARIAN.png";
import { Link } from "react-router-dom";
const OrderForm = () => {
    const plans = [
        {
            id: '2',
            name: 'WEIGHT LOSS',
            description: 'KCal 2100 to 2500',
            image: '',
            btn: 'Select Plan',
            url:'/weight-loss-plan',
            img: weight_loss,
        },
        
        {
            id: '3',
            name: 'MUSCLES GAIN',
            'description': 'KCal 2900 to 3300',
            image: '',
            btn: 'Select Plan',
            url:'/muscles-Gain-plan',
            img: MUSCLES,
        },
        {
            id: '5',
            name: 'KETO',
            description:"Kcal 1700 to 2000",
            image: '',
            btn: 'Select Plan',
            url:'/keto-plan',
            img: KETO,
        },
        {
            id: '6',
            name: 'VEGETARIAN',
            description:"Kcal 1600 to 2000",
            image: '',
            btn: 'Select Plan',
            url:'/vegetarian-plan',
            img: VEGETARIAN,
        }
    ]
    const { order } = useContext(userContext)

    let content;

    if (order?.step === 0) {
        content = <div className=" mx-auto py-10">
            <div className="lg:flex lg:flex-row flex flex-col-reverse container mx-auto">
                <div className="lg:w-5/12 w-10/12 grid grid-cols-1 md:grid-cols-1 md:gap-6 mx-auto lg:mr-6 ">
                    <div
                            className="relative overflow-hidden rounded-xl transition hover:bg-[#699a2d5b] shadow-xl mb-6 mt-6 lg:mt-2 shadow-[#2b34407a] flex justify-between"
                            >
                            <div className="lg:w-7/12 md:w-7/12 sm:w-7/12 lg:mr-0 mr-2 ">
                                <div className="pl-6 py-8 ">

                                    <h3 className="mt-0.5 text-2xl font-bold text-primary">
                                    Need Free Nutrition expert Consultant?
                                    </h3>
                                    <p className="mt-3 text-md font-medium text-secondary ">
                                    Get in touch with your nutritionist and let the experts decide what is best for you!
                                    </p>
                                    <Link to='https://wa.me/c/971569142494' className="btn mt-4 text-white btn-primary"
                                    >Book Appointment</Link>
                                </div>
                            </div>
                            <div className="lg:w-5/12 md:w-5/12 sm:w-5/12 lg:block md:block sm:block hidden">
                            <img
                                alt="Office"
                                src={book_appointment}
                                className=" h-full  lg:w-full object-cover"
                            />
                            </div>
                    </div >
                    <div
                            className="relative overflow-hidden rounded-xl transition hover:bg-[#699a2d5b] shadow-xl mb-6  lg:mt-6 shadow-[#2b34407a] flex justify-between"
                            >
                            <div className="lg:w-7/12 md:w-7/12 sm:w-7/12 lg:mr-0 mr-2">
                                <div className="pl-6 py-9 ">

                                    <h3 className="mt-0.5 text-2xl font-bold text-primary">
                                    Need help in choosing a plan?
                                    </h3>
                                    <p className="mt-3 text-md font-medium text-secondary ">
                                    Get in touch with your nutritionist and let the experts decide what is best for you!
                                    </p>
                                    <Link to='https://wa.me/c/971569142494' className="btn mt-4 text-white btn-primary px-6"
                                    >Help</Link>
                                </div>
                            </div>
                            <div className="lg:w-5/12 md:w-5/12 sm:w-5/12 lg:block md:block sm:block hidden">
                            <img
                                alt="Office"
                                src={help}
                                className=" h-full w-full object-cover"
                            />
                            </div>
                    </div >
                </div>
                <div className="grid xs:grid-cols-1 container sm:grid-cols-2 w-10/12 lg:w-7/12  lg:grid-cols-2 gap-6 mx-8/12 mx-auto">
                {plans.map((plan, index) => <MealPlan plan={plan} key={index} />)}
            </div>
            </div>
        </div>
    }
    return content;
};

export default OrderForm;
