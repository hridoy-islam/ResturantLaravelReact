import { createContext, useState } from 'react';

export const userContext = createContext();


const MainContext = ({ children }) => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('details')));
    const [token, setToken] = useState(localStorage.getItem('fitnesstoken'));
    const [loading, setLoading] = useState(true);

    const [durationPlan, setDurationPlan] = useState([
        {
            day: 6,
            title: '6 Days',
        },
        {
            day: 5,
            title: '5 Days',
        },
        {
            day: 20,
            title: '20 Days',
        },
        {
            day: 24,
            title: '24 Days',
        }

    ])

    const [mealsTime, setMealsTime] = useState([
        {
            meal: 1,
            name: '1 Meal'
        },
        {
            meal: 2,
            name: '2 Meal'
        },
        {
            meal: 3,
            name: '3 Meal'
        },
    ])

    const [order, setOrder] = useState({
        plan: '',
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
        setUser,
        setToken,
        durationPlan,
        mealsTime

    }
    return (
        <userContext.Provider value={info}>
            {children}
        </userContext.Provider>
    );
};

export default MainContext;
