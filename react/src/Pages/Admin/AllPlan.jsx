import { Link } from 'react-router-dom';
import PageTitle from '../../Components/Shared/PageTitle';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import EditBlog from './EditBlog';

const AllPlan = () => {
    const [plans, setPlans] = useState();
    const fetchData = () =>{
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/plan`)
            .then(function (response) {
                // handle success
                setPlans(response.data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
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
                toast.success("Successfully Deleted!");
            }
        } catch (error) {
            alert(error.response.data.msg);
            toast.error("Something Went Worng");
        }
    };
    return (
        <div>
            <PageTitle title="Plan" />
            <div className="py-8 container mx-auto">
                <Link className='py-4 px-10 bg-primary text-white rounded-md' to='/admin/plan/create'>Create Plan</Link>
            </div>
            <div>
                {/* You can open the modal using ID.showModal() method */}
               
                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <EditBlog/>
                    </form>
                </dialog>
            </div>
            <div className="overflow-x-auto container mx-auto py-4">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th className='text-lg font-bold'>Name</th>
                            <th className='text-lg font-bold'>Base Price</th>
                            <th className='text-lg font-bold'>Breakfast Full</th>
                            <th className='text-lg font-bold'>Breakfast Light</th>
                            <th className='text-lg font-bold'>Snacks</th>
                            <th className='text-lg font-bold'>Action</th>
                        </tr>
                        {plans?.length > 0 && plans?.map((item, index) => <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.baseprice}</td>
                            <td>{item.bffull}</td>
                            <td>{item.bflight}</td>
                            <td>{item.snacks}</td>
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

export default AllPlan;
