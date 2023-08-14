import { Link } from "react-router-dom";


const SideNav = () => {
  return(
        <div className=" border-r-2 lg:pr-24 lg:bg-white lg:pb-0 lg:pt-0 pt-24 py-12 bg-gray-100">
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
            <p className="text-xl font-semibold my-4">
                <Link to="">Log Out</Link>
            </p>
        </div>
  )}

export default SideNav;
