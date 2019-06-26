import React, {useState} from 'react';
import './Search.css';
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import * as API from "../../router/Api";
import Loading from "../../miscellaneous/loading/Loading";
import {useSelector} from "react-redux";
import moment from 'moment';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import SADGIF from '../../../image/holding_back_tears.gif';

function Search() {

    const auth = useSelector(state => state.AuthReducer.authenticated);
    const access_token = useSelector(state => state.AuthReducer.access_token);
    const rate_pallet = useSelector(state => state.RateReducer.rate_pallet);
    const rate_lines = useSelector(state => state.RateReducer.rate_lines);
    const rate_vip = useSelector(state => state.RateReducer.rate_vip);
    const rate_extraHour = useSelector(state => state.RateReducer.rate_extraHour);


    function SearchMain() {
        const [searchData, setSearchData] = useState({data: []});
        const [loading, setLoading] = useState({redirect: true, redirectAnimation: true});

        const thisYear = new Date().getFullYear();
        const [search, setSearch] = useState({
            from: {year: thisYear, month: 1, day: 1},
            to: {year: thisYear, month: 1, day: 1}
        });

        function yearsList(thisYear) {
            const currentYear = thisYear - 2;
            const years = [];//year generation
            const list = [];//list of years

            //get current years - 2
            for (let i = 0; i < 5; i++) {
                years.push(currentYear + i);
            }
            for (const [index, value] of years.entries()) {
                list.push(<option value={value} key={index}>{value}</option>);
            }
            return list;
        }

        function MonthList() {
            const month = [];
            const list = [];
            for (let i = 1; i < 13; i++) {
                month.push(i);
            }

            for (const [index, value] of month.entries()) {
                list.push(<option value={value} key={index}>{value}</option>);
            }
            return list;
        }

        function DayList() {
            const day = [];
            const list = [];
            for (let i = 1; i < 32; i++) {
                day.push(i);
            }

            for (const [index, value] of day.entries()) {
                list.push(<option value={value} key={index}>{value}</option>);
            }
            return list;
        }

        async function AxiosSearch() {
            await axios.post(API.SEARCH, {
                    from: [{
                        year: search.from.year,
                        month: search.from.month,
                        day: search.from.day,
                    }],
                    to: [{
                        year: search.to.year,
                        month: search.to.month,
                        day: search.to.day,
                    }]
                },
                {
                    headers: {
                        'Authorization': 'Bearer ' + access_token,
                        'Content-Type': 'application/json'
                    },
                })
                .then(function (response) {
                    const result = response.data;
                    setLoading({redirect: false});
                    setSearchData({data: result});
                    setLoading({redirectAnimation: false});
                })
                .catch(function (error) {
                    setSearchData({data: [{}]});
                    setLoading({redirect: true});
                });
        }

        function SearchDisplay() {

            function CountMoney(pallet, lines, vip, extraHour) {
                return (pallet * rate_pallet +
                    lines * rate_lines +
                    vip * rate_vip +
                    extraHour * rate_extraHour).toFixed(1);
            }

            function formatDate(date) {
                return moment(date).format('YYYY-MM-DD');
            }

            //if No records
            console.log(searchData.data.length + ' before');

            console.log(searchData.data.length + 'after');
            //TODO Delete , edit records
            const listDisplay = searchData.data.map((record) =>
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
                                        <span
                                            className="badge badge-primary badge-pill float-right">{record.vip}</span>
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

            if (loading.redirectAnimation !== true) {
                if (searchData.data.length !== 0) {
                    if (loading.redirect !== true) {
                        return (
                            <div className="container-fluid toppading">
                                <h4 className="d-flex justify-content-center">Radome:</h4>
                                <div className="container">
                                    {listDisplay}
                                </div>
                                <div className="bottompadding"></div>
                            </div>
                        )
                    }
                } else if (searchData.data.length === 0) {
                    return (
                        <div className="toppading">
                            <div className="container">
                                <h5 className="text-center">Atsiprašome ,bet nieko neradome.</h5>
                                <div className="d-flex justify-content-center mb-2">
                                    <img src={SADGIF} alt="sadgif.." width={125} height={125}/>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Link to="/search">
                                        <button className="btn btn-outline-light p-3">Pandykite dar kartą</button>
                                    </Link>
                                </div>
                            </div>
                        </div>);
                }
            } else {
                return (
                    <div className="toppading">
                        <div className="container">
                            <Loading/>
                        </div>
                    </div>);
            }
        }

        function submithandler(e) {
            e.preventDefault();
            setLoading({redirectAnimation: true});
            AxiosSearch();
        }

        const SearchMain = (
            <div className="toppading">
                <div className="container">
                    <form onSubmit={submithandler}>
                        <div className="d-flex justify-content-center searchinfo mb-2">Nuo</div>
                        <div className="form-inline d-flex justify-content-around mb-4">
                            <div className="mb-2">
                                <select className="form-control searchInput" id="vipAdd" name="vip"
                                        defaultValue={thisYear}
                                        onChange={e => setSearch({
                                            ...search,
                                            from: {...search.from, year: e.target.value}
                                        })}>
                                    {yearsList(thisYear)}
                                </select>
                            </div>
                            <div className="mb-2">
                                <select className="form-control searchInput" id="hoursAdd" name="hours"
                                        onChange={e => setSearch({
                                            ...search,
                                            from: {...search.from, month: e.target.value}
                                        })}>
                                    {MonthList()}
                                </select>
                            </div>
                            <div className="mb-2">
                                <select className="form-control searchInput" id="hoursAdd" name="hours"
                                        onChange={e => setSearch({
                                            ...search,
                                            from: {...search.from, day: e.target.value}
                                        })}>
                                    {DayList()}
                                </select>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center searchinfo mb-2">Iki</div>
                        <div className="form-inline d-flex justify-content-around mb-4">
                            <div className="mb-2">
                                <select className="form-control searchInput" id="vipAdd" name="vip"
                                        defaultValue={thisYear}
                                        onChange={e => setSearch({
                                            ...search,
                                            to: {...search.to, year: e.target.value}
                                        })}>
                                    {yearsList(thisYear)}
                                </select>
                            </div>
                            <div className="mb-2">
                                <select className="form-control searchInput" id="hoursAdd" name="hours"
                                        onChange={e => setSearch({
                                            ...search,
                                            to: {...search.to, month: e.target.value}
                                        })}>
                                    {MonthList()}
                                </select>
                            </div>
                            <div className="mb-2">
                                <select className="form-control searchInput" id="hoursAdd" name="hours"
                                        onChange={e => setSearch({...search, to: {...search.to, day: e.target.value}})}>
                                    {DayList()}
                                </select>
                            </div>
                        </div>
                        <div className="col-12">

                            <h5 className="text-center">Pasirinkta</h5>
                            <div className="text-center h6"><b>
                                {search.from.year + '-' + search.from.month + '-' + search.from.day}<br/>
                                {search.to.year + '-' + search.to.month + '-' + search.to.day}
                            </b></div>
                        </div>
                        <div className="d-flex justify-content-center py-3">
                            <button className="btn btn-outline-light p-3" type="submit" value="submit">
                                Ieškoti
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
        return loading.redirect === true ? SearchMain : <SearchDisplay/>;
    }

    return auth === true ?
        <SearchMain/> : <Redirect to="/"/>;

}

export default Search;