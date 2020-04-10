import React,{useState,useEffect} from 'react';
import {MDBIcon,MDBContainer,MDBRow,MDBCol,MDBBadge,MDBListGroupItem,MDBCollapse} from "mdbreact";
const Transaction = props => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <MDBListGroupItem className="d-flex transaction justify-content-between align-items-center">
            <MDBContainer>
            <MDBRow className="w-100" style={{cursor:"pointer"}} onClick={ ()=> setIsOpen(!isOpen) }>
              <MDBCol size="8">
                <span>$ {props.amount}</span>
              </MDBCol>
              <MDBCol size="3">
                <MDBBadge className="ml-5 mw-25" color={ props.type === "debit" ? "danger" : "success" }
                    pill>{props.type.toLocaleUpperCase()}
                </MDBBadge> 
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <MDBCollapse isOpen={isOpen}>
                  <MDBRow  className="mt-4">
                    <MDBCol><p><MDBIcon fas icon="hashtag" size="lg"/> {props.id} </p></MDBCol>
                    <MDBCol><p><MDBIcon fas icon="dollar-sign" size="lg" /> {props.amount}</p></MDBCol>
  <MDBCol><p> {(props.type === "debit") ? <MDBIcon far icon="frown" className="red-text" size="lg"  /> : <MDBIcon far icon="grin-beam" className="green-text" size="lg" />} {props.type}</p></MDBCol>
                    <MDBCol><p><MDBIcon far icon="calendar-alt" size="lg"/> {props.date}</p></MDBCol>
                  </MDBRow>
                </MDBCollapse>
              </MDBCol>
            </MDBRow>
            </MDBContainer>
    </MDBListGroupItem>
  );
}
export default Transaction;