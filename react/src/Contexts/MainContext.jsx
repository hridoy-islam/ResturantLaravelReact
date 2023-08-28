import { createContext, useState } from 'react';

export const userContext = createContext();


const MainContext = ({ children }) => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('details')));
    const [token, setToken] = useState(localStorage.getItem('fitnesstoken'));
    const [loading, setLoading] = useState(true);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [dob, setDob] = useState(null);
    const [country, setCountry] = useState(null);
    const [address, setAddress] = useState(null);
    const [apartment, setApartment] = useState(null);
    const [gmap, setGmap] = useState(null);
    const [deliveryinstruction, setDeliveryinstruction] = useState(null);
    const [date, setDate] = useState(null);
    const [city, setCity] = useState(null);

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
        mealsTime,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phone,
        setPhone,
        dob,
        setDob,
        country,
        setCountry,
        address,
        setAddress,
        apartment,
        setApartment,
        gmap,
        setGmap,
        city,
        setCity,
        date,
        setDate,
        deliveryinstruction,
        setDeliveryinstruction

    }
    return (
        <userContext.Provider value={info}>
            {children}
        </userContext.Provider>
    );
};

export default MainContext;
