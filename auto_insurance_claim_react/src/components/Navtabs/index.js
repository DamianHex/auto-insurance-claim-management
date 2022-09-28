import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function NavTabs() {
  const location = useLocation();
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  return (
    <div>
      <ul className='nav nav-tabs'>
        {/* <li className='nav-item'> */}

        <NavLink
          to='/'
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </NavLink>
        {/* </li>
      <li className='nav-item'> */}
        {/* <NavLink
          to='/login'
          className={
            location.pathname === "/login" ? "nav-link active" : "nav-link"
          }
        >
          Login
        </NavLink> */}
        {/* </li>
      <li className='nav-item'> */}
        <NavLink
          to='/register'
          className={
            location.pathname === "/register" ? "nav-link active" : "nav-link"
          }
        >
          Profile
        </NavLink>
        {/* </li>
      <li className='nav-item'> */}
        <NavLink
          to='/claim'
          className={
            location.pathname === "/claim" ? "nav-link active" : "nav-link"
          }
        >
          Claims
        </NavLink>
        {/* </li>
      <li> */}
        <NavLink
          to='/test'
          className={
            location.pathname === "/test" ? "nav-link active" : "nav-link"
          }
        >
          Test
        </NavLink>
        {/* </li> */}
        {!isLoading && !user && (
          <button
            className='btn btn-primary btn-block'
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        )}
        {!isLoading && user && (
          <button
            className='btn btn-primary btn-block'
            onClick={() => logout()}
          >
            Log Out
          </button>
        )}
      </ul>
    </div>
  );
}

export default NavTabs;
