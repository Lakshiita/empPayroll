import React from "react";
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
// const Home = () => {
//   return (
//     <>
//       <NavbarEmp />
//       <section className="hero-section">
//         <p>Manage all the Employees Here</p>
//         <h1>Welcome Employee </h1>
//       </section>
//     </>
//   );
// };
// const Schedule = () => {
//   return (
//     <>
//       <NavbarEmp />
//       <section className="hero-section">
//      <Emp_OwnSch/>
//       </section>
//     </>
//   );
// };
// const Attendance = () => {
//   return (
//     <>
//       <NavbarEmp />
//       <section className="hero-section">
//       <EmpAtten/>
//       </section>
//     </>
//   );
// };
// const Editprofile = () => {
//   return (
//     <>
//       <NavbarEmp />
//       <section className="hero-section">
//       <Emp_Prof/>
//       </section>
//     </>
//   );
// };
// const Salary = () => {
//   return (
//     <>
//       <NavbarEmp />
//       <section className="hero-section">
//       <EmpSalary/>
//       </section>
//     </>
//   );
// };
// const Logout = () => {
//   return (
//     <>
//       <NavbarEmp />
//       <section className="hero-section">
//         <h1>Logout</h1>
//       </section>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Provider store={store}>
//       <ReactReduxFirebaseProvider {...rrfProps}>
//         <BrowserRouter>
//       <Switch>
      
//       <Route exact path="/">
//         <Home />
//       </Route>
      
//       <Route path="/schedule">
//         <Schedule />
//       </Route>

//       <Route path="/salary">
//         <Salary/>
//       </Route>

//       <Route path="/editprofile">
//         <Editprofile/>
//       </Route>

//       <Route path="/attendance">
//         <Attendance />
//       </Route>
//       <Route path="/logout">
//         <Logout />
//       </Route>

//     </Switch>
//     </BrowserRouter>
//       </ReactReduxFirebaseProvider>
//     </Provider>
//   );
// };

//===================================================================================
//Admin section
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Manage all the Employees Here</p>
        <h1>Welcome Admin bye </h1>
        {/* <Login/> */}
      </section>
    </>
  );
};

const Leaves = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
      <Leaves1 />
      </section>
    </>
  );
};

const Schedule = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <EmpSch />
      </section>
    </>
  );
};

const Edit = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <EmpEdit />
      </section>
    </>
  );
};

const Salary = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <Salary1/>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
      <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>
      
      <Route path="/schedule">
        <Schedule />
      </Route>

      <Route path="/salary">
        <Salary/>
      </Route>

      <Route path="/leave">
        <Leaves/>
      </Route>

      <Route path="/edit">
        <Edit />
      </Route>

    </Switch>
    </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
