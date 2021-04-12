
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

export default function Navigation() {
    return (
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/createUser">
                <CreateUser />
            </Route>

            <Route path="/updateUser">
                <UpdateUser />
            </Route>
        </Router>
    )
}
