import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutMore = () => {
    return (
        <Container className="my-5">
            
            <Row>
                <Col md={6}>
                <h6>Who We Are</h6>
            <h1 className="mb-3 text-success">Know More About Ourseleves</h1>
                    <h3 className="text-secondary">We Are Your <span className="text-warning">Travel Mate</span></h3>
                    <p>YourTravelMates is a social platform where every traveler can share their experiences, find awesome travel buddies and gain invaluable knowledge from locals. The service welcomes everyone who is interested in traveling to join and help build the greatest travel community out there. It is a trip planning platform - a home for more than 50 000 travelers. The service aims to make travel experiences and getaways unforgettable by helping members find their most desired travel partner or companion from a varied list of users, bridging the gap between cultures, countries and travel experiences. YourTravelMates motivates and inspires travelers to talk about trips, share advice from locals, recommendations and more. </p>
                </Col>
                <Col md={6}>
                    <img className="img-fluid mt-3 rounded-3" src="https://templates.envytheme.com/traip/default/assets/images/about-us-image.jpg" alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMore;