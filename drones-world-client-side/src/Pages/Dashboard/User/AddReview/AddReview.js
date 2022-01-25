import React, { useRef, useState } from 'react';
import { Button, Typography, CircularProgress } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import useFirebase from '../../../../Hooks/useFirebase';
import Rating from '@mui/material/Rating';

const AddReview = () => {
    const { user, isLoading } = useFirebase();
    const [value, setValue] = useState(0);
    const nameRef = useRef('');
    const name = nameRef.current.value;
    const [review, setReview] = useState('');
    const handleReview = (event) => {
        setReview(event.target.value)
    };

    const photoURL = user.photoURL || 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png';

    const reviewSubmitHandle = (event) => {
        event.preventDefault();

        const newReview = { name, review, value, photoURL };

        fetch('https://peaceful-reaches-96347.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Review Submitted. Thanks for your review.")

                }
            })
    }

    if (isLoading) {
        return (
            <CircularProgress />
        )
    }
    return (
        <div>
            <Typography align='center' variant="h4">
                Add Review
            </Typography>
            <form align='center' onSubmit={reviewSubmitHandle}>
                <Typography align='center' variant="h6">
                    Select a rating
                </Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <br />
                <TextField
                    label="Enter Your Name"
                    defaultValue={user.displayName}
                    variant="outlined"
                    inputRef={nameRef}
                    style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }}
                />
                <br />
                <TextField style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} label="Enter Your Review Text" variant="outlined" onBlur={handleReview} />
                <br />
                <Button style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} variant="contained" color="primary" type='submit'>Submit Review</Button>
            </form>
        </div>
    );
};

export default AddReview;