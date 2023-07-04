import { FUNDING } from "@paypal/react-paypal-js";
import { useContext } from "react";
import { userContext } from "../../Contexts/MainContext";
const OrderReview = () => {
    const initialOptions = {
        "client-id": "<test>",
        "enable-funding": "paylater,venmo",
    }
    const { order } = useContext(userContext)
    const FUNDING_SOURCES = [
        FUNDING.PAYPAL,
        FUNDING.VENMO,
        FUNDING.CARD
    ];
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

            {/* // <PayPalScriptProvider options={initialOptions}>
            //     {
            //         FUNDING_SOURCES.map(fundingSource => {
            //             return (
            //                 <PayPalButtons
            //                     fundingSource={fundingSource}
            //                     key={fundingSource}

            //                     style={{
            //                         layout: 'vertical',
            //                         shape: 'rect',
            //                         color: (fundingSource == paypal.FUNDING.PAYLATER) ? 'gold' : '',
            //                     }}

            //                     createOrder={async (data, actions) => {
            //                         try {
            //                             const response = await fetch("http://localhost:9597/orders", {
            //                                 method: "POST"
            //                             });

            //                             const details = await response.json();
            //                             return details.id;
            //                         } catch (error) {
            //                             console.error(error);
            //                             // Handle the error or display an appropriate error message to the user
            //                         }
            //                     }}



            //                     onApprove={async (data, actions) => {
            //                         try {
            //                             const response = await fetch(`http://localhost:9597/orders/${data.orderID}/capture`, {
            //                                 method: "POST"
            //                             });

            //                             const details = await response.json();
            //                             // Three cases to handle:
            //                             //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
            //                             //   (2) Other non-recoverable errors -> Show a failure message
            //                             //   (3) Successful transaction -> Show confirmation or thank you message

            //                             // This example reads a v2/checkout/orders capture response, propagated from the server
            //                             // You could use a different API or structure for your 'orderData'
            //                             const errorDetail = Array.isArray(details.details) && details.details[0];

            //                             if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
            //                                 return actions.restart();
            //                                 // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
            //                             }

            //                             if (errorDetail) {
            //                                 let msg = 'Sorry, your transaction could not be processed.';
            //                                 msg += errorDetail.description ? ' ' + errorDetail.description : '';
            //                                 msg += details.debug_id ? ' (' + details.debug_id + ')' : '';
            //                                 alert(msg);
            //                             }

            //                             // Successful capture! For demo purposes:
            //                             console.log('Capture result', details, JSON.stringify(details, null, 2));
            //                             const transaction = details.purchase_units[0].payments.captures[0];
            //                             alert('Transaction ' + transaction.status + ': ' + transaction.id + 'See console for all available details');
            //                         } catch (error) {
            //                             console.error(error);
            //                             // Handle the error or display an appropriate error message to the user
            //                         }
            //                     }}
            //                 />)
            //         })
            //     }
             </PayPalScriptProvider> */}

        </div >


    );
};

export default OrderReview;
