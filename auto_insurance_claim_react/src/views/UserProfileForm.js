import React, {useState} from "react";
import API from "../utils/API";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import CustomerInfo from "./CustomerInfo";
import Claims from "../components/Claims";


function UserProfileForm () {

    const user = useAuth0();
    const { sub, email, given_name, family_name } = user.user;

    const [currentUser, setCurrentUser] = useState({})




  return (
    <div style={{ textAlign: "center" }}>
      <h2>User Profile From</h2>
     <CustomerInfo />
     <Claims />
    </div>
  );
}

export default withAuthenticationRequired(UserProfileForm, {
  onRedirecting: () => <Loading />,
});