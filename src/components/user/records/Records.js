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
        {id:3,date:'5-23',pallet:252,lines:252,VIP:1,hour:1}
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
                <ExpansionPanelDetails>
                    <Typography>
                        <ul>
                            <li>Paletės:{record.pallet}</li>
                            <li>Eilutės:{record.lines}</li>
                            <li>VIP:{record.VIP}</li>
                            <li>Valandos:{record.hour}</li>
                        </ul>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            );

        return (
            listDisplay
        )}

    return (
        <div className="container-fluid toppading">
            <h4 className="d-flex justify-content-center">Istorija</h4>
            <h6 className="d-flex">
                <div className="pl-3">Data</div>
                <div className="pl-4">Uždirbta</div>
            </h6>
           <DataDisplay userData={userData}/>
        </div>
    );
}

export default Records;