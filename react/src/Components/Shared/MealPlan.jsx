import { useContext } from "react";
import { userContext } from "../../Contexts/MainContext";

const MealPlan = ({ plan }) => {
    const { name, id } = plan
    const { setOrder, order } = useContext(userContext)
    const selectOrder = e => {
        e.preventDefault();
        let updatedValue = { "plan": parseInt(id), step: 1 };
        setOrder(order => ({
            ...order,
            ...updatedValue
        }));

    }
    return (
        <article
            className="relative overflow-hidden rounded-xl transition hover:bg-[#699a2d5b] shadow-xl shadow-[#2b34407a] "
        >
            <img
                alt="Office"
                src="https://vmeals.ae/images/imagedata.png"
                className="absolute h-full w-full object-cover"
            />

            <div
                className="relative pt-32 sm:pt-24 lg:pt-48"
            >
                <div className="p-4 sm:p-6">

                    <h3 className="mt-0.5 text-2xl font-bold text-primary top-10 absolute">
                        {name}
                    </h3>
                    <button className="btn text-white btn-primary"
                        onClick={selectOrder}
                    >Select Plan</button>
                </div>
            </div>
        </article >
    );
};

export default MealPlan;
