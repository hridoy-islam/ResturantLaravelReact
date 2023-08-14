import img1 from "../../src/assets/Healthy.png";
import BreadCumb from "../Components/Shared/BreadCumb";
import Blog from "./Blog";
const Blogs = () => {
    const Blogs = [
        {
            id: '1',
            title: 'Unlocking A Healthier Lifestyle: The Best Meal Plan In UAE',
            description:'When it comes to leading a healthier lifestyle, the foundation lies in a well-designed meal plan. By carefully selecting the When it comes to leading a healthier lifestyle, the foundation lies in a well-designed meal plan. By carefully selecting the Get in touch with your nutritionist and let the experts decide what is best for you!',
            img: img1,
        },
        {
            id: '2',
            title: 'Unlocking A Healthier Lifestyle: The Best Meal Plan In UAE',
            description:'When it comes to leading a healthier lifestyle, the foundation lies in a well-designed meal plan. By carefully selecting the When it comes to leading a healthier lifestyle, the foundation lies in a well-designed meal plan. By carefully selecting the Get in touch with your nutritionist and let the experts decide what is best for you!',
            img: img1,
        },
    ]
    return (
        <div>
            <BreadCumb title="Blog" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mx-24 lg:my-24 mx-8 my-8">
            
                {Blogs.map((plan, index) => <Blog plan={plan} key={index} />)}
            
            </div>
        </div>
    );
};

export default Blogs;
