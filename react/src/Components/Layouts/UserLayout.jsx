import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axiosClient from "../../AxiosClient";
import { userContext } from "../../Contexts/MainContext";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const UserLayout = () => {
    const { token, setUser } = useContext(userContext)
    if (!token) {
        return <Navigate to="/login" />
    }

    useEffect(() => {
        axiosClient.get('/user')
            .then(({ data }) => {
                setUser(data);
            })
    }, []);

    return (
        <div>
            <Header />
            <div className="pt-14">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};


export default UserLayout;
