import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

const Main = () => {
    return (
        <div>
            <Header />
            <div className="pt-14">
                <Outlet></Outlet></div>
            <Footer />
        </div>
    );
};

export default Main;
