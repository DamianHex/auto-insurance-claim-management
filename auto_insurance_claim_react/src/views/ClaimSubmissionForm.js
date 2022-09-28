import React from "react";
import { useState } from "react";
import CustomerInfo from "./CustomerInfo";
import API from "../utils/API";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import { useAuth0 } from "@auth0/auth0-react";

function ClaimSubmissionForm() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  const user = useAuth0();
  const { sub, email, given_name, family_name } = user.user;
  const userId2 = Number(sub.slice(18));
  const [formObject, setFormObject] = useState({});
  const [claim, setClaim ] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const textUpdate = (e) => {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    API.createUser({
      userId: userId2,
      firstName: given_name,
      lastName: family_name,
      email: email,
      streetAddress: formObject.streetAddress,
      city: formObject.city,
      state: formObject.state,
      zip: formObject.zip,
    });

    API.saveNewClaim({
      vehicleYear: formObject.vehicleYear,
      vehicleMake: formObject.vehicleMake,
      vehicleModel: formObject.vehicleModel,
      creationDate: today,
      status: "In Progress",
      description: formObject.description,
      gid: userId2
    });

    window.location.replace('http://localhost:3000/profile')
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Claims Submission Form</h2>
        <CustomerInfo info={user} />
        <div className='card m-5' id='cardBox'>
          <form className='container' onSubmit={handleSubmit}>
            <p id='cardTitle'>Enter Claim Information</p>
            {/* This area can be updated manually by the user as they mayhave more than 1 car.  Future feature is a drop down list of covered vehicles in the user's profile */}
            <div className='d-flex flex-wrap'>
              <div className='p-2 flex-fill'>
                <label
                  htmlFor='streetAddressInput'
                  className='order-1 p-2 col-form-label'
                >
                  Street Address
                </label>
                <div>
                  <input
                    type='text'
                    className='form-control'
                    name='streetAddress'
                    id='streetAddressInput'
                    placeholder='Street Address'
                    onChange={textUpdate}
                  />
                </div>
              </div>
              <div className='p-2 flex-fill'>
                <label
                  htmlFor='cityInput'
                  className='order-2 p-2 col-form-label'
                >
                  City
                </label>
                <div>
                  <input
                    type='text'
                    className='form-control'
                    name='city'
                    id='cityInput'
                    placeholder='City'
                    onChange={textUpdate}
                  />
                </div>
              </div>
              <div className='p-2 flex-fill'>
                <label
                  htmlFor='stateInput'
                  className='order-3 p-2 col-form-label'
                >
                  State
                </label>
                <div>
                  <input
                    type='text'
                    className='form-control'
                    name='state'
                    id='stateInput'
                    placeholder='State'
                    onChange={textUpdate}
                  />
                </div>
              </div>{" "}
              <div className='p-2 flex-fill'>
                <label
                  htmlFor='zipCodeInput'
                  className='order-4 p-2 col-form-label'
                >
                  Zip
                </label>
                <div>
                  <input
                    type='text'
                    className='form-control'
                    name='zip'
                    id='zipCodeInput'
                    placeholder='Zip'
                    onChange={textUpdate}
                  />
                </div>
              </div>
            </div>
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
                    name='vehicleYear'
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
                    name='vehicleMake'
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
                    name='vehicleModel'
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
                  name='description'
                  placeholder='Please describe reason for your claim'
                  onChange={textUpdate}
                />
              </div>
            </div>
            <div className='row' hidden >
              <label htmlFor='GId' className='col-sm-3 col-form-label'>
                GID
              </label>
              <div className='col-sm-8'>
                <input
                  type='text'
                  className='form-control'
                  name='gid'
                  id='gid'
                  defaultValue={userId2}
                  readOnly
                />
              </div>
            </div>
            <div style={{ margin: "10px" }}>
              <button className='btn btn-primary'>Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default withAuthenticationRequired(ClaimSubmissionForm, {
  onRedirecting: () => <Loading />,
});
