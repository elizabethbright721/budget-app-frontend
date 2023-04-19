import { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions`).then((res) => {
      setTransactions(res.data);
    });
  }, []);


    const sumBankTotal = transactions.map((transaction) => Number(transaction.amount)).reduce((a, b) => a + b, 0)
    
  return (
    <div className="">
      <section>
        <h3>Bank Account Total $
            {sumBankTotal > 100 
            ? <span className="green">{sumBankTotal}</span>
            : sumBankTotal > 0 
            ? <span className="yellow">{sumBankTotal}</span> 
            : <span className="red">{sumBankTotal}</span>
        }</h3>
        <table>
          <thead>        
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
                const date = transaction.date.split('-');
                date[1] -= 1;
                const dateString = new Intl.DateTimeFormat('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                }).format(Date.UTC(...date)).replace(/,/g, ',')
              return <Transaction key={index} transaction={transaction} index={index} dateString={dateString} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
