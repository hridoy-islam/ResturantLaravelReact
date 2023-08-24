import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
    const [blogDetail, setBlogDetail] = useState();
    let { slug } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:5000/blog/blog/${slug}`)
            .then(function (response) {
                // handle success
                setBlogDetail(response.data);
            })
    }, [])
    console.log(blogDetail)

    return (
        <div>
            <div className="hero min-h-screen ">
            <div className=" w-full mb-12">
                <div className=" mx-auto lg:px-0 px-3 mt-6 ">
                <img src='https://api.vmeals.ae/media/Vegan%20food%20and%20meat.jpg' alt="img" className="w-full h-[500px] block" />
                </div>
                <div className="  shadow-xl  w-10/12 mx-auto lg:px-12 lg:py-12 px-3 pt-6 lg:pt-12">
                <h1 className="text-3xl font-bold">{blogDetail?.title}</h1>
                <p className="py-6">{blogDetail?.description}</p>
                <p className="">When it comes to leading a healthier lifestyle, the foundation lies in a well-designed meal plan. By carefully selecting the When it comes to leading a healthier lifestyle, the foundation lies in a well-designed meal plan. By carefully selecting the Get in touch with your nutritionist and let the experts decide what is best for you! When it comes to leading a healthier lifestyle, the foundation lies in a well-designed meal plan. By carefully selecting the When it comes to leading a healthier lifestyle, the foundation lies in a well-designed meal plan. By carefully selecting the Get in touch with your nutritionist and let the experts decide what is best for you!</p>
                </div>
                
                
            </div>
            </div>
            {/* <div className='mt-5 mb-5'>

                    <div >
                        <h2 className='title'>Unlocking A Healthier Lifestyle: The Best Meal Plan In UAE</h2>
                        <h1 className='over-text'>Course Overview</h1>
                        <p className='details'>{Blogs.description}</p>
                    </div>
                    <div >
                        <img className='img img-fluid' src={Blogs.img} alt="" />
                    </div>
                    <div className='btn-detail '>
                    </div>
             </div> */}
        </div>
    );
};

export default BlogDetails;