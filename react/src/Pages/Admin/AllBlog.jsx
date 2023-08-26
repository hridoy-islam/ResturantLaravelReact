import { Link } from 'react-router-dom';
import PageTitle from '../../Components/Shared/PageTitle';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AllBlog = () => {
    const [blogs, setBlogs] = useState();
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/blog/`)
            .then(function (response) {
                // handle success
                setBlogs(response.data)
            })
    }, [blogs])
    const handleDelete = async (_id) => {
        const proceed = window.confirm("Are you sure to delete this?");
        try {
            if (proceed) {
                const config = {
                    headers: {
                        "content-type": "application/json",
                    },
                };
                const { data } = await axios.delete(
                    `${import.meta.env.VITE_BACKEND_API_URL}/blog/${_id}`,
                    config
                );
                // console.log(data);
                toast.success("Successfully Deleted!");
            }
        } catch (error) {
            console.log(error);
            alert(error.response.data.msg);
            toast.error("Something Went Worng");
        }
    };
    return (
        <div>
            <PageTitle title="All Blog" />
            <div className="py-8 container mx-auto">
                <Link className='py-4 px-10 bg-primary text-white rounded-md' to='/admin/blog/create'>Create Blog</Link>
            </div>
            <div className="overflow-x-auto container mx-auto py-4">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th className='text-lg font-bold'>Title</th>
                            <th className='text-lg font-bold'>Description</th>
                        </tr>


                        {blogs?.length > 0 && blogs?.map((item, index) => <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.description?.slice(0, 40)}</td>
                            <td><Link className="btn-primary p-2 text-white rounded-sm mx-1 my-1" to={`/admin/blog/edit/${item._id}`}> Edit</Link>
                                <button onClick={() => handleDelete(item._id)} className=' btn-sm bg-red-500 p-2 text-white rounded-sm mx-1 my-1'>Delete</button>
                            </td>
                        </tr>)}

                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBlog;































// import { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import EditBlog from './EditBlog';
// import { Link } from 'react-router-dom';

// const AllBlog = ({ blogs }) => {
//     let { _id, title, description } = blogs;
//     const excerpt = description.slice(0, 40);
//     const [id, setId] = useState();
//     const [editModal, setEditModal] = useState(false);
//     const handleDelete = async (_id) => {
//         const proceed = window.confirm("Are you sure to delete this?");
//         try {
//             if (proceed) {
//                 const config = {
//                     headers: {
//                         "content-type": "application/json",
//                     },
//                 };
//                 const { data } = await axios.delete(
//                     `https://fitnessdineserver-seven.vercel.app/blog/${_id}`,
//                     config
//                 );
//                 // console.log(data);
//                 toast.success("Successfully Deleted!");
//             }
//         } catch (error) {
//             console.log(error);
//             alert(error.response.data.msg);
//             toast.error("Something Went Worng");
//         }
//     };
//     return (
//         <>
//             <tr >
//                 <td>{title}</td>
//                 <td>{excerpt}</td>
//                 <Link className="btn-primary p-2 text-white rounded-sm mx-1 my-1" to={`/admin/blog/edit/${_id}`}> Edit</Link>
//                 <button onClick={() => handleDelete(_id)} className=' btn-sm bg-red-500 p-2 text-white rounded-sm mx-1 my-1'>Delete</button>
//             </tr>

//         </>
//     );
// };

// export default AllBlog;
