import React, { useState, Fragment } from "react";
import "../empTAB.css";
import { useFirestoreConnect,useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
const App = () => {
  const sal= useSelector(state=>state.firestore.ordered.Salary);
  const emp= useSelector(state=>state.firestore.ordered.Emp_Details);
  const firestore=useFirestore();
  let knt=0;
  useFirestoreConnect([
    {
      collection:"Salary",
    },
  ]);
  useFirestoreConnect([
    {
      collection:"Emp_Details",
    },
  ]);
  
  if(!emp || !sal)
    return <h3>loading..</h3>
    var designation;
    emp.forEach(element => {
      if(element.UserID===localStorage.getItem("Email"))
          designation=element.Designation;
    });
    var salary;
    sal.forEach(e=>{
      if(e.Designation.toUpperCase()===designation.toUpperCase())
        salary=e.salary;
    })
    console.log(salary);
  return (
    <div className="container">
      <h1>YOUR SALARY</h1><h1>{salary}</h1>

    </div>
  );
};

export default App;