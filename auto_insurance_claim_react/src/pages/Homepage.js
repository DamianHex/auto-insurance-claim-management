import React from "react";
import Claims from "../components/Claims";
import CustomerInfo from "../components/CustomerInfo";

function Homepage() {
 
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Account Home</h1>
      <CustomerInfo />
      <Claims />
    </div>
  )
}

export default Homepage;
