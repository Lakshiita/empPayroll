import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/login1.js';
import {Provider} from 'react-redux';
import store,{rrfProps} from './store';
import Emptable from './components/Emptable';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import NavbarEmp from "./components/NavbarEmp";
import Salary1 from "./components/Salary/adminSalary";
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

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
      <Login/>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <Emptable/>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <NavbarEmp/>
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
      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/salary">
        <Salary />
      </Route>

    </Switch>
    </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
