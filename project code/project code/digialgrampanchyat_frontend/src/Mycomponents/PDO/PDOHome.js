import React from "react"

import { Link, Outlet } from "react-router-dom";

export default function PDOHome()
{
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={process.env.PUBLIC_URL + "logodg.png"} height="100" /> <br />
      <a className="navbar-brand" href="#">  Digital Grampanchayat </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
            <a className="nav-link" href="/App">Home <span className="sr-only"></span></a>
          </li> */}
        
        <li className="nav-item active">
            <a className="nav-link" href="/Home">Home <span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/Check_reports">Check reports</a> */}
            <Link to="Check_reports" class="nav-link active" >Check reports</Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" href="/Upload_Scheme">Upload Schemes</a>
             */}
             <Link to="Upload_Scheme" class="nav-link active" >Upload Schemes </Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" href="/Browse_scheme">show Schemes</a> */}
            <Link to="Browse_scheme" class="nav-link active" >show Schemes </Link>
          </li> 

          <li className="nav-item">
            <a className="nav-link" href="/logout">LogOut</a>
          </li>




        </ul>

      </div>

      </nav>
        <div>
            <h1 className="">PDO Dashboard</h1>
            </div>
            <Outlet></Outlet>
        </div>
    )
}