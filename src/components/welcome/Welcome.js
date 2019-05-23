import React from 'react';
import './Welcome.css';

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
                        <button className="btn btn-outline-light">Prisijungti</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Welcome;