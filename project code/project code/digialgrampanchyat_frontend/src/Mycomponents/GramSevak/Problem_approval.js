import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./style.css";
export default function Problem_approval() {


    const [problemStatus,setProblemStatus] = useState([]);

      const first_name = JSON.parse(localStorage.getItem("loggedgram")).first_name;
      const last_name = JSON.parse(localStorage.getItem("loggedgram")).last_name;

    // var Browsesch= (u) => {
    //     u.preventDefault();
       
    useEffect(()=>{
        fetch('http://localhost:8080/viewproblems')
          .then((res) => {
            if(res.ok)
            {
              return res.json();
            }
            else
            {
              throw new Error("server Error")
            }
          })
          .then(obj => {
                console.log(obj);
                setProblemStatus(obj);
          })
          .catch((Error) =>
            alert("server problem ! sever is down")
          );
        
        
    },[]);

    var approveScheme = (u) => {
        fetch('http://localhost:8080/approveProblem?pid='+u)
          .then((res) => {
            if(res.ok)
            {
              return res.text();
            }
            else
            {
              throw new Error("server Error")
            }
          })
    
    
          .then(text => text.length ? JSON.parse(text) : {})
          .then(obj => {
                Navigate("/Userlogin");
              
          })
         
      };
    
      var declineScheme = (d) => {
        fetch('http://localhost:8080/declineProblem?pid='+d)
          .then((res) => {
            if(res.ok)
            {
              return res.text();
            }
            else
            {
              throw new Error("server Error")
            }
          })
    
    
          .then(text => text.length ? JSON.parse(text) : {})
          .then(obj => {
                Navigate("/Userlogin");
              
          })
         
      };
    
      
    

    return (
        <div >
           {<h5><strong><i> Welcome {first_name}  {last_name}</i></strong></h5> }
             <div className="form-container">
    
    <div className="login-form">
      <div className="form">
      <h3><i>Government Schemes</i></h3>  
        <form>
          <div className="input-container">
            
            <table className="table">
                <thead>
                    <tr>
                        <th scope="co1">Area</th>
                        <th scope="co1">date</th>
                        <th scope="co1">problem description</th>
                        {/* <th scope="co1">Start Date</th>
                        <th scope="co1">End Date</th> */}
                       
                    </tr>
                </thead>
                <tbody>
                    {problemStatus.map((e) => {
                        return(
                            <tr>
                                <td>{e.area}</td>
                                <td>{e.date}</td>
                                <td>{e.probdesc}</td>
                                <button  className="btn btn-outline-primary btn-rounded" onClick={()=>{approveScheme(e.pid)}} >Approve</button>
                                <button  className="btn btn-outline-danger btn-rounded" onClick={()=>{declineScheme(e.pid)}} >Decline</button>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </form>
        
        
      </div>
      </div>
     
      </div>
     
      </div>
    )
}
