import { Button, CardContent, Grid, Typography } from '@material-ui/core';
import { Card, CardActions, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useFirebase from '../../../../Hooks/useFirebase';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const { isLoading, user } = useFirebase();

    useEffect(() => {
        fetch('https://peaceful-reaches-96347.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleOrderCancel = (id) => {

        const proceed = window.confirm(`Are you sure you want to cancel this order? [Note: This will delete the order from our database]
        `)
        if (proceed) {
            fetch(`https://peaceful-reaches-96347.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Canceled Successfully. Reload the page to see update in the UI.')
                    }
                });
        }
    }
    // Filter my orders
    const myAllOrders = orders.filter(myOrder =>
        myOrder.email === user.email
    )

    if (isLoading) {
        <CircularProgress />
    }

    return (
        <><Typography variant='h3' style={{
            marginBottom: '10px'
        }}>
            My Orders
        </Typography>
            <Grid container spacing={2}>

                {myAllOrders.map(order => <Grid key={order._id} item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                Customers Name: {order.name}
                            </Typography>
                            <Typography variant="body2">
                                Customers Email: {order.email}
                            </Typography>
                            <Typography variant="body2">
                                Customers Number: {order.number}
                            </Typography>
                            <Typography variant='body2'>
                                Product Name: {order.productName}
                            </Typography>
                            <Typography variant="body2">
                                Product Id: {order.id}
                            </Typography>
                            <Typography variant="body2">
                                Order Status: <span style={order.status === 'Approved' ? { color: 'green' } : { color: 'indianred' }}>{order.status}</span>
                            </Typography>
                        </CardContent>
                        <CardActions align='center' sx={{ ms: 2 }}>
                            <Button style={{
                                background: 'green',
                                color: 'white'
                            }} size="small" variant='contained' onClick={() => handleOrderCancel(order._id)}>Cancel</Button>
                        </CardActions>
                    </Card>
                </Grid>
                )}
            </Grid></>
    );
};

export default MyOrders;