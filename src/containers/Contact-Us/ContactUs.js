import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import { GrInstagram } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import './ContactUs.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { borderRadius } from "@mui/system";

const ContactUs = ({ alt }) => {

    return (
        <div className={alt ? "contact-us d-flex flex-row align-items-center alt" : "contact-us d-flex flex-row align-items-center"}>
            <div className="contact w-100 row m-0 justify-content-center align-items-center">
                <div className="contact-info contact-height col-10 col-md-6 m-0 p-0 d-flex flex-row justify-content-center align-items-center order-1">
                    <div className="contact-vertical"></div>
                    <div className="contact-details-container">
                        <div className="contact-address">
                            <div className="contact-address-title">
                                Webarch
                            </div>
                            <div>
                                <p>Architects of the Web<br />
                                    SRMIST - KTR<br />
                                    Chennai - 603203
                                </p>
                            </div>
                        </div>
                        <div className="contact-details">
                            <div className="contact-details-title">
                                Contact
                            </div>
                            <br />
                            <div>
                                <div className="contact-detail-effect">
                                    <a href="tel:+91-956-076-8621">
                                        <span>
                                            <FaPhoneAlt />
                                        </span>
                                        +91 9560768621 <br />
                                    </a>
                                </div>
                                <br />
                                <div className="contact-detail-effect">
                                    <a href="mailto:contactwebarch@gmail.com">
                                        <span>
                                            <GrMail />
                                        </span>
                                        contactwebarch<br />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-icons">
                        <div className="contact-icon-styles">
                            <a href="https://www.instagram.com/webarchclub/" target="_blank" rel='noopener noreferrer'>
                                <GrInstagram />
                            </a>
                        </div>
                        <div className="contact-icon-styles">
                            <a href="https://github.com/WebarchClub" target="_blank" rel='noopener noreferrer'>
                                <GrGithub />
                            </a>
                        </div>
                        <div className="contact-icon-styles">
                            <a href="https://www.linkedin.com/company/webarchclub/mycompany/" target="_blank" rel='noopener noreferrer'>
                                <GrLinkedin />
                            </a>
                        </div>
                        <div className="contact-icon-styles">
                            <a href="https://www.facebook.com/webarchclub/" target="_blank" rel='noopener noreferrer'>
                                <GrFacebook />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-form-layout contact-height-1 col-10 col-md-6 m-0 p-0 d-flex flex-row justify-content-center align-items-center order-2">
                    <div className="contact-form-border d-flex justify-content-center">
                        <div className="contact-corner-borders contact-corner-borders--left"></div>
                        <div className="contact-corner-borders contact-corner-borders--right"></div>
                        <div className="contact-form-container">
                            <div className="contact-form-title">
                                <span>Ping Us</span>
                            </div>
                            <div className="contact-form-content">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 2, width: '30ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        style={{ width: '85%', backgroundColor: 'none' }}
                                        inputProps={{ style: { fontSize: 15, color: "#ffffff" } }}
                                        InputLabelProps={{ style: { fontSize: 15, color: "#c2c2c2" } }}
                                        id="standard-basic"
                                        label="NAME"
                                        variant="standard"
                                        margin="normal" />
                                    <TextField
                                        style={{ width: '85%' }}
                                        inputProps={{ style: { fontSize: 15, color: "#ffffff" } }}
                                        InputLabelProps={{ style: { fontSize: 15, color: "#c2c2c2" } }}
                                        id="standard-basic"
                                        label="EMAIL"
                                        variant="standard"
                                        margin="normal" />
                                    <TextField
                                        style={{ width: '85%' }}
                                        id="standard-textarea"
                                        label="TELL US SOMETHING"
                                        multiline
                                        variant="standard"
                                        maxRows={4}
                                        margin="normal"
                                        inputProps={{ style: { fontSize: 15, color: "#ffffff" } }}
                                        InputLabelProps={{ style: { fontSize: 15, color: "#c2c2c2" } }}
                                    />
                                    <Button
                                        style={{ width: '90%', backgroundColor: '#00e8ff', color: '#000000', fontWeight: 'bold', fontSize: '10px' }}
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >SUBMIT
                                    </Button>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default ContactUs;