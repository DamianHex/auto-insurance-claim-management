import React from "react";
import Claims from "../components/Claims";
import CustomerInfo from "./CustomerInfo";
import {useAuth0, withAuthenticationRequired} from '@auth0/auth0-react';
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../components/Loading";
import Header from "../components/Header";
import CarImage from "../../src/images/car-insurance.jpeg";

function Homepage() {
  const { user } = useAuth0();
 
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Deleon Car Insurance!</h1>
      <div className='card text-bg-secondary m-5'>
        <img id='carImage' src={CarImage} alt='ImageWithHandsCoveringCar' />
        <div className='card-body'>
          <h5 className='card-title'>About Us</h5>
          <p className='card-text '>
            We are you home for auto insurance. We offer competitive rates and
            guarantee you will save over the companies.
          </p>
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
    </div>
  );
}

export default withAuthenticationRequired(Homepage, {
  onRedirecting: () => <Loading />,
});
