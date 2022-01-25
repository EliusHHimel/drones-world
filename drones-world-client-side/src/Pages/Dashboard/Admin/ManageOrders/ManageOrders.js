import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, Grid, Typography, CircularProgress } from '@material-ui/core';
import useFirebase from '../../../../Hooks/useFirebase';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const { isLoading } = useFirebase();
    useEffect(() => {
        fetch('https://peaceful-reaches-96347.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleOrderApprove = (order, id) => {
        order.status = 'Shipped'
        fetch(`https://peaceful-reaches-96347.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order Status Updated to Shipped Successfully.')
                }
            })
    }

    const handleDelete = id => {
        const proceed = window.confirm(`Are you sure you want to delete this order? [Note: This will delete the order from our database]
        `)
        if (proceed) {
            fetch(`https://peaceful-reaches-96347.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Deleted Successfully. Reload the page to see update in the UI.')
                    }
                });
        }

    }
    if (isLoading) {
        return <CircularProgress />
    }

    return (
        <><Typography variant='h3' style={{
            marginBottom: '10px'
        }}>
            Manage Orders
        </Typography>
            <Grid container spacing={2}>

                {orders.map(order => <Grid key={order._id} item xs={12} md={4}>
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
                                Order Status: <span style={order.status === 'Shipped' ? { color: 'green' } : { color: 'indianred' }}>{order.status}</span>
                            </Typography>
                        </CardContent>
                        <CardActions align='center' sx={{ ms: 2 }}>
                            <Button style={{
                                background: 'green',
                                color: 'white'
                            }} size="small" variant='contained' onClick={() => handleOrderApprove(order, order._id)}>Mark as Shipped</Button>
                            <Button style={{
                                background: '#d9534f',
                                color: 'white'
                            }} size="small" variant='contained' onClick={() => handleDelete(order._id)}>Delete</Button>
                        </CardActions>
                    </Card>
                </Grid>
                )}
            </Grid></>
    );
};

export default ManageOrders;