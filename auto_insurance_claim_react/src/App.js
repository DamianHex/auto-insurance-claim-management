import React from "react";
import "./App.css";
import Header from "./components/Header/index";
import NavTabs from "./components/Navtabs";
import { Route, Routes } from "react-router-dom";
import UserProfileForm from "./views/UserProfileForm";
import ClaimSubmissionForm from "./views/ClaimSubmissionForm";
import LoginSignup from "./views/LoginSignup";
import Test from "./views/Test";
import Homepage from "./views/Homepage";
import Auth0ProviderWithHistory from "./auth0Provider";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Auth0ProviderWithHistory>
        <Header />
        <NavTabs />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/profile' element={<UserProfileForm />} />
          <Route path='/claim' element={<ClaimSubmissionForm />} />
        </Routes>
      </Auth0ProviderWithHistory>
    </div>
  );
};

export default App;
