import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PageTitle from '../../Components/Shared/PageTitle';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreatePlan = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [errors, setErrors] = useState(null)

    const onSubmit = data =>
        axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/plan`, data)
            .then(({ data }) => {
                if (data.success) {
                    toast.success("Create Plan");
                    navigate('/admin/plan');
                }
                else {
                    toast.success("Create Plan");
                    navigate('/admin/plan');
                }
                reset()

            })
            .catch(error => {
                const res = error.response;
                if (res && res.status === 422) {
                    setErrors(res.data.errors);
                }
            });
    return (
        <div>
            <PageTitle title="Create Plan" />
            <div className='container mx-auto py-6'>
                <form onSubmit={handleSubmit(onSubmit)}> 
                    <div className="space-y-12 mt-8">
                        <div className=" pb-4">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <div className="sm:col-span-3 ">
                                    <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-900">
                                    Plan Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder='Plan Name'
                                            required
                                            className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                                            {...register('name')}

                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3 ">
                                    <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-900">
                                    Base Price
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="baseprice"
                                            id="title"
                                            placeholder='Base Price'
                                            required
                                            className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                                            {...register('baseprice')}

                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3 ">
                                    <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-900">
                                    BreakFast Full
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="bffull"
                                            id="title"
                                            placeholder='BreakFast Full'
                                            required
                                            className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                                            {...register('bffull')}

                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3 ">
                                    <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-900">
                                    BreakFast Light
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="bflight"
                                            id="title"
                                            placeholder='BreakFast Light'
                                            required
                                            className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                                            {...register('bflight')}

                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3 ">
                                    <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-900">
                                    Snacks Price
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="number"
                                            name="snacks"
                                            id="title"
                                            placeholder='Snacks Price'
                                            required
                                            className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                                            {...register('snacks')}

                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                    <button type='submit' className="btn btn-primary px-12 rounded-md mt-4 text-white">Add</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreatePlan;
