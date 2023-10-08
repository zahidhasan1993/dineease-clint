import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
  return (
    <div>
      <SectionTitle title="Please Pay For You Order"></SectionTitle>

      <div className="md:w-1/2 md:ml-56">
        <Elements stripe={stripePromise}>
          <CheckOut></CheckOut>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
