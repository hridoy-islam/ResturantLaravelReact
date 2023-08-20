import { Link } from 'react-router-dom';
import PageTitle from '../../Components/Shared/PageTitle';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AllBlog = () => {
    const [blogs, setBlogs] = useState();
    useEffect(() => {
        axios.get('http://localhost:5000/blog/')
            .then(function (response) {
                // handle success
                console.log(blogs)
                setBlogs(response.data)
            })
    }, [])
    return (
        <div>
            <PageTitle title="Blog" />
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
                            <td>{item.description.slice(0, 40)} ...</td>
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
