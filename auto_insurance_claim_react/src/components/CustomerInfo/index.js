import React, { useState } from "react";
import { useEffect } from "react";
import API from "../../utils/API";

function CustomerInfo () {

const [user , setUser ] = useState({})

useEffect(() => {
  API.getUserById(1)
    .then((res) => setUser(res))
}, [])

return (
  <div className='card m-5' id='cardBox'>
    <form className='container'>
      <p id='cardTitle'>Customer Information</p>
      <div className='row'>
        <label htmlFor='firstNameInput' className='col-sm-3 col-form-label'>
          First Name
        </label>
        <div className='col-sm-8'>
          <input
            type='text'
            className='form-control'
            name='firstName'
            id='firstNameInput'
            defaultValue={user.firstName}
            readOnly
          />
        </div>
      </div>
      <div className='mb-3 row'>
        <label htmlFor='lasttNameInput' className='col-sm-3 col-form-label'>
          Last Name
        </label>
        <div className='col-sm-8'>
          <input
            type='text'
            className='form-control'
            name='lastName'
            id='lasttNameInput'
            defaultValue={user.lastName}
            readOnly
          />
        </div>
      </div>
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
              defaultValue={user.streetAddress}
              readOnly
            />
          </div>
        </div>
        <div className='p-2 flex-fill'>
          <label htmlFor='cityInput' className='order-2 p-2 col-form-label'>
            City
          </label>
          <div>
            <input
              type='text'
              className='form-control'
              name='city'
              id='cityInput'
              defaultValue={user.city}
              readOnly
            />
          </div>
        </div>
        <div className='p-2 flex-fill'>
          <label htmlFor='stateInput' className='order-3 p-2 col-form-label'>
            State
          </label>
          <div>
            <input
              type='text'
              className='form-control'
              name='state'
              id='stateInput'
              defaultValue={user.state}
              readOnly
            />
          </div>
        </div>{" "}
        <div className='p-2 flex-fill'>
          <label htmlFor='zipCodeInput' className='order-4 p-2 col-form-label'>
            Zip
          </label>
          <div>
            <input
              type='text'
              className='form-control'
              name='zip'
              id='zipCodeInput'
              defaultValue={user.zip}
              readOnly
            />
          </div>
        </div>
      </div>
    </form>
  </div>
);


}

export default CustomerInfo