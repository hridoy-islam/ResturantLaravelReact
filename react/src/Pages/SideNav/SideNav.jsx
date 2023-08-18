import { Link } from "react-router-dom";
import  { userContext } from "../../Contexts/MainContext";
import { useContext } from "react";
import UseRole from "../../UseRole/UseRole";


const SideNav = () => {
    const { user } = useContext(userContext);  
    const [userRole] = UseRole(user);
    console.log(userRole)
  return(
        <div className=" border-r-2 lg:pr-24 lg:bg-white lg:pb-0 lg:pt-0 pt-24 py-12 bg-gray-100">
                    
            {
                userRole === "user" ?(
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
                :
                (
                    <>
                        <p className="text-xl font-semibold my-4">
                            <Link to="/admin/plan/create">Plan</Link>
                        </p >
                        <p className="text-xl font-semibold my-4">
                            <Link to="/admin/blog/create">Blog</Link>
                        </p >
                        <p className="text-xl font-semibold my-4">
                            <Link to="/admin/category/create"> Category</Link>
                        </p>
                        <p className="text-xl font-semibold my-4">
                            <Link to="/admin/blog">Order</Link>
                        </p>
                    </>
                )
            }
        
            

      



        </div>
  )}

export default SideNav;
