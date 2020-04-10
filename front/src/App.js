import React from 'react';
import './App.css';
import Transactions from './Transactions';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
function App() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12" className="mt-4">
          <h3>Financial Account</h3>
        </MDBCol>
      </MDBRow>
      <Transactions></Transactions>
    </MDBContainer>

  );
}
export default App;
