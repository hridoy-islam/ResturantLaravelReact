import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axiosClient from "../../AxiosClient";
import { userContext } from "../../Contexts/MainContext";
import Footer from "../Shared/Footer";
import HeaderMenu from '../Shared/HeaderMenu';

const AdminLayout = () => {
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
            <HeaderMenu />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default AdminLayout;
