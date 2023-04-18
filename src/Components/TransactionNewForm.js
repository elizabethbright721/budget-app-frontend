
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    "item_name": "",
    "amount": 0,
    "date": "",
    "from": "",
  });
  const { index } = useParams()
  const navigate = useNavigate()

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

 const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .post(`${API}/transactions/`, transaction)
    .then(
        () => {
        navigate(`/transactions/${index}`);
    })
    .catch((c) => console.log(c));
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="text"
          name="date"
          value={transaction.date}
          onChange={handleTextChange}
        />
        <label htmlFor="name">Name:</label>
        <input
          id="item_name"
          value={transaction.item_name}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="text"
          value={transaction.amount}
          onChange={handleTextChange}
        />
        
        <label htmlFor="from">From:</label>
        <textarea
          id="from"
          name="from"
          value={transaction.from}
          onChange={handleTextChange}
          placeholder="i.e., bank, store, etc."
        />
        <br />
        <button>Create New Item</button>
      </form>
    </div>
  );
}

export default TransactionNewForm;
