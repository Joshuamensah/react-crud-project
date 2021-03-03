import React from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import  App from './App';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import PrivateRoute from './PrivateRoute';

const Router = () => {
    return (
        <BrowserRouter>
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/SignUp">Sign Up</NavLink>
            <NavLink to="/Login">Login</NavLink>
        </div>
            <PrivateRoute exact path="/" component={App} />
            <Route  path="/SignUp" component={SignUp} />
            <Route  path="/Login" component={Login} />
        </BrowserRouter>
    );
}

export default Router;
