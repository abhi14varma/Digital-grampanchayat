import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Userlogin from './Mycomponents/Userlogin';
import Register from './Mycomponents/Register';
import VillagersHome from './Mycomponents/Villagers/VillagersHome';
import Contact from './Mycomponents/Contact';
import Aboutus from './Mycomponents/Aboutus';
import BrowseSchemes from './Mycomponents/Villagers/BrowseSchemes';
import store from './Mycomponents/store';
import { Provider } from 'react-redux';
import Register_problem from './Mycomponents/Villagers/Register_problems';
import LogOutComp from './Mycomponents/LogOutComp';
import Home from './Mycomponents/Home';
import PDOHome from './Mycomponents/PDO/PDOHome';
import GramSevakHome from './Mycomponents/GramSevak/GramSevakHome';
import Viewproblems from './Mycomponents/Villagers/Viewproblems';
import Upload_scheme from './Mycomponents/GramSevak/Upload_scheme';
import Browse_Schemes from './Mycomponents/GramSevak/Browse_Schemes';
import Browse_scheme from './Mycomponents/PDO/Browse_scheme';
import Remove_scheme from './Mycomponents/GramSevak/Remove_scheme';
import Problem_approval from './Mycomponents/GramSevak/Problem_approval';
import Report_Register from './Mycomponents/GramSevak/Report_Register';
import Check_reports from './Mycomponents/PDO/Check_reports';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
  {/* <React.StrictMode> */}
  <BrowserRouter>
    <App />
    <Routes>
      {/* <Route path= "/VillagersHome" element={<VillagersHome/>}> */}

      {/* <Route exact path= "Browse_Schemes" element={<Browse_Schemes/>}></Route> */}
      {/* <Route path= "BrowseSchemes" element={<BrowseSchemes/>}></Route> */}
      {/* <Route path= "Register_problem" element={<Register_problem/>}></Route> */}

      {/* </Route> */}
      {/* <Route exact path= "/Viewproblems" element={<Viewproblems/>}></Route> */}
      {/* <Route exact path= "/Userlogin" element={<Userlogin/>}></Route> */}
      {/* <Route exact path= "/Register" element={<Register/>}></Route> */}
      {/* <Route exact path= "/Contact" element={<Contact/>}></Route> */}
      {/* <Route exact path= "/Aboutus" element={<Aboutus/>}></Route> */}
      {/* <Route exact path= "/App" element={<App/>}></Route> */}
      {/* <Route exact path= "/Register_problem" element={<Register_problem/>}></Route> */}
      {/* <Route exact path= "/logout" element={<LogOutComp/>}></Route> */}
      {/* <Route exact path= "/Home" element={<Home/>}></Route> */}
      {/* <Route exact path= "/GramSevakHome" element={<GramSevakHome/>}></Route> */}
      {/* <Route exact path= "/PDOHome" element={<PDOHome/>}></Route> */}
      {/* <Route exact path="/Upload_scheme" element={<Upload_scheme/>}></Route> */}
      {/* <Route exact path= "/Browse_Schemes" element={<Browse_Schemes/>}></Route> */}
      {/* <Route exact path= "/Browse_scheme" element={<Browse_scheme/>}></Route> */}
      {/* <Route exact path= "/Remove_scheme" element={<Remove_scheme/>}></Route> */}
      {/* <Route exact path= "/Problem_approval" element={<Problem_approval/>}></Route> */}
      {/* <Route exact path= "/Report_Register" element={<Report_Register/>}></Route> */}
      {/* <Route exact path= "/Check_reports" element={<Check_reports/>}></Route> */}
      
      
    </Routes>
  </BrowserRouter>
  {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
