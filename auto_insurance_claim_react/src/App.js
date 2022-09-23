import React from "react";
import './App.css';
import Header from './components/Header/index';
import NavTabs from './components/Navtabs';
import { Route, Routes } from "react-router-dom";
import UserRegisterForm from './pages/UserRegisterForm';
import ClaimSubmissionForm from './pages/ClaimSubmissionForm';
import LoginSignup from "./pages/LoginSignup";
import Test from "./pages/Test";
import Homepage from "./pages/Homepage";


function App() {

  return (
    <div>
      <Header />
      <NavTabs />
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/register' element={<UserRegisterForm />} />
        <Route path='/claim' element={<ClaimSubmissionForm />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
