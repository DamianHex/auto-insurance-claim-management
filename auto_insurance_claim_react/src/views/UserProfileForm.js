import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import CustomerInfo from "./CustomerInfo";
import Claims from "../components/Claims";


function UserProfileForm () {

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