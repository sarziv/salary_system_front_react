import React, {useEffect, useState} from 'react';
import './Login.css';
import {Link,Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import * as API from '../../router/Api';

function Login() {
    const auth = useSelector(state => state.AuthReducer.authenticated);
    const dispatch = useDispatch();
    const [form, setForm] = useState({email: 'asdasdds@gmail.com', password: 'asdasdds@gmail.com'});
    const [error, setError] = useState({errorEmail: false, errorPassword: false, errorMessage: false, redirect: false});
    const handleSubmit = (e) => {
        e.preventDefault();

        if ((form.email.length && form.password.length) === 0) {
            setError({errorMessage: true})
        } else {
            setError({errorMessage: false});
            AxiosLogin(form.email, form.password);
        }

    };
    function get_rates() {
        axios.get(API.RATE, {})
            .then(function (response) {
                const rates = response.data[0];
                dispatch({
                    type: "GET_RATES", payload: {
                        rate_pallet: rates.pallet,
                        rate_lines: rates.lines,
                        rate_vip: rates.vip,
                        rate_extraHour: rates.extraHour,
                    }
            });

        }).catch(function () {
            //TODO Redirect to error page
        });
        ;
    }


    function AxiosLogin(email, password) {
        axios.post(API.LOGIN, {
            email: email,
            password: password,
        })
            .then(function (response) {
                setError({redirect: true});
                dispatch({
                    type: "LOGIN", payload: {
                        authenticated: true,
                        access_token: response.data.access_token,
                        token_type: response.data.token_type,
                        expires_at: response.data.expires_at,
                    }
                });
                get_rates();
            })
            .catch(function () {
                dispatch({type: "LOGOUT"})
            });
    }

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

    return auth !== true ? (
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
    ) : (
      <Redirect to="/statistic"/>
    );
}

export default Login;