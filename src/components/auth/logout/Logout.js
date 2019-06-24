import React,{useState} from 'react';
import {Redirect} from "react-router-dom";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import * as API from '../../router/Api'


function Logout() {

    const dispatch = useDispatch();
    const access_token = useSelector(state=>state.access_token);
    const [error,setError] = useState(false);

    function axiosLogout() {
        axios.get(API.LOGOUT, {params:{},headers:{'Authorization':'Bearer '+ access_token}})
            .then(function () {
                setError(false);
                dispatch({type:'LOGOUT'});
                dispatch({type:'RATE_LOGOUT'});
            })
            .catch(function () {
                setError(true);
            });
    }

    axiosLogout();

    return error !== true ? (<Redirect to="/"/>) : (<Redirect to="/login"/>);
}
export default Logout;