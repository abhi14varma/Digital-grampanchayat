import logo from './logo.svg';
import './App.css';
import Userlogin from './Mycomponents/Userlogin';
import Register from './Mycomponents/Register';
import Register_problem from './Mycomponents/Villagers/Register_problems';
import BrowseSchemes from './Mycomponents/Villagers/BrowseSchemes';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import VillagersHome from './Mycomponents/Villagers/VillagersHome';
import Viewproblems from './Mycomponents/Villagers/Viewproblems';
import GramSevakHome from './Mycomponents/GramSevak/GramSevakHome';
import Problem_approval from './Mycomponents/GramSevak/Problem_approval';
import Upload_scheme from './Mycomponents/GramSevak/Upload_scheme';
import Browse_Schemes from './Mycomponents/GramSevak/Browse_Schemes';
import Remove_scheme from './Mycomponents/GramSevak/Remove_scheme';
import Report_Register from './Mycomponents/GramSevak/Report_Register';
import PDOHome from './Mycomponents/PDO/PDOHome';
import Check_reports from './Mycomponents/PDO/Check_reports';
import Browse_scheme from './Mycomponents/PDO/Browse_scheme';
import Home from './Mycomponents/Home';
import LogOutComp from './Mycomponents/LogOutComp';
import Aboutus from './Mycomponents/Aboutus';
import Contact from './Mycomponents/Contact';



function App() {

  const mystate = useSelector((state) => state.logged);

  return (
    <div className="App" >


      <div style={{ display: mystate.loggedIn ? "none" : "block" }}>



        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src={process.env.PUBLIC_URL + "logodg.png"} height="100" /> <br />
          <a className="navbar-brand" href="/Home">  Digital Grampanchayat </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/Home">Home <span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Userlogin">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Register">Register</a>
              </li>


              <li className="nav-item">
                <a className="nav-link" href="/Aboutus">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">Contact</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/BrowseSchemes">BrowseSchemes</a>
              </li> */}


              {/* <li className="nav-item">
                <a className="nav-link" href="/GramSevakHome ">GramSevak</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/PDOHome">PDO</a>
              </li>  */}




            </ul>

          </div>


        </nav>
        {/* <img src={process.env.PUBLIC_URL+"digital_grampanchayat.png"} height="700" width=" 1500"/> <br/> */}

        {/* <Userlogin/> */}
        {/* <Register/> */}
        {/* <Register_problem/> */}


        <div >
          {/* <h1 class="caption-heading mb-5">Rural Development with Smart Technology</h1> */}
          {/* <img src={process.env.PUBLIC_URL+"digital_grampanchayat.png"} height="700" width=" 1500"/> <br/> */}

        </div>
      </div>
      <Routes>
        
        {/* Routes for vilagers home */}
        <Route path="/VillagersHome" element={<VillagersHome />}>

          {/* <Route exact path="Browse_Schemes" element={<Browse_Schemes />}></Route> */}
          <Route path="BrowseSchemes" element={<BrowseSchemes />}></Route>
          <Route path="Register_problem" element={<Register_problem />}></Route>
          <Route path="Viewproblems" element={<Viewproblems />}></Route>

        </Route>
  {/* Routes for Gramsevak home */}
        <Route exact path= "/GramSevakHome" element={<GramSevakHome/>}>
        <Route exact path= "Problem_approval" element={<Problem_approval/>}></Route>
        <Route exact path="Upload_scheme" element={<Upload_scheme/>}></Route>
        <Route exact path= "Browse_Schemes" element={<Browse_Schemes/>}></Route>
        <Route exact path= "Remove_scheme" element={<Remove_scheme/>}></Route>
        <Route exact path= "Report_Register" element={<Report_Register/>}></Route>


        </Route>
  {/* Routes for PDO home */}
        <Route exact path= "/PDOHome" element={<PDOHome/>}>
        <Route exact path= "Check_reports" element={<Check_reports/>}></Route>
        <Route exact path= "Browse_scheme" element={<Browse_scheme/>}></Route>
        <Route exact path="Upload_scheme" element={<Upload_scheme/>}></Route>

        </Route>


{/* Routes for Main page home */}
        <Route exact path= "/Userlogin" element={<Userlogin/>}></Route>
      <Route exact path= "/Register" element={<Register/>}></Route>
      <Route exact path= "/Contact" element={<Contact/>}></Route>
      <Route exact path= "/Aboutus" element={<Aboutus/>}></Route>
      
      <Route exact path= "/logout" element={<LogOutComp/>}></Route>
      <Route exact path= "/Home" element={<Home/>}></Route>

      </Routes>
    </div>


  );
}

export default App;
