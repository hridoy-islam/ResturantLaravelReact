import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../Contexts/MainContext";


const SideNav = () => {
    const { user } = useContext(userContext);

    return (
        <div className=" border-r-2 lg:pr-24 lg:bg-white md:flex sm:flex lg:block md:justify-between sm:justify-between lg:pb-0 lg:pt-0 pt-24 py-12 sm:p-2 sm:mt-24 lg:mt-12 sm:mb-4 bg-gray-100">



            {user?.role === "admin" ? (
                <>

                    <p className="text-2xl font-semibold my-4">
                        <Link to="/admin/blog">Blog</Link>
                    </p >
                    <p className="text-2xl font-semibold my-4">
                        <Link to="/admin/menu/"> Menu</Link>
                    </p>
                    <p className="text-2xl font-semibold my-4">
                        <Link to="/admin/order">Order</Link>
                    </p>
                    <p className="text-2xl font-semibold my-4">
                        <Link to="/admin/subscribe">Subscribe</Link>
                    </p>
                    {/* <p className="text-2xl font-semibold my-4">
                        <Link to="/admin/plan">Plan</Link>
                    </p> */}
                </>
            )
                :
                (
                    <>

                        <p className="text-2xl font-semibold my-4">
                            <Link to="/user/dashboard">Dashboard</Link>
                        </p >
                        <p className="text-2xl font-semibold my-4">
                            <Link to={`/user/order/`}>My Orders</Link>
                        </p >
                        {/* <p className="text-2xl font-semibold my-4">
                            <Link to="/user/account">Account Details</Link>
                        </p> */}
                    </>
                )
            }







        </div>
    )
}

export default SideNav;
