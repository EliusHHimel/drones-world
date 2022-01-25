import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAdmin from '../../../../Hooks/useAdmin';
import useFirebase from '../../../../Hooks/useFirebase';

const AdminRoute = ({ children, ...rest }) => {
    const { user } = useFirebase();
    const { admin, isLoading } = useAdmin();

    if (isLoading) {
        return <CircularProgress />
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? (children) :

                (<Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}

                ></Redirect>)}

        >

        </Route>
    );
};

export default AdminRoute;