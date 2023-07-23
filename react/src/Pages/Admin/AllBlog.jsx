import { Link } from 'react-router-dom';
import PageTitle from '../../Components/Shared/PageTitle';

const AllBlog = () => {
    return (
        <div>
            <PageTitle title="Blog" />
            <div className="py-4 container mx-auto">
                <Link className='py-2 px-4 bg-primary rounded-none' to='/admin/blog/create'>Create Blog</Link>
            </div>
        </div>
    );
};

export default AllBlog;
