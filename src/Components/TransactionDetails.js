import { useState, useEffect } from "react";
import { Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios"
const API = process.env.REACT_APP_API_URL;

function TransactionDetails() {
  const [transaction , setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate()
    
    console.log(transaction)
  
    useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
    .delete(`${API}/transactions/${index}`)
    .then(() => {
      navigate(`/transactions`);
    })
    .catch((e) => console.log(e));
  };
  return (
    <article>
      <h3>{transaction.item_name}</h3>
      <p>${transaction.amount}</p>
      <p>{transaction.date}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default TransactionDetails;