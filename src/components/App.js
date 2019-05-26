import React from 'react';
import './App.css';
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import Navbar from '../components/navbar/Navbar';
import Main from './router/Router';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#E3E3E3',
        },
        secondary: {
            main: '#000000',
        }
    },
    typography: {
        useNextVariants: true,

    },
});

function App() {
    return (
        <div>
            <MuiThemeProvider theme={theme}>
                <Navbar/>
                <Main/>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
