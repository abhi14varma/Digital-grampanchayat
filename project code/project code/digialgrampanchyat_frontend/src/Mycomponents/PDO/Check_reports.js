import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import "./style.css";
export default function Check_reports() {


    const [ReportStatus,setReportStatus] = useState([]);

      const first_name = JSON.parse(localStorage.getItem("loggedpdo")).first_name;
      const last_name = JSON.parse(localStorage.getItem("loggedpdo")).last_name;

    // var Browsesch= (u) => {
    //     u.preventDefault();
       
    useEffect(()=>{
        fetch('http://localhost:8080/viewReports')
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
                setReportStatus(obj);
          })
          .catch((Error) =>
            alert("server problem ! sever is down")
          );
        
        
    },[]);

    var approveReport = (u) => {
        fetch('http://localhost:8080/approveReport?id='+u)
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
    
      var declineReport = (d) => {
        fetch('http://localhost:8080/declineReport?id='+d)
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
      <h3><i>Reports</i></h3>  
        <form>
          <div className="input-container">
            
            <table className="table">
                <thead>
                    <tr>
                        <th scope="co1">firstname</th>
                        <th scope="co1">lastname</th>
                        <th scope="co1">work description</th>
                        {/* <th scope="co1">Start Date</th>
                        <th scope="co1">End Date</th> */}
                       
                    </tr>
                </thead>
                <tbody>
                    {ReportStatus.map((e) => {
                        return(
                            <tr>
                                <td>{e.fname}</td>
                                <td>{e.lname}</td>
                                <td>{e.work_desc}</td>
                                <button  className="btn btn-outline-primary btn-rounded" onClick={()=>{approveReport(e.id)}} >Approve</button>
                                <button  className="btn btn-outline-danger btn-rounded" onClick={()=>{declineReport(e.id)}} >Decline</button>
                                
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
