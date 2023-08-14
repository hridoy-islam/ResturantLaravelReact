import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../Contexts/MainContext";

const MealPlan = ({ plan }) => {
    const { name, url,description, btn , img} = plan
    
    return (
        // <div>
        //     <div className="card card-compact w-96 bg-base-100 shadow-xl">
        //         <figure><img src={img} alt="Shoes" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">{name}</h2>
        //             <p>{description}</p>
        //             <div className="card-actions justify-end">
        //             <Link to={url} className="btn text-white btn-primary"
        //              >{btn}</Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <article
            className="relative overflow-hidden rounded-xl transition hover:bg-[#699a2d5b] shadow-xl shadow-[#2b34407a] h-72"
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
                    <Link to={url} className="btn text-white btn-primary"
                    >{btn}</Link>
                </div>
            </div>
        </article >
    );
};

export default MealPlan;
