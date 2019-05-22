import React from 'react';
import './Welcome.css';

function Welcome() {
        return (
            <div>
                <section>
                    <div className="wave">
                        <div className="bls"><b>BLS</b>
                        <div><b>S</b>alary</div>
                        <div><b>S</b>ystem</div>
                        </div>
                        <div className="joinButton"><button className="btn btn-outline-light">Prisijunk!</button></div>
                    </div>
                </section>
            </div>
        );
}

export default Welcome;