
import { useEffect, useState } from 'react';
import PageTitle from '../../Components/Shared/PageTitle';
import axios from 'axios';

const Subscribe = () => {
    const [peoples, setPeoples] = useState()
    const fetchData = () => {
        axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/subscribe/`)
            .then(function (response) {
                // handle success
                setPeoples(response.data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <PageTitle title="Subscribe" />
            <div className="py-4 container mx-auto">

            </div>
            {/* <div>
                <button className='btn-sm btn-primary'>Export</button>
            </div> */}



            <div className="overflow-x-auto container mx-auto py-4">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th className='text-lg font-bold'>Email</th>
                        </tr>
                        {peoples?.length > 0 && peoples?.map((item, index) => <tr key={index}>
                            <td>{item.email}</td>
                        </tr>)}

                    </thead>
                    <tbody>





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Subscribe;
