import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import { useAuth0 } from '@auth0/auth0-react';

function CustomerInfo () {
    const user = useAuth0();
    const { sub, email, given_name, family_name } = user.user;


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
            defaultValue={given_name}
            readOnly
          />
        </div>
      </div>
      <div className='row'>
        <label htmlFor='lasttNameInput' className='col-sm-3 col-form-label'>
          Last Name
        </label>
        <div className='col-sm-8'>
          <input
            type='text'
            className='form-control'
            name='lastName'
            id='lasttNameInput'
            defaultValue={family_name}
            readOnly
          />
        </div>
      </div>
      <div className='row'>
        <label htmlFor='GId' className='col-sm-3 col-form-label'>
          GID
        </label>
        <div className='col-sm-8'>
          <input
            type='text'
            className='form-control'
            name='Gid'
            id='Gid'
            defaultValue={sub}
            readOnly
          />
        </div>
      </div>
      {/* just for testing  */}
      <div className='row'>
        <label htmlFor='newEmail' className='col-sm-3 col-form-label'>
          Email
        </label>
        <div className='col-sm-8'>
          <input
            type='text'
            className='form-control col-sm-4'
            name='email'
            id='newEmail'
            defaultValue={email}
            readOnly
          />
        </div>
      </div>
    </form>
  </div>
);


}

export default withAuthenticationRequired(CustomerInfo, {
  onRedirecting: () => <Loading />,
});