import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { useHistory, useLocation } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { emailLogin, getEmail, getPass, clearInputs } = useForm();
    const { googleSignIn, setIsLoading, error, successAlert, facebookSignIn, setError, failAlert } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    const handlegoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                successAlert();
                history.push(redirectUrl);
            })
            .catch(err => {
                setError(err.message)
                failAlert();
            })
            .finally(() => setIsLoading(false))
    }

    const handlefacebookSignIn = () => {
        facebookSignIn()
            .then(res => {
                successAlert();
                history.push(redirectUrl);
            })
            .catch(err => {
                setError(err.message)
                failAlert();
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <Container className='lg-p-5 sm-p-0 my-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='lg-w-75 sm-w-100 bg-light p-5 mt-5' style={{ boxShadow: ' 0px 0px 180px 10px rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                <div className="text-primary">
                    <div className="display-5 mt-4 mb-3">
                        <i className="fas fa-clinic-medical"></i> NapaTonix <i className="fas fa-clinic-medical"></i>
                    </div>
                    <div className='display-6 mb-3 fw-bold text-uppercase'>
                        User Login
                    </div>
                </div>
                <Form onSubmit={emailLogin}>
                    <Form.Floating className="mb-3 ">
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                            onBlur={getEmail}
                        />
                        <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                            onBlur={getPass}
                        />
                        <label htmlFor="floatingPasswordCustom">Password</label>
                    </Form.Floating>
                    <Button variant='outline-primary' className='mt-3 mb-3' type='submit' onClick={clearInputs}>LOGIN <i class="fas fa-sign-in-alt"></i></Button><br />
                    <p>{error}</p>
                    <p>More Login Options</p>
                    <Button variant='outline-primary' className='mt-1' onClick={handlegoogleSignIn}><i className="fab fa-google"></i> LOGIN USING GOOGLE</Button>
                    <br />
                    <Button variant='outline-primary' className='mt-3' onClick={handlefacebookSignIn}><i className="fab fa-facebook"></i> LOGIN USING FACEBOOK</Button>
                    <br />
                    <Link to='/signup'><p className='mt-3'>DON'T HAVE AN ACCOUNT? CREATE A FREE ACCOUNT NOW</p></Link>
                </Form>
            </div>
        </Container>
    );
};

export default Login;