import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link,  Navigate,  useLocation,  } from "react-router-dom";
import { userContext } from "../Contexts/MainContext";
import logo from '../assets/blacklogo.png';
import Loader from "../Components/Loader";

export default function Login() {
    const location = useLocation();
    const { user, setUser, setToken, loading } = useContext(userContext)
    const { register, handleSubmit, } = useForm();
    if (user?.email) {
        return <Navigate to={"/"} replace state={{from: location}}  />;
    }
    const onSubmit = data => {
        axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/auth/login`, data)
        .then(({ data }) => {
            if (data.success) {
                toast.success(data.message);
                localStorage.setItem('fitnesstoken', data.accessToken);
            localStorage.setItem('details', JSON.stringify(data.user));
            setUser(data.user);
            setToken(data.accessToken);
            <Navigate to={"/"} state={{from: location}}  />;
                if(loading){
                    return <Loader></Loader>
                }
            }
            else {
                toast.error(data.message);
            }
            
        })
        .catch(error => {
            toast.error(error.message);
        });
    }

       
            
    
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-16 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="pt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Login
                    </h2>

                </div>

                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
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
                            </div>
                            <div className="mt-2">
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
                                Login
                            </button>
                            {/* <button  onClick={handleGoogleSignIn} className='mt-6 text-lg font -semibold text-center mx-auto w-full py-2 bg-secondary text-white rounded-xl'>Continue with Google</button> */}
                        </div>
                    </form>
                    {/* {errors &&
                        <div className="alert mt-6 flex justify-center items-center">
                                <p className="text-red-500 text-center font-bold">Password Incorrect</p>
                        </div>
                    } */}
                    <p className="mt-6 text-red-500"></p>
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don`t Have Account?{' '}
                        <Link to="/register" className="font-bold leading-6 text-secondary hover:text-primary">
                            Please Register
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}