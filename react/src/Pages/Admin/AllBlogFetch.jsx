
import { useEffect, useState } from "react";
import AllBlog from "./AllBlog";
import PageTitle from "../../Components/Shared/PageTitle";
import { Link } from "react-router-dom";


const AllBlogFetch = () => {
    const [blogs, setBlogs] = useState();
    const fetchData = () =>{
        fetch(`${import.meta.env.VITE_BACKEND_API_URL}/blog`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className=" editmodalfetch">
            
            <div>
            <PageTitle title="Blog" />
            <div className="py-8 container mx-auto">
                <Link className='py-4 px-10 bg-primary text-white rounded-md' to='/admin/blog/create'>Create Blog</Link>
            </div>
            <div>
            </div>
            <div className="overflow-x-auto container mx-auto py-4">
                <table className="table table-xs ">
                    <thead>
                        <tr>
                            <th className='text-lg font-bold'>Title</th>
                            <th className='text-lg font-bold'>Description</th>
                        </tr>

                         
                         {
                 blogs?.map((item) => <AllBlog blogs={item} key={item._id}
                 ></AllBlog>)
            }
                    </thead>
                    <tbody>

             



                    </tbody>
                </table>
            </div>
           
        </div>
        </div>
    );
};

export default AllBlogFetch;