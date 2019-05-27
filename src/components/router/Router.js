import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from '../welcome/Welcome';
import Login from '../auth/login/Login';
import Register from '../auth/register/Register';

function Routing() {
    return (
        <main>
        <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Switch>
        </main>
    );
}

export default Routing;
