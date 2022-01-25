import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography, } from '@material-ui/core';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-reaches-96347.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm(`Are you sure you want to delete this product? [Note: This will delete the product from our database]
        `)
        if (proceed) {
            fetch(`https://peaceful-reaches-96347.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product Deleted Successfully. Reload the page to see update in the UI.')
                    }
                });
        }

    }

    return (
        <><Typography variant='h3' style={{
            marginBottom: '10px'
        }}>
            Manage Your Products
        </Typography><Grid container spacing={2}>

                {products.map(product => <Grid key={product._id} item xs={12} md={4}>
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
                        <CardActions align='center'>
                            <Button style={{
                                marginLeft: '40%',
                                background: '#d9534f',
                                color: 'white'
                            }} size="small" variant='contained' onClick={() => handleDelete(product._id)}>Delete</Button>
                        </CardActions>
                    </Card>
                </Grid>
                )}
            </Grid></>
    );
};

export default ManageProducts;