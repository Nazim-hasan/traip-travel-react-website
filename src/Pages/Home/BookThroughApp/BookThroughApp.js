import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const BookThroughApp = () => {
    return (
        <Container>
            <Row>
                
                
                <Col md={6} sm={12} className="my-auto">
                    <h5 className="mb-3">Download Our Mobile App</h5>
                    <h1 className="text-dark">Book Your First Tour Through Our Mobile App</h1>
                    <p className="text-dark">When the first smartphone was introduced to the public in the late ‘00s, nobody could predict the impact it would have on our daily lives. </p>
                    <div className="d-flex mt-3">
                    <button className="btn btn-success px-3 py-2 me-3">Download From Appstore</button>
                    <button className="btn btn-danger  px-3 py-2">Download From Playstore</button>
                    </div>
                </Col>
                <Col md={6} className="mt-2">
                    <img className="img-fluid w-75" src="https://templates.envytheme.com/traip/default/assets/images/download.png" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default BookThroughApp;