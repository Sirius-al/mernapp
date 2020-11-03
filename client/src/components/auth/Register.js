import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../Actions/alertActions';
import { register } from '../../Actions/authAction';

const Register = ({ setAlert, register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''

    })

    const onchange = e => {
        return setFormData({...formData, [e.target.name]: e.target.value})
    } 
    const { name, email, password, passwordConfirm } = formData


    const OnFormSubmit = e => {
        e.preventDefault();

        if (password !== passwordConfirm) {
            return setAlert('passwords didn\'t match', 'danger')
        }

        register({ name, email, password })
    }

    //* redirect is isAuthenticated
    if (isAuthenticated) {
      return <Redirect to='/dashboard'/>
    }

    return (
      <Fragment>
        <div>
          <h1 className="large text-primary">Sign Up</h1>
          <p className="lead">
            <i className="fas fa-user" /> Create Your Account
          </p>
          <form className="form" action="create-profile.html" onSubmit={e => OnFormSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e =>onchange(e)}
                name="name"
                required 
                />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={e =>onchange(e)}
                required
                />
              <small className="form-text">
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                name="password"
                minLength={6}
                value={password}
                onChange={e => onchange(e)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirm"
                minLength={6}
                value={passwordConfirm}
                onChange={e => onchange(e)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary" defaultValue="Register">Register</button>
          </form>
          <p className="my-1">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </Fragment>
    );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register);
