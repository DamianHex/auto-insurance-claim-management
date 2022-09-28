import React, {useState} from "react";
import API from "../utils/API";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";


function UserProfileForm () {

  // const [user, setUser] = useState({
  //   userId: 0,
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   streetAddress: "",
  //   city: "",
  //   state: "",
  //   zip: "",
  // });

    const user = useAuth0();
    console.log(user.user)
    const { sub, email, given_name, family_name } = user.user;

    const [currentUser, setCurrentUser] = useState({})


    const [formObject, setFormObject] = useState({});

    const textUpdate = (e) => {
      const { name, value } = e.target;
      setFormObject({ ...formObject, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      API.createUser({
        gid: sub,
        firstName: formObject.firstName,
        lastName: formObject.lastName,
        email: email,
        streetAddress: formObject.streetAddress,
        city: formObject.city,
        state: formObject.state,
        zip: formObject.zip,
      }).then(res => setCurrentUser(res))
    }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>User Profile From</h2>
      <div className='card m-5' id='cardBox'>
        <form className='container' onSubmit={handleSubmit}>
          <p id='cardTitle'>
            Complete your profile by filling in the customer information below
          </p>
          {/* just for testing  */}
           
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
                defaultValue={family_name}
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
            <button className='btn btn-primary'>Submit Claim</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withAuthenticationRequired(UserProfileForm, {
  onRedirecting: () => <Loading />,
});