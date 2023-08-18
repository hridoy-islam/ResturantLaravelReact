// import { useContext, useEffect } from "react";
import {  Outlet } from "react-router-dom";
// import axiosClient from "../../AxiosClient";
// import { userContext } from "../../Contexts/MainContext";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import SideNav from "../../Pages/SideNav/SideNav";

const UserLayout = () => {
    // const { token, setUser, user } = useContext(userContext)
    // if (!token && !user?.email) {
    //     return <Navigate to="/login" />
    // }


    // useEffect(() => {
    //     axiosClient.get('/user')
    //         .then(({ data }) => {
    //             setUser(data);
    //         })
    // }, []);

    return (
        <div>
            <Header />
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
