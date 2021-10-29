import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../Header/Header';
import Home from '../Home/Home/Home';

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
                </Switch>
            </Router>
        </div>
    );
};

export default Routing;