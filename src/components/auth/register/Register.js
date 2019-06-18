import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import './Register.css';

function Register() {

    const [form, setForm] = useState({name: '', email: '', password: '', passwordConfirm: ''});
    const [error, setError] = useState({
        errorEmail: false,
        errorPassword: false,
        errorMessage: false,
        errorPasswordNotMatch: false,
        errorEmailExist: '',
        redirect: false
    });

    function handleSubmit(e) {
        e.preventDefault();
        if ((form.name.length && form.email.length && form.password.length && form.passwordConfirm.length) === 0) {
            setError({errorMessage: true})
        } else {
            if (form.password !== form.passwordConfirm) {
                setError({errorPasswordNotMatch: true})
            } else {
                AxiosPost(form.name, form.email, form.password, form.passwordConfirm);
            }
        }
    }

    function AxiosPost(name, email, password, passwordConfirmation) {
        axios.post('http://salaryapi.local/api/auth/signup', {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        })
            .then(function () {
                setError({redirect: true});
            })
            .catch(function (error) {
                if(error.response.data.errors.email !== undefined){
                    setError({errorEmailExist: true})
                }
            });

    }

    useEffect(() => {
            if (form.name.length === 0) {
                setError({errorEmail: true})
            } else if (form.email.length === 0) {
                setError({errorEmail: true})
            } else if (form.password.length !== 0) {
                setError({errorPassword: true})
            }
        }, [form]
    );

    return error.redirect !== true ? (
            <div className="Register">
                <h4 className="d-flex justify-content-center">
                    Registracija
                </h4>
                <div className="container d-flex justify-content-center">
                    <form onSubmit={handleSubmit}>
                        <div className="container form-group py-2">
                            <label>Vardas:</label>
                            <input type="text" value={form.name} className="form-control"
                                   onChange={e => setForm({...form, name: e.target.value})}/>

                            <label>Paštas:</label>
                            <input type="email" value={form.email} className="form-control"
                                   onChange={e => setForm({...form, email: e.target.value})}/>

                            <label>Slaptažodis:</label>
                            <input type="password" value={form.password} className="form-control"
                                   onChange={e => setForm({...form, password: e.target.value})}/>


                            <label>Slaptažodio patvirtinimas:</label>
                            <input type="password" value={form.passwordConfirm} className="form-control"
                                   onChange={e => setForm({...form, passwordConfirm: e.target.value})}/>
                            {/* Password did not match message */}
                            <div className="container-fluid d-flex justify-content-center bgRed mt-2">
                                {error.errorPasswordNotMatch === true ?
                                    <div>Slaptažodis nesutapo <i className="fas fa-exclamation-circle"> </i></div> : ''}
                            </div>
                            {/* Email exists */}
                            <div className="container-fluid d-flex justify-content-center bgRed mt-2">
                                {error.errorEmailExist === true ?
                                    <div>Toks paštas jau sukurtas. <i className="fas fa-exclamation-circle"> </i></div> : ''}
                            </div>
                            {/* Form not filled */}
                            <div className="container-fluid d-flex justify-content-center bgRed mt-2">
                                {error.errorMessage === true ?
                                    <div>Užpildyti laukai <i className="fas fa-exclamation-circle"> </i></div> : ''}
                            </div>
                            {/* Success message */}
                            <div className="container-fluid d-flex justify-content-center bgGreen mt-2">
                                {error.redirect === true ?
                                    <div>Registracija sekminga <i className="fas fa-check-circle"> </i></div> : ''}
                            </div>
                            <div className="d-flex justify-content-center py-2">
                                {error.redirect !== true ? <button className="btn btn-outline-light p-3" type="submit"
                                                                   value="submit">Registruotis</button>
                                    :
                                    <div>Prašome palaukti
                                        <div className="spinner-border ml-2" role="status"
                                             aria-hidden="true">
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        )
        :
        (<Redirect to="/login"/>);
}

export default Register;