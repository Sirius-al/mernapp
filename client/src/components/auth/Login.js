import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import { login } from '../../Actions/authAction'


const Login = ({ login, isAuthenticated }) => {

    const [ loginData, setLoginData ] = useState({
        email: '',
        password: ''
    })

    const { email, password } = loginData

    const onFormDatachange = e => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value})
    }
    
    const onFormSubmit = async e => {
        e.preventDefault()
        
        login(email, password)
    }
    

    //* redirect is isAuthenticated
    if (isAuthenticated) {
      return <Redirect to='/dashboard'/>
    }

    return (
      <Fragment>
        <div>
          {/* <div className="alert alert-danger">Invalid credentials</div> */}
          <h1 className="large text-primary">Sign In</h1>
          <p className="lead">
            <i className="fas fa-user" /> Sign into Your Account
          </p>
          <form className="form" action="dashboard.html" onSubmit={e => onFormSubmit(e)}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={e => onFormDatachange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={e => onFormDatachange(e)}
                required />
            </div>
            <button type="submit" className="btn btn-primary" defaultValue="Login">Submit</button>
          </form>
          <p className="my-1">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </Fragment>
    );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { login })(Login);
