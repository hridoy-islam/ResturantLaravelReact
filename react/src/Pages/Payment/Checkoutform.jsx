import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import { useState } from "react";
const Checkoutform = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')


    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if (error) {
            console.log('[error]', error);
            setCardError(error.message)
          } else {
            setCardError('');
            console.log('[PaymentMethod]', paymentMethod);
          }
    }
    



    return (
        <div>
            <form className="w-2/4 mx-auto" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="text-2xl px-6 py-3 text-white rounded-xl bg-primary my-10" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {cardError && <p className="text-red-600 text-lg mx-auto text-center">{cardError}</p>}
        </div>
    );
};

export default Checkoutform;