import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Response = () => {
    const { register, handleSubmit, formState: { errors } ,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <img className="img-fluid rounded-3" src="https://templates.envytheme.com/traip/default/assets/images/contact-grid-bg.jpg" alt="" />
                </Col>
                <Col md={6}>
                    <h5>Contact With Us</h5>
                    <h2 className="mb-4 text-success">We'll Love To Hear From You</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        
                        <input className="form-control mb-3" id="name" {...register("name", { required: true })} placeholder="Name*"/>
                        {errors.name && <p className="text-danger">This field is required</p>}
                        <input className="form-control mb-3" id="email" {...register("email", { required: true })} placeholder="Email*"/>
                        {errors.email && <p className="text-danger">This field is required</p>}
                        <input className="form-control mb-3" id="phoneNo" {...register("phoneNo", { required: true })} placeholder="Phone No.*"/>
                        {errors.phoneNo && <p className="text-danger">This field is required</p>}
                        <input className="form-control mb-3" id="emailSubject" {...register("emailSubject", { required: true })} placeholder="Email Subject*"/>
                        {errors.emailSubject && <p className="text-danger">This field is required</p>}


                        
                        <textarea className="form-control mb-3" id="yourMessage" {...register("yourMessage", { required: true })} placeholder="Your Message* "/>
                        {errors.yourMessage && <p className="text-danger">This field is required</p>}

                        
                        
                        <p className="text-center mt-2">
                        <input className="btn btn-success my-2" type="submit" value="Send Message"/></p>
                </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Response;