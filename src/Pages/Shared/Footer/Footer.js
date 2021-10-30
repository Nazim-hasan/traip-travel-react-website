import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="mt-5 mb-2 text-dark bg-white pt-5 pb-0">
            <Container>
                <Row>
                    <Col md={3}>
                        <h4 className='text-success'>About Traip</h4>
                        <p><small>The Traip  is a private retailer or public service that provides travel and tourism related services to the general public to offer different kinds of travelling packages.</small></p>
                        <p><small>Info@traip.Com</small></p>
                    </Col>
                    <Col md={3}>
                        <h4 className='text-success'>Popular Tour</h4>
                        <p>Blog</p>
                        <p>Shop</p>
                        <p>FAQ's</p>
                        <p>Privacy Policy</p>
                    </Col>
                    <Col md={3}>
                        <h4 className='text-success'>Import Links</h4>
                        <p>Destination</p>
                        <p>Get in Touch</p>
                        <p>Who we Are</p>
                        <p>Contact Us</p>
                    </Col>
                    <Col md={3}>
                        <h4 className='text-success'>Contact Details</h4>
                            <p><small>250 Main Street, Brooklyn, NY 52143, US</small></p>
                            <p><small> Tell (800)-456-789</small></p>
                            <p><small>  Email info@icloud.com</small></p>
                    </Col>
                    
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;