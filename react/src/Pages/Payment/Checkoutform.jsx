import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
const Checkoutform = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) =>{
        event.preventDefault();

        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
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
        </div>
    );
};

export default Checkoutform;