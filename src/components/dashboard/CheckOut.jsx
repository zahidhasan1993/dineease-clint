import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "20px",
              color: "#FF0000",
              "::placeholder": {
                color: "#D22B2B	",
              },
            },
            invalid: {
              color: "#FF0000",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe}
        className="py-2 px-5 mt-8 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 hover:scale-125 duration-300"
      >
        Pay
      </button>
    </form>
  );
};

export default CheckOut;
