import { useContext, useState } from "react";
import { userContext } from "../../Contexts/MainContext";

const OrderCustomize = () => {
    const { order, setOrder } = useContext(userContext)
    const [duration, setDuration] = useState('')
    const [days, setDays] = useState('')
    const [offday, setOffday] = useState('')
    const [meal, setMeal] = useState([]);
    const durationPlan = [
        '1 Week',
        '4 week',
        '8 Week',
        '12 week',
    ]
    const daysPerWeek = [
        '5 Days',
        '6 Days',
        '7 Days'
    ]
    const dayoff = [
        'Friday - Saturday',
        'Saturday - Sunday'
    ]
    const mealType = [
        'Breakfast',
        'Launch',
        'Dinner',
        'Snack + Drink'
    ]
    const selectDuration = (item) => {
        setDuration(item)
    }
    const selectDays = (item) => {
        setDays(item)
    }
    const selectOffDay = (item) => {
        setOffday(item)
    }
    const selectMealType = (item) => {
        console.log(item)
        if (meal.length > 1) {
            return 'Something Went Wrong';
        }
        setMeal(meal => ([
            ...meal,
            item
        ]))
    }
    const handleNext = () => {
        let updatedValue = { step: 2, duration: duration, days: days, offday: offday, meal: meal };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));
    }
    return (
        <div className="container mx-auto grid grid-cols-2 gap-10">
            <div className="bg-green-100 p-10 rounded-lg">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Customise your plan</h2>
                    <button className="text-primary btn bg-white rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>

                        Our Menu</button>
                </div>
                <div className="my-10">
                    <h2 className="text-2xl font-bold">Choose plan duration :</h2>
                    <div className="flex gap-3 mt-4">

                        {
                            durationPlan.map((item, idx) => <>
                                <button onClick={() => selectDuration(item)} key={idx} className={`btn py-2 px-6 rounded-md text-white ${duration === item ? 'btn-secondary' : 'btn-primary'}`}> {item}</button>
                            </>)
                        }
                    </div>
                </div>
                <div className="my-10">
                    <h2 className="text-2xl font-bold">Choose deliveries per week :</h2>
                    <div className="flex gap-3 mt-4">
                        {daysPerWeek.map((item, index) => <>
                            <button
                                onClick={() => selectDays(item)}
                                key={index}
                                className={`btn py-2 px-6 rounded-md text-white ${days === item ? 'btn-secondary' : 'btn-primary'}`}
                            >{item}</button>
                        </>)}
                    </div>
                </div>
                {
                    days == '7 Days' ? '' : <>
                        <div className="my-10">
                            <h2 className="text-2xl font-bold">Choose your off day(s) :</h2>
                            <div className="flex gap-3 mt-4">
                                {dayoff.map((item, id) => <>
                                    <button
                                        onClick={() => selectOffDay(item)}
                                        key={id}
                                        className={`btn py-2 px-6 rounded-md text-white ${offday === item ? 'btn-secondary' : 'btn-primary'}`}
                                    >{item}</button>
                                </>)}
                            </div>
                        </div>
                    </>
                }

                <div className="my-10">
                    <h2 className="text-2xl font-bold">Choose your meal type (2 minimum) :</h2>
                    <div className="flex gap-3 mt-4">
                        {mealType.map((item, index) => <>
                            <button onClick={() => selectMealType(item)} key={index}
                                className={`btn py-2 px-6 rounded-md text-white ${meal.includes(item) ? 'btn-secondary' : 'btn-primary'}`}
                            > {item} </button>
                        </>)}
                    </div>
                </div>
                <div className="my-10">
                    <h2 className="text-3xl font-bold">Price: 689.00 AED</h2>
                    <p className="text-xm mt-1 text-secondary">Price Exclusive of VAT</p>
                </div>

                <div className="my-10">
                    <button onClick={handleNext} className="btn  py-2 px-6 rounded-md  bg-white text-gray-900 border-2 border-gray-600 hover:bg-gray-600 hover:border-gray-600 hover:text-white">Next</button>
                </div>
            </div>
            <div>
                <h3 className="text-4xl font-bold text-secondary">GREEN DIET (VEGETARIAN/VEGAN MEAL PLANS)</h3>
                <h4 className="text-primary font-semibold text-2xl my-5">Green Diet</h4>
                <p className="text-secondary font-medium text-md">A green diet emphasizes whole, plant-based foods such as fruits, vegetables, legumes, whole grains, nuts, and seeds while avoiding processed and refined foods. This diet is rich in fibre, vitamins, minerals, and antioxidants that can enhance digestion, raise energy levels, and support overall health.

                    Our green diet can be customized to support specific health goals such as weight loss, muscle gain, and overall wellness. It is associated with a reduced chance of chronic illnesses like heart disease, diabetes, and certain cancers. We only use fresh ingredients and deliver fresh meals every day across the UAE.</p>
            </div>
        </div >
    );
};

export default OrderCustomize;
