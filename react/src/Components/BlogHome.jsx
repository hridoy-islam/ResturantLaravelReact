import { useContext, useEffect, useState } from "react";
import img1 from "../../src/assets/Healthy.png";
import { userContext } from "../Contexts/MainContext";
import axios from "axios";
import Blog from "../Pages/Blog";
const BlogHome = () => {
    const [blog, setBlog] = useState();
    const {setLoading} = useContext(userContext);
    console.log(blog)
    const loadData = () =>{
        setLoading(true);
            axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/blog`)
                .then(function (response) {
                    // handle success
                    setBlog(response.data)
                    setLoading(false)
                })
        
    }
   

    useEffect(()=> {
        loadData()
    }, []) 
    return (
        <div className="container mx-auto">
            <h2 className="text-5xl text-center py-12 text-secondary font-bold">Our Blogs</h2>
            <div className="grid lg:grid-cols-3 gap-10 sm:mx-4">
            {blog?.slice(0, 3).map((plan, index) => <Blog plan={plan} key={index} />)}
            </div>
        </div>
    );
};

export default BlogHome;
