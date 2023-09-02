import { useContext } from 'react';
import PageTitle from '../../Components/Shared/PageTitle';
import { userContext } from '../../Contexts/MainContext';

const Dashboard = () => {
    const {user} = useContext(userContext)
    return (
        <div>
            <PageTitle title="Dashboard" />
            <div className='flex justify-start items-center p-6  text-center'>
                <h3 className='text-3xl font-semibold'>Welcome {user.email}</h3>
            </div>
        </div>
    );
};

export default Dashboard;