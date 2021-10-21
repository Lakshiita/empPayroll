import React, { useState } from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/login1.js';
import {Provider} from 'react-redux';
import store,{rrfProps} from './store';
import EmpSalary from "./components/EmpSalary/empSalary";
import EmpAtten from "./components/EmpAttendance/Emp_Atten";
import Emp_Prof from "./components/EditProfile/Emp_profile";
import Emp_OwnSch from "./components/EmpSchedule/EmpOwnSchedule";
// import Emptable1 from './components/EmpEditDelete/Emptable';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import NavbarEmp from "./components/NavbarEmp";
import Salary1 from "./components/Salary/adminSalary";
import EmpSch from "./components/Schedule/EmpSchedule";
import Leaves1 from "./components/EmpLeave/Leave";
import EmpEdit from "./components/EmpEdit/EmpEditDele";
//import LoginForm from './LoginForm';
import EmpDashboard from './EmpDash';
import AdminDashboard from './AdminDash';
var k=0;

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ type: "Admin", email: "", password: "" });

  const submitHandler = e => {
      e.preventDefault();

      Login(details);
  }

  return (
      <form onSubmit={submitHandler}>
          <div className="form-inner">
              <h2>Login</h2>
              {(error !== "") ? (<div className="error">{error}</div>) : ""}

              <div class="select">
              <select name="type" id="type"
              value = {details.type} onChange={e => 
                  setDetails({ ...details, type: e.target.value })}
              >
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
              </select>
              </div>
              <div className="form-group">
                  <label htmlFor="email">Email: </label>
                  <input type="email" name="email" id="email" 
                  onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Password: </label>
                  <input type="password" name="password" id="password" 
                  onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
              </div>
              <input type="submit" value="LOGIN" />
          </div>
      </form>
  )
}


const  App = () =>{
  
  const adminUser = {
    email: "admin@admin.com",
    password: ""
  }

  const [user, setUser] = useState({ type: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      
      setUser({
        type: details.type,
        email: details.email
      });
      if(details.type==="Admin"){
        k=1;
      }
      if(details.type==="Employee"){
        k=2;
      }
    }
    else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  }

  const Logout = () => {
    setUser({ type: "", email: "" });
  }

  return (
    <div>
      {(k===2) ? (
        /*
         <div className="welcome">
          <h2>Welcome , <span></span></h2>
          <h2>You are , <span>{user.type}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div> */
        <>
        <EmpDashboard />
        </>
      ) : (
        // <AdminDashboard/>
        (k===0)?(
        <LoginForm Login={Login} error={error} />):
        (
          <>
          <AdminDashboard/>
          </>
        )
        
      )}
    </div>
  );
}

export default App;
