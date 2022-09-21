import React from "react";
import { useState } from "react";
import API from "../utils/API"

function ClaimSubmissionForm() {

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;


  const [user, setUser] = useState({
    userId: 4,
    firstName: "Martin",
    lastName: "Edmonson",
    email: "martin@email.com",
    password: "password",
    streetAddress: "100 Main Street",
    city: "Austin",
    state: "Tx",
    zip: "78701",
  });

      // useEffect(() => {
      //   loadUser(user.sub); **** Need to pull user Id from log in information
      // }, []);

      // const loadEntries = (id) => {
      //   API.loadUser(id)
      //     .then((res) => setUser(res.data))
      //     .catch((err) => console.log(err));
      // };

  const [claim, setClaim] = useState({
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    creationDate: "",
    status: "submitted",
    description: "",
    userId: user.userId,
  });

  const [formObject, setFormObject] = useState({});

  const textUpdate = (e) => {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let userId2 = user.userId;
    console.log(user.userId);
    API.saveNewClaim({
        vehicleYear: formObject.vehicleYear,
        vehicleMake: formObject.vehicleMake,
        vehicleModel: formObject.vehicleModel,
        creationDate: today,
        status: "submitted",
        description: formObject.description,
        userId: userId2,
    });
  }



  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Claims Submission Form</h2>
        <div className='card m-5' id='cardBox'>
          <form className='container' onSubmit={handleSubmit}>
            <p id='cardTitle'>Your Information</p>
            {/* All items in this section is dynamically poplulated based on user state.  This area can not be changed, to maintain data integrity and to ensure that only the logged in user can file a claim */}
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
                  readOnly
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
                  readOnly
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
                  defaultValue={user.streetAddress}
                  readOnly 
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
                  readOnly
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
                  readOnly
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
                  readOnly
                />
              </div>
            </div>

            <hr></hr>
            <p id='cardTitle'>Enter Claim Information</p>
            {/* This area can be updated manually by the user as they mayhave more than 1 car.  Future feature is a drop down list of covered vehicles in the user's profile */}
            <div className='d-flex flex-wrap'>
              <div className='p-2 flex-fill'>
                <label
                  htmlFor='vehicleYear'
                  className='order-1 p-2 col-form-label'
                >
                  Vehicle Year
                </label>
                <div>
                  <input
                    type='text'
                    className='form-control'
                    id='vehicleYear'
                    name="vehicleYear"
                    placeholder='yyyy'
                    onChange={textUpdate}
                  />
                </div>
              </div>
              <div className='p-2 flex-fill'>
                <label
                  htmlFor='vehicleMake'
                  className='order-2 p-2 col-form-label'
                >
                  Vehicle Make
                </label>
                <div>
                  <input
                    type='text'
                    className='form-control'
                    id='vehicleMake'
                    name="vehicleMake"
                    placeholder='Vehicle Make'
                    onChange={textUpdate}
                  />
                </div>
              </div>
              <div className='p-2 flex-fill'>
                <label
                  htmlFor='vehicleModel'
                  className='order-3 p-2 col-form-label'
                >
                  Vehical Model
                </label>
                <div>
                  <input
                    type='text'
                    className='form-control'
                    id='vehicleModel'
                    name="vehicleModel"
                    placeholder='Vehicle Model'
                    onChange={textUpdate}
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
                  name="description"
                  placeholder='Please describe reason for your claim'
                  onChange={textUpdate}
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
