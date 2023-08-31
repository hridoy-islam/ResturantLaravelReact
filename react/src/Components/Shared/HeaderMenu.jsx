import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './HeaderMenu.css'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from "react-icons/ai";
import logo from '../../assets/logo.png';
import { userContext } from '../../Contexts/MainContext';

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }
const HeaderMenu = () => {
    const { user, setUser, setToken } = useContext(userContext);

    const logOut = () => {
        
        localStorage.removeItem('details');
        localStorage.removeItem('fitnesstoken');
        setUser('');
        setToken('');
        
    }
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
        <div>
            <div className={click == true  ? "main-container" : ""} onClick={() => Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
                <div className="container mx-auto flex items-center justify-between">
                        <Link to='/'>
                            <img
                                className="h-12 w-auto"
                                src={logo}
                                alt="Your Company"
                            />
                        </Link>
                    <ul className={click == true  ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click == true ? handleClick : null}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click == true  ? handleClick : null}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/menu"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click == true  ? handleClick : null}
                            >
                                View Menu
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/meal-plan"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click == true  ? handleClick : null}
                            >
                                Meal Plan
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/faq"
                                activeclassname="active"
                                className="nav-links"
                                onClick={click == true  ? handleClick : null}
                            >
                                FAQ
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/blog"
                                activeclassname="active "
                                className="nav-links mr-16"
                                onClick={click == true  ? handleClick : null}
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
                                                activeclassname="active"
                                                className="nav-links rounded-3xl lg:w-full w-full mx-auto lg:my-0 my-2  flex items-center justify-center bg-white text-gray-900 px-8 py-2  lg:text-base text-sm font-medium hover:bg-gray-600 hover:text-white"
                                                onClick={click == true  ? handleClick : null}
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
                                    <NavLink to='/login' className='rounded-3xl lg:w-full w-full mx-auto lg:my-0 my-2 flex items-center justify-center bg-white text-gray-900 px-8 py-2  lg:text-base text-sm font-medium hover:bg-gray-600 hover:text-white'
                                    onClick={click == true  ? handleClick : null}> <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                                    >
                                    /<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    /</svg>
                                    </span> <span className='pl-2'>Login</span>
                                    </NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink to="/register" className='rounded-3xl lg:w-full w-full mx-auto lg:my-0 my-2 lg:mb-0 mb-8 flex items-center justify-center bg-white text-gray-900 px-8 py-2  lg:text-base text-sm font-medium hover:bg-gray-600 hover:text-white'
                                    onClick={click == true  ? handleClick : null} href=""><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                        </svg>
                                        </span><span className='pl-2'>Register</span> </NavLink>
                                    </li>
                                    
                                </>


                        }
                    </ul>
                   
                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <AiOutlineClose className='close' /> : <FaBars />}
                    </div>          
                    
                </div>
            </nav>
        </ div>
    );
};

export default HeaderMenu;
