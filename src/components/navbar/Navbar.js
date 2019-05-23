import React, { useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
    img:{
        width:150,
        height:50
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    const [open,setOpen] = useState(false);
    const [navbar,setNavbar] = useState('fas fa-bars');

    useEffect(
    ()=> {
        const navOpen='sidenavOpen';

        const element = document.getElementById('sidebar').classList;
        if(open === true){
            element.add(navOpen);
            setNavbar('fas fa-times');
        }else {
            element.remove(navOpen);
            setNavbar('fas fa-bars');
        }
    }
)

    return (
        <div className={classes.root}>

            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <img className={classes.img} src={Logo} alt={Logo}/>
                    <Typography variant="h6" className={classes.grow}>
                    </Typography>
                    <IconButton onClick={()=> setOpen(!open)} className={classes.menuButton}  aria-label="Menu">
                        <i className={navbar}></i>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div id="sidebar" className="sidenav sidenavOpen">
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