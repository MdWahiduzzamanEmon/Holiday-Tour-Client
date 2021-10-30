import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyBooking from '../../Pages/MyBooking/MyBooking';
import Error from '../Error/Error';
import Booking from '../Form/Booking/Booking';
import Login from '../Form/Login/Login';
import Register from '../Form/Register/Register';
import Header from '../Header/Header';
import Home from '../Home/Home/Home';
import PrivateRoute from '../Private/PrivateRoute';
import Admin from "../Admin/Admin/Admin";
import ManageBooking from '../Admin/ManageBooking/ManageBooking';
import AddNewEvent from '../Admin/AddNewEvent/AddNewEvent';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import About from '../About/About';
import ExploreMore from '../../Pages/ExploreMore/ExploreMore';

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
                    <Route exact path="/aboutus">
                     <About/>
                    </Route>
                    <Route exact path="/contactus">
                     <Contact/>
                    </Route>
                    <Route exact path="/admin">
                     <Admin />
                    </Route>
                    <Route exact path="/managebooking">
                     <ManageBooking />
                    </Route>
                    <Route exact path="/addnewevent">
                     <AddNewEvent />
                    </Route>
                    <Route exact path="/exploremore">
                     <ExploreMore />
                    </Route>
                    <PrivateRoute exact path="/myBooking">
                     <MyBooking/>
                    </PrivateRoute>
                    <PrivateRoute exact path="/bookingForm/:id">
                     <Booking/>
                    </PrivateRoute>
                    <Route  path="*">
                     <Error/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
};

export default Routing;