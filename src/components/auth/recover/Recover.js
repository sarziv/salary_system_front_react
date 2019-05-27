import React, {useState} from 'react';
import './Recover.css';

function Recover() {

    const [form, setForm] = useState({email: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.email !== '') {
            alert(`Recover email: ${form.email}`)
        } else {
            alert(`No email provided!`)
        }

    }

    return (
        <div className="recover">
            <h4 className="d-flex justify-content-center">
                Paskyros atgavimas
            </h4>
            <form onSubmit={handleSubmit}>
                <div className="container form-group py-2">
                    <label className="d-flex justify-content-center">Paštas:</label>
                    <input type="text" value={form.email} className="form-control"
                           onChange={e => setForm({...form, email: e.target.value})}/>


                    <div className="d-flex justify-content-center py-3">
                        <button className="btn btn-outline-light p-3" type="submit" value="submit">Gauti slaptažodį
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Recover;