import PageTitle from "../../Components/Shared/PageTitle";

const CreatePlan = () => {
    return (
        <div>
            <PageTitle title="create new plan" />

            <form className="container mx-auto my-5">
                <p>Plan Name</p>
                <input type="text" className="input input-bordered input-accent w-full max-w-md" />
                <p>Plan Price $$</p>
                <input type="text" className="input input-bordered input-accent w-full max-w-md" />
                <p>Plan Description $$</p>
                <textarea className="textarea textarea-accent w-full max-w-md"></textarea>
                <br />
                <button className="btn btn-info">Create</button>
            </form>
        </div>
    );
};

export default CreatePlan;
