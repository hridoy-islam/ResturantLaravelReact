import { Elements } from "@stripe/react-stripe-js";
import Checkoutform from "./Checkoutform";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51NcNz2IAO3eCB4qJOsMuDggP29ab9oDnshYEg6QGQHKNYQLTjkmIULq5bGPRqq1tOVyaWdoY3M4Oi6smb3unkjt200VtB3O92q');

const Payment = () => {
    return (
        <div>
            <h2 className="text-3xl my-24">Payment</h2>
            <Elements stripe={stripePromise}>
                <Checkoutform />
            </Elements>
        </div>
    );
};

export default Payment;