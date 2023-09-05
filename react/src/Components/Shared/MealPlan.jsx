import { Link } from "react-router-dom";

const MealPlan = ({ plan }) => {
    const { name, url,description, btn , img, price} = plan
    
    return (
        <article
            className="relative overflow-hidden rounded-xl transition  lg:shadow-xl md:shadow-xl sm:shadow-lg shadow-lg shadow-[#2b34407a] h-72"
        >
            <img
                alt="Office"
                src={img}
                className="absolute left-2/4 h-full w-full object-cover"
            />

            <div
                className="relative pt-52 lg:pt-52"
            >
                <div className="pl-4 sm:pl-6">

                    <h3 className="mt-0.5 text-2xl font-bold text-primary top-10 absolute">
                        {name}
                    </h3>
                    <p className="mt-3 text-md font-medium text-secondary top-20 absolute">
                        {description}
                    </p>
                    <h3 className="mt-[-16px] text-md font-base text-secondary top-40 absolute">
                        Starting From
                    </h3>
                    <p className="mt-2 text-sm font-bold text-secondary top-40 absolute">
                        {price} AED
                    </p>
                    <Link to={url} className="btn text-white btn-primary"
                    >{btn}</Link>
                </div>
            </div>
        </article >
    );
};

export default MealPlan;
