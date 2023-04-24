import React, { useEffect } from 'react'
import { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./style.css";

export default function Register() {

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
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        contact_no: '',
        aadharcard_no: '',
        username: '',
        type: '',
        password: ''
      };

      var reducer = (state, action) => {
        switch (action.type) {
          case 'logincheck':
            return { ...state, [action.field]: action.val };
        }
      };



      const [user, dispatch] = useReducer(reducer, init);
      const [msg,setMsg] = useState("");


      const navigate=useNavigate();
    
      var logincheck = (u) => {
        u.preventDefault();
        const options = {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(user),
        };
        fetch('http://localhost:8080/register', options)
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
                navigate("/Userlogin");
              
          })
         
      };

    
    return (
        <div >
             <div className="form-container">
            <div className="login-form">
             <div className="form">
             
            <h1><i> Registration Form</i></h1>
            <br/>
            <form   >
            <div className="input-container">
                <table>
                    <tr><td> <label>First Name : </label> </td><td>
            <input type="text" placeholder=" Enter First name" name="first_name" value={user.firstname} 
            
            onChange={(u) => {
                dispatch({
                  type: 'logincheck',
                  field: u.target.name,
                  val: u.target.value,
                });}}
            required
            /><br/></td></tr>
            
            <tr><td> <label>Last Name : </label></td><td>
            <input type="text" placeholder="Enter Lastname" name="last_name" value={user.lastname} 
             onChange={(u) => {
                dispatch({
                  type: 'logincheck',
                  field: u.target.name,
                  val: u.target.value,
                });}}

            required/><br/></td></tr>

            <tr><td> <label>Email : </label></td><td>   
            <input type="email" placeholder="Enter email" name="email" value={user.email} 
            
            onChange={(u) => {
                dispatch({
                  type: 'logincheck',
                  field: u.target.name,
                  val: u.target.value,
                });}}
            required/><br/> </td></tr>
           
            <tr><td><label>Address : </label></td><td>
            <input type="text" placeholder="Enter Address" name="address" value={user.address} 
             onChange={(u) => {
                dispatch({
                  type: 'logincheck',
                  field: u.target.name,
                  val: u.target.value,
                });}}
            required/><br/></td></tr>

            <tr><td><label>Contact : </label></td><td>
            <input type="number" placeholder="Enter Contact" name="contact_no" value={user.contact} 
            
            onChange={(u) => {
                dispatch({
                  type: 'logincheck',
                  field: u.target.name,
                  val: u.target.value,
                });}}
            required/><br/></td></tr>

            <tr><td> <label>Adhar : </label></td><td>
            <input type="number" placeholder="Enter Adhar" name="aadharcard_no" value={user.adhar}
            
            onChange={(u) => {
                dispatch({
                  type: 'logincheck',
                  field: u.target.name,
                  val: u.target.value,
                });}}
            required/><br/></td></tr>

            <tr><td> <label>Username : </label></td><td>   
            <input type="text" placeholder="Enter Username" name="username" value={user.username} 
            
            onChange={(u) => {
                dispatch({
                  type: 'logincheck',
                  field: u.target.name,
                  val: u.target.value,
                });}}
            required/><br/></td></tr>


           
             <tr><td>  <label>Type : </label></td><td>
            <select id="type" name="type" value={user.type}
            
            onChange={(u) => {
                dispatch({
                  type: 'logincheck',
                  field: u.target.name,
                  val: u.target.value,
                });}}>
                <option defaultValue={''}>choose..</option>
               
            </select></td></tr> 

            <tr><td> <label>Password : </label></td><td>   
            <input type="password" placeholder="Enter Password" name="password" value={user.password}
             onChange={(u) => {
                dispatch({
                  type: 'logincheck',
                  field: u.target.name,
                  val: u.target.value,
                });}}
            required/> <br/>  </td></tr>


            <button type="submit"
            onClick={(u) => {
                logincheck(u);
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