import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axiosClient from '../../AxiosClient';
import PageTitle from '../../Components/Shared/PageTitle';
import axios from 'axios';

const CreateBlog = () => {
    const { register, handleSubmit } = useForm();
    const [errors, setErrors] = useState(null)
    // const [category, setCategory] = useState();
    // const onSubmit = data =>{
    //     console.log(data)
    // }
    const onSubmit = data => 
    axios.post('http://localhost:5000/blog', data)
   .then(({ data }) => {
       console.log(data)
   })
   .catch(error => {
       const res = error.response;
       if (res && res.status === 422) {
           setErrors(res.data.errors);
       }
   });
    // useEffect(() => {
    //     axiosClient.get('category')
    //         .then(res => {
    //             setCategory(res.data);
    //             console.log(res.data);
    //         })
    // }, [])
    return (
        <div>
            <PageTitle title="Create Blog" />
            <div className='container mx-auto py-6'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className='my-2'>Blog Title</p>
                    <input id="name" name="name" type="text" className='input input-primary w-full' placeholder='Title' {...register('name')} />
                    {/* <p className='my-2'>Select Category</p>
                    <select className='input input-primary w-full'>
                        {category?.map((item, index) =>
                            <option value="" key={index}>{item.title}</option>
                        )}
                    </select> */}

                    <p className='my-2'>Upload Thumbnail</p>
                    <input type="file" id="picture" name="img" className="file-input file-input-bordered file-input-success w-full max-w-xs" {...register('picture')}/>

                    <p className='my-2'>Description</p>
                    <textarea
                    type="text" id="description" name="description" className="file-input file-input-bordered file-input-success w-full max-w-xs" {...register('description')}
                    ></textarea>
                    {/* <ReactQuill theme="snow"
                        value={editorContent}
                        onChange={onEditorStateChange}
                    /> */}

                    <button type='submit' className="btn btn-primary rounded-none text-white">Add</button>

                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
