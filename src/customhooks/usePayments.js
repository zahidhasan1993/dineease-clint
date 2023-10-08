import { useEffect, useState } from "react";

const usePayments = () => {
    const [payments, setPayments] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/payment")
          .then((res) => res.json())
          .then((data) => {
            setPayments(data);
          });
      }, []);
      return payments;
}

export default usePayments;