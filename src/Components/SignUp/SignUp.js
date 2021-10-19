import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useForm from '../../Hooks/useForm';

const SignUp = () => {
    const { getEmail, getPass, getName, handleRegistration, clearInputs } = useForm();
    const { googleSignIn, error, facebookSignIn } = useAuth();
    return (
        <div>
            <Container className='lg-p-5 sm-p-0 my-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='lg-w-75 sm-w-100 bg-light p-5 mt-5' style={{ boxShadow: ' 0px 0px 180px 10px rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <div className="text-primary">
                        <div className="display-5 mt-4 mb-3">
                            <i className="fas fa-clinic-medical"></i> NapaTonix <i className="fas fa-clinic-medical"></i>
                        </div>
                        <div className='display-6 mb-3 fw-bold text-uppercase'>
                            User Registration
                        </div>
                    </div>
                    <Form onSubmit={handleRegistration}>
                        <Form.Floating className="mb-3 ">
                            <Form.Control
                                id="floatingInputCustom"
                                type="text"
                                placeholder="Your Name"
                                onBlur={getName}
                            />
                            <label htmlFor="floatingInputCustom">User Name</label>
                        </Form.Floating>
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
                        <Button variant='outline-primary' className='mt-3 mb-3' type="submit" onClick={clearInputs}>SIGN UP <i class="fas fa-sign-in-alt"></i></Button><br />
                        {error && <p>{error}</p>}
                        <p>More Signup Options</p>
                        <Button variant='outline-primary' className='mt-1' onClick={googleSignIn}><i className="fab fa-google"></i> SIGNUP USING GOOGLE</Button>
                        <br />
                        <Button variant='outline-primary' className='mt-3' onClick={facebookSignIn}><i className="fab fa-facebook"></i> SIGNUP USING FACEBOOK</Button>
                        <br />
                        <Link to='/login'><p className='mt-3'>ALREADY HAVE AN ACCOUNT? TRY LOGIN NOW</p></Link>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;