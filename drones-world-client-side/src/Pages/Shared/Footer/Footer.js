import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <Grid container spacing={2}>
                <Grid item sm={12} md={2}>
                </Grid>
                <Grid item sm={12} md={3}>
                    <Typography variant='h3'>Drones <span style={{ color: 'crimson' }}>World</span></Typography>
                    <Typography variant='body1'>
                        We provide the worlds best drones all over the World <br /> at it's original price. We import drones from worlds best brands and sell them at it's original price.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={1}>
                </Grid>
                <Grid item sm={12} md={3}>
                    <Typography variant='h6'>Important Links</Typography>
                    <ul className="text-start">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/stories">Stories</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/partners">Partnerships</Link></li>
                        <li><Link to="/faq">Frequently Asked Questions</Link></li>
                    </ul>
                </Grid>
                <Grid item sm={12} md={3} sx={{
                    marginBottom: '10px'
                }}>
                    <Typography variant='h6'>Get in Touch</Typography>
                    <div className='social-media'>
                        <a target='_blank' rel='noreferrer' href="https://facebook.com/EliusHHimel"><img src="https://i.ibb.co/mXLCjMZ/Facebook.png" alt="Facebook" border="0" /></a>
                        <a target='_blank' rel='noreferrer' href="https://instagram.com/EliusHHimel"><img src="https://i.ibb.co/JsvvSsf/Insta-Gram.png" alt="Insta-Gram" border="0" /></a>
                        <a target='_blank' rel='noreferrer' href="https://linkedin.com/in/hmeliushossainhimel"><img src="https://i.ibb.co/LkQypTq/Linkedin.png" alt="Linkedin" border="0" /></a>
                        <a target='_blank' rel='noreferrer' href="https://pinterest.com/EliusHHimel"><img src="https://i.ibb.co/R2rpvtZ/Pinterest.png" alt="Pinterest" border="0" /></a>
                        <a target='_blank' rel='noreferrer' href="https://twitter.com/EliusHHimel"><img src="https://i.ibb.co/9qgLvDc/Twitter.png" alt="Twitter" border="0" /></a>
                        <a target='_blank' rel='noreferrer' href="https://youtube.com/HmEliusHossainHimel"><img src="https://i.ibb.co/KLJN0Lq/Youtube.png" alt="Youtube" border="0" /></a>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;