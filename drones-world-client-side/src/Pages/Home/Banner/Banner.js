import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="banner-background">
                <center>
                    <div className="banner-texts">
                        <h5 className='welcome-msg'>Welcome to the World's Best Drone Resseller</h5>
                        <h1 className="agency-name">Drones World</h1>
                        <p className='short-desc'>We provide the worlds best drones all over the World at it's original price. We import drones from worlds best brands and sell them at it's original price.</p>
                        <Link className="learn-more" to='/about'>Learn More</Link>
                    </div>
                </center>
            </div>
        </div>
    );
};

export default Banner;