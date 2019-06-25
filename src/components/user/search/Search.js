import React, {useState} from 'react';
import './Search.css';

const data = new Date();
const thisYear = data.getFullYear();

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

function Search() {
    //TODO I'm an idiot ???? why year +2? future year? makes no sense
    const [search, setSearch] = useState({from: {year: thisYear, month: 1, day: 1}, to: {year: thisYear, month: 1, day: 1}});
    return (
        <div className="toppading">
            <div className="container">
                <form>
                    <div className="d-flex justify-content-center searchinfo mb-2">Nuo</div>
                    <div className="form-inline d-flex justify-content-around mb-4">
                        <div className="mb-2">
                            <select className="form-control searchInput" id="vipAdd" name="vip" defaultValue={thisYear}
                                    onChange={e => setSearch({...search,from:{...search.from,year: e.target.value}})}>
                                {yearsList(thisYear)}
                            </select>
                        </div>
                        <div className="mb-2">
                            <select className="form-control searchInput" id="hoursAdd" name="hours"
                                    onChange={e => setSearch({...search,from:{...search.from,month: e.target.value}})}>
                                {MonthList()}
                            </select>
                        </div>
                        <div className="mb-2">
                            <select className="form-control searchInput" id="hoursAdd" name="hours"
                                    onChange={e => setSearch({...search,from:{...search.from,day: e.target.value}})}>
                                {DayList()}
                            </select>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center searchinfo mb-2">Iki</div>
                    <div className="form-inline d-flex justify-content-around mb-4">
                        <div className="mb-2">
                            <select className="form-control searchInput" id="vipAdd" name="vip" defaultValue={thisYear}
                                    onChange={e => setSearch({...search,to:{...search.to,year: e.target.value}})}>
                                {yearsList(thisYear)}
                            </select>
                        </div>
                        <div className="mb-2">
                            <select className="form-control searchInput" id="hoursAdd" name="hours"
                                    onChange={e => setSearch({...search,to:{...search.to,month: e.target.value}})}>
                                {MonthList()}
                            </select>
                        </div>
                        <div className="mb-2">
                            <select className="form-control searchInput" id="hoursAdd" name="hours"
                                    onChange={e => setSearch({...search,to:{...search.to,day: e.target.value}})}>
                                {DayList()}
                            </select>
                        </div>
                    </div>
                    <div className="col-6 offset-3">
                        <div className="text-center h6">NUO:<b>{search.from.year +'-'+ search.from.month +'-'+ search.from.day}</b></div>
                        <div className="text-center h6">IKI:<b>{search.to.year +'-'+ search.to.month +'-'+ search.to.day}</b></div>
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