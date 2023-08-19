import { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate} from 'react-router-dom';
// import axiosClient from '../AxiosClient';
import { userContext } from '../Contexts/MainContext';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

import logo from '../assets/blacklogo.png';
import { useForm } from 'react-hook-form';
import axiosClient from '../AxiosClient';
import { data } from 'autoprefixer';
import axios from 'axios';

export default function Register() {
    // const auth = getAuth(app)
    const [errors, setErrors] = useState(null)
    // const[role, setRole] = useState('user')
    // const {token, createUser, providerLogin} = useContext(userContext);
    // let navigate = useNavigate();
    // let location = useLocation();
  
    // let from = location.state?.from?.pathname || "/";
    // const handleChange = (e) => {
    //     const info = e.target;
    //     const value = info.value;
    //     setRole(value);
    // }
    // const {  createToken } = useContext(MainContext)
//     const handleSubmit = event => {
//         event.preventDefault();
//         const form = event.target;
//         const userName = form.name.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         if(password.length < 6){
//             setErrors('Password should be a characters or more.');
//             return;
//         }
//         createUser(email, password, userName,auth, role)
//         .then(result => {
//             const user = result.user;
//             console.log(user);
//             // updateProfile(auth.currentUser, {
//             //     displayName: userName
//             //   })
//             //     .then(() => {
//             //       console.log("profile updated");
//             //     })
//             //     .catch((error) => {
//             //       console.log(error);
//             //     });
//             navigate(from, { replace: true });
//             form.reset();
//             const currentUser = {
//                 name: userName,
//                 email: email,
//                 role: role,
//             };
//             fetch('http://localhost:5000/auth/signup', {
//                  method: 'POST',
//                  headers: {
//                 'content-type': 'application/json'
//             },
//                 body: JSON.stringify(currentUser)
//             })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//             })
//             .catch((err) => console.error(err));
//             // axiosClient.post('http://localhost:5000/auth/signup', data)
//             // .then(({ data }) => {
//             //     setUser(data.user);
//             //     createToken(data.token);
//             // })
//             // .catch(error => {
//             //     const res = error.response;
//             //     if (res && res.status === 422) {
//             //         setErrors(res.data.errors);
//             //     }
//             // })

//         })
//         .catch(error => console.error(error)); 
// }
// const googleProvider = new GoogleAuthProvider();
// const handleGoogleSignIn = () => {
//     providerLogin(googleProvider)
//     .then(result => {
//         const user = result.user
//         console.log(user)
//     })
//     .catch(error => console.error(error))
// }

//     if (token) {
//         return <Navigate to="/user/profile" />
//     }
const { register, handleSubmit, } = useForm();
const onSubmit = data => 
 axios.post('http://localhost:5000/auth/signup', data)
.then(({ data }) => {
    console.log(data)
})
.catch(error => {
    const res = error.response;
    if (res && res.status === 422) {
        setErrors(res.data.errors);
    }
});

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-16 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
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

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Your Name
                            </label>
                            <div className="mt-2">
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
                                <div className="text-sm">
                                    <Link to="/forgot" className="font-semibold text-secondary hover:text-primary">
                                        Forgot password?
                                    </Link>
                                </div>
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
                        {/* <div>
                        <input className='me-2 mb-2' onChange={handleChange} type="radio" id="f-option" name='selector' value='User' checked={role === "User"} />
                        </div> */}
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
