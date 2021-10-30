import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {_id,name,date,reviews,shortDec,img}=props.service;
    return (
            <Col md={4}>
            <div className="shadow-lg rounded">
                <img className="rounded-top img-fluid" style={{maxHeight: "227px"}} src={img} alt="" width="350" height="247"/>
                <div className="ps-1 my-2 mx-2">
                    <div className="d-flex justify-content-between ">
                    <p><span className="badge bg-warning text-dark">{reviews} Reviews</span></p>
                    <p><span className="badge bg-success me-1">Travel Date {date}</span></p>
                    </div>
                    <h5 className="fw-bolder ">{name}</h5>
                    <small className="fw-light">{shortDec.slice(0,90)}</small>
                    </div>
                    <Link to={`/placeOrder/${_id}`}>
                    <div className="text-center">
                    <button className="btn btn-success mb-3 btn-sm">Book Now</button>
                    </div>
                    </Link>
            </div>
        </Col>
    );
};

export default Service;