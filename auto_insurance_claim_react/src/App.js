import React from "react";
import './App.css';
import Header from './components/Header/index';
import NavTabs from './components/Navtabs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegisterForm from './pages/UserRegisterForm';
import ClaimSubmissionForm from './pages/ClaimSubmissionForm';
import Homepage from './pages/Homepage';
import Test from "./pages/Test";


function App() {

  return (

      <div>
        <Header />
        <NavTabs />
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path='/register' element={<UserRegisterForm/>} />
          <Route path='/claim' element={<ClaimSubmissionForm/>}/>
          <Route path='/test' element={<Test/>} />
      {/* <Route path='/contact' component={Contact} /> */}
        </Routes>
      </div>

  );
}

export default App;
