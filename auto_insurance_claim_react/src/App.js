import './App.css';
import Header from './components/Header/index';
import NavTabs from './pages/NavTabs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegisterForm from './pages/UserRegisterForm';
import ClaimSubmissionForm from './pages/ClaimSubmissionForm';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <NavTabs />
        <Routes>
          <Route exact path="/" element={Homepage} />
          <Route exact path='/register' element={UserRegisterForm} />
          <Route exact path='/claim' element={ClaimSubmissionForm} />
      {/* <Route path='/contact' component={Contact} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
