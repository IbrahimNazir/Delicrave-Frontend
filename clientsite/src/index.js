import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Login from './pages/Login';
import Error404 from './pages/Error404';
import AddToCart from './pages/AddToCart';
import HomePage from './pages/HomePage';
import CatalogItem from './pages/CatalogItem';
import Cart from './pages/Cart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Switch>
      <Route exact path="/delicrave/home" component={HomePage} />
      <Route exact path="/delicrave/addtocart" component={AddToCart} />
      <Route exact path="/delicrave/catalog/:catId" component={CatalogItem} />
      <Route exact path="/delicrave/cart/:customerId" component={Cart} />
      <Route component={Error404} />
    </Switch>
  </Router >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
