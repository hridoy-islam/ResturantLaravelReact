import axios from "axios";
import BreadCumb from "../Components/Shared/BreadCumb";
import Blog from "./Blog";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../Contexts/MainContext";
const Blogs = () => {
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
        <div>
            <BreadCumb title="Blog" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mx-24 lg:my-24 mx-8 my-8">
            
                {blog?.map((plan, index) => <Blog plan={plan} key={index} />)}
            
            </div>
        </div>
    );
};

export default Blogs;
