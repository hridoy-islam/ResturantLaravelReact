import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axiosClient from '../../AxiosClient';
import PageTitle from '../../Components/Shared/PageTitle';

const CreateBlog = () => {
    const { register, handleSubmit } = useForm()
    const [category, setCategory] = useState();
    const onSubmit = (data) => {
        console.log(data)
    }
    useEffect(() => {
        axiosClient.get('category')
            .then(res => {
                setCategory(res.data);
                console.log(res.data);
            })
    }, [])
    return (
        <div>
            <PageTitle title="Create Blog" />
            <div className='container mx-auto py-6'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className='my-2'>Blog Title</p>
                    <input type='text' className='input input-primary w-full' placeholder='Title' />
                    <p className='my-2'>Select Category</p>
                    <select className='input input-primary w-full'>
                        {category?.map((item, index) =>
                            <option value="" key={index}>{item.title}</option>
                        )}
                    </select>

                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
