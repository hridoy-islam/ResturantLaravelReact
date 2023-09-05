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
            <div className='container mx-auto lg:mt-24 mb-24 lg:p-8 lg:text-left text-center lg:border-2 lg:flex justify-between mr-6'>
                <div className="lg:w-2/12">
                    <SideNav></SideNav>
                </div>
                <div className="lg:w-10/12 mx-auto lg:ml-12">
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
