import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import HeaderMenu from "../Shared/HeaderMenu";

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
