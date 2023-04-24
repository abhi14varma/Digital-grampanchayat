import React, { useEffect, useState } from "react";
import "./style.css";
export default function Browse_Schemes() {


    const [browseschemes,setbrowseschemes] = useState([]);

      const first_name = JSON.parse(localStorage.getItem("loggedgram")).first_name;
      const last_name = JSON.parse(localStorage.getItem("loggedgram")).last_name;

    // var Browsesch= (u) => {
    //     u.preventDefault();
       
    useEffect(()=>{
        fetch('http://localhost:8080/getschemes')
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
            setbrowseschemes(obj);
          })
          .catch((Error) =>
            alert("server problem ! sever is down")
          );
        
        
    },[]);
    
        

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
                        <th scope="co1">Scheme Name</th>
                        <th scope="co1">Scheme Description</th>
                        <th scope="co1">Link</th>
                        <th scope="co1">Start Date</th>
                        <th scope="co1">End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {browseschemes.map((e) => {
                        return(
                            <tr>
                                <td>{e.sname}</td>
                                <td>{e.description}</td>
                                <td><a href={e.link} target="_blank">{e.sname} Link</a></td>
                                <td>{e.startdate}</td>
                                <td>{e.enddate}</td>
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
