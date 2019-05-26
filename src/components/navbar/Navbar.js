import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../../image/bls-s-s_logo.png';
import './Navbar.css';

//Top navbar
const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    img: {
        width: 150,
        height: 50
    },
};

function ButtonAppBar(props) {
    const {classes} = props;
    const [navbar, setNavbar] = useState(false);
    const [open, setOpen] = useState({icon:'bars',sidebar:'sidenavClosed'});

    const toogleNavbar = (props) => {
        if(navbar === true){
            setOpen({
               ...open,icon: 'times',sidebar: 'sidenavOpen'
            })

        }else{
            setOpen({
                ...open,icon: 'bars',sidebar: 'sidenavClosed'
            })
        }
        setNavbar(!navbar);
    }

    return (
        <div className={classes.root}>

            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <img className={classes.img} src={Logo} alt={Logo}/>
                    <Typography variant="h6" className={classes.grow}>
                    </Typography>
                    <IconButton onClick={toogleNavbar} className={classes.menuButton} aria-label="Menu">
                        <i className={"fas fa-" + open.icon}></i>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={"sidenav " + open.sidebar}>
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="/">Clients</a>
                <a href="/">Contact</a>
            </div>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);