import React, { useEffect, useState } from "react";
import { Dashboard } from "../Dashboard";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import './Layout.css';


export function Layout() {

  
  return (
    <>
    <Router>
       <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
/>
    <div className="main-wrapper">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <a href="index.html" className="logo">
            <img src="assets/img/logo.png" width={35} height={35} alt="" />{" "}
            <span>Falcon Heavy</span>
          </a>
        </div>
      </div>
      {/* /Header */}

      {/* Sidebar */}
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="active">
                <Link to="/">Dashboard</Link>
              </li>
              <li >
                <Link to="/about">About</Link>
             
              </li>
          
            </ul>
          </div>
        </div>
      </div>
      {/* /Sidebar */}

      {/* Content */}
      <div className="page-wrapper exchange-wrapper bg-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-12">
            <Routes >
                <Route path="/about">
                  <>about</>
                </Route>
                <Route path="/users">
                  <>users</>

                </Route>
                <Route path="/" element={<Dashboard/>}>
                </Route>
           </Routes >
            
            </div>
          </div>
        </div>
     
      </div>
    </div>
    </Router>
  </>
 );
}
