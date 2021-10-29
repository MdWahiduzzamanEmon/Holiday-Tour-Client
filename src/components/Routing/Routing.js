import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error from '../Error/Error';
import Booking from '../Form/Booking/Booking';
import Login from '../Form/Login/Login';
import Register from '../Form/Register/Register';
import Header from '../Header/Header';
import Home from '../Home/Home/Home';
import PrivateRoute from '../Private/PrivateRoute';

const Routing = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route exact path="/login">
                     <Login/>
                    </Route>
                    <Route exact path="/register">
                     <Register/>
                    </Route>
                    <PrivateRoute exact path="/bookingForm/:id">
                     <Booking/>
                    </PrivateRoute>
                    <Route  path="*">
                     <Error/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Routing;