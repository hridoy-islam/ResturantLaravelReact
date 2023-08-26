import { Link } from "react-router-dom";
import BlogDetails from "./BlogDetails";

const Blog = ({plan}) => {
    const { title, description, image, slug } = plan;
    let details = description.slice(0, 170);
    return (
        <div>
            <div className="p-8 border-2 rounded-lg">
                    <img className=" h-56 w-full rounded-lg" src={image} alt="img" />
                    <h2 className="text-2xl font-bold text-secondary py-6">{title}</h2>
                    <div className="flex text-md font-medium text-secondary-500">
                        <p className="flex">
                            <span className="text-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            </span>
                            Admin
                        </p>
                        <p className="pl-4 flex">
                            <span className="text-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                            </span>
                            30 Jun 2023
                        </p>
                    </div>
                    <p className="font-semibold text-md text-gray-500 pt-3">{details}... </p>
                    <Link className="btn btn-primary text-white w-full mt-4 mx-auto" to={`/blog/${slug}`} >Read More</Link>
                </div>
        </div>
    );
};

export default Blog;