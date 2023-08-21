import { Link } from 'react-router-dom';
import PageTitle from '../../Components/Shared/PageTitle';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import EditBlog from './EditBlog';

const AllBlog = () => {
    const [blogs, setBlogs] = useState();
    // const [edits, setEdits] = useState();
    const [id, setId] = useState();

    useEffect(() => {
        axios.get('http://localhost:5000/blog/')
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
                    `http://localhost:5000/blog/${_id}`,
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
            <PageTitle title="Blog" />
            <div className="py-8 container mx-auto">
                <Link className='py-4 px-10 bg-primary text-white rounded-md' to='/admin/blog/create'>Create Blog</Link>
            </div>
            <div>
                {/* You can open the modal using ID.showModal() method */}
                
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <form action="">
                        <input type="text"
                                            name="title"
                                            id="title"
                                            placeholder='title'
                                            required
                                            defaultChecked
                                            className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </form>
                    </form>
                </dialog>
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
                            <td>{item.description.slice(0, 40)} ...</td>
                            <button className="btn-primary p-2 text-white rounded-sm mx-1 my-1" onClick={() => window.my_modal_3.showModal()}>Edit</button>
                            <button onClick={() => handleDelete(item._id)} className=' btn-secondary p-2 text-white rounded-sm mx-1 my-1'>Delete</button>
                        </tr>)}

                    </thead>
                    <tbody>





                    </tbody>
                </table>
            </div>
            {/* <div className='grid grid-cols-2 gap-3 mt-6'>
                {blogs?.length > 0 && blogs?.map((item, index) => 
                    <div key={index} className="card  w-96 glass">
                    <figure><img className="w-70 mx-auto" src="http://127.0.0.1:5173/src/assets/Healthy.png" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <p>{item.description.slice(0, 120)}</p>
                    
                    </div>
                </div>
                )}
            </div> */}
        </div>
    );
};

export default AllBlog;
