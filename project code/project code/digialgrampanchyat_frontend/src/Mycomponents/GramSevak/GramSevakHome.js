import React from "react"

import { Link, Outlet } from "react-router-dom";

export default function GramSevakHome()
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
            {/* <a className="nav-link" href="Problem_approval">Problem Status</a> */}
            <Link to="Problem_approval" class="nav-link active" >Problem Status </Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" href="Upload_scheme">Upload Schemes</a> */}
            <Link to="Upload_scheme" class="nav-link active" >Upload Schemes </Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" href="Browse_Schemes">Show Schemes</a> */}
            <Link to="Browse_Schemes" class="nav-link active" >Show Schemes </Link>
          </li> 

          
          <li className="nav-item">
            {/* <a className="nav-link" href="Remove_scheme">Remove Schemes</a> */}
            <Link to="Remove_scheme" class="nav-link active" >Remove Schemes </Link>
          </li> 

          <li className="nav-item">
            {/* <a className="nav-link" href="Report_Register">Register Report</a> */}
            <Link to="Report_Register" class="nav-link active" >Register Report </Link>
          </li> 


          <li className="nav-item">
            <a className="nav-link" href="logout">LogOut</a>
          </li>




        </ul>

      </div>


    </nav>
    <div>
        <h1>GramSevak Dashboard</h1>
        <Outlet></Outlet>
        </div>
         {/* <h1>Welcome {user && user.first_name}{user && user.last_name}</h1>  */}
     {/* <h1>Welcome {first_name}  {last_name}</h1>  */}
        
    </div>
    )
}