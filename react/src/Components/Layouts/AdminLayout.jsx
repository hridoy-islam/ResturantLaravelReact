import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../../Contexts/MainContext";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const AdminLayout = () => {
    const { user, token } = useContext(userContext)
    if (!token) {
        return <Navigate to="/login" />
    }
    return (
        <div>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default AdminLayout;
