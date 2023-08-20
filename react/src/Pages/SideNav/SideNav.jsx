import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../Contexts/MainContext";


const SideNav = () => {
    const { user } = useContext(userContext);

    return (
        <div className=" border-r-2 lg:pr-24 lg:bg-white lg:pb-0 lg:pt-0 pt-24 py-12 bg-gray-100">



            {user?.role === "admin" ? (
                <>

                    <p className="text-xl font-semibold my-4">
                        <Link to="/admin/blog/create">Blog</Link>
                    </p >
                    <p className="text-xl font-semibold my-4">
                        <Link to="/admin/customer/"> Customer</Link>
                    </p>
                    <p className="text-xl font-semibold my-4">
                        <Link to="/admin/order">Order</Link>
                    </p>
                    <p className="text-xl font-semibold my-4">
                        <Link to="/admin/subscribe">Subscribe</Link>
                    </p>
                    <p className="text-xl font-semibold my-4">
                        <Link to="/admin/blog">coupon</Link>
                    </p>
                </>
            )
                :
                (
                    <>

                        <p className="text-xl font-semibold my-4">
                            <Link to="/user/dashboard">Dashboard</Link>
                        </p >
                        <p className="text-xl font-semibold my-4">
                            <Link to="/user/orders">My Orders</Link>
                        </p >
                        <p className="text-xl font-semibold my-4">
                            <Link to="/user/myprofile">My Profile</Link>
                        </p>
                        <p className="text-xl font-semibold my-4">
                            <Link to="/user/account">Account Details</Link>
                        </p>
                    </>
                )
            }







        </div>
    )
}

export default SideNav;
