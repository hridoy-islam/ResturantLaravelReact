import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../Contexts/MainContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(userContext);
    const location = useLocation();

    // if(loading){
    //     return <Loader></Loader>
    // }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;