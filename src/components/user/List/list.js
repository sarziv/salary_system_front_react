import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import React, {useState} from "react";
import moment from "moment";
import {useSelector} from "react-redux";
import axios from "axios";
import * as API from "../../router/Api";
import {Redirect} from "react-router-dom";

function List(props) {
    const [redirect,setRedirect] = useState(false);
    const access_token = useSelector(state => state.AuthReducer.access_token);
    const rate_pallet = useSelector(state => state.RateReducer.rate_pallet);
    const rate_lines = useSelector(state => state.RateReducer.rate_lines);
    const rate_vip = useSelector(state => state.RateReducer.rate_vip);
    const rate_extraHour = useSelector(state => state.RateReducer.rate_extraHour);

    function CountMoney(pallet, lines, vip, extraHour) {
        return (pallet * rate_pallet +
            lines * rate_lines +
            vip * rate_vip +
            extraHour * rate_extraHour).toFixed(1);
    }

    function formatDate(date) {
        return moment(date).format('YYYY-MM-DD');
    }


    async function AxiosDelete(id) {
        await axios.delete(API.DELETE+id, {
            headers: {'Authorization': 'Bearer ' + access_token}
        })
            .then(function (response) {
                setRedirect(true);
            })
            .catch(function (error) {
                setRedirect(false);
                console.log(error.response)
            })
    }

    const listDisplay = props.userData.data.map((record) =>
        <ExpansionPanel key={record.id}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography component={'span'}>
                    <div className="d-flex justify-content-between">
                        <div className="float-left">{formatDate(record.created_at)}</div>
                        <div className="pl-4">
                            {CountMoney(record.line, record.pallet, record.vip, record.extra_hour) + '€'}
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
                                    className="badge badge-primary badge-pill float-right">{record.line}</span>
                            </li>
                            <li className="list-group-item">VIP:
                                <span className="badge badge-primary badge-pill float-right">{record.vip}</span>
                            </li>
                            <li className="list-group-item">Valandos:
                                <span
                                    className="badge badge-primary badge-pill float-right">{record.extra_hour}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-center">
                                    <button className="btn btn-danger" onClick={()=>{AxiosDelete(record.id)}} >Ištrinti</button>
                            </li>
                        </ul>
                    </Typography>
                </ExpansionPanelDetails>
            </div>
        </ExpansionPanel>
    );
        return redirect === true ? (<Redirect to="/statistic"/>) : listDisplay;
}
export default List;