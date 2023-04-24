import React from "react"
import { Link, Outlet } from "react-router-dom";
export default function VillagersHome()
{
  const first_name = JSON.parse(localStorage.getItem("loggeduser")).first_name;
  const last_name = JSON.parse(localStorage.getItem("loggeduser")).last_name;
  
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
                <a className="nav-link" href="/VillagersHome">Home <span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="BrowseSchemes">BrowseSchemes</a> */}
                <Link to="BrowseSchemes" class="nav-link active" >BrowseSchemes </Link>

              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="Register_problem">Register Problem</a> */}
                <Link to="Register_problem" class="nav-link active" >Register Problem</Link>
              </li>

              <li className="nav-item">
                {/* <a className="nav-link" href="/Viewproblems">View Problems</a> */}
                <Link to="Viewproblems" class="nav-link active" >View Problems </Link>
              </li> 

              <li className="nav-item">
                <a className="nav-link" href="/logout">LogOut</a>
              </li>




            </ul>

          </div>


        </nav>
        <div>
            <h1>Villagers Dashboard</h1>
             {/* <h1>Welcome {user && user.first_name}{user && user.last_name}</h1>  */}
             <h1>Welcome {first_name}  {last_name}</h1> 
             </div>
             <Outlet></Outlet>

        </div>
    )
}