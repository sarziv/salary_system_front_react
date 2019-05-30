import React from "react";
import {Route, Switch} from "react-router-dom";
import Welcome from '../welcome/Welcome';
import Login from '../auth/login/Login';
import Register from '../auth/register/Register';
import Recover from '../auth/recover/Recover';
import Records from '../user/records/Records';

function Routing() {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={Welcome}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/recover" component={Recover}/>
                <Route path="/records" component={Records}/>
            </Switch>
        </main>
    );
}

export default Routing;
