import axios from "axios";
import { useEffect, useState } from "react";
import PageTitle from "../../Components/Shared/PageTitle";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const [blog, setBlog] = useState();
  let { id } = useParams();

  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
        title: blog?.title
    }
  });
  const [errors, setErrors] = useState(null)
  const onsubmit = data =>
  axios.patch(`${import.meta.env.VITE_BACKEND_API_URL}/blog/${id}`, data)
      .then(({ data }) => {
          if (data.success) {
              toast.success("Updated Successful");
              navigate('/admin/blog');
          }
          else {
              toast.success("Something Went Wrong");
              navigate('/admin/blog');
          }
          reset()

      })
      .catch(error => {
          const res = error.response;
          if (res && res.status === 422) {
              setErrors(res.data.errors);
          }
      });
      const fetchData = () =>{
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/blog/${id}`)
        .then(function (response) {
            // handle success
            setBlog(response.data);
        })
      }
  useEffect(() => {
    fetchData()
}, [])
  return (
    <div>
            <PageTitle title="Edit Blog" />
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
                                            defaultValue={blog?.title}
                                            {...register('title')}
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="region" className="block text-md font-medium leading-6 text-gray-900">
                                        Image Link
                                    </label>
                                    <div className="mt-2">
                                    <input type="text" id="img" name="img" required className="file-input file-input-bordered pl-4 file-input-success w-full " {...register('img')}
                                    defaultValue={blog?.image}
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="region" className="block text-md mb-2 font-medium leading-6 text-gray-900">
                    Description
                    </label>   
                    <textarea
                    type="text" id="description" name="description" required className="file-input file-input-bordered w-full p-4" {...register('description')}
                    defaultValue={blog?.description}
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

export default EditBlog;