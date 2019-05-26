import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from '../welcome/Welcome';
import Login from '../auth/login/Login';


function Routing() {
    return (
        <main>
        <Switch>
            <Route path="/" exact component={Welcome}/>
            <Route path="/login" component={Login}/>
        </Switch>
        </main>
    );
}

export default Routing;
