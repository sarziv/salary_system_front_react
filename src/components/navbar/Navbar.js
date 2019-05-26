import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../../image/bls-s-s_logo.png';
import './Navbar.css';
import { Link } from "react-router-dom";

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

function NavBar() {

    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState({icon: 'bars', sidebar: 'sidenavClosed'});

    useEffect(
        () => {
            if (open === true) {
                setNavbar({
                    icon: 'times', sidebar: 'sidenavOpen'
                })
            } else {
                setNavbar({
                    icon: 'bars', sidebar: 'sidenavClosed'
                })
            }
        }, [open],
    )

    return (
        <div style={styles.root}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <img style={styles.img} src={Logo} alt={Logo}/>
                    <Typography variant="h6" style={styles.grow}>
                    </Typography>
                    <IconButton onClick={() => setOpen(!open)} style={styles.menuButton} aria-label="Menu">
                        <i className={"fas fa-" + navbar.icon}></i>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={"sidenav " + navbar.sidebar}>
                 <Link to="/" onClick={() =>setOpen(!open)}>Home</Link>
                 <Link to="/login" onClick={() =>setOpen(!open)}>Login</Link>
            </div>
        </div>

    );
}


export default NavBar;