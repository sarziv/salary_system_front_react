import React, {useEffect, useState} from 'react';
import './Register.css';


function AxiosPost(name,email,password,passwordConfirmation) {
    let url = 'http://192.168.10.10/api/auth/signup';
      fetch(url,
        {
            method: "POST",
            mode:'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
            body:JSON.stringify({
                "name": {name},
                "email": {email},
                "password": {password},
                "password_confirmation": {passwordConfirmation}
            })
    })
.then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })

}

function Register() {

    const [form, setForm] = useState({name: '', email: '', password: '', passwordConfirm: ''});
    const [error, setError] = useState({
        errorEmail: false,
        errorPassword: false,
        errorMessage: false,
        errorPasswordNotMatch: false
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        if ((form.name.length && form.email.length && form.password.length && form.passwordConfirm.length) === 0) {
            setError({errorMessage: true})
        } else {
            if (form.password !== form.passwordConfirm) {
                setError({errorPasswordNotMatch: true})
            } else {
                AxiosPost(form.name,form.email,form.password,form.passwordConfirm);
            }
        }
    };



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

return (
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
                    <input type="text" value={form.email} className="form-control"
                           onChange={e => setForm({...form, email: e.target.value})}/>

                    <label>Slaptažodis:</label>
                    <input type="password" value={form.password} className="form-control"
                           onChange={e => setForm({...form, password: e.target.value})}/>


                    <label>Slaptažodio patvirtinimas:</label>
                    <input type="password" value={form.passwordConfirm} className="form-control"
                           onChange={e => setForm({...form, passwordConfirm: e.target.value})}/>
                    <div className="container-fluid d-flex justify-content-center bgRed mt-2">
                        {error.errorPasswordNotMatch === true ? 'Slaptažodis nesutapo.' : ''}
                    </div>
                    <div className="container-fluid d-flex justify-content-center bgRed mt-2">
                        {error.errorMessage === true ? 'Užpildyta blogai.' : ''}
                    </div>
                    <div className="d-flex justify-content-center py-3">
                        <button className="btn btn-outline-light p-3" type="submit" value="submit">Registruotis
                        </button>
                    </div>
                </div>

            </form>
        </div>
    </div>

);
}

export default Register;