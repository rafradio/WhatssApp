import React, { useState, createContext, useEffect, useRef  } from 'react';
import './stylesApp.css';
import { Button } from '@mui/material';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AppMessages from './App';
import Footer from './Footer';


const AssideMain = (props) => {

    const makeAction = () => {
        // event.preventDefault();
        // let button1 = document.getElementById("webQuery");
        let bodyMessageNew = document.getElementById("message_area");
        bodyMessageNew.style.display = "flex";
    }

    return (
        <React.Fragment>
        <CssBaseline />
            <Box component="div" className='container'>
                <Box component="div" id="newNote" className="newnote_content">
                    <label for="IdInstance" className="form-field__label">IdInstance</label>
                    <input id="IdInstance" type="text" className="form-field__input" name="IdInstance" />
                    <label for="ApiToken" className="form-field__label">ApiToken</label>
                    <input id="ApiToken" type="text" className="form-field__input" name="ApiToken"  /><br />
                    <Button  variant="contained" id="Token" className="json_button" onClick={() => makeAction()}>Начать работать</Button>
                </Box>
                <AppMessages />
                <Footer />
            </Box>
        </React.Fragment>
    )
}


export default AssideMain;
