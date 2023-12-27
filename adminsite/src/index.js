import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MainComponent from './components/MainComponent';
import Login from './pages/Login';
import PrivateRoute from './utils/PrivateRoute';
import AddProduct from './pages/AddProduct';
import Dashboard from './pages/Dashboard';
import Order from './pages/Order';
import Category from './pages/Category';
import Flavor from './pages/Flavor';
import OrderItem from './pages/OrderItem';
import Unit from './pages/Unit';
import Dessert from './pages/Dessert';
import EditDessert from './pages/EditDessert';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Router>
            <Switch>
                <Route exact path='/admin/login' component={Login}></Route>
                <PrivateRoute exact path='/admin/dashboard' page={Dashboard} activepage="0"/>
                <PrivateRoute exact path='/admin/desserts' page={Dessert} activepage="1"/>
                <PrivateRoute exact path='/admin/addproducts' page={AddProduct} activepage="1"/>
                <PrivateRoute exact path='/admin/editdesserts' page={EditDessert} activepage="1"/>
                <PrivateRoute exact path='/admin/editdesserts' page={EditDessert} activepage="1"/>
                <PrivateRoute exact path='/admin/orders' page={Order} activepage="2"/>
                <PrivateRoute exact path='/admin/orderdetail/:id' page={OrderItem} activepage="2"/>
                <PrivateRoute exact path='/admin/categories' page={Category} activepage="3"/>
                <PrivateRoute exact path='/admin/flavors' page={Flavor} activepage="4"/>
                <PrivateRoute exact path='/admin/units' page={Unit} activepage="5"/>
                <Route component={Error404}></Route>
            </Switch>
        </Router>

    </>
)