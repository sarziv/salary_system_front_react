import React, {useState} from 'react';
import './Add.css';
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

function Add() {
    const [add, setAdd] = useState({pallet: '', lines: '', vip: 0, hours: 0});
    const [error, setError] = useState(false);
    const auth = useSelector(state => state.authenticated);
    /*
        function primeApi() {
            //TODO price api pallet,lines,hours,vip
        }
    */
    function handlerSubmit(e) {
        e.preventDefault();

        if (add.pallet.length === 0) {
            setError(true);
        } else if (add.lines.length === 0) {
            setError(true);
        } else {
            setError(false);
        }

    }

    return auth === true ? (
        <div className="toppading">
            <h4 className="d-flex justify-content-center">
                Pridėti
            </h4>
            <div className="container d-flex justify-content-center">
                <form onSubmit={handlerSubmit}>
                    <div className="form-group">
                        <label htmlFor="palletAdd">Paletės</label>
                        <input min={0} type="number" className="form-control" id="palletAdd" value={add.pallet}
                               onChange={e => setAdd({...add, pallet: e.target.value})}/>
                    </div>
                    <div className="form-group">
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
                            {((add.pallet * 0.11) + (add.lines * 0.09) + (add.vip * 3) + (add.hours * 7)).toFixed(2)}€
                        </div>
                    </div>
                    <div
                        className={error === true ? "container-fluid d-flex justify-content-center error" : 'errorHide'}>
                        Neužpildyta
                    </div>
                    <div className="d-flex justify-content-center py-3">
                        <button className="btn btn-outline-light p-3" type="submit" value="submit">Išsaugoti
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ) : (<Redirect to="/"/>);
}

export default Add;