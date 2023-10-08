import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../customhooks/useAxiosSecure";
import useAuth from "../../customhooks/useAuth";
import Swal from "sweetalert2";

const CheckOut = ({ price }) => {
  const myAxios = useAxiosSecure();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clintSecret, setClintSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    myAxios.post("/create-payment-intent", { price }).then((res) => {
      // console.log(res.data);
      setClintSecret(res.data.clientSecret);
    });
  }, [price, myAxios]);

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
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }
    console.log("payment card", card);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clintSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
      // setCardError(confirmError)
    }
    console.log("payment intent", paymentIntent);
    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id;
      console.log(transactionId);
      const paymentData = {
        email: user?.email,
        amount: price,
        transactionId: transactionId,
      };
      myAxios.post("/payment", paymentData).then((res) => {
        console.log('res data',res.data);
        if (res.data.result.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  // console.log(clintSecret);
  return (
    <>
      {" "}
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
          disabled={!stripe || !clintSecret}
          className="py-2 px-5 mt-8 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-500 hover:scale-125 duration-300"
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 mt-5">{cardError}</p>}
    </>
  );
};

export default CheckOut;
