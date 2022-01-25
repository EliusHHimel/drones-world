import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';
import React from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = React.useState('');
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email };
        fetch('https://peaceful-reaches-96347.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                alert('Add admin successful.');
            })
    }
    return (
        <div>
            <h1 align='center'>Add a new Admin</h1>
            <form onSubmit={handleSubmit} align='center' style={{
                marginTop: '8px',
            }}>
                <TextField type='email' label="Enter email" variant="outlined" helperText='Enter the email of user whom you want to make an admin.' onBlur={handleEmail} />
                <br />
                <Button style={{ marginTop: '5px', marginBottom: '5px' }} variant="contained" color="primary" type='submit'>Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;