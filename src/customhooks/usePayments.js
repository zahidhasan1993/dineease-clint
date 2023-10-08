import { useEffect, useState } from "react";

const usePayments = () => {
    const [payments, setPayments] = useState([]);
    useEffect(() => {
        fetch("https://dineease-server-lemon.vercel.app/payment")
          .then((res) => res.json())
          .then((data) => {
            setPayments(data);
          });
      }, []);
      return payments;
}

export default usePayments;