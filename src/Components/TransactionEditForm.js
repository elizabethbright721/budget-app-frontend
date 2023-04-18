import { useState, useEffect } from "react";
import { useParams, Link , useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
  let { index } = useParams();

  const [transaction, setTransaction] = useState({
    "item_name": "",
    "amount": 0,
    "date": "",
    "from": "",
    });
 
  const navigate = useNavigate()

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };


  useEffect(() => {
    axios
    .get(`${API}/transactions/${index}`)
    .then((response) => {
      setTransaction(response.data);
    })
    .catch((e) => console.log(e));
}, [index]);


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .put(`${API}/transactions/${index}`, transaction)
    .then((response) => {
      setTransaction(response.data);
      navigate(`/transactions/${index}`);
    })
    .catch((c) => console.log(c));
  };
  return (
    <div className="Edit">
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
        <label htmlFor="amount">Amount:</label>
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

        <button className="button">Edit Item</button>
      </form>
      
    </div>
  );
}

export default TransactionEditForm;
