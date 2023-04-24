import React, { useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from './slice';

import "./style.css";

function Userlogin() {
  
  const init = {
    username: '',
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
  const reduxAction = useDispatch();


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


    fetch('http://localhost:8080/checkLogin', options)
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
        
        if(Object.keys(obj).length === 0)
        {
          setMsg("Invalid username/password")
        }
        else
        {
          reduxAction(login());
          
          if(obj.ut.type === 1)
          {
            localStorage.setItem("loggeduser",JSON.stringify(obj));
            navigate("/VillagersHome");
          }
          else if(obj.ut.type === 2)
          {
            localStorage.setItem("loggedgram",JSON.stringify(obj));
            navigate("/GramSevakHome");
          }
          else if(obj.ut.type === 3)
          {
            localStorage.setItem("loggedpdo",JSON.stringify(obj));
            navigate("/PDOHome");
          }
        }
      })
     
  };
  
  return(
    <div>
  <div className="form-container">
    
    <div className="login-form" >
      <div className="form">
      <h3>Login Form</h3>
        <form>
          <div className="input-container">
            <input type="text" name="username" value={user.username} required placeholder="Username"
            onChange={(u) => {
              dispatch({
                type: 'logincheck',
                field: u.target.name,
                val: u.target.value,
              });
            }} />
          </div>
          <div className="input-container">
            <input type="password" name="password" value={user.password} required placeholder="Password"
            onChange={(u) => {
              dispatch({
                type: 'logincheck',
                field: u.target.name,
                val: u.target.value,
              });
            }} />
          </div>
          <div className="button-container">
            <input type="submit"
            onClick={(u) => {
              logincheck(u);
            }}/>
          </div>
        </form>
        <p>{msg}</p>
        
      </div>
      </div>
     
      </div>
     
      </div>
    );
  }


export default Userlogin;

