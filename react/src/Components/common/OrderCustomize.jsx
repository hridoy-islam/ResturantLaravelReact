import { useContext } from "react";
import { userContext } from "../../Contexts/MainContext";
import { Link } from "react-router-dom";

const OrderCustomize = () => {
    const { order, setOrder, durationPlan, mealsTime } = useContext(userContext);
    const selectDuration = (item) => {
        const meal = order.meal;
        const basePrice = order.basePrice
        const price = item * basePrice * meal
        let updatedValue = { duration: item, price: price };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));
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
    }

    const addBreakfast = (bftype) => {
        const duration = order.duration;
        const price = order.price;
        const breakFastFull = duration * order.breakFastFull.price;
        const breakFastLight = duration * order.breakFastLight.price;
        const fullStatus = order.breakFastFull.added
        const lightStatus = order.breakFastLight.added

        let total;
        let bfFullStatus;
        let bfLightStatus;


        if (bftype === 'full') {
            // first click add full
            bfFullStatus = true;
            bfLightStatus = false;
            total = price + breakFastFull
            // toogle full
            if (fullStatus) {
                bfFullStatus = false;
                bfLightStatus = false;
                total = price - breakFastFull
            }

            // check negetive
            if (lightStatus) {
                bfFullStatus = true;
                bfLightStatus = false;
                total = price - breakFastLight + breakFastFull
            }

        }

        if (bftype === 'light') {
            bfFullStatus = false;
            bfLightStatus = true;
            total = price + breakFastLight

            if (lightStatus) {
                bfFullStatus = false;
                bfLightStatus = false;
                total = price - breakFastLight
            }
            if (fullStatus) {
                bfFullStatus = false;
                bfLightStatus = true;
                total = price - breakFastFull + breakFastLight
            }
        }

        let updatedValue = {
            price: total,
            breakFastFull: { price: order.breakFastFull.price, added: bfFullStatus },
            breakFastLight: { price: order.breakFastLight.price, added: bfLightStatus }
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

    const handleNext = () => {
        let updatedValue = { step: 2 };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));
    }
    return (
        <div className="container mx-auto bg-white rounded-xl">
            <div className=" p-10 rounded-lg mb-12">
                <div className="flex justify-between items-center ">
                    <h3 className="text-3xl text-primary font-bold">Customize Your Plan</h3>
                    <Link to={'/menu'} className="text-secondary btn bg-white border border-primary rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>

                        Our Menu</Link>
                </div>
                <div className="my-4 bg-white">
                    <h2 className="text-xl font-bold">Choose plan duration :</h2>
                    <div className="grid grid-cols-2 gap-6 ml-6 mt-3">

                        {
                            durationPlan.map((item, index) =>
                                <div key={index} onClick={() => selectDuration(item.day)}
                                    className={` border py-2 px-2 w-11/12 rounded-md text-md ${order.duration === item.day ? ' border-primary bg-primary text-white' : 'border-secondary bg-white border  text-black'}`}
                                > <button className={` py-1 px-2 ml-[-32px] rounded-md  bg-[#b8e994] text-black`}>{item.title}</button>  <span className="font-semibold ">{item.discount}</span></div>
                            )
                        }
                    </div>
                </div>
                <div className="my-4">
                    <h2 className="text-xl font-bold">Choose your meal type :</h2>
                    <div className="flex gap-3 mt-3">
                        {
                            mealsTime.map((item, idx) =>
                                <button key={idx} onClick={() => selectMealTime(item.meal)} className={`border w-full py-2 px-5 rounded-md text-md ${order.meal === item.meal ? ' border-primary bg-primary text-white' : 'border-secondary bg-white text-black'}`}> {item.name}</button>
                            )
                        }
                    </div>
                </div>

                <div className="my-4">
                    <h2 className="text-xl font-bold">Add Breakfast to your meal plan :</h2>
                    <div className="flex gap-3 mt-3">
                        <button onClick={() => addBreakfast('light')} className={`border w-full py-2 px-4 rounded-md text-md ${order.breakFastLight.added === true ? ' border-primary  bg-primary text-white' : 'border-secondary bg-white text-black'}`} > Breakfast Light </button>

                        <button onClick={() => addBreakfast('full')} className={`border w-full py-2 px-5 rounded-md text-md ${order.breakFastFull.added === true ? ' border-primary bg-primary text-white' : 'border-secondary bg-white text-black'}`} > Breakfast Full </button>
                    </div>
                </div>

                <div className="mt-3">
                    <h2 className="text-xl font-bold">Add Snacks to your meal plan :</h2>

                    <button onClick={addSnacks} className={`border w-2/4 mt-2 py-2 px-5 rounded-md text-md ${order.snacks.added === true ? ' border-primary bg-primary text-white' : 'border-secondary bg-white text-black'}`} > Snacks </button>
                </div>

                <div className="mt-10">
                    <button onClick={handleNext} className="btn px-16 rounded-md  bg-primary text-white hover:bg-primary">Next</button>
                </div>
            </div>

        </div >
    );
};

export default OrderCustomize;
