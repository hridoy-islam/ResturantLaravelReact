import MealPlan from "./Shared/MealPlan";

const OrderForm = () => {

    const plans = [
        {
            id: '1',
            name: 'WEIGHT LOSS',
            image: '',
            url:'/weight-loss-plan'
        },
        {
            id: '2',
            name: 'WEIGHT GAIN',
            image: '',
            url:'/weight-gain-plan'
        },
        {
            id: '3',
            name: 'MUSCLES GAIN',
            image: '',
            url:'/muscles-Gain-plan'
        },
        {
            id: '4',
            name: 'KETO',
            image: '',
            url:'/keto-plan'
        },
        {
            id: '5',
            name: 'VEGETARIAN',
            image: '',
            url:'/vegetarian-plan'
        },
        {
            id: '6',
            name: 'DIABETIC',
            image: '',
            url:'/diabetic-plan'
        }
    ]


    // if (order?.step === 0) {
    //     content = <div className=" mx-auto py-10">
    //         <div className="py-6">
    //         <OrderStep></OrderStep>
    //         </div>
    //         <div className="grid xs:grid-cols-1 container sm:grid-cols-2 w-10/12 lg:w-full lg:grid-cols-4 gap-6 mx-8/12 mx-auto">
    //             {plans.map((plan, index) => <MealPlan plan={plan} key={index} />)}
    //         </div>
    //     </div>
    // }
    // if (order.step === 1) {
    //     content = <div className="container mx-auto py-10">
    //         <OrderCustomize />
    //     </div>
    // }
    // if (order.step === 2) {
    //     content = <div className="container mx-auto py-10">
    //         <CustomerInformation />
    //     </div>
    // }
    // if (order.step === 3) {
    //     content = <div className="container mx-auto py-10">
    //         <OrderDelivery />
    //     </div>
    // }
    // if (order.step === 4) {
    //     content = <div className=" bg-gray-100 mx-auto py-10">
    //         <OrderReview />
    //     </div>
    // }
    return(
        <div className="grid xs:grid-cols-1 container sm:grid-cols-2 w-10/12 lg:w-full lg:grid-cols-3 gap-6 mx-8/12 mx-auto">
        {plans.map((plan, index) => <MealPlan plan={plan} key={index} />)}
        </div>
    );
};

export default OrderForm;