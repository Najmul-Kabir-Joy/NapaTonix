import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const Profile = () => {
    const { users } = useAuth();
    const { displayName, email, phoneNumber, photoURL, emailVerified } = users;
    console.log(users)
    return (
        <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h4 className="mt-5">{displayName} welcome to NapaTonix </h4>
            <div className='text-start'>
                <img className='mt-3 mb-3' src={photoURL} alt="" />
                <h6><span className='text-primary'>Name: </span>{displayName}</h6>
                <h6><span className='text-primary'>Your email address:</span> {email}</h6>
                {
                    emailVerified ? <small><i className="fas fa-check-circle text-success me-2"></i>Email Verified</small> : <small><i class="fas fa-times text-danger me-2"></i>Email not Verified</small>
                }
                <h6><span className='text-primary'>Phone: </span>{phoneNumber}</h6>
            </div>
        </Container>
    );
};

export default Profile;