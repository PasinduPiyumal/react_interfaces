import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import NewReport from './NewReport';
import SelectType from './selectType';
import Notify from './Notify';
import History from './History';

import { Route, Link, Redirect } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';

function App() {
  return (
    <div >
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/NewReport" component={NewReport} />
      <Route exact path="/SelectType" component={SelectType} />
      <Route exact path="/Notify" component={Notify} />
      <Route exact path="/History" component={History} />
      {/*  <Redirect exact from="/" to="Login" /> */}
    </div>

  );

}

export default App;
