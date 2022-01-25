import { Button, Grid, Typography } from '@material-ui/core';
import { TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const SignUp = () => {

    const { signInUsingGithub, signInWithGoogle, registrationHandler, handleEmail, handlePassword, handleName, handleNumber } = useFirebase();

    return (
        <div>
            <Typography align='center' variant='h3'>Sign up for an account</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} aling='center'>
                    <form align='center' onSubmit={registrationHandler}>
                        <TextField style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} label="Enter Your Name" variant="outlined" onBlur={handleName} />
                        <br />
                        <TextField style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} label="Enter Your Email" variant="outlined" type='email' onBlur={handleEmail} />
                        <br />
                        <TextField style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} label="Enter Your Mobile" variant="outlined" onBlur={handleNumber} />
                        <br />
                        <TextField style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} label="Enter Your Password" variant="outlined" type='password' onBlur={handlePassword} />
                        <br />
                        <Button style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} variant="contained" color="primary" type='submit'>Sign Up</Button>
                    </form>
                    <div align='center'>
                        <Link to='/login' className='link-text'><Button variant="outlined" style={{
                            background: '#009c22',
                            color: 'whitesmoke',
                            textAlign: 'center',
                            marginBottom: '10px',
                            width: '70%',
                        }}>Already Registered? Login</Button></Link>
                    </div>
                </Grid>
                <Grid item xs={12} md={2} align='center'>
                    <div className='or'>
                        <Typography align='center' variant='h6'>OR</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} md={5} align="center">
                    <div className="login-bg">
                        <Button style={{ marginTop: '5px', marginBottom: '5px', width: '70%', background: '#de5246', color: 'white' }} variant="contained" onClick={signInWithGoogle}>Login with Google</Button>
                        <Button style={{ marginTop: '5px', marginBottom: '5px', width: '70%', background: '#333', color: 'white' }} variant="contained" onClick={signInUsingGithub}>Login with GitHub</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default SignUp;