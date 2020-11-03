import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            if (isAuthenticated && !loading) {
              return <Component {...props} />
            } else {
              return <Redirect to='/login' />
            }
        }} />
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute);
