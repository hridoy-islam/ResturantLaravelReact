import { createContext, useEffect, useState } from 'react';

export const userContext = createContext();

const MainContext = ({ children }) => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState({
        plan: 0,
        step: 0,
    })

    const createToken = (token) => {
        setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        }
        else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    useEffect(() => {

    }, [])

    const info = {
        user,
        loading,
        order,
        setOrder,
        setUser,
        setLoading,
        createToken,
        token,
        error,
        setError,
    }
    return (
        <userContext.Provider value={info}>
            {children}
        </userContext.Provider>
    );
};

export default MainContext;
