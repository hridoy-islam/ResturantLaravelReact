import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axiosClient from '../../AxiosClient';
import PageTitle from '../../Components/Shared/PageTitle';
const CreateCategory = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        axiosClient.post('/category', data)
            .then(({ data }) => {
                if (data.success) {
                    toast(data.message);
                    reset({ title: '' })
                }
            })
    }
    return (
        <div>
            <PageTitle title="Create Category" />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto container py-10">
                <label>Category Name</label>
                <input type='text' className="input input-bordered w-full" {...register('title')} />
                <button type='submit' className="btn btn-primary rounded-none text-white">Add</button>
            </form>
        </div>
    );
};

export default CreateCategory;
