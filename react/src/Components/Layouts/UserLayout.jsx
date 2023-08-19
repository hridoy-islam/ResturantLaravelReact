// import { useContext, useEffect } from "react";
import {  Navigate, Outlet } from "react-router-dom";
// import axiosClient from "../../AxiosClient";
// import { userContext } from "../../Contexts/MainContext";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import SideNav from "../../Pages/SideNav/SideNav";
import { useEffect } from "react";

const UserLayout = () => {
    useEffect(() => {
        const loggedInUser = localStorage.getItem("fitnesstoken");
        if (!loggedInUser) {
            return <Navigate replace to="/login" />;
        }
      }, []);

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
