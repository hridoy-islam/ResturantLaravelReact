import { Outlet } from "react-router-dom";
import SideNav from "../../Pages/SideNav/SideNav";
import Footer from "../Shared/Footer";
import HeaderMenu from "../Shared/HeaderMenu";

const UserLayout = () => {
<<<<<<< HEAD
=======

>>>>>>> 31e70f1e1cf021569947a5ee8cfea8f7d822926e
    return (
        <div>
            <HeaderMenu />
            <div className='container mx-auto lg:mt-36 mb-24 lg:p-12 lg:text-left text-center lg:border-2 lg:flex justify-between'>
                <div className="lg:w-3/12">
                    <SideNav></SideNav>
                </div>
                <div className="lg:w-9/12 mx-auto lg:ml-12">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer />
        </div>
    );
};


export default UserLayout;
