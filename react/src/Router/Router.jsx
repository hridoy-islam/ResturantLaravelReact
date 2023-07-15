import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Components/Layouts/AdminLayout";
import Main from "../Components/Layouts/Main";
import UserLayout from "../Components/Layouts/UserLayout";
import Header from "../Components/Shared/Header";
import About from "../Pages/About";
import AllBlog from "../Pages/Admin/AllBlog";
import AllOrders from "../Pages/Admin/AllOrders";
import Category from "../Pages/Admin/Category";
import CreateBlog from "../Pages/Admin/CreateBlog";
import CreateCategory from "../Pages/Admin/CreateCategory";
import CreatePlan from "../Pages/Admin/CreatePlan";
import PlanList from "../Pages/Admin/PlanList";
import UserList from "../Pages/Admin/UserList";
import Blog from "../Pages/Blog";
import Faq from "../Pages/Faq";
import Forgot from "../Pages/Forgot";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import OrderNow from "../Pages/OrderNow";
import Register from "../Pages/Register";
import Thanks from "../Pages/Thanks";
import Orders from "../Pages/User/Orders";
import Profile from "../Pages/User/Profile";
import Menu from "../Pages/Menu";
import Plan from "../Pages/Plan";  

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
                path: "/plan",
                element: <Plan />,
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
                path: "/order-now",
                element: <OrderNow />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/faq",
                element: <Faq />,
            },
            {
                path: "/thanks",
                element: <Thanks />,
            },
        ]
    },

    {
        path: '/user',
        element: <UserLayout />,
        children: [
            {
                path: "/user/profile",
                element: <Profile />,
            },
            {
                path: "/user/orders",
                element: <Orders />,
            },
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
                path: "/admin/category",
                element: <Category />,
            },
            {
                path: "/admin/category/create",
                element: <CreateCategory />,
            },
            {
                path: "/admin/blog",
                element: <AllBlog />,
            },
            {
                path: "/admin/blog/create",
                element: <CreateBlog />,
            },
        ]
    },
    {
        path: "*",
        element: (
            <div>
                <Header></Header>
                <NotFound></NotFound>
            </div>
        ),
    },
    // CreateServiseRouter
]);

export default router;
