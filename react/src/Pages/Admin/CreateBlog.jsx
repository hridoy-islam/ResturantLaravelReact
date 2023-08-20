import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axiosClient from '../../AxiosClient';
import PageTitle from '../../Components/Shared/PageTitle';
import axios from 'axios';

const CreateBlog = () => {
    const { register, handleSubmit, reset } = useForm();
    const [errors, setErrors] = useState(null)
    // const [category, setCategory] = useState();
    // const onSubmit = data =>{
    //     console.log(data)
    // }
    const onsubmit = async (data) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
    
        const response = await fetch("http://localhost:5000/blog/", requestOptions);
        const jsonData = await response.json();
        reset()
        console.log(jsonData);
    }
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
                <form onSubmit={handleSubmit(onsubmit)}> 
                    <div className="space-y-12 mt-8">
                        <div className=" pb-4">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                                <div className="sm:col-span-3 ">
                                    <label htmlFor="city" className="block text-md font-medium leading-6 text-gray-900">
                                    Blog Title
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            placeholder='title'
                                            className="block pl-4 w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-md sm:leading-6"
                                            {...register('title')}

                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="region" className="block text-md font-medium leading-6 text-gray-900">
                                        Image
                                    </label>
                                    <div className="mt-2">
                                    <input type="file" id="picture" name="picture" className="file-input file-input-bordered file-input-success w-full " {...register('picture')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>             
                    <p className='my-2'>Description</p>
                    <textarea
                    type="text" id="description" name="description" className="file-input file-input-bordered file-input-success w-full max-w-xs" {...register('description')}
                    ></textarea>
                    {/* <ReactQuill theme="snow"
                        value={editorContent}
                        onChange={onEditorStateChange}
                    /> */}

                    <div>
                    <button type='submit' className="btn btn-primary px-12 rounded-md mt-4 text-white">Add</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
