import React from 'react';
import './Records.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Records() {

    const userData = [
        {id:1,date:5-28,pallet:250,lines:250,VIP:1,hour:1},
        {id:1,date:5-27,pallet:251,lines:251,VIP:1,hour:1},
        {id:1,date:5-21,pallet:252,lines:252,VIP:1,hour:1},

    ]

    return (

        <div className="container-fluid toppading">
            <h4 className="d-flex justify-content-center">Istorija</h4>
            <h6 className="d-flex">
                <div className="pl-3">Laikas</div>
                <div className="pl-4">Uždirbta</div>
            </h6>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <div className="d-flex justify-content-between">
                            <div className="float-left">5-28</div>
                            <div className="pl-5">47.24$</div>
                        </div>
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                       <ul>
                           <li>Paletės:250</li>
                           <li>Eilutės:250</li>
                           <li>VIP:1</li>
                           <li>Valandos:1</li>
                       </ul>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default Records;