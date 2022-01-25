import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const AddProduct = () => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [img, setImg] = useState('')

    const handleName = event => {
        setName(event.target.value);
    }
    const handleDescription = event => {
        setDescription(event.target.value);
    }
    const handlePrice = event => {
        setPrice(event.target.value)
    }
    const handleImg = event => {
        setImg(event.target.value);
    }


    // const priceRef = useRef('');
    const handleAddProduct = event => {
        event.preventDefault();



        console.log(name)

        const newProduct = { name, price, img, description };

        fetch('https://peaceful-reaches-96347.herokuapp.com/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Product added succesfully.")

                }
            })


    }
    return (
        <div className='ms-5 ps-5'>
            <h2>Add a Product in your Products list</h2>
            <form onSubmit={handleAddProduct} className='package-form'>
                <TextField style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} label="Enter Your Product Name" variant="outlined" onBlur={handleName} />
                <br />
                <TextField style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} label="Enter Your Product Description" variant="outlined" onBlur={handleDescription} />
                <br />
                <TextField style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} label="Enter Your Product Price" variant="outlined" onBlur={handlePrice} />
                <br />
                <TextField style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} label="Enter Your Product Image URL" variant="outlined" onBlur={handleImg} />
                <br />
                <Button style={{ marginTop: '5px', marginBottom: '5px', width: '70%' }} variant="contained" color="primary" type='submit'>Add Product</Button>

            </form>
        </div>
    );
};

export default AddProduct;