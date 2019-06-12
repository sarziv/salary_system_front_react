import React from 'react';
import './Statistic.css';


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

const salary = 1000;
const hours = 124;
const extraHours = 8;
const pallets = 8254;
const lines = 4554;
const vip = 5;


function Statistic() {


    return (
        <div className="toppading">
            <h4 className="d-flex justify-content-center">
                Statistika
            </h4>
            <div className="container">
                <div className="d-flex justify-content-center monthinfo">{getMonthByName()}</div>
                <div className="row">
                    <div className="col-6 d-flex justify-content-center mb-2">
                        <div className="stat-icon">
                            <div className="stat-icon-text">
                                {salary + ' '}€
                            </div>
                            <div className="stat-icon-nameTag">Uždirbta</div>
                        </div>
                    </div>

                    <div className="col-6 d-flex justify-content-center mb-2">
                        <div className="stat-icon">
                            <div className="stat-icon-text">
                                {extraHours + ' '}h
                            </div>
                            <div className="stat-icon-nameTag">Pap.Val.</div>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center mb-2">
                        <div className="stat-icon">
                            <div className="stat-icon-text">
                                {(salary/hours).toFixed(1) + ' '}€
                            </div>
                            <div className="stat-icon-nameTag">Valandinis</div>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center mb-2">
                        <div className="stat-icon">
                            <div className="stat-icon-text">
                                {vip}
                            </div>
                            <div className="stat-icon-nameTag">VIP</div>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center mb-2">
                        <div className="stat-icon">
                            <div className="stat-icon-text">
                                {pallets}
                            </div>
                            <div className="stat-icon-nameTag">Paletės</div>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center mb-2">
                        <div className="stat-icon">
                            <div className="stat-icon-text">
                                {lines}
                            </div>
                            <div className="stat-icon-nameTag">Eilutės</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistic;