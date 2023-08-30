import {  useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PageTitle from '../../Components/Shared/PageTitle';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateMenu = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [errors, setErrors] = useState(null)
    const onsubmit = data =>
        axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/menu`, data)
            .then(({ data }) => {
                if (data.success) {
                    toast.success("Create Menu");
                    navigate('/admin/menu/create');
                }
                else {
                    toast.success("Create Menu");
                    navigate('/admin/menu/');
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
            <PageTitle title="Create Menu" />
            <div className='container mx-auto py-6'>
            <form onSubmit={handleSubmit(onsubmit)} className='container mx-auto py-4'>
                <div className="space-y-12 mt-8">
                    <div className=" pb-4">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-3">
                                <label htmlFor="street-address" className="block text-md font-medium leading-6 text-gray-900">
                                    Menu Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder='name'
                                        className="block w-full pl-4 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                                        {...register('name')}

                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="region" className="block pl-3 text-md font-medium leading-6 text-gray-900">
                                    Image
                                </label>
                                <div className="mt-2">
                                <input type="text" id="img" name="img" className="file-input pl-3 file-input-bordered file-input-success w-full " placeholder='get link' {...register('img')}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-8 mt-4">
                    <div className="border-b border-gray-900/10 pb-8">
                        <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-3">
                                <label htmlFor="street-address" className="block text-md font-medium leading-6 text-gray-900">
                                Calories
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="calories"
                                        id="calories"
                                        placeholder='calories'
                                        className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                                        {...register('calories')}

                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-900">
                                Protein
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="protein"
                                        id="protein"
                                        placeholder='protein'
                                        className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                                        {...register('protein')}

                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="region" className="block text-md font-medium leading-6 text-gray-900">
                                Carb
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="carb"
                                        id="carb"
                                        placeholder='carb'
                                        className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                                        {...register('carb')}

                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="region" className="block text-md font-medium leading-6 text-gray-900">
                                Fat
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="fat"
                                        id="fat"
                                        placeholder='fat'
                                        className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                                        {...register('fat')}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-primary px-16 py-3 text-md font-semibold text-white shadow-sm hover:bg-secondary indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default CreateMenu;
