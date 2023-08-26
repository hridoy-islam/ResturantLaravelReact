import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { userContext } from '../../Contexts/MainContext';

const PrivateRoute = ({children}) => {
    const {user} = useContext(userContext);

    // if(loading){
    //     return <Loader></Loader>
    // }

    if(user && user?.role){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;