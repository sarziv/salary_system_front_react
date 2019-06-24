import React, {useState} from 'react';
import './Add.css';
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";
import * as API from "../../router/Api";


function Add() {
    const [add, setAdd] = useState({pallet: '', lines: '', vip: 0, hours: 0});
    const [error, setError] = useState({field: false, redirect: false, redirectAnimation: false, server: false});

    const auth = useSelector(state => state.AuthReducer.authenticated);
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

    function redirectToRecords() {
        setError({redirect: true});
    }

    async function AxiosAdd() {
        await axios.post(API.ADD,
            {
                pallet: add.pallet,
                lines: add.lines,
                vip: add.vip,
                extra_hour: add.hours,
            },
            {
                headers: {'Authorization': 'Bearer ' + access_token},
            })
            .then(function (response) {
                console.log(response);
                setError({redirectAnimation: true});
                setTimeout(redirectToRecords, 3000);
            })
            .catch(function (error) {
                console.log(error.response);
                setError({server: true});
            });
    }

    function handlerSubmit(e) {
        e.preventDefault();
        if (add.pallet.length === 0) {
            setError({field: true});
        } else if (add.lines.length === 0) {
            setError({field: true});
        } else {
            setError({field: false});
            AxiosAdd();
        }
    }

    if (error.redirect === true) {
        return <Redirect to="/records"/>
    }

    return auth === true ? (
        <div className="toppading">
            <div className="container d-flex justify-content-center">
                <form onSubmit={handlerSubmit}>
                    <div className="form-group col-6 offset-3 text-center">
                        <label htmlFor="palletAdd">Paletės</label>
                        <input min={0} type="number" className="form-control" id="palletAdd" value={add.pallet}
                               onChange={e => setAdd({...add, pallet: e.target.value})}/>
                    </div>
                    <div className="form-group col-6 offset-3 text-center">
                        <label htmlFor="linesAdd">Eilutės</label>
                        <input min={0} type="number" className="form-control" id="linesAdd" value={add.lines}
                               onChange={e => setAdd({...add, lines: e.target.value})}/>
                    </div>
                    <div className="form-inline d-flex justify-content-around">
                        <div className="mb-2">
                            <label className="d-flex justify-content-center" htmlFor="vipAdd">VIP</label>
                            <select className="form-control inputNumber" id="vipAdd" name="vip"
                                    onChange={e => setAdd({...add, vip: e.target.value})}>>
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="d-flex justify-content-center"
                                   htmlFor="hoursAdd">Valandos</label>
                            <select className="form-control inputNumber" id="hoursAdd" name="hours"
                                    onChange={e => setAdd({...add, hours: e.target.value})}>
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-inline d-flex justify-content-center pt-3">
                        <label htmlFor="exampleInputSalary">Uždirbta:</label>
                        <div id="exampleInputSalary" className="SalaryCount mb-2 pl-2">
                            {CountMoney(add.pallet, add.lines, add.vip, add.hours)}€
                        </div>
                    </div>
                    {error.field === true ?
                    <div className= "container-fluid d-flex justify-content-center errorMessage">
                        Neužpildyta
                    </div> : ''}
                    {error.server === true ?
                    <div className="container-fluid d-flex justify-content-center errorMessage">
                        Išsaugoti nepavyko
                    </div>: ''}

                    {error.redirectAnimation !== true ?
                        <div className="container d-flex justify-content-center py-3">
                            <button className="btn btn-outline-light p-3" type="submit" value="submit">Saugoti</button>
                        </div>
                        :
                        <div>
                            <div className="container d-flex justify-content-center bgGreen mt-2">
                                <div>Išsaugota <i className="fas fa-check-circle"> </i></div>
                            </div>
                            <div className="container d-flex justify-content-center">
                                Prašome palaukti
                                <div className="spinner-border ml-2" role="status"
                                     aria-hidden="true">
                                </div>
                            </div>
                        </div>
                    }
                </form>
            </div>
        </div>
    ) : (<Redirect to="/"/>);
}

export default Add;