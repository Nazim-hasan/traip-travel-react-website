import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const HomeServices = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
    fetch('https://rocky-sea-97653.herokuapp.com/plans')
    .then(res => res.json())
    .then(result=> setServices(result))
    },[])
    return (
        <Container className="my-5">
            <div className="text-center">
            <h5 className="text-secondary">The Top Places For</h5>
            <h1 className="text-success mb-5">Planning Your Holiday
            <img className="img-icon" src="https://cdn-icons.flaticon.com/png/512/2627/premium/2627036.png?token=exp=1635620004~hmac=eacb4fd0991c02e66f21c65c43799d1d" alt="" /></h1>
            </div>
            <Row className="g-3">
                {
                    services.map(serv =><Service key={serv._id} service={serv}></Service>)
                }
            </Row>
        </Container>
    );
};

export default HomeServices;