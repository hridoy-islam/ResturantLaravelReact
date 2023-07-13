import { useContext } from "react";
import { userContext } from "../../Contexts/MainContext";
import MealPlan from "../Shared/MealPlan";
import CustomerInformation from "./CustomerInformation";
import OrderCustomize from "./OrderCustomize";
import OrderDelivery from "./OrderDelivery";
import OrderReview from "./OrderReview";

const OrderForm = () => {
    const plans = [
        {
            id: '1',
            name: 'WEIGHT LOSS',
            image: '',
        },
        {
            id: '2',
            name: 'WEIGHT GAIN',
            image: '',
        },
        {
            id: '3',
            name: 'MUSCLES GAIN',
            image: '',
        },
        {
            id: '4',
            name: 'KETO',
            image: '',
        },
        {
            id: '5',
            name: 'VEGETARIAN',
            image: '',
        },
        {
            id: '6',
            name: 'DIABETIC',
            image: '',
        },
        {
            id: '7',
            name: 'WEIGHT GAIN',
            image: '',
        },
        {
            id: '8',
            name: 'KETO',
            image: '',
        },
    ]
    const { order } = useContext(userContext)

    let content;

    if (order?.step === 0) {
        content = <div className="container mx-auto py-10">
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 w-10/12 lg:w-full lg:grid-cols-4 gap-6 mx-8/12 mx-auto">
                {plans.map((plan, index) => <MealPlan plan={plan} key={index} />)}
            </div>
        </div>
    }
    if (order.step === 1) {
        content = <div className="container mx-auto py-10">
            <OrderCustomize />
        </div>
    }
    if (order.step === 2) {
        content = <div className="container mx-auto py-10">
            <CustomerInformation />
        </div>
    }
    if (order.step === 3) {
        content = <div className="container mx-auto py-10">
            <OrderDelivery />
        </div>
    }
    if (order.step === 4) {
        content = <div className=" bg-gray-100 mx-auto py-10">
            <OrderReview />
        </div>
    }
    return content;
};

export default OrderForm;
