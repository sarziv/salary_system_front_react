import React, {useEffect, useState} from 'react';
import './Login.css';
import {Link} from "react-router-dom";

function Login() {

    const [form, setForm] = useState({email: '', password: ''});
    const [error, setError] = useState({errorEmail: false, errorPassword: false, errorMessage: false});

    const handleSubmit = (e) => {
        e.preventDefault();

        if ((form.email.length && form.password.length) === 0) {
            setError({errorMessage: true})
        }

        alert(`Data: ${form.email} ${form.password} ${error.errorMessage}`)
    };

    useEffect(() => {

            if (form.email.length === 0) {
                setError({errorEmail: true})
            } else if (form.password.length === 0) {
                setError({errorPassword: true})
            } else if (form.email.length !== 0) {
                setError({errorPassword: false})
            } else if (form.password.length !== 0) {
                setError({errorPassword: false})
            }

        }, [form]
    );

    return (
        <div className="login">
            <h4 className="d-flex justify-content-center">
                Prisijungimas
            </h4>
            <div className="container d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                    <div className="container form-group py-2">
                        <label>Paštas:</label>

                        <input type="text" value={form.email}
                               className={error.errorEmail === true ? 'form-control borderWarning mb-2' : 'form-control mb-2'}
                               onChange={e => setForm({...form, email: e.target.value})}/>

                        <label>Slaptažodis:</label>

                        <input type="password" value={form.password}
                               className={error.errorPassword === true ? 'form-control borderWarning' : 'form-control'}
                               onChange={e => setForm({...form, password: e.target.value})}/>
                        <div className="container-fluid d-flex justify-content-center bgRed mt-2">
                            {error.errorMessage === true ? 'Užpildyta blogai.' : ''}
                        </div>
                        <div className="d-flex justify-content-center py-3">

                            <button className="btn btn-outline-light p-3" type="submit" value="submit">
                                Prisijungti
                            </button>

                        </div>
                    </div>
                </form>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/recover">
                    <div className="recoverLink"> Pamiršai prisijungimą?</div>
                </Link>
            </div>
        </div>

    )
}

export default Login;