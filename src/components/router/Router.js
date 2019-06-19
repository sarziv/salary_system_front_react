import React from "react";
import {Route, Switch} from "react-router-dom";
import Welcome from '../welcome/Welcome';
import Login from '../auth/login/Login';
import Register from '../auth/register/Register';
import Recover from '../auth/recover/Recover';
import Records from '../user/records/Records';
import Add from '../user/add/Add';
import Statistic from "../user/statistics/Statistic";
import Logout from "../auth/logout/Logout";
import Search from "../user/search/Search"


function Routing() {

    return (
        <main>

                    <Switch>
                    <Route path="/" exact component={Welcome}/>
                    <Route path ="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/recover" exact component={Recover}/>
                    <Route path="/records" exact component={Records}/>
                    <Route path="/add" exact component={Add}/>
                    <Route path="/statistic" exact component={Statistic}/>
                    <Route path="/search" exact component={Search}/>
                    <Route path="/logout" exact component={Logout}/>
                    </Switch>

        </main>
    );
}

export default Routing;
