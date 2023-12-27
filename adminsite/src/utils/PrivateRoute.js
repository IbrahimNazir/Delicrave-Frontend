import React from 'react'
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min'
import AuthHandler from './AuthHandler'
import MainComponent from '../components/MainComponent'


function PrivateRoute({ page, activepage, ...rest }) {
    return (
        <Route {...rest}
            render={(props) => true ? //AuthHandler.loggedIn()
                (<MainComponent page={page} activepage={activepage}  />) :
                (<Redirect to="/admin/login" />)
            }
        ></Route>
    )
}

export default PrivateRoute