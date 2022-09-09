import React from "react";

function UserRegisterForm() {
  return (
    <form className='container'>
      <p>Set your login credentials</p>

      <div className='row'>
        <label for='email' className='col-sm-3 col-form-label'>
          Email
        </label>
        <div className='col-sm-8'>
          <input
            type='text'
            className='form-control col-sm-4'
            id='email'
            placeholder='email@example.com'
          />
        </div>
      </div>
      <div className='row'>
        <label for='inputPassword' className='col-sm-3 col-form-label'>
          Password
        </label>
        <div className='col-sm-8'>
          <input
            type='password'
            className='form-control col-sm-4'
            id='inputPassword'
          />
        </div>
      </div>

      <hr></hr>
      <p>Customer Information</p>
      <div className='row'>
        <label for='firstNameInput' className='col-sm-3 col-form-label'>
          First Name
        </label>
        <div className='col-sm-8'>
          <input
            type='text'
            class='form-control'
            id='firstNameInput'
            placeholder='First Name'
          />
        </div>
      </div>
      <div className='mb-3 row'>
        <label for='lasttNameInput' className='col-sm-3 col-form-label'>
          Last Name
        </label>
        <div className='col-sm-8'>
          <input
            type='text'
            class='form-control'
            id='lasttNameInput'
            placeholder='Last Name'
          />
        </div>
      </div>
      <div className='d-flex flex-wrap'>
        <div className='p-2 flex-fill'>
          <label for='streetAddressInput' className='order-1 p-2 form-label'>
            Street Address
          </label>
          <div>
            <input
              type='text'
              class='form-control'
              id='streetAddressInput'
              placeholder='00000 Street Name'
            />
          </div>
        </div>
        <div className='p-2 flex-fill'>
          <label for='cityInput' className='order-2 p-2 form-label'>
            City
          </label>
          <div>
            <input
              type='text'
              class='form-control'
              id='cityInput'
              placeholder='City'
            />
          </div>
        </div>
        <div className='p-2 flex-fill'>
          <label for='stateInput' className='order-3 p-2 form-label'>
            State
          </label>
          <div>
            <input
              type='text'
              class='form-control'
              id='stateInput'
              placeholder='State'
            />
          </div>
        </div>{" "}
        <div className='p-2 flex-fill'>
          <label for='zipCodeInput' className='order-4 p-2 form-label'>
            Zip Code
          </label>
          <div>
            <input
              type='text'
              class='form-control'
              id='zipCodeInput'
              placeholder='Zip Code'
            />
          </div>
        </div>
      </div>
      <button type='button' class='btn btn-primary'>
        Register
      </button>
    </form>
  );
}

export default UserRegisterForm;
