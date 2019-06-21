import React, {useEffect, useState} from 'react';
import './Records.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import * as API from "../../router/Api";
import {useSelector} from "react-redux";
import Loading from '../../miscellaneous/loading/Loading';
import {Link, Redirect} from "react-router-dom";

function Records() {
    const auth = useSelector(state => state.authenticated);
    const access_token = useSelector(state => state.access_token);
    const [records, setRecords] = useState({data: [{}]});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            await axios.get(API.RECORDS, {
                params: {},
                //TODO REMOVE change to access_token
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
    }, [])

    function DataDisplay() {

        function CountMoney(lines, pallet, vip, extraHour) {
            return (lines * 0.09 + pallet * 0.11 + vip * 3 + extraHour * 6).toFixed(1);
        }

        //TODO Format to YYYY-MM-DD
        function formatDate(date) {
            return date;
        }

        //if No records
        if (records.data.length !== 0) {
            //TODO unique key
            const listDisplay = records.data.map((record) =>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography component={'span'}>
                            <div className="d-flex justify-content-between">
                                <div className="float-left">{formatDate(record.created_at)}</div>
                                <div className="pl-4">
                                    {CountMoney(record.lines, record.pallet, record.vip, record.extra_hour) + '€'}
                                </div>
                            </div>
                        </Typography>
                    </ExpansionPanelSummary>
                    <div className="col-12">
                        <ExpansionPanelDetails className="d-inline">
                            <Typography component={'span'}>
                                <ul className="list-group list-group-flush border-dark">
                                    <li className="list-group-item">Paletės:
                                        <span
                                            className="badge badge-primary badge-pill float-right">{record.pallet}</span>
                                    </li>
                                    <li className="list-group-item">Eilutės:
                                        <span
                                            className="badge badge-primary badge-pill float-right">{record.lines}</span>
                                    </li>
                                    <li className="list-group-item">VIP:
                                        <span className="badge badge-primary badge-pill float-right">{record.vip}</span>
                                    </li>
                                    <li className="list-group-item">Valandos:
                                        <span
                                            className="badge badge-primary badge-pill float-right">{record.extra_hour}</span>
                                    </li>
                                </ul>
                            </Typography>
                        </ExpansionPanelDetails>
                    </div>
                </ExpansionPanel>
            );
            return loading !== true ? (
                listDisplay
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
                <DataDisplay/>
            </div>
            <div className="bottompadding"></div>
        </div>
    ) : (<Redirect to="/"/>);
}

export default Records;