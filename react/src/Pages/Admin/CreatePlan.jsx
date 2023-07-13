import { useForm } from 'react-hook-form';
import axiosClient from "../../AxiosClient";
import PageTitle from "../../Components/Shared/PageTitle";
const CreatePlan = () => {
    const { register, handleSubmit } = useForm()

    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append("image", data.image[0]);
        axiosClient.post('/plan', formData)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <PageTitle title="create new plan" />

            <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto my-5">
                <p>Plan Name</p>
                <input type="text" className="input input-bordered input-accent w-full max-w-md" {...register('name')} />
                <p>Upload Image </p>
                <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" {...register('image')} />

                <br />
                <button className="btn btn-info mt-3">Create</button>
            </form>
        </div>
    );
};

export default CreatePlan;
