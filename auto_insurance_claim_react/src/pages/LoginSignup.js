import React from "react";
import CarImage from "../../src/images/car-insurance.jpeg";

function LoginSignup () {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Deleon Car Insurance!</h1>
      <div className='card text-bg-secondary m-5'>
        <img id='carImage' src={CarImage} alt='ImageWithHandsCoveringCar' />
        <div className='card-body'>
          <h5 className='card-title'>About Us</h5>
          <p className='card-text '>
            We are you home for auto insurance. We offer competitive rates and
            guarantee you will save over the companies. Sign in or Sign up to
            find out!
          </p>
          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
      <hr></hr>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <div className='card text-center m-5'>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "gray",
                fontSize: "25px",
              }}
            >
              Sign into your account
            </p>
            <form className='m-3'>
              <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                  Username{" "}
                  <span style={{ fontSize: "13px" }}>
                    (this is the email you signed up with)
                  </span>
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
                <div id='emailHelp' className='form-text'>
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className='mb-3'>
                <label htmlFor='exampleInputPassword1' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Sign In
              </button>
            </form>
          </div>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
}

export default LoginSignup;
