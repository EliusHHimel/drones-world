import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-reaches-96347.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Container className='text-center' mt={2}>
            <Grid container spacing={2} align='center'
                style={{
                    background: 'rgba(100, 75, 75, 0.2)',
                    marginTop: '20px',
                    border: '1px solid gray',
                    marginBottom: '10px',
                    padding: '10px'
                }}
            >

                <Typography variant='h3'>Currently Available Drones</Typography>


            </Grid>
            <Grid container spacing={2}>
                {
                    products.map(product =>
                        <Grid key={product._id} item xs={12} md={4}>
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
                                    <Link className='link-text' to={`/checkout/${product._id}`}>
                                        <Button style={{
                                            marginLeft: '150px'
                                        }} color='primary' variant='contained'>Buy Now</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>
        </Container>
    );
};

export default AllProducts;