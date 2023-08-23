import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import HeaderMenu from "../Shared/HeaderMenu";
// import ScrollToTop from "../ScrollToTop";

const Main = () => {
    return (
        <div>
            <HeaderMenu />
            
            <div className="pt-14">
                <Outlet></Outlet></div>
            <Footer />
        </div>
    );
};

export default Main;
