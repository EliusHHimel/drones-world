import React from 'react';
import Banner from '../Banner/Banner';
import Newsletter from '../Newsletter/Newsletter';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductsContainer></ProductsContainer>
            <Reviews></Reviews>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;