import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axiosClient from '../../AxiosClient';
import PageTitle from '../../Components/Shared/PageTitle';

const CreateBlog = () => {
    const { register, handleSubmit, setValue, watch } = useForm()
    const [category, setCategory] = useState();
    const onSubmit = (data) => {
        console.log(data)
    }
    const editorContent = watch("emailContent");
    const onEditorStateChange = (editorState) => {
        setValue("emailContent", editorState);
    };
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

                    <p className='my-2'>Upload Thumbnail</p>
                    <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" />

                    <p className='my-2'>Description</p>
                    <ReactQuill theme="snow"
                        value={editorContent}
                        onChange={onEditorStateChange}
                    />

                    <button type='submit' className="btn btn-primary rounded-none text-white">Add</button>

                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
