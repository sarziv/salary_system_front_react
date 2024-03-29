import React, {useState} from 'react';
import './Recover.css';

function Recover() {

    const [form, setForm] = useState({email: ''});
    const [error, setError] = useState({emailNotProvided: false});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.email.length === 0) {
            setError({emailNotProvided: true})
        } else {
            setError({emailNotProvided: false})
        }
        alert(':O');
    };

    return (
        <div className="recover">
            <h4 className="d-flex justify-content-center">
                Paskyros atgavimas
            </h4>
            <div className="container d-flex justify-content-center">
                <form onSubmit={handleSubmit}>
                    <div className="container form-group py-2">
                        <label>Paštas:</label>
                        <input type="text" value={form.email} className="form-control"
                               onChange={e => setForm({...form, email: e.target.value})}/>
                        <div className="container-fluid d-flex justify-content-center bgRed mt-2">
                            {error.emailNotProvided === true ? 'Neužpildyta.' : ''}
                        </div>

                        <div className="d-flex justify-content-center py-3">
                            <button className="btn btn-outline-light p-3" type="submit" value="submit">Gauti slaptažodį
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Recover;