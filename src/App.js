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
import './login.css';
import EmpDashboard from './EmpDash';
import { useFirestoreConnect,useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import AdminDashboard from './AdminDash';
var k=0;

function LoginForm({ Login, error }) {
  
  const [details, setDetails] = useState({ type: "Admin", email: "", password: "" });

  const submitHandler = e => {
      e.preventDefault();

      Login(details);
  }

  return (
    <div class="login">
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
      </div>
  )
}


const  App = () =>{
  const emp= useSelector(state=>state.firestore.ordered.Credentials);
  const att= useSelector(state=>state.firestore.ordered.Attendence)
  const firestore=useFirestore();
  useFirestoreConnect([
    {
      collection:"Credentials",
    },
  ]);
  useFirestoreConnect([
    {
      collection:"Attendence",
    },
  ]);
  
  
  const adminUser = {
    email: "admin@admin.com",
    password: ""
  }

  const [user, setUser] = useState({ type: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    //console.log(details);

      setUser({
        type: details.type,
        email: details.email
      })
      var doc=emp;
      var attnd=att;
      console.log(doc);
      let flag=0;
      doc.forEach(doc1 => {
        if(doc1.UserID===details.email && doc1.password===details.password)
        {
          setUser({
            type: details.type,
            email: details.email
          });
          if(doc1.Role==="Admin"){
            k=1;
          }
          var attf=0;
          var today=new Date();
          var date=today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(today.getDate());
          if(doc1.Role==="Employee"){
            attnd.forEach(e=>{
              if(e.UserID===doc1.UserID && e.Date===date)
              {
                attf=1;
              }
            })
            k=2;
            
          }
          flag=1;
          localStorage.setItem("Email",doc1.UserID);
          console.log(localStorage.getItem("Email"));
          if(attf==0)
          {
            firestore.collection("Attendence").add({"Date":date,"Status":"Present","UserID":localStorage.getItem("Email")});
          }
        }

      });
      if(flag==0)
       { 
        k=0;
        console.log("Details do not match");
        setError("Details do not match");
      }
      
      
    
  }

  const Logout = () => {
    setUser({ type: "", email: "" });
  }

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
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
      </ReactReduxFirebaseProvider>
      </Provider>
  );
}

export default App;
