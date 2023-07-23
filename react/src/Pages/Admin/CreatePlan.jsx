import { useState } from "react";
import axiosClient from "../../AxiosClient";
import PageTitle from "../../Components/Shared/PageTitle";
const CreatePlan = () => {

    const [selectedFile, setSelectedFile] = useState();
    const [name, setName] = useState("");

    const handleSubmission = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", selectedFile);
        formData.append("name", name);
        // await fetch("http://fitnessdine.test/api/plan", {
        //     method: "POST",
        //     body: formData,
        // })
        //     .then((result) => {
        //         console.log(result);
        //     })
        //     .catch(() => {
        //         alert('Error in the Code');
        //     });


        await axiosClient.post('/plan', formData)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <PageTitle title="create new plan" />

            <form className="container mx-auto my-5">
                <p>Plan Name</p>
                <input type="text" className="input input-bordered input-accent w-full max-w-md" onChange={(e) => setName(e.target.value)} />
                <p>Upload Image </p>
                <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                />

                <br />
                <button onClick={handleSubmission} className="btn btn-info mt-3">Create</button>
            </form>
        </div>
    );
};

export default CreatePlan;
