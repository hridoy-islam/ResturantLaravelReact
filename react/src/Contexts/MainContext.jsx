import { createContext, useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';

export const userContext = createContext();


const MainContext = ({ children }) => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('details')));
    const [token, setToken] = useState(localStorage.getItem('fitnesstoken'));
    const [loading, setLoading] = useState(true);
    
    const [order, setOrder] = useState({
        plan: 0,
        step: 0,
        duration: 0,
        meal: 0,
        price: 0,
        basePrice: 0,
        snacks: {
            price: 0,
            added: false,
        },
        breakFastLight: {
            price: 0,
            added: false,
        },
        breakFastFull: {
            price: 0,
            added: false,
        },
    })
    console.log(order)


    const logOut = () => {
        localStorage.removeItem('details');
        localStorage.removeItem('fitnesstoken');
    }

    // const createToken = (token) => {
    //     setToken(token);
    //     if (token) {
    //         localStorage.setItem('fitnesstoken', token);
    //     }
    //     else {
    //         localStorage.removeItem('fitnesstoken');
    //     }
    // }
    
    const info = {
        user,
        loading,
        order,
        setOrder,
        token,
        error,
        setError,
        setLoading,
        logOut

    }
    return (
        <userContext.Provider value={info}>
            {children}
        </userContext.Provider>
    );
};

export default MainContext;
