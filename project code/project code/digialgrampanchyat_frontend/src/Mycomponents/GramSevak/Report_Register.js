import React, { useEffect } from 'react'
import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./style.css";

export default function Report_Register() {

    useEffect(() =>
        {
            var usertype = document.getElementById('type');

        fetch('http://localhost:8080/getusertypes')
        .then((res) => res.json())
        .then((res) => {
            // console.log(res);
            res.map((v) =>{
                var opt = document.createElement('option')
                // if(opt.type.value === 1)
                // //opt.value=v.type;
                // {
                    opt.textContent= v.user_type;
                    usertype.appendChild(opt);
                // }
                
                
                
            });

        });



    }, []);
        
        

    const init = {
        id: '',
        fname: '',
        lname: '',
        address: '',
        work_desc: '',
        status: '',
        type: '',
        link: ''
      };

      var reducer = (state, action) => {
        switch (action.type) {
          case 'register': 
            return { ...state, [action.field]: action.val };
        }
      };



      const [Register_report, dispatch] = useReducer(reducer, init);
      const [msg,setMsg] = useState("");


      const navigate=useNavigate();
    
      var register = (u) => {
        u.preventDefault();
        const options = {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(Register_report),
        };
        fetch('http://localhost:8080/Report_Register', options)
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
              window.alert("report send");
                //navigate("/Userlogin");
                navigate("/GramSevakHome");
              
          })
         
      };

    
    return (
        <div >
             <div className="form-container">
            <div className="login-form">
             <div className="form">
             
            <h1><i> Register Report</i></h1>
            <br/>
            <form   >
            <div className="input-container">
                <table>
                    <tr><td> <label>First Name : </label> </td><td>
            <input type="text" placeholder=" Enter First name" name="fname" value={Register_report.firstname} 
            
            onChange={(u) => {
                dispatch({
                  type: 'register',
                  field: u.target.name,
                  val: u.target.value,
                });}}
            required
            /><br/></td></tr>
            
            <tr><td> <label>Last Name : </label></td><td>
            <input type="text" placeholder="Enter Lastname" name="lname" value={Register_report.lastname} 
             onChange={(u) => {
                dispatch({
                  type: 'register',
                  field: u.target.name,
                  val: u.target.value,
                });}}

            required/><br/></td></tr>

            <tr><td> <label>link : </label></td><td>   
            <input type="text" placeholder="Enter link here " name="link" value={Register_report.link} 
            
            onChange={(u) => {
                dispatch({
                  type: 'register',
                  field: u.target.name,
                  val: u.target.value,
                });}}
            required/><br/> </td></tr>
           
            <tr><td><label>Work description : </label></td><td>
            <input type="text" placeholder="Enter work description" name="work_desc" value={Register_report.wdesc} 
             onChange={(u) => {
                dispatch({
                  type: 'register',
                  field: u.target.name,
                  val: u.target.value,
                });}}
            required/><br/></td></tr>


             {/* <tr><td>  <label>Type : </label></td><td>
            <select id="type" name="type" value={Register_report.type}
            
            onChange={(u) => {
                dispatch({
                  type: 'register',
                  field: u.target.name,
                  val: u.target.value,
                });}}>
                <option defaultValue={''}>choose..</option>
               
            </select></td></tr>  */}

            <button type="submit"
            onClick={(u) => {
                register(u);
              }}
              >Register</button>   
            </table>
            </div>
            </form> 

            <p>{msg}</p>
        </div>
        </div>
        </div>
        </div>

    )
}