import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../shared/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import useCart from "../../customhooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
    const {cart} = useCart();
    const total = cart.reduce((sum,item) => sum + item.price,0);
    const totalPrice = parseFloat(total.toFixed(2));
    // console.log(total);
  return (
    <div>
      <SectionTitle title="Please Pay For You Order"></SectionTitle>

      <div className="md:w-1/2 md:ml-56">
        <Elements stripe={stripePromise}>
          <CheckOut price={totalPrice}></CheckOut>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
