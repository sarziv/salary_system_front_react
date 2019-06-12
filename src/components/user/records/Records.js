import React from 'react';
import './Records.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function Records() {


    const userData = [
        {id:1,date:'5-25',pallet:250,lines:250,VIP:1,hour:1},
        {id:2,date:'5-24',pallet:251,lines:251,VIP:1,hour:1},
        {id:3,date:'5-23',pallet:252,lines:252,VIP:1,hour:1},

    ];

    function DataDisplay(props) {

        const listDisplay = props.userData.map((record) =>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <div className="d-flex justify-content-between">
                            <div className="float-left">{record.date}</div>
                            <div className="pl-4">
                                {record.pallet * 0.11 + record.lines * 0.09 + record.VIP * 3}€
                                + { record.hour !== 0 ? record.hour * 7 +'€': ''}
                            </div>
                        </div>
                    </Typography>
                </ExpansionPanelSummary>
                <div className="col-12">
                <ExpansionPanelDetails className="d-inline">
                    <Typography>
                        <ul className="list-group list-group-flush border-dark">
                            <li className="list-group-item">Paletės:
                                <span className="badge badge-primary badge-pill float-right">{record.pallet}</span>
                            </li>
                            <li className="list-group-item">Eilutės:
                                <span className="badge badge-primary badge-pill float-right">{record.lines}</span>
                            </li>
                            <li className="list-group-item">VIP:
                                <span className="badge badge-primary badge-pill float-right">{record.VIP}</span>
                            </li>
                            <li className="list-group-item">Valandos:
                                <span className="badge badge-primary badge-pill float-right">{record.hour}</span>
                            </li>
                        </ul>
                    </Typography>
                </ExpansionPanelDetails>
                </div>
            </ExpansionPanel>
            );

        return (
            listDisplay
        )}

    return (
        <div className="container-fluid toppading">
            <h4 className="d-flex justify-content-center">Istorija</h4>
            <h6 className="container d-flex">
                <div className="pl-3">Data</div>
                <div className="pl-4">Uždirbta</div>
            </h6>
            <div className="container">
           <DataDisplay userData={userData}/>
            </div>
           <div className="bottompadding"></div>
        </div>
    );
}

export default Records;