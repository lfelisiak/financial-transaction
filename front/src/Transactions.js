import React, { useState, useEffect} from "react";
import Transaction from "./Transaction";
import {MDBCard,MDBCardHeader,MDBCardBody,MDBCardTitle,MDBListGroup} from "mdbreact";
const Transactions = ()  => {
  const  [transactionsList,setTransactionsList ] = useState([]);
  const  [account,setAccount ] = useState({});
  
  function fetchFinancialAccount(){
    fetch("http://localhost:3001/api/v1/financial_account")
    .then(response => response.json())
    .then(response =>{
      setAccount(response.data.financialAccount);
      setTransactionsList(response.data.financialAccountHistory);
    });
  }
  useEffect(()=>{
    const interval = setInterval(() => {
      fetchFinancialAccount();
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <MDBCard className="w-100 mb-4">
    <MDBCardHeader color="deep-orange lighten-1">Financial Account Details</MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle>
          <p>{`Account id: ${account.id || ''}`}</p>
          <p>{`Account amount: $ ${account.amount || 0}`}</p>
      </MDBCardTitle>
        <h5>Transactions:</h5>
        <MDBListGroup>
          {
            (transactionsList.length > 0 && transactionsList.map(t => {
              return <Transaction type={t.type} amount={t.amount} key={t.id} id={t.id} date={t.effectiveDate}></Transaction>
            }))
          }
        </MDBListGroup>
    </MDBCardBody>
    </MDBCard>
  )
}
export default  Transactions;