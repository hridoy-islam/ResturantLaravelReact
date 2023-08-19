import { useContext, useEffect } from "react";
import { userContext } from "../../Contexts/MainContext";

const WeightLossCustomize = () => {
    const { order, setOrder } = useContext(userContext)
    console.log(order)
    const durationPlan = [
        {
            day: 6,
            title: '6 Days',
        },
        {
            day: 5,
            title: '5 Days',
        },
        {
            day: 20,
            title: '20 Days',
        },
        {
            day: 24,
            title: '24 Days',
        }

    ]
    const mealsTime = [
        {
            meal: 1,
            name: '1 Meal'
        },
        {
            meal: 2,
            name: '2 Meal'
        },
        {
            meal: 3,
            name: '3 Meal'
        },
    ]
    // const mealType = [
    //     'Breakfast Light',
    //     'Snack + Drink'
    // ]

    const selectDuration = (item) => {
        const meal = order.meal;
        const basePrice = order.basePrice
        const price = item * basePrice * meal
        let updatedValue = { duration: item, price: price };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));

        // console.log(order.price)
    }
    const selectMealTime = (item) => {
        const duration = order.duration;
        const basePrice = order.basePrice
        const price = duration * basePrice * item
        let updatedValue = { meal: item, price: price };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));

        // console.log(order.price)
    }

    const addBreakfastLight = () => {
        const duration = order.duration;
        const price = order.price;
        const breakFastLight = duration * order.breakFastLight.price;
        const breakFastFull = duration * order.breakFastFull.price;
        const status = order.breakFastLight.added
        const bfFullStatus = order.breakFastFull.added
        let total;
        let added;
        let full;

        if (bfFullStatus === true) {
            total = price - breakFastFull
        }

        if (!status) {
            total = price + breakFastLight
            added = true
            full = false
        }

        else {
            total = price - breakFastLight
            added = false
            full = order.breakFastFull.added
        }
        let updatedValue = {
            price: total,
            breakFastLight: { price: order.breakFastLight.price, added },
            breakFastFull: { price: order.breakFastFull.price, added: full },

        };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));
    }

    const addBreakfastFull = () => {
        const duration = order.duration;
        const price = order.price;
        const breakFastFull = duration * order.breakFastFull.price;
        const breakFastLight = duration * order.breakFastLight.price;
        const status = order.breakFastFull.added
        const bfLightStatus = order.breakFastFull.added
        let total;
        let added;
        let light;
        if (bfLightStatus === true) {
            total = price - breakFastLight
        }
        if (!status) {
            total = price + breakFastFull
            added = true
            light = false
        }
        else {
            total = price - breakFastFull
            added = false
            light = order.breakFastLight.added
        }
        let updatedValue = {
            price: total,
            breakFastFull: { price: order.breakFastFull.price, added },
            breakFastLight: { price: order.breakFastLight.price, added: light }
        };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));
    }

    const addSnacks = () => {
        const duration = order.duration;
        const snacks = duration * order.snacks.price;
        const status = order.snacks.added
        let price;
        let added;
        if (!status) {
            price = order.price + snacks
            added = true
        }
        else {
            price = order.price - snacks
            added = false
        }

        let updatedValue = { price: price, snacks: { price: order.snacks.price, added } };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));

    }


    useEffect(() => {
        let basePrice = 32
        let defaultPrice = basePrice * 6
        let updatedValue = {
            price: defaultPrice,
            duration: 6,
            meal: 1,
            basePrice: basePrice,
            breakFastLight: { price: 10, added: false },
            breakFastFull: { price: 32, added: false },
            snacks: { price: 7, added: false },
        };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));
    }, []);
    // const handleNext = () => {
    //     let updatedValue = { step: 2, duration: duration, mealTime: mealTime, meal: meal };
    //     setOrder(order => ({
    //         ...order,
    //         ...updatedValue
    //     }));
    //     console.log(order)
    // }
    return (
        <div className="container mx-auto bg-white rounded-xl">
            <div className=" p-10 rounded-lg ">
                <div className="flex justify-between items-center ">
                    <h2 className="text-2xl font-bold">Customise your plan - Price {order.price}</h2>
                    <button className="text-secondary btn bg-white border border-primary rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>

                        Our Menu</button>
                </div>
                <div className="my-10 bg-white">
                    <h2 className="text-2xl font-bold">Choose plan duration :</h2>
                    <div className="flex gap-3 mt-4">

                        {
                            durationPlan.map((item, index) =>
                                <button key={index} onClick={() => selectDuration(item.day)}
                                    className={`border py-2 px-3 rounded-md text-md ${order.duration === item.day ? ' border-primary bg-primary text-white' : 'border-secondary bg-white text-black'}`}
                                > {item.title}</button>
                            )
                        }
                    </div>
                </div>
                <div className="my-10">
                    <h2 className="text-2xl font-bold">Choose your meal type :</h2>
                    <div className="flex gap-3 mt-4">
                        {
                            mealsTime.map((item, idx) =>
                                <button key={idx} onClick={() => selectMealTime(item.meal)}  className={`border  py-2 px-4 rounded-md text-md ${order.meal === item.meal ? ' border-primary bg-primary text-white' : 'border-secondary bg-white text-black'}`}> {item.name}</button>
                            )
                        }
                    </div>
                </div>

                <div className="my-10">
                    <h2 className="text-2xl font-bold">Choose your meal type (2 minimum) :</h2>
                    <div className="flex gap-3 mt-4">
                        <button onClick={addBreakfastLight} className={`border  py-2 px-4 rounded-md text-md ${order.breakFastLight.added === true ? ' border-primary bg-primary text-white' : 'border-secondary bg-white text-black'}`} > Breakfast Light </button>

                        <button onClick={addBreakfastFull} className={`border  py-2 px-4 rounded-md text-md ${order.breakFastFull.added === true ? ' border-primary bg-primary text-white' : 'border-secondary bg-white text-black'}`} > Breakfast Full </button>
                    </div>
                </div>

                <div className="my-10">
                    <h2 className="text-2xl font-bold">Add Snacks to your meal plan :</h2>

                    <button onClick={addSnacks} className={`border mt-4 py-2 px-4 rounded-md text-md ${order.snacks.added === true ? ' border-primary bg-primary text-white' : 'border-secondary bg-white text-black'}`} > Snacks </button>
                </div>
                <div className="my-10">
                    <h2 className="text-3xl font-bold">Price: {order.price} AED</h2>
                    <p className="text-xm mt-1 text-secondary">Price Exclusive of VAT</p>
                </div>

                <div className="mt-10">
                    <button className="btn px-6 rounded-md  bg-white text-primary border-2 border-primary hover:bg-gray-600 hover:border-gray-600 hover:text-white">Next</button>
                </div>
            </div>

        </div >
    );
};

export default WeightLossCustomize;
