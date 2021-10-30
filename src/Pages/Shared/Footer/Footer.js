import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="mt-5 mb-2 text-dark bg-white pt-5 pb-0">
            <Container>
                <Row>
                    <Col md={3}>
                        <h4 className='text-success'>About Traip</h4>
                        <p className='text-dark'><small>The Traip  is a private retailer or public service that provides travel and tourism related services to the general .</small></p>
                        <p className='text-success'><small>Info@traip.Com</small></p>
                    </Col>
                    <Col md={3}>
                        <h4 className='text-success'>Popular Tour</h4>
                        <p className='text-dark'>Blog</p>
                        <p className='text-dark'>Shop</p>
                        <p className='text-dark'>FAQ's</p>
                        <p className='text-dark'>Privacy Policy</p>
                    </Col>
                    <Col md={3}>
                        <h4 className='text-success'>Import Links</h4>
                        <p className='text-dark'>Destination</p>
                        <p className='text-dark'>Get in Touch</p>
                        <p className='text-dark'>Who we Are</p>
                        <p className='text-dark'>Contact Us</p>
                    </Col>
                    <Col md={3}>
                        <h4 className='text-success'>Contact Details</h4>
                        <p className='text-dark'><small>250 Main Street, Brooklyn, NY 52143, US</small></p>
                        <p className='text-dark'><small> Tell (800)-456-789</small></p>
                        <p className='text-dark'><small>  Email info@icloud.com</small></p>
                    </Col>
                    
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;