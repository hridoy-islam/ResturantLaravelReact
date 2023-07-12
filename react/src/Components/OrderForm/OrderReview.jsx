import { useContext } from "react";
import { userContext } from "../../Contexts/MainContext";
const OrderReview = () => {

    const { order } = useContext(userContext)
    return (
        <div>
            <div>
                <h2 className="text-2xl">Plan Information</h2>
                <p>Plan Name:
                    GlutenAndDairyFreeDiet </p>

                <p> Deliveries per week: {order.days}</p>

                <p> Off-Day(s):{order.offday} </p>

                <p>Plan Duration:{order.duration} </p>

                <p>Meal Type: {order.meal[0]} + {order.meal[1]} </p>
            </div>
            <div>
                <h2 className="text-2xl">Personal Information</h2>
                <p>First Name: {order.firstName}</p>

                <p> Last Name: {order.lastName}</p>

                <p> Email:{order.email} </p>

                <p>Mobile:{order.phone} </p>

                <p>Date of Birth: {order.dob} </p>
            </div>

            <div>
                <h2 className="text-2xl">Delivery Information</h2>
                <p>Starting Date: {order.date}</p>

                <p> City: {order.city}</p>

                <p> Address:{order.address} </p>

                <p>Apartment/Villa Number:{order.apartment} </p>

                <p>Google Maps Link: {order.gmap} </p>
                <p>Delivery Instructions : {order.deliveryinstruction}</p>
            </div>



        </div >


    );
};

export default OrderReview;
