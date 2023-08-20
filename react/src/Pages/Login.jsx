import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../Contexts/MainContext";
import logo from '../assets/blacklogo.png';

export default function Login() {
    const navigate = useNavigate();
    const { user, setUser, setToken } = useContext(userContext)
    const { register, handleSubmit, } = useForm();
    const onSubmit = data =>

        axios.post('http://localhost:5000/auth/login', data)
            .then(({ data }) => {
                localStorage.setItem('fitnesstoken', data.accessToken);
                localStorage.setItem('details', JSON.stringify(data.user));
                setUser(data.user);
                setToken(data.accessToken);
                if (data.success) {
                    toast.success(data.message);
                    navigate('/user/dashboard');
                }
                else {
                    toast.error(data.message);
                    navigate('/login');
                }
            })
            .catch(error => {
                toast.error(error.message);
            });

    if (user?.email) {
        return navigate("/user/dashboard");
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
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Login
                    </h2>

                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

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












// import { GoogleAuthProvider } from 'firebase/auth';
// import { useContext } from 'react';
// import { FaGithub, FaGoogle } from 'react-icons/fa';
// import {   useNavigate } from 'react-router-dom';
// import Loader from '../Utilities/Loader/Loader';
// import  { userContext } from '../Contexts/MainContext';

// const Login = () => {


//     const {signIn, providerLogin} = useContext(userContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || '/'
//     if(loading){
//         return <Loader></Loader>
//     }


//     const handleSubmit = event =>{
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         signIn(email, password)
//         .then(result => {
//             const user = result.user;
//             console.log(user);
//             form.reset();
//             navigate(form, {replace: true})
//         })
//         .catch(error => console.error(error));
//     }

//     const googleProvider = new GoogleAuthProvider();
//     const handleGoogleSignIn = () => {
//         providerLogin(googleProvider)
//         .then(result => {
//             const user = result.user
//             console.log(user)
//         })
//         .catch(error => console.error(error))
//     }
//     return (
//         <div>
//             <div className=' mx-auto login-container'>
//             <h3 className='text'>Please Login Now!</h3>
//             <form className="space-y-6" onSubmit={handleSubmit}>

//                         <div>
// <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                                 Email address
//                             </label>
//                             <div className="mt-2">
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     autoComplete="email"
//                                     required
//                                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-2"
//                                     {...register('email')}
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <div className="flex items-center justify-between">
//                                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                                     Password
//                                 </label>
//                             </div>
//                             <div className="mt-2">
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     autoComplete="current-password"
//                                     required
//                                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-2"
//                                     {...register('password')}
//                                 />
//                             </div>
//                         </div>

//                         <div>
//                             <button
//                                 type="submit"
//                                 className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
//                             >
//                                 Login
//                             </button>
//                             <button onClick={handleGoogleSignIn} className='icon'>Google</button>
//                         </div>
//                     </form>
//         </div>
//         </div>
//     );
// };

// export default Login;
