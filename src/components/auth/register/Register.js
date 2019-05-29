import React, {useEffect, useState} from 'react';
import './Register.css';

function Register() {

    const [form, setForm] = useState({name: '', email: '', password: '', passwordConfirm: ''});
    const [error, setError] = useState({errorEmail: false, errorPassword: false, errorMessage: false, errorPasswordNotMatch: false});

    const handleSubmit = (e) => {
        e.preventDefault();

        if((form.name.length && form.email.length && form.password.length && form.passwordConfirm.length) === 0){
            setError({errorMessage: true})
        }else{
            if(form.password !== form.passwordConfirm){
                setError({errorPasswordNotMatch: true})
            }
        }

        alert(`Data: ${form.email} ${form.password} ${error.errorPasswordNotMatch}`)
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
        <div className="Register">
            <h4 className="d-flex justify-content-center">
                Registracija
            </h4>
            <form onSubmit={handleSubmit}>
                <div className="container form-group py-2">
                    <label className="d-flex justify-content-center">Vardas:</label>
                    <input type="text" value={form.name} className="form-control"
                           onChange={e => setForm({...form, name: e.target.value})}/>

                    <label className="d-flex justify-content-center">Paštas:</label>
                    <input type="text" value={form.email} className="form-control"
                           onChange={e => setForm({...form, email: e.target.value})}/>

                    <label className="d-flex justify-content-center">Slaptažodis:</label>
                    <input type="password" value={form.password} className="form-control"
                           onChange={e => setForm({...form, password: e.target.value})}/>


                    <label className="d-flex justify-content-center">Slaptažodio patvirtinimas:</label>
                    <input type="password" value={form.passwordConfirm} className="form-control"
                           onChange={e => setForm({...form, passwordConfirm: e.target.value})}/>
                    <div className="container-fluid d-flex justify-content-center bgRed mt-2">
                        {error.errorPasswordNotMatch === true ? 'Slaptažodis nesutapo.' : ''}
                    </div>
                    <div className="container-fluid d-flex justify-content-center bgRed mt-2">
                        {error.errorMessage === true ? 'Užpildyta blogai.' : ''}
                    </div>
                    <div className="d-flex justify-content-center py-3">
                        <button className="btn btn-outline-light p-3" type="submit" value="submit">Registruotis</button>
                    </div>
                </div>

            </form>
        </div>

    )
}

export default Register;