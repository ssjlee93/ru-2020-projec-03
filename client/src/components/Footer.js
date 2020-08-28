import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import "./footerStyle.css";

const Footer = () => (
    <div>
        <div className="phantom"></div>
        <div className="FooterContainer">
            <Typography variant="body1" className="title">Copyright 2020 - Team Ivysaur</Typography>
        </div>
    </div>
    
);
 
export default Footer;