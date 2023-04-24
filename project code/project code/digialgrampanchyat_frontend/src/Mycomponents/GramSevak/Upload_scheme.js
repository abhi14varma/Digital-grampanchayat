import React, { useState } from 'react';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Upload_scheme() {
const init = {
    sid: '',
    sname: '',
    startdate: '',
    enddate: '',
    description: '',
    link: '',
};

var reducer = (state, action) => {
    switch (action.type) {
        case 'updatescheme': 
            return { ...state, [action.field]: action.val };
    }
};

const [schemes, dispatch] = useReducer(reducer, init);

const navigate = useNavigate();

var updatescheme = (s) => {
    s.preventDefault();
    // userproblem.useridfk=userid;
    
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(schemes),
    };


    fetch('http://localhost:8080/uploadscheme', options)
        .then((res) => {
            if (res.ok) {
                console.log(res);
                return res.text();
            }
            else {
                throw new Error("server Error")
            }
        })


        .then(text => text.length ? JSON.parse(text) : {})
        .then(obj => {
            console.log(obj);
           navigate("/Browse_Schemes");

        })

};
return(
    <div>
        <div className="form-container">

            <div className="login-form">
                <div className="form">
                    <h3>Upload schemes</h3>
                    <form>
                        <div className="input-container">

                            <table >


                                <tr><td> <label>scheme name </label></td><td>
                                    <input type="text" placeholder="Enter scheme" name="sname" value={schemes.sname}
                                        onChange={(s) => {
                                            dispatch({
                                                type: 'updatescheme',
                                                field: s.target.name,
                                                val: s.target.value,
                                            });
                                        }} required /><br /> </td></tr>

                                <tr><td><label>Scheme Description : </label></td><td>
                                    <textarea name="description" form="usrform" placeholder="Enter scheme here..." value={schemes.description}
                                        onChange={(s) => {
                                            dispatch({
                                                type: 'updatescheme',
                                                field: s.target.name,
                                                val: s.target.value,
                                            });
                                        }} required  ></textarea></td></tr>

                              <tr><td><label>link : </label></td><td>
                                    <textarea name="link"  placeholder="put link here" value={schemes.link}
                                        onChange={(s) => {
                                            dispatch({
                                                type: 'updatescheme',
                                                field: s.target.name,
                                                val: s.target.value,
                                            });
                                        }} required  ></textarea></td></tr>

                                <tr><td> <label>Start Date: </label> </td><td>
                                    <input type="date" placeholder=" Enter start Date" name="startdate" value={schemes.startdate}
                                        onChange={(s) => {
                                            dispatch({
                                                type: 'updatescheme',
                                                field: s.target.name,
                                                val: s.target.value,
                                            });
                                        }} required /><br /></td></tr>

                                <tr><td> <label>End Date: </label> </td><td>
                                    <input type="date" placeholder=" Enter End Date" name="enddate" value={schemes.enddate}
                                        onChange={(s) => {
                                            dispatch({
                                                type: 'updatescheme',
                                                field: s.target.name,
                                                val: s.target.value,
                                            });
                                        }} required /><br /></td></tr>

                                <button type="submit"
                                    onClick={(s) => {
                                        updatescheme(s);
                                    }}
                                > update scheme</button>
                            </table>

                        </div>
                    </form>
                </div>
            </div>

        </div>

    </div>

)
}
