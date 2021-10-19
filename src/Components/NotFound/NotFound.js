import React from 'react';
import notFoundImg from '../../Images/notfound.jpg'

const NotFound = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={notFoundImg} alt="" className='img-fluid' />
        </div>
    );
};

export default NotFound;