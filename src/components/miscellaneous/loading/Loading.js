import React from "react";
import './Loading.css';

function Loading() {

    return (
             <div className="d-flex justify-content-center">
                   <div className="lds-circle">
                     <div> </div>
                  </div>
             </div>

            );

}
export default Loading;