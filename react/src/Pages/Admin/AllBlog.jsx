import {  useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import EditBlog from './EditBlog';
import { Link } from 'react-router-dom';

const AllBlog = ({ blogs }) => {
    let {_id, title, description} = blogs;
    const excerpt = description.slice(0, 40);
    const [id, setId] = useState();
    const [editModal, setEditModal] = useState(false);
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
                    `https://fitnessdineserver-seven.vercel.app/blog/${_id}`,
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
        <> 
             <tr >
            <td>{title}</td>
            <td>{excerpt}</td>
            <Link className="btn-primary p-2 text-white rounded-sm mx-1 my-1" to={`/admin/blog/edit/${_id}`}> Edit</Link>
            <button onClick={() => handleDelete(_id)} className=' btn-sm bg-red-500 p-2 text-white rounded-sm mx-1 my-1'>Delete</button>
            </tr>
            
        </>
    );
};

export default AllBlog;
