import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../../image/bls-s-s_logo.png';
import './Navbar.css';
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

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
    const auth = useSelector(state=>state.AuthReducer.authenticated);
    const [open, setOpen] = useState(false);
    const [navbar, setNavbar] = useState({iconParams :{icon: 'bars',iconColor:'faBars'}, sidebar: 'sidenavClosed'});

    useEffect(
        () => {
            if (open === true) {
                setNavbar({
                    iconParams:{icon: 'times',Color:'faTimes'}, sidebar: 'sidenavOpen'
                })
            } else {
                setNavbar({
                    iconParams:{icon: 'bars',Color:'faBars'}, sidebar: 'sidenavClosed'
                })
            }
        }, [open],
    );

    return (
        <div style={styles.root}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <img style={styles.img} src={Logo} alt={Logo}/>
                    <Typography variant="h6" style={styles.grow}>
                    </Typography>
                    <IconButton onClick={() => setOpen(!open)} style={styles.menuButton} aria-label="Menu">
                        <i className={"fas fa-" + navbar.iconParams.icon +' '+ navbar.iconParams.Color}> </i>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={"sidenav " + navbar.sidebar}>
                {   auth !== true ?
                    <div>
                        <Link to="/" onClick={() =>setOpen(!open)}>Pagrindinis</Link>
                        <Link to="/login" onClick={() =>setOpen(!open)}>Prisijungti</Link>
                        <Link to="/register" onClick={() =>setOpen(!open)}>Registruotis</Link>
                    </div>
                    :
                    <div>
                        <Link to="/statistic" onClick={() =>setOpen(!open)}>Uždirbta</Link>
                        <Link to="/add" onClick={() =>setOpen(!open)}>Pildyti</Link>
                        <Link to="/records" onClick={() =>setOpen(!open)}>Istorija</Link>
                        <Link to="/search" onClick={() =>setOpen(!open)}>Paieška</Link>
                        <div className="logoutButton"> <Link to="/logout" onClick={() =>setOpen(!open)}>Atsijungti</Link></div>
                    </div>
                }
            </div>
        </div>
    );
}


export default NavBar;