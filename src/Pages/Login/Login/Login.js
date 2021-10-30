import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle}=useAuth();
    const location=useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from || '/home';

    const handleGoogleSignIn=()=>{
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
            console.log(result.user);
        })
    }

    return (
        <Container>
            <Row>
                <Col md={6} sm={12}>
                    <img src="https://doccure-react.dreamguystech.com/template/ece4acf86598eb59a48dc7f087716a21.png" alt="" className="img-fluid" />
                </Col>
                <Col md={6} sm={12}>
                    <div className="border p-5">
                        <h4>Login Traip</h4>
                        <button className="btn btn-danger w-100 my-4" onClick={handleGoogleSignIn}>Login with Google</button>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;