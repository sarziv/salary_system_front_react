import React from 'react';
import {Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";

function Logout() {
    const dispatch = useDispatch();
    dispatch({type:'LOGOUT'});
    return <Redirect to="/"/>
}
export default Logout;