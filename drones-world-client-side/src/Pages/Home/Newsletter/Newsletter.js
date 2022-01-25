import { Box, Button, TextField, Typography } from '@material-ui/core';
import React from 'react';

const Newsletter = () => {
    return (
        <Box mt='15px' sx={{
            border: '1px solid #e0e0e0',
            padding: '15px',
            backgroundColor: 'rgba(255, 37, 25, .1)',
        }} >
            <Typography variant="h4" align="center">Subscribe To Our Newsletter</Typography>
            <Typography variant="body1" align="center">Enter your email below to subscribe to our newsletter and get regular updates about our drones.</Typography>
            <form align='center' style={{
                marginTop: '8px',
            }}>
                <TextField id="outlined-basic" label="Your Email" variant="outlined" />
                <br />
                <Button style={{ marginTop: '5px', marginBottom: '5px' }} variant="contained" color="primary" type='submit'>Subscribe</Button>
            </form>
        </Box>
    );
};

export default Newsletter;