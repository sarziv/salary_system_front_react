import React, {useEffect, useState} from 'react';
import './Records.css';
import axios from 'axios';
import * as API from "../../router/Api";
import {useSelector} from "react-redux";
import Loading from '../../miscellaneous/loading/Loading';
import {Link, Redirect} from "react-router-dom";
import List from '../List/list';


function Records() {

    const [records, setRecords] = useState({data: [{}]});
    const [loading, setLoading] = useState(true);

    const auth = useSelector(state => state.AuthReducer.authenticated);
    const access_token = useSelector(state => state.AuthReducer.access_token);


    useEffect(() => {
        async function fetchData() {
            await axios.get(API.RECORDS, {
                params: {},
                headers: {'Authorization': 'Bearer ' + access_token}
            })
                .then(function (response) {
                    const list = response.data;
                    setRecords({data: list});
                    setLoading(false);
                })
                .catch(function (error) {
                    setLoading(true);
                });
        };
        fetchData();
    }, [access_token])

    function DataDisplay(props) {

        if (props.userData.data.length !== 0) {
            return loading !== true ? (
                <List userData={props.userData}/>
            ) : (
                <Loading/>
            )
        } else {
            //If no records
            return (
                <div>
                    <h3 className="text-center">Tuščia</h3>
                    <div className="d-flex justify-content-center">
                        <Link to="/add">
                            <button className="btn btn-outline-light p-3">Kurti nauja</button>
                        </Link>
                    </div>
                </div>);
        }
    }

    return auth === true ? (
        <div className="container-fluid toppading">
            <h4 className="d-flex justify-content-center">Istorija</h4>
            <h6 className="d-flex justify-content-center">5 paskutiniai</h6>
            <div className="container">
                <DataDisplay userData={records}/>
            </div>
            <div className="bottompadding"></div>
        </div>
    ) : (<Redirect to="/"/>);
}

export default Records;