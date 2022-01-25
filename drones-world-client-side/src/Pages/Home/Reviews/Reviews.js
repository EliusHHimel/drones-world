import { Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-reaches-96347.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div style={{ marginTop: '15px' }}>
            <Container className='text-center' mt={4}>
                <Grid container spacing={2} align='center'
                    style={{
                        background: 'rgba(100, 75, 75, 0.2)',
                        marginTop: '20px',
                        border: '1px solid gray',
                        marginBottom: '10px',
                        padding: '10px'
                    }}
                >

                    <Typography variant='h3'>Customer Reviews</Typography>


                </Grid>
                <Grid container spacing={2}>
                    {
                        reviews.map(review =>
                            <Grid key={review._id} item xs={12} md={4}>
                                <Card align='center'>
                                    <img src={review.photoURL} alt='avatar' style={{
                                        width: '30%',
                                        borderRadius: '50%',
                                    }} />
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {review.name}
                                        </Typography>
                                        <Typography variant="h6">
                                            <Rating name="read-only" value={review.value} readOnly />
                                        </Typography>
                                        <Typography variant='body2'>
                                            {review.review}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Reviews;