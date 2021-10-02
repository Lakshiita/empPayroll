import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Login from './components/login1.js';
import {Button, Table} from '@material-ui/core';
import Emptable from './components/Emptable';
// function App() {
//   return (
//       <div className='App'>
//         <Login/>
//       </div>
//     );
// }
// function App() {
//   return (
//       <div className='App'>
//         {/* <login1 /> */}
//         <Login/>
//       </div>
//     );
// }
const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Manage all the Employees Here</p>
        <h1>Welcome Admin </h1>
        {/* <Login/> */}
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
      <Login/>
        {/* <p>Developed by</p>
        <h1>Ramdeobaba Webdevelopment team</h1> */}
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Add Edit Delete </h1>
      </section>
      <Emptable/>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Contact us</p>
        {/* <h1>Contact Page</h1> */}
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
