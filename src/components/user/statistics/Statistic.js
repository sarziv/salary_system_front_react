import React, {useEffect, useState} from 'react';
import './Statistic.css';
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";
import * as API from "../../router/Api";
import Loading from "../../miscellaneous/loading/Loading";
import KOXO from '../../../image/KOXOBiN.gif';

function Statistic() {

    const auth = useSelector(state => state.AuthReducer.authenticated);
    const access_token = useSelector(state => state.AuthReducer.access_token);
    const rate_pallet = useSelector(state => state.RateReducer.rate_pallet);
    const rate_lines = useSelector(state => state.RateReducer.rate_lines);
    const rate_vip = useSelector(state => state.RateReducer.rate_vip);
    const rate_extraHour = useSelector(state => state.RateReducer.rate_extraHour);

    const [loading, setLoading] = useState(true);
    const [stat, setStat] = useState({data: {}});

    function getMonthByName() {
        const date = new Date().getMonth() + 1;
        switch (date) {
            case 1:
                return 'Sausis';
            case 2:
                return 'Vasaris';
            case 3:
                return 'Kovas';
            case 4:
                return 'Balandis';
            case 5:
                return 'Gegužė';
            case 6:
                return 'Birželis';
            case 7:
                return 'Liepa';
            case 8:
                return 'Rugpjūtis';
            case 9:
                return 'Rugsėjis';
            case 10:
                return 'Spalis';
            case 11:
                return 'Lapkritis';
            case 12:
                return 'Gruodis';
            default:
                return null;
        }
    }

    function getDate() {
        return new Date();
    }

    useEffect(() => {
        async function AxiosStat() {
            await axios.post(API.STATISTIC, {
                    year: getDate().getFullYear(),
                    month: getDate().getMonth()+1
                },
                {
                    headers: {'Authorization': 'Bearer ' + access_token},
                })
                .then(function (response) {
                    const result = response.data[0];
                    setStat({data: result})
                    setLoading(false);
                })
                .catch(function (error) {
                    setStat({data: {}})
                    setLoading(true);
                });
        }

        AxiosStat();
    }, [access_token])

    function monthSalary() {
        const salary =
            stat.data.total_pallet * rate_pallet +
            stat.data.total_lines * rate_lines +
            stat.data.total_vip * rate_vip +
            stat.data.total_extra_hour * rate_extraHour
        return salary;
    }

    function hourlyValue() {
        return (monthSalary() / (stat.data.total_count * 8)).toFixed(1);
    }

    function MonthData() {
        if (stat.data.total_count  !== 0) {
            const MonthStatistic = (

                <div className="toppading">
                    <div className="container">
                        <div className="d-flex justify-content-center monthinfo mb-5">{getMonthByName()}</div>
                        <div className="row">
                            <div className="col-6 d-flex justify-content-center mb-2">
                                <div className="stat-icon">
                                    <div className="stat-icon-text">
                                        {monthSalary() + ' '}€
                                    </div>
                                    <div className="stat-icon-nameTag">Uždirbta</div>
                                </div>
                            </div>

                            <div className="col-6 d-flex justify-content-center mb-2">
                                <div className="stat-icon">
                                    <div className="stat-icon-text">
                                        {stat.data.total_extra_hour + ' '}h
                                    </div>
                                    <div className="stat-icon-nameTag">Pap.Val.</div>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center mb-2">
                                <div className="stat-icon">
                                    <div className="stat-icon-text">
                                        {hourlyValue() + ' '}€
                                    </div>
                                    <div className="stat-icon-nameTag">Valandinis</div>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center mb-2">
                                <div className="stat-icon">
                                    <div className="stat-icon-text">
                                        {stat.data.total_vip}
                                    </div>
                                    <div className="stat-icon-nameTag">VIP</div>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center mb-2">
                                <div className="stat-icon">
                                    <div className="stat-icon-text">
                                        {stat.data.total_pallet}
                                    </div>
                                    <div className="stat-icon-nameTag">Paletės</div>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-center mb-2">
                                <div className="stat-icon">
                                    <div className="stat-icon-text">
                                        {stat.data.total_lines}
                                    </div>
                                    <div className="stat-icon-nameTag">Eilutės</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
            return loading !== true ? (
                MonthStatistic
            ) : (
                <div className="toppading">
                    <div className="container">
                        <Loading/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="toppading">
                    <div className="container">
                        <div className="d-flex justify-content-center">
                            <img src={KOXO} alt="koxobin.." width={125} height={125}/>
                        </div>
                        <div className="text-center">Dirbk, Uždirbk, Judėk kaip bananiukas</div>
                        <div className="text-center">Meniu gali rasti viršuje dešinėja pusėja. <i className="fas fa-bars"></i>
                        </div>
                    </div>
                </div>);
        }
    }

    return auth === true ?
        <MonthData/> : <Redirect to="/"/>;

}

export default Statistic;