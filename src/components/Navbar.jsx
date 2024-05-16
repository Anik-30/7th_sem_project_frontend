import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import toast from 'react-hot-toast'
import "../style/navbar.css";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("auth"));
  console.log(user);

  const userName = user && user.user && user.user.firstname;
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    toast.success("Logged out")
    navigate('/');
  }

  const goToDashboard = () =>{
    navigate('/dashboard')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">
            <span>Vata</span>varan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            { localStorage.getItem("auth") ? (
          <div className="nav2">
            <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mlflow">
                    MLFlow
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/news">
                    News
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
            </ul>
            
            <ul className="navbar-nav user">
              <li className="nav-item dropdown">
                <NavDropdown title={userName} align="end">
                  <NavDropdown.Item onClick={goToDashboard}>DashBoard</NavDropdown.Item>
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
              </li>
            </ul>
          </div>
            ) : (
              <div className="nav2">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              </div>
            )}
            
          </div>
        </div>
      
      </nav>
       
    </div>
  );
};

export default Navbar;
