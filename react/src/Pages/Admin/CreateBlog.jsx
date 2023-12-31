import { useForm } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';
import slugify from 'react-slugify';
import PageTitle from '../../Components/Shared/PageTitle';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    const onsubmit = data => {
        const slug = slugify(data.title)
        data.slug = slug
        axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/blog`, data)
            .then(({ data }) => {
                if (data.success) {
                    toast.success("Create Blog");
                    navigate('/admin/blog');
                }
                else {
                    toast.success("Create Blog");
                    navigate('/admin/blog');
                }
                reset()

            })
            .catch(error => {
                const res = error.response;
                toast.error(res);
            });
    }

    

    // useEffect(() => {
    //     register("description", { required: true, minLength: 11 });
    // }, [register]);

    // const [description, setDescription] = useState('');

    // const handleChange = (value) => {
    //     setDescription(value);
    //     register('description', { value })
    // };


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
                                            required
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
                                        <input placeholder='get link' type="text" id="image" name="image" className="file-input pl-4 file-input-bordered file-input-success w-full " {...register('image')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="region" className="block text-md mb-2 font-medium leading-6 text-gray-900">
                        Description
                    </label>
                    <textarea
                    type="text" id="description" name="description" required className="file-input p-3 file-input-bordered file-input-success w-full h-48" placeholder='description' {...register('description')}
                    ></textarea> 
                    

                    {/* <ReactQuill
                        className='h-80'
                        theme="snow"
                        value={description}
                        onChange={handleChange}
                    />
                    <p className="Error">{errors.description && "Enter valid content"}</p> */}

                    <div>
                        <button type='submit' className="btn btn-primary px-12 rounded-md mt-12 text-white">Add</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateBlog;
