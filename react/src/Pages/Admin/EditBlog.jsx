import axios from "axios";
import { useEffect, useState } from "react";

const EditBlog = () => {
  const [edits, setEdits] = useState();
//   useEffect(() => {
//     axios.get(`https://fitnessdineserver-seven.vercel.app//blog/${id}`)
//         .then(function (response) {
//             // handle success
//             console.log(response.data)
//         })
// }, [edits])
  return (
    <div>
      <form >
        <div className="space-y-12 mt-8">
          <div className=" pb-4">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              <div className="sm:col-span-3">
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

                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="region" className="block text-md font-medium leading-6 text-gray-900">
                  Image
                </label>
                <div className="mt-2">
                  <input type="file" id="picture" name="picture" required className="file-input file-input-bordered file-input-success w-full " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <label htmlFor="region" className="block text-md mb-2 font-medium leading-6 text-gray-900">
          Description
        </label>
        <textarea
          type="text" id="description" name="description" required className="file-input file-input-bordered file-input-success w-full max-w-xs"
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
  );
};

export default EditBlog;