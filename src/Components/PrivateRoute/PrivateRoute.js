import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { users, isLoding } = useAuth();
    if (isLoding) {
        return <Spinner animation="border" variant="primary" className='mt-5' />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                users.email ?
                    children
                    :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    >

                    </Redirect>
            }
        >
        </Route>
    );
};

export default PrivateRoute;