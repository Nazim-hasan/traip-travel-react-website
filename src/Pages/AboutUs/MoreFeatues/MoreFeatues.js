import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MoreFeatues = () => {
    return (
        <Container className="my-5">
            <Row>
            <Col md={6}>
                    <img className="img-fluid rounded-3" src="https://templates.envytheme.com/traip/default/assets/images/tour-about.png" alt="" />
                </Col>
                <Col md={6}>
                    <h5 className="text-secondary fw-bold">We Are <span className="text-warning">Specialized</span> In</h5>
                    <h1 className="text-success">Tour & Travel Arrangement</h1>
                    <div className="my-5">
                        <h6 className="fw-bold">We Can Be A Great Travel Planner For You</h6>
                        <p>Planning a trip overseas, whether long or short, can seem overwhelming. But it doesn’t have to be! we’ll show you how to take the stress out of planning a trip, by laying out a simple step-by-step guide that.!</p>
                    </div>
                    <div>
                        <h6 className="fw-bold">We Guide You All Over The World</h6>
                        <p>We’ll show you how to take the stress out of planning a trip, by laying out a simple step-by-step guide that’ll ensure you don’t forget anything. Now you can stop stressing and start making your travel dreams a reality!</p>
                    </div>
                    <button className="btn btn-success">Discover More </button>
                </Col>
                
            </Row>
        </Container>
    );
};

export default MoreFeatues;