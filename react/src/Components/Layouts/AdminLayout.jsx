import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../../Contexts/MainContext";
import Footer from "../Shared/Footer";
import HeaderMenu from '../Shared/HeaderMenu';
import SideNav from "../../Pages/SideNav/SideNav";

const AdminLayout = () => {
    const {user} = useContext(userContext);
    let content;
    
    if(user?.email){
        content = <div>
        <div>
            <HeaderMenu />
            <div className='container mx-auto lg:mt-36 mb-24 lg:p-12 lg:text-left text-center lg:border-2 lg:flex justify-between mr-6'>
                <div className="lg:w-3/12">
                    <SideNav></SideNav>
                </div>
                <div className="lg:w-9/12 mx-auto lg:ml-12">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer />
        </div>
    </div>
    }
    else {
        content = <Navigate to="/" />
    }


    return content;
};

export default AdminLayout;
