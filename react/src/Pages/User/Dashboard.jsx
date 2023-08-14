import PageTitle from '../../Components/Shared/PageTitle';

const Dashboard = () => {
    return (
        <div>
            <PageTitle title="Dashboard" />
            <div className='flex justify-start items-center p-6  text-center'>
                <h3 className='text-lg font-semibold'>Hello Mushfik</h3>
            </div>
        </div>
    );
};

export default Dashboard;