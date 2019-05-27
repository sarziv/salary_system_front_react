import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from '../welcome/Welcome';
import Login from '../auth/login/Login';
import Register from '../auth/register/Register';
import Recover from '../auth/recover/Recover';

function Routing() {
    return (
        <main>
        <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/recover" component={Recover}/>
        </Switch>
        </main>
    );
}

export default Routing;
