import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import OrderForm from '../Components/OrderForm/OrderForm';
import BreadCumb from '../Components/Shared/BreadCumb';
export default function Ordernow() {
    const amount = 200;
    const createOrder = (data, actions) => {
        console.log("Creating order for amount", amount);
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            value: amount
                        }
                    }
                ]
            })
            .then((order) => {
                console.log(order)
                return order;
                // post data to laravel api
            });
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {

            // logic .. for complete

            // navigate thank you page.

            console.log(details);
        });
    }

    return (
        <>
            <BreadCumb title="Order Now" image="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />
            {/* <OrderStep /> */}
            <OrderForm />
            <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </PayPalScriptProvider>
        </>
    )
}


