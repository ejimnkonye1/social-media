import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMoon, faSun, faUser,faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../Theme'; // Import the useTheme hook
import Sidebar from "./Sidebar";

function Header() {
  const { darkMode, toggleDarkMode } = useTheme(); // Use the useTheme hook to access darkMode and toggleDarkMode

  // ... (the rest of your Header component)

  return (
    <div>
      <nav className={`navbar  navbar-expand-lg position-static" border-bottom ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
        <div className="container-fluid ">
          
          <a className="navbar-brand">Billieconnect</a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#"><FontAwesomeIcon icon={faHome} /> </a>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={toggleDarkMode}>
                  <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </button>
              </li>
              <div className="container-fluid">
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </ul>
          </div>
          <div className="">
            <ul className="navbar-nav mr-3">
                <li className="nav-item">
               <a className="nav-link"> <FontAwesomeIcon icon={faUser} size="lg" /></a>
                </li>
                <li className="nav-item">
                <li className="nav-item">
                <a className="nav-link">   <FontAwesomeIcon icon={faEnvelope} size="lg" /></a>
                </li>
                </li>
                <li className="nav-item">
                <a className="nav-link">     <FontAwesomeIcon icon={faBell} size="lg" /></a>
                </li>
            </ul >
          </div>
        </div>
   
      </nav>
      
    </div >
  );
}

export default Header;
