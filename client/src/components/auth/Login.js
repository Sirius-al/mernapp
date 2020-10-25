import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [ loginData, setLoginData ] = useState({
        email: '',
        password: ''
    })

    const { email, password } = loginData

    const onFormDatachange = e => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value})
    }
    
    const onFormSubmit = e => {
        e.preventDefault()
        
        console.log(loginData)
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

export default Login;
