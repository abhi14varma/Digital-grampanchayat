import { useEffect ,useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Remove_scheme(){

    const[schemes,removescheme]=useState([]);

    useEffect(()=>{

        fetch("http://localhost:8080/getschemes")
        .then(resp=>resp.json())                                //resp.json - this will return an object from json response
        .then((obj)=>{

            removescheme(obj);

        })       
    },[])

    const navigate=useNavigate();
    // const setStorage=(e)=>{

    //     localStorage.setItem("viewId",e);
        
    // }

    const deleteScheme=(s,e)=>{
      s.preventDefault();
        fetch(`http://localhost:8080/deleteBysid?sid=${e}`)
        .then(resp=>resp.json())
        .then(obj=>  {    if(obj===true)
                        {
                            alert("Scheme removed...");
                        }
         navigate("/Remove_scheme");
        })
    }

    

    return(
        <div>
            <h3>Schemes</h3>

            <form>
                <table className="table table-striped">
                    <thead>
                        <th>sid</th>
                        <th>sname</th>
                        <th>description</th>
                        <th>link </th>
                        <th>startdate </th>
                        <th>enddate </th>
                    </thead>
                    <tbody>
                    {   
                        schemes.map((e)=>{
                            return <tr>
                                <td>{e.sid}</td>
                                <td>{e.sname}</td>
                                <td>{e.description}</td>
                                <td><a href={e.link} target="_blank">{e.sname} Link</a></td>
                                <td>{e.startdate}</td>
                                <td>{e.enddate}</td>
                                        <td>
                                            {/* <button type="submit" className="btn btn-primary btn-lg ms-2" onMouseDown={()=>{setStorage(e1.sname)}}
                                                                                      onMouseUp={()=>{navigate("/GramSevak/Browse_Schemes")}}>View Info</button> */}
                                            <button  className="btn btn-primary btn-lg ms-2" onClick={(s)=>{deleteScheme(s,e.sid)}} >Remove</button>
                                        </td>
                                </tr>
                        })  
                    }
                    </tbody>
                </table>
             </form>
        </div>
    )
}