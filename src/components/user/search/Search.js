import React, {useState} from 'react';
import './Search.css';

    const data = new Date();
    const  thisYear = data.getFullYear();

function yearsList(thisYear) {
    const currentYear = thisYear-2;
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

function Search() {
    //TODO search to a form
    const [search, setSearch] = useState({from: {year: '', month: '', day: ''}, to: {year: '', month: '', day: ''}});
    return (
        <div className="toppading">
            <h4 className="d-flex justify-content-center">
                Ieškoti
            </h4>
            <div className="container">
                <form>
                    <div className="d-flex justify-content-center searchinfo mb-2">Nuo</div>
                    <div className="form-inline d-flex justify-content-around mb-2">
                        <div className="mb-2">
                            <label className="d-flex justify-content-center" htmlFor="vipAdd">Metai</label>
                            <select className="form-control searchInput" id="vipAdd" name="vip" defaultValue={thisYear}
                                    >
                                {yearsList(thisYear)}
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="d-flex justify-content-center"
                                   htmlFor="hoursAdd">Mėnesis</label>
                            <select className="form-control searchInput" id="hoursAdd" name="hours">
                                {MonthList()}
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="d-flex justify-content-center"
                                   htmlFor="hoursAdd">Diena</label>
                            <select className="form-control searchInput" id="hoursAdd" name="hours">
                                {DayList()}
                            </select>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center searchinfo mb-2">Iki</div>
                    <div className="form-inline d-flex justify-content-around mb-2">
                        <div className="mb-2">
                            <label className="d-flex justify-content-center" htmlFor="vipAdd">Metai</label>
                            <select className="form-control searchInput" id="vipAdd" name="vip" defaultValue={thisYear}>
                                {yearsList(thisYear)}
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="d-flex justify-content-center"
                                   htmlFor="hoursAdd">Mėnesis</label>
                            <select className="form-control searchInput" id="hoursAdd" name="hours">
                                {MonthList()}
                            </select>
                        </div>
                        <div className="mb-2">
                            <label className="d-flex justify-content-center"
                                   htmlFor="hoursAdd">Diena</label>
                            <select className="form-control searchInput" id="hoursAdd" name="hours">
                                {DayList()}
                            </select>
                        </div>
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
    //TODO redirect
    //TODO authentication
    //TODO Next find page
}

export default Search;