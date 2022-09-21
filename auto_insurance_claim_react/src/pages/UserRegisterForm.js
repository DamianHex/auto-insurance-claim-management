import React, {useState, useEffect} from "react";
import API from "../utils/API";
// import API from "../utils/API"

function UserRegisterForm () {

  const [user, setUser] = useState({
    userId: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
  });

    const [formObject, setFormObject] = useState({});

    const textUpdate = (e) => {
      const { name, value } = e.target;
      setFormObject({ ...formObject, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      API.createUser({
        firstName: formObject.firstName,
        lastName: formObject.lastName,
        email: formObject.email,
        password: formObject.password,
        streetAddress: formObject.streetAddress,
        city: formObject.city,
        state: formObject.state,
        zip: formObject.zip,
      });
    }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>User Registration From</h2>
      <div className='card m-5' id='cardBox'>
        <form className='container' onSubmit={handleSubmit}>
          <p id='cardTitle'>Set your login credentials</p>

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
                placeholder={"email@example.com"}
                onChange={textUpdate}
              />
            </div>
          </div>
          <div className='row'>
            <label
              htmlFor='newInputPassword'
              className='col-sm-3 col-form-label'
            >
              Password
            </label>
            <div className='col-sm-8'>
              <input
                type='password'
                className='form-control col-sm-4'
                name='password'
                id='newInputPassword'
                onChange={textUpdate}
              />
            </div>
          </div>

          <hr></hr>
          <p id='cardTitle'>Customer Information</p>
          <div className='row'>
            <label htmlFor='firstNameInput' className='col-sm-3 col-form-label'>
              Frist Name
            </label>
            <div className='col-sm-8'>
              <input
                type='text'
                className='form-control'
                name='firstName'
                id='firstNameInput'
                placeholder='First Name'
                onChange={textUpdate}
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
                placeholder='Last Name'
                onChange={textUpdate}
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
                  placeholder='00000 Street Name'
                  onChange={textUpdate}
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
                  placeholder='Zip Code'
                  onChange={textUpdate}
                />
              </div>
            </div>
          </div>
          <div style={{ margin: "15px" }}>
            <button className='btn btn-primary'>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegisterForm;