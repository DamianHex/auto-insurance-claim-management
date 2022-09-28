import React, { useRef, useState, useEffect } from "react";
import CarImage from "../../src/images/car-insurance.jpeg";
import API from "../utils/API";

function LoginSignup () {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword ] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess ] = useState(false);

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    userRef.current.focus();
  }, [user, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

  }

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
            <form className='m-3' onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='userName' className='form-label'>
                  Username{" "}
                  <span style={{ fontSize: "13px" }}>
                    (this is the email you signed up with)
                  </span>
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='userName'
                  aria-describedby='emailHelp'
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e)=> setUser(e.target.value)}
                  value={user}
                  required
                />
                <div id='emailHelp' className='form-text'>
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  onChange={(e)=> setPassword(e.target.value)}
                  value={password}
                  required
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
