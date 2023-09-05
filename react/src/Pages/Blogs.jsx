import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BreadCumb from "../Components/Shared/BreadCumb";
import blog_bg from '../assets/blog.jpg';
import { userContext } from "../Contexts/MainContext";
import Blog from "./Blog";
const Blogs = () => {
    const [blog, setBlog] = useState();
    const { setLoading } = useContext(userContext);
    const loadData = () => {
        setLoading(true);
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/blog`)
            .then(function (response) {
                // handle success
                setBlog(response.data)
                setLoading(false)
            })

    }


    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <BreadCumb title="Blog" image={blog_bg} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mx-24 lg:my-24 mx-8 my-8">

                {blog?.map((plan, index) => <Blog plan={plan} key={index} />)}

            </div>
        </div>
    );
};

export default Blogs;
