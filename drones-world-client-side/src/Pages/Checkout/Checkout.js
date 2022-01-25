import { Button, Card, CardContent, CardMedia, Grid, Typography, CircularProgress } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useFirebase from '../../Hooks/useFirebase';


const Checkout = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const { id } = useParams();
    const { user, isLoading } = useFirebase();
    const [product, setProduct] = useState({});
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const history = useHistory();
    const status = 'Pending';


    useEffect(() => {
        fetch(`https://peaceful-reaches-96347.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    const productName = product.name;


    const handleAddress = event => {
        setAddress(event.target.value);
    }

    const handleNumber = event => {
        setNumber(event.target.value);
    }
    const orderSubmitHandle = (event) => {
        event.preventDefault();

        const newOrder = { productName, name, id, number, email, address, status };

        fetch('https://peaceful-reaches-96347.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Your order has been succesfully placed. Please wait for our admins to check your order, if your order is approved you'll be able to see the status in your dashboard. Thank your for choosing us.")
                    history.push('/dashboard/myorders')

                }
            })
    }
    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <div>
            <Typography align='center' style={{
                marginTop: '10px',
                marginBottom: '10px'
            }} variant='h4'> Please review your Order item and fill the form below to confirm order </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card align='center'>
                        <CardMedia
                            component="img"
                            height="194"
                            image={product.img} />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography variant='body2'>
                                {product.description}
                            </Typography>
                            <Typography variant="h6">
                                Price: {product.price}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <form align='center' onSubmit={orderSubmitHandle}>

                        <TextField
                            label="Enter Your Name"
                            defaultValue={user.displayName}
                            variant="outlined"
                            inputRef={nameRef}
                            style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }}
                        />
                        <br />
                        <TextField style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} label="Enter Your Email" defaultValue={user.email} variant="outlined" type='email' inputRef={emailRef} />
                        <br />
                        <TextField style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} label="Enter Your Mobile" variant="outlined" onBlur={handleNumber} />
                        <br />
                        <TextField style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} label="Enter Your Address" variant="outlined" onBlur={handleAddress} />
                        <br />
                        <Button style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} variant="contained" color="primary" type='submit'>Confirm Order</Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default Checkout;