import { createBrowserRouter } from "react-router-dom";
import Cancel from "../Components/Cancel";
import AdminLayout from "../Components/Layouts/AdminLayout";
import Main from "../Components/Layouts/Main";
import UserLayout from "../Components/Layouts/UserLayout";
import OrderSummary from "../Components/OrderSummary";
import Success from "../Components/Success";
import About from "../Pages/About";
import AllBlog from "../Pages/Admin/AllBlog";
import AllOrders from "../Pages/Admin/AllOrders";
import CreateBlog from "../Pages/Admin/CreateBlog";
import CreatePlan from "../Pages/Admin/CreatePlan";
import Customer from "../Pages/Admin/Customer";
import Order from "../Pages/Admin/Order";
import PlanList from "../Pages/Admin/PlanList";
import Subscribe from "../Pages/Admin/Subscribe";
import UserList from "../Pages/Admin/UserList";
import BlogDetails from "../Pages/BlogDetails";
import Blog from "../Pages/Blogs";
import Faq from "../Pages/Faq";
import Forgot from "../Pages/Forgot";
import Home from "../Pages/Home";
import Keto from "../Pages/Keto";
import Login from "../Pages/Login";
import MealPlan from "../Pages/MealPlan";
import Menu from "../Pages/Menu";
import MusclesGain from "../Pages/MusclesGain";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";
import Thanks from "../Pages/Thanks";
import Profile from "../Pages/User/Account";
import Dashboard from "../Pages/User/Dashboard";
import MyProfile from "../Pages/User/MyProfile";
import CreateMenu from "../Pages/Admin/CreateMenu";
import AllMenu from "../Pages/Admin/AllMenu";
import WeightLoss from "../Pages/WeightLoss";
import Vegetarian from "../Pages/Vegetarian";
import Orders from "../Pages/User/Orders";
import AllPlan from "../Pages/Admin/AllPlan";
import EditBlog from "../Pages/Admin/EditBlog";
import HeaderMenu from "../Components/Shared/HeaderMenu";
import EditMenu from "../Pages/Admin/EditMenu";
import Footer from "../Components/Shared/Footer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/menu",
                element: <Menu />,
            },
            {
                path: "/weight-loss-plan",
                element: <WeightLoss />,
            },
            {
                path: "/keto-plan",
                element: <Keto />,
            },
            {
                path: "/muscles-Gain-plan",
                element: <MusclesGain />,
            },
            {
                path: "/vegetarian-plan",
                element: <Vegetarian />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/forgot",
                element: <Forgot />,
            },
            {
                path: "/meal-plan",
                element: <MealPlan />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/blog/:slug",
                element: <BlogDetails />
            },
            {
                path: "/faq",
                element: <Faq />,
            },
            {
                path: "/thanks",
                element: <Thanks />,
            },
            {
                path: "/payment",
                element: <OrderSummary />,
            },
            {
                path: "/success",
                element: <Success />,
            },
            {
                path: "/cancel",
                element: <Cancel />,
            }
        ],
    },
    {
        path: '/user',
        element: <AdminLayout />,
        children: [
            {
                path: "/user/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/user/myprofile",
                element: <MyProfile />,
            },
            {
                path: "/user/account",
                element: <Profile />,
            },
            {
                path: "/user/orders",
                element: <Orders />,
            }

        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                path: "/admin/users",
                element: <UserList />,
            },
            {
                path: "/admin/orders",
                element: <AllOrders />,
            },
            {
                path: "/admin/plan/create",
                element: <CreatePlan />,
            },
            {
                path: "/admin/all-plans",
                element: <PlanList />,
            },
            {
                path: "/admin/Customer",
                element: <Customer />,
            },
            {
                path: "/admin/order",
                element: <Order />,
            },
            {
                path: "/admin/subscribe",
                element: <Subscribe />,
            },
            {
                path: "/admin/blog",
                element: <AllBlog />,
            },
            {
                path: "/admin/blog/create",
                element: <CreateBlog />,
            },
            {
                path: "/admin/blog/edit/:id",
                element: <EditBlog />,
            },
            {
                path: "/admin/menu",
                element: <AllMenu />,
            },
            {
                path: "/admin/menu/create",
                element: <CreateMenu />,
            },
            {
                path: "/admin/menu/edit/:id",
                element: <EditMenu />,
            },
            {
                path: "/admin/plan/",
                element: <AllPlan/>,
            },
            {
                path: "/admin/plan/crete",
                element: <CreatePlan/>,
            },
        ]
    },
    {
        path: "*",
        element: (
            <div>
                <HeaderMenu></HeaderMenu>
                <NotFound></NotFound>
                <Footer></Footer>
            </div>
        ),
    },
    // CreateServiseRouter
]);

export default router;
