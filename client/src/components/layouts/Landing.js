import React from "react";
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'



const Landing = ({isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard"/>
  }

  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Rapport</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts, get help from
            other developers, and connect with other Developers..
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);
