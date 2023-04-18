import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;



function Transaction({ transaction, index }) {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((e) => console.error("catch", e));
  }, []);
  return (
    <tr>
      <td>
        {transaction.date}
      </td>
      <td>
        <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
      </td>
      <td>
        ${transaction.amount}
      </td>
    </tr>
  );
}

export default Transaction;
