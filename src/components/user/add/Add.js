import React from 'react';
import './Add.css';

function setDate() {
    let month = new Date().getMonth();
    let day = new Date().getDay();

    return month + '-' + day;
}

function Add() {
    return (
        <div className="toppading">
            <h4 className="d-flex justify-content-center">
                Pridėti
            </h4>
            <div className="container d-flex justify-content-center">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Paletės</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Eilutės</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="form-inline d-flex justify-content-around">
                        <div className="mb-2">
                            <label className="d-flex justify-content-center" htmlFor="exampleInputVip1">VIP</label>
                            <select className="form-control inputNumber" id="exampleInputVip1" name="vip">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="d-flex justify-content-center"
                                   htmlFor="exampleInputHours1">Valandos</label>
                            <select className="form-control inputNumber" id="exampleInputHours1" name="cars">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputText1">Diena</label>
                        <input type="text" className="form-control" id="exampleInputText1" value={setDate()} disabled/>
                    </div>
                    <div className="d-flex justify-content-center py-3">
                        <button className="btn btn-outline-light p-3" type="submit" value="submit">Išsaugoti
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default Add;