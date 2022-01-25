import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import React from 'react';

// Contact us page

const Contact = () => {
    return (
        <div align='center'>
            <h1>Contact Us</h1>
            <p>Do you have any other queries? Kindly contact us using the form below. We will reply as soon as we can.</p>
            <form className="container">
                <TextField
                    label="Enter Your Name"
                    variant="outlined"
                    style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }}
                />
                <br />
                <TextField style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} label="Enter Your Email" variant="outlined" type='email' />
                <br />

                <TextField style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} label="Enter Your Message" variant="outlined" />
                <br />
                <Button style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} variant="contained" color="primary" type='submit'>Send Message</Button>
            </form>
        </div>
    );
};

export default Contact;