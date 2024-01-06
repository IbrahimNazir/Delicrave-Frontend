import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './pages/Login';
import Error404 from './pages/Error404';
import AddToCart from './pages/AddToCart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Switch>
      <Route exact path="/delicrave/login" component={Login} />
      <Route exact path="/delicrave/addtocart" component={AddToCart} />
      <Route component={Error404} />
    </Switch>
  </Router >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
