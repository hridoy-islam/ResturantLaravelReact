import { Link } from "react-router-dom";
import PageTitle from "../../Components/Shared/PageTitle";

const PlanList = () => {
    return (
        <div>
            <PageTitle title="All Plans" />
            <div className="py-4 container mx-auto">
                <Link className='py-2 px-4 bg-primary rounded-none' to='/admin/plan/create'>Create Plan</Link>
            </div>
        </div>
    );
};

export default PlanList;
