import React from "react";
import { withAuthenticationRequired} from '@auth0/auth0-react';
import Loading from "../components/Loading";
import CarImage from "../../src/images/car-insurance.jpeg";
import { useAuth0 } from '@auth0/auth0-react';

function Homepage() {

  const user = useAuth0();
  const { given_name } = user.user;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Deleon Car Insurance, {given_name}!</h1>
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
