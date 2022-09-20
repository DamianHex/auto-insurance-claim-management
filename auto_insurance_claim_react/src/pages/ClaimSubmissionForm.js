import React from "react";
import { useState } from "react";



function ClaimSubmissionForm() {
  const [user, setUser] = useState({
    firstName: "Peter",
    lastName: "Griffin",
    address: "100 Ave A",
    city: "Austin",
    state: "Tx",
    zip: "78727"
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // setUser(user.name);
    console.log("I am " + JSON.stringify(user));
  }

  const textUpdate = (e) => {
      console.log(e.target.value);
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Claims Submission Form</h2>
        <div className='card m-5'>
          <form className='container' onSubmit={handleSubmit}>
            <p id='cardTitle'>Your Information</p>

            <div className='row'>
              <label htmlFor='firstName' className='col-sm-3 col-form-label'>
                First Name
              </label>
              <div className='col-sm-3'>
                <input
                  type='text'
                  className='form-control col-sm-4'
                  id='firstName'
                  defaultValue={user.firstName}
                />
              </div>
              <label htmlFor='lasttName' className='col-sm-2 col-form-label'>
                Last Name
              </label>
              <div className='col-sm-3'>
                <input
                  type='text'
                  className='form-control col-sm-4'
                  id='lasttName'
                  defaultValue={user.lastName}
                />
              </div>
            </div>
            <div className='row'>
              <label
                htmlFor='streetAddress'
                className='col-sm-3 col-form-label'
              >
                Address
              </label>
              <div className='col-sm-8'>
                <input
                  type='text'
                  className='form-control col-sm-4'
                  id='streetAddress'
                  defaultValue={user.address}
                />
              </div>
            </div>

            <div className='row'>
              <label htmlFor='city' className='col-sm-3 col-form-label'>
                City
              </label>
              <div className='col-sm-8'>
                <input
                  type='text'
                  className='form-control col-sm-4'
                  id='city'
                  defaultValue={user.city}
                />
              </div>
            </div>

            <div className='row'>
              <label htmlFor='state' className='col-sm-3 col-form-label'>
                State
              </label>
              <div className='col-sm-8'>
                <input
                  type='text'
                  className='form-control col-sm-4'
                  id='state'
                  defaultValue={user.state}
                />
              </div>
            </div>

            <div className='row'>
              <label htmlFor='zip' className='col-sm-3 col-form-label'>
                ZIP Code
              </label>
              <div className='col-sm-8'>
                <input
                  type='text'
                  className='form-control col-sm-4'
                  id='zip'
                  defaultValue={user.zip}
                />
              </div>
            </div>

            <hr></hr>
            <p id='cardTitle'>Enter Claim Information</p>

            <div className='d-flex flex-wrap'>
              <div className='p-2 flex-fill'>
                <label htmlFor='vehicleYear' className='order-1 p-2 form-label'>
                  Vehicle Year
                </label>
                <div>
                  <input
                    type='text'
                    className='form-control'
                    id='vehicleYear'
                    placeholder='yyyy'
                  />
                </div>
              </div>
              <div className='p-2 flex-fill'>
                <label htmlFor='vehicleMake' className='order-2 p-2 form-label'>
                  Vehicle Make
                </label>
                <div>
                  <input
                    type='text'
                    className='form-control'
                    id='vehicleMake'
                    placeholder='Vehicle Make'
                  />
                </div>
              </div>
              <div className='p-2 flex-fill'>
                <label
                  htmlFor='vehicleModel'
                  className='order-3 p-2 form-label'
                >
                  Vehical Model
                </label>
                <div>
                  <input
                    type='text'
                    className='form-control'
                    id='vehicleModel'
                    placeholder='Vehicle Model'
                  />
                </div>
              </div>{" "}
            </div>
            <div className='row'>
              <label htmlFor='description' className='col-sm-3 col-form-label'>
                Description
              </label>
              <div className='col-sm-8'>
                <textarea
                  type='text'
                  className='form-control'
                  id='description'
                  placeholder='Please describe reason for your claim'
                />
              </div>
            </div>
            <div style={{ margin: "10px" }}>
              <button className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ClaimSubmissionForm;
