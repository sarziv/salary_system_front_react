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


function Records() {
    const auth = useSelector(state => state.authenticated);
    const access_token = useSelector(state => state.access_token);
    const [records, setRecords] = useState({data: [{}]});

    //TODO Loading animation

    useEffect(() => {
        async function fetchData() {
            await axios.get(API.RECORDS, {
                params: {},
                //TODO REMOVE change to access_token
                headers: {'Authorization': 'Bearer ' + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJiMDYzZTU1ZWI0YWQ0NTNlNWU1ZGE3MmNkMTY2MzIyNzAyY2EwMWFmZmIzMDA0NTBkNmNiYWRlNDhkNzkwODE2OTZhMmQwYWY0NWFkMDAzIn0.eyJhdWQiOiIxIiwianRpIjoiYmIwNjNlNTVlYjRhZDQ1M2U1ZTVkYTcyY2QxNjYzMjI3MDJjYTAxYWZmYjMwMDQ1MGQ2Y2JhZGU0OGQ3OTA4MTY5NmEyZDBhZjQ1YWQwMDMiLCJpYXQiOjE1NjEwNjA2NTksIm5iZiI6MTU2MTA2MDY1OSwiZXhwIjoxNTkyNjgzMDU5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.qrGBvhg3qjYIoc9N6-eS12e53iShvn0ix0dwQQSYRAXPFsKKh27A_bstBCiJ650AxncBkKXYTEYkKUZpur-Q4XAc9v03w8TRhqDbhK_DtWHVJ0Gw4cq5sm6Dx4tfTf08oFpbYA5daIx_CPmxGU2LQ3N6kEZBBIjCpPaWFpQGHnX2q_fPt4eWGSt93QhorPLMsuNbhtrLSgwQGQ1bqkxpljCyH7BLkn1LWZZWp0YrTeQPlZFiALTBDmcOyaGOuiUbSAujeuGX5s_5-YPPU56VFqDc4VvYeWpJpDs-V-zMk1cN84ku2tXBju0dqkoRvjBYjKeLe_orTa66VaLBw29oFI7lQsZby2CgptLaa8KLtqq7ZUcS7mqfgKS9goDbPDeR_VYG-aNexPToz3fNc0IH4qA7gyWujXXhRccWtq7ti0AF9-NSJ6r2stof8WogZPXH7YF0maTujTZSv-kHOshi-h22V8IhlN0kcbZMgYfndEf13tvzaoHQ0aQASO7YkoRP2I45xsPNF-hXJYwhT64aBXuGPl9_UBGsODKjRgeixTLmECgHLxWGnJJjb8PGpyCDYW1gwbJyiXOtIPCwMzyiybxvk_nnjarFFBIhzoTs8y2hqGBiqEFdyGu8J1nJe2ATkgOUq3S8OXz18-kGwJqAKjbEUIom2MPjlFt6jJvbIvE"}
            })
                .then(function (response) {
                    const list = response.data;
                    setRecords({data: list});
                    console.log(list);
                })
                .catch(function (error) {
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
                                    <span className="badge badge-primary badge-pill float-right">{record.pallet}</span>
                                </li>
                                <li className="list-group-item">Eilutės:
                                    <span className="badge badge-primary badge-pill float-right">{record.lines}</span>
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
        return (
            listDisplay
        )
    }

    //TODO Remove after
    return /*auth === true ? */(
        <div className="container-fluid toppading">
            <h4 className="d-flex justify-content-center">Istorija</h4>
            <h6 className="d-flex justify-content-center">5 paskutiniai</h6>
            <div className="container">
                <DataDisplay/>
            </div>
            <div className="bottompadding"></div>
        </div>
    ) /*: (<Redirect to="/"/>)*/;
}

export default Records;