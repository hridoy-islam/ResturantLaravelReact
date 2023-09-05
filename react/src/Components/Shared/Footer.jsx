import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom'
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTiktok, FaFacebookF} from "react-icons/fa";



const Footer = () => {
    return (
        <footer className=" p-10 pt-36  bg-neutral text-neutral-content">
            <div>
                <div className="footer-top grid lg:grid-cols-2 gap-6 w-full">
                    <div className='flex justify-between lg:justify-around'>
                        <div>
                            <img className='lg:w-10/12 w-6/12' src={logo} alt="logo" />
                            <p className="lg:text-lg text-md font-semibold py-4">Give your immune system</p>
                            <p className="lg:text-lg text-md font-semibold">with fresh vitamin-rich fruits.</p>
                        </div>
                        <div>
                            <h3 className="lg:text-2xl text-lg font-bold pb-2">Links</h3>
                            <p className="lg:py-2"><Link className="lg:text-md text-sm font-medium" to={'/'}>Home</Link></p>
                            <p className="lg:py-2"><Link className="lg:text-md text-sm font-medium" to={'/about'}>About Us</Link></p>
                            {/* <p className="lg:py-2"><Link className="lg:text-md text-sm font-medium" to={}>Contact Us</Link></p> */}
                            <p className="lg:py-2"><Link className="lg:text-md text-sm font-medium" to={'/meal-plan'}>Getting Started</Link></p>
                        </div>
                    </div>
                    <div className='flex justify-between lg:justify-around'>
                        <div>
                            <h3 className="lg:text-2xl text-lg font-bold pb-2">Learn More</h3>
                            <p className="lg:py-2"><Link className="text-md font-medium" to={''}>Delivery Locations</Link></p>
                            <p className="lg:py-2"><Link className="text-md font-medium" to={'/faq'}>Faq</Link></p>
                            <p className="lg:py-2"><Link className="text-md font-medium" to={''}>Terms and conditions</Link></p>
                            <p className="lg:py-2"><Link className="text-md font-medium" to={'/'}>Privacy Policy</Link></p>
                            <p className="lg:py-2"><Link className="text-md font-medium" to={'/blog'}>Blog</Link></p>
                        </div>
                        <div>
                            <h3 className="lg:text-2xl mr-12 text-lg font-bold pb-2">Plans</h3>
                            <p className="lg:py-2"><Link to="/weight-loss-plan" className="text-md font-medium" href="">Weight Loss</Link></p>
                            <p className="lg:py-2"><Link to="/muscles-Gain-plan" className="text-md font-medium" href="">Muscles Gain</Link></p>
                            <p className="lg:py-2"><Link to="/keto-plan" className="text-md font-medium" href="">Keto</Link></p>
                            <p className="lg:py-2"><Link to="/vegetarian-plan" className="text-md font-medium" href="">Vegetarian</Link></p>
                        </div>
                    </div>
                </div>
                <div className="lg:ml-20 mt-8 lg:mt-0">
                    <h3 className="lg:text-2xl text-lg font-bold pb-2">Connect with us</h3>
                    <div className=" flex justify-start items-center mt-3">
                        <Link className='pr-4'  to="https://www.instagram.com/fitnessdineae/">
                            <BiLogoInstagramAlt className='text-3xl'/>
                        </Link>
                        <Link className='pr-4' to="https://www.tiktok.com/@fitnessdine">
                            <FaTiktok className='text-2xl' />
                        </Link>
                        <Link to="https://www.facebook.com/Fitnessdine">
                            <FaFacebookF className='text-2xl' />
                        </Link>
                    </div>
                </div>
                <div className='f-full text-center mt-8  border-t'>
                    <p className='lg:text-lg text-md lg:pt-6 pt-4'>© copyright Fitnessdine.com, All rights reserved.</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
