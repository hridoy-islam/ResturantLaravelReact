import img1 from "../../src/assets/Healthy.png";

const BlogDetails = () => {
    const Blogs = [
        {
            id: '1',
            title: 'Unlocking A Healthier Lifestyle: The Best Meal Plan In UAE',
            description:'When it comes to leading a healthier lifestyle, the foundation lies in a well-designed meal plan. By carefully selecting the When it comes to leading a healthier lifestyle, the foundation lies in a well-designed meal plan. By carefully selecting the Get in touch with your nutritionist and let the experts decide what is best for you!',
            img: img1,
        }
    ]
    return (
        <div>
            <div className="hero min-h-screen ">
            <div className=" w-full ">
            <div className="lg:w-6/12 mx-auto px-3 lg:mt-20 mt-12 sticky">
                <img src={img1} className="mx-auto rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-6/12 mx-auto px-3 pt-6 lg:pt-12">
                <h1 className="text-3xl font-bold">Unlocking A Healthier Lifestyle: The Best Meal Plan In UAE</h1>
                <p className="py-6">When it comes to leading a healthier lifestyle, the foundation lies in a well-designed meal plan. By carefully selecting the When it comes to leading a healthier lifestyle, the foundation lies in a well-designed meal plan. By carefully selecting the Get in touch with your nutritionist and let the experts decide what is best for you! When it comes to leading a healthier lifestyle, the foundation lies in a well-designed meal plan. By carefully selecting the When it comes to leading a healthier lifestyle, the foundation lies in a well-designed meal plan. By carefully selecting the Get in touch with your nutritionist and let the experts decide what is best for you!</p>
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