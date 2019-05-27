import React, {useState} from 'react';
import './Login.css';
import {Link} from "react-router-dom";

function Login() {

    const [form, setForm] = useState({email: '', password: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Data: ${form.email} ${form.password}`)
    };

    return (
        <div className="login">
            <h4 className="d-flex justify-content-center">
                Prisijungimas
            </h4>
            <form onSubmit={handleSubmit}>
                <div className="container form-group py-2">
                    <label className="d-flex justify-content-center">Paštas:</label>
                    <input type="text" value={form.email} className="form-control"
                           onChange={e => setForm({...form, email: e.target.value})}/>


                    <label className="d-flex justify-content-center py-2">Slaptažodis:</label>
                    <input type="password" value={form.password} className="form-control"
                           onChange={e => setForm({...form, password: e.target.value})}/>

                    <div className="d-flex justify-content-center py-3">
                        <button className="btn btn-outline-light p-3" type="submit" value="submit">Prisijungti</button>
                    </div>
                </div>
            </form>
            <div className="d-flex justify-content-center">
                <Link to="/recover">
                    <div className="recoverLink"> Pamiršai prisijungimą?</div>
                </Link>
            </div>
        </div>

    )
}

export default Login;