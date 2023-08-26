import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './HeaderMenu.css'
import { FaBars } from 'react-icons/fa';
import { GrClose } from "react-icons/gr";
import logo from '../../assets/logo.png';
import { userContext } from '../../Contexts/MainContext';
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
const HeaderMenu = () => {
    const { user, setUser, setToken } = useContext(userContext);

    const logOut = () => {
        localStorage.removeItem('details');
        localStorage.removeItem('fitnesstoken');
        setUser('');
        setToken('');
        window.location.href = "/";
    }
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
        <div>
            <div className={click ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="container mx-auto flex items-center justify-between">
                    <div>
                        <Link to='/'>
                            <img
                                className="h-12 w-auto"
                                src={logo}
                                alt="Your Company"
                            />
                        </Link>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/menu"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                View Menu
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/meal-plan"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                Meal Plan
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/faq"
                                activeClassName="active"
                                className="nav-links"
                                onClick={click ? handleClick : null}
                            >
                                FAQ
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/blog"
                                activeClassName="active "
                                className="nav-links mr-16"
                                onClick={click ? handleClick : null}
                            >
                                Blog
                            </NavLink>
                        </li>
                        {
                            user?.role ?
                                <>
                                        <li className="nav-item">
                                            <NavLink
                                                exact
                                                to={'/user/dashboard'}
                                                activeClassName="active"
                                                className="nav-links rounded-3xl lg:w-full w-full mx-auto lg:my-0 my-2  flex items-center justify-center bg-white text-gray-900 px-8 py-2  lg:text-base text-sm font-medium hover:bg-gray-600 hover:text-white"
                                                onClick={click ? handleClick : null}
                                            >
                                                Dashboard
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                    <NavLink className='rounded-3xl lg:w-full w-full mx-auto lg:my-0 my-2 lg:mb-0 mb-8 flex items-center justify-center bg-white text-gray-900 px-8 py-2  lg:text-base text-sm font-medium hover:bg-gray-600 hover:text-white'> <span>
                                    </span><button className='log-out ' onClick={logOut}>Log Out</button>
                                    </NavLink>
                                    </li>
                                </>
                                :
                                <> 
                                    <li className="nav-item">
                                    <NavLink to='/login' className='rounded-3xl lg:w-full w-5/12 mx-auto lg:my-0 my-2 flex items-center justify-center bg-white text-gray-900 px-8 py-2 text-sm font-medium hover:bg-gray-600 hover:text-white'> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    /<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    /</svg>
                                    </span> <span className='pl-2'>Login</span>
                                    </NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink to="/register" className='rounded-3xl lg:w-full w-5/12 mx-auto lg:my-0 my-2 lg:mb-0 mb-6 flex items-center justify-center bg-white text-gray-900 px-8 py-2 text-sm font-medium hover:bg-gray-600 hover:text-white' href=""><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                        </svg>
                                        </span><span className='pl-2'>Register</span> </NavLink>
                                    </li>
                                    
                                </>


                        }
                    </ul>
                   
                               
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <GrClose /> : <FaBars />}
                    </div>
                </div>
            </nav>
        </ div>
    );
};

export default HeaderMenu;
