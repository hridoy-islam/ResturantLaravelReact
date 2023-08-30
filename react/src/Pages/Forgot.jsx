import { useForm } from 'react-hook-form';
import logo from '../assets/blacklogo.png';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Forgot = () => {
    const [errors, setErrors] = useState(null)
    const navigate = useNavigate()

    const { register, handleSubmit, } = useForm();
    const onSubmit = data =>
        axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/auth/forgot`, data)
            .then(({ data }) => {
                if (data.success) {
                    toast.success(data.message);
                    navigate('/forgot');
                }
                else {
                    toast.error(data.message);
                    navigate('/forgot');
                }

            })
            .catch(error => {
                const res = error.response;
                if (res && res.status === 422) {
                    setErrors(res.data.errors);
                }
            });
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-16 w-auto"
                    src={logo}
                    alt="Your Company"
                />
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Forgot Password
                </h2>
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Your Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                {...register('email')}
                            />
                        </div>
                    </div>



                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            Forgot Password
                        </button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default Forgot;
