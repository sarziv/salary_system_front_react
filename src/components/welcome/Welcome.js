import React from 'react';
import './Welcome.css';
import {Link} from 'react-router-dom';
function Welcome() {
    return (
        <div>
            <section>
                <div className="wave">
                    <div className="bls">
                        <b>BLS</b>
                    </div>
                    <div className="bls">
                        <b>S</b>alary
                    </div>
                    <div className="bls">
                        <b>S</b>ystem
                    </div>
                    <div className="bls"><h5>Prisijunk prie komandos!</h5></div>
                    <div className="joinButton">
                        <Link to="/login">
                        <button className="btn btn-outline-light p-3 mr-3">Prisijungti</button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-outline-light p-3">Registruokis</button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Welcome;