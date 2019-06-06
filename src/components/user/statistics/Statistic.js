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

const salary  = 1000;
const hours  = 124;
function Statistic() {


    return (
        <div className="toppading">
            <h4 className="d-flex justify-content-center">
                Statistika
            </h4>
            <div className="container">
                <div>
                    Mėnesis:
                    <span className="text-white pl-2">
                        {getMonthByName()}
                    </span>
                </div>
                <div>
                    Uždirbta:
                    <span className="text-white pl-2">
                        {salary} €
                    </span>
                </div>
                <div>
                    Valandos:
                    <span className="text-white pl-2">
                        {hours}
                    </span>
                </div>
                <div>
                    Valandinis:
                    <span className="text-white pl-2">
                        {(salary/hours).toFixed(1)+' '}€/h
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Statistic;