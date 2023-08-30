import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/blacklogo.png';

export default function Register() {

    const [errors, setErrors] = useState(null)
    const navigate = useNavigate()

    const { register, handleSubmit, } = useForm();
    const onSubmit = data =>
        axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/auth/forgot`, data)
            .then(({ data }) => {
                if (data.success) {
                    toast.success(data.message);
                    navigate('/login');
                }
                else {
                    toast.error(data.message);
                    navigate('/login');
                }

            })
            .catch(error => {
                const res = error.response;
                if (res && res.status === 422) {
                    setErrors(res.data.errors);
                }
            });

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-16 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight pt-4 text-gray-900">
                        Register your account
                    </h2>
                    {errors &&
                        <div className="alert mt-2">
                            {Object.keys(errors).map(key => (
                                <p className="text-red-500 font-bold" key={key}>{errors[key][0]} </p>
                            ))}
                        </div>
                    }
                </div>

                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Your Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-2"
                                    {...register('name')}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-2"
                                    {...register('email')}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link to="/forgot" className="font-semibold text-secondary hover:text-primary">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-2"
                                    {...register('password')}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Sign Up
                            </button>
                            {/* <button  onClick={handleGoogleSignIn} className='mt-6 text-lg font -semibold text-center mx-auto w-full py-2 bg-secondary text-white rounded-xl'>Continue with Google</button> */}
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <Link to="/login" className="font-bold leading-6 text-secondary hover:text-primary">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
