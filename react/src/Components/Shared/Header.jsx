import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { userContext } from '../../Contexts/MainContext';
import logo from '../../assets/logo.png';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'View Menu', href: '/menu' },
    { name: 'Meal Plan', href: '/meal-plan' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    // { name: 'Dashboard', href: '/user/dashboard' },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const { user, setUser, setToken } = useContext(userContext);

    const logOut = () => {
        localStorage.removeItem('details');
        localStorage.removeItem('fitnesstoken');
        setUser('');
        setToken('');
        window.location.href = "/";
    }


    return (
        <Disclosure as="nav" className="bg-primary fixed top-0 w-full z-50">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to='/'>
                                        <img
                                            className="block h-10 w-auto lg:hidden"
                                            src={logo}
                                            alt="Your Company"
                                        />
                                    </Link>
                                    <Link to='/'>
                                        <img
                                            className="hidden h-10 w-auto lg:block"
                                            src={logo}
                                            alt="Your Company"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:mx-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'hover:bg-gray-900',
                                                    'rounded-md text-white px-3 py-2 text-md font-medium'
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="hidden sm:mx-8 sm:block">
                                    {

                                        user?.role ?
                                            <>
                                                <div className='flex space-x-4'>
                                                    <Link className='rounded-3xl flex items-center justify-center text-white pr-24 py-2 text-md font-medium ' to={'/user/dashboard'}>Dashboard</Link>
                                                    <p className='rounded-3xl flex items-center justify-center bg-white text-gray-900 px-8 py-2 text-sm font-medium hover:bg-gray-600 hover:text-white'><button className='log-out ' onClick={logOut}>Log Out</button></p>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className='flex space-x-4'>
                                                    <Link to='/login' className='rounded-3xl flex items-center justify-center bg-white text-gray-900 px-8 py-2 text-sm font-medium hover:bg-gray-600 hover:text-white'> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        /<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                        /</svg>
                                                    </span> <span className='pl-2'>Login</span></Link>
                                                    <Link to="/register" className='rounded-3xl flex items-center justify-center bg-white text-gray-900 px-8 py-2 text-sm font-medium hover:bg-gray-600 hover:text-white' href=""><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                                    </svg>
                                                    </span><span className='pl-2'>Register</span> </Link>
                                                </div>
                                            </>

                                        // user?.id ? <>
                                        //     <div className="flex space-x-4">
                                        //         <Link to='/user/orders' className='rounded-3xl flex items-center justify-center bg-white text-gray-900 px-8 py-2 text-sm font-medium hover:bg-gray-600 hover:text-white'> Orders</Link>
                                        //         <Link to='/user/profile' className='rounded-3xl flex items-center justify-center bg-white text-gray-900 px-8 py-2 text-sm font-medium hover:bg-gray-600 hover:text-white'>  {user.name}</Link>
                                        //         <button onClick={onLogout}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                        //             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                        //         </svg>
                                        //         </button>


                                        //     </div>
                                        // </> : <>
                                        //     <div className="flex space-x-4">
                                        //         <Link to='/login' className='rounded-3xl flex items-center justify-center bg-white text-gray-900 px-8 py-2 text-sm font-medium hover:bg-gray-600 hover:text-white'> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        //             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        //         </svg>
                                        //         </span> <span className='pl-2'>Login</span></Link>
                                        //         <Link to="/register" className='rounded-3xl flex items-center justify-center bg-white text-gray-900 px-8 py-2 text-sm font-medium hover:bg-gray-600 hover:text-white' href=""><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        //             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                        //         </svg>
                                        //         </span><span className='pl-2'>Register</span> </Link>
                                        //         {/* {auth.map((item) => (
                                        //     <Link
                                        //         key={item.name}
                                        //         to={item.href}
                                        //         className={classNames(
                                        //             item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-600 hover:text-white',
                                        //             'rounded-xl bg-white text-gray-900 px-8 py-2 text-sm font-medium'
                                        //         )}
                                        //     >
                                        //         {item.name}
                                        //     </Link>
                                        // ))} */}
                                        //     </div>
                                        // </>
                                    }
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/* <button
                                    type="button"
                                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button> */}

                                {/* Profile dropdown */}
                                {/* <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to={'/user/profile'}
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Your Profile
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                    to={'/user/orders'}
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    My Orders
                                                </Link>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Sign out
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu> */}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}

                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}

                                >
                                    <Link to={item.href}

                                    >{item.name}</Link>
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}
