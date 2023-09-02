import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import HeaderMenu from "../Shared/HeaderMenu";
import ScrollToTop from "../scrollToTop";

const Main = () => {
    return (
        <div>
            <HeaderMenu />
            <ScrollToTop />
            <div className="pt-14">
                <Outlet></Outlet></div>
            <Footer />
        </div>
    );
};

export default Main;
