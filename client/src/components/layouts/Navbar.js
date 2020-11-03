import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { logout } from '../../Actions/authAction';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

  const guestLinks = (
    <ul>
        <li><Link to="/profiles">Developers</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
    </ul>
  );

  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>

      <li>
        <Link to="/posts">Posts</Link>
      </li>

      <li>
        <Link to="/dashboard" title="Dashboard">
          <i className="fas fa-user"></i>
          <span className="hide-sm"> Dashboard</span>
        </Link>
      </li>

      <li>
        <Link onClick={logout} to="#!" title="Logout">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm"> Logout</span>
        </Link>
      </li>
    </ul>
  );

  /* const authedLinks = () => {
    if (!loading && isAuthenticated) {
      return <Fragment> {authLinks} </Fragment>
    } else {
      return <Fragment> {guestLinks} </Fragment>
    }
  } */

  return (
    <nav className="navbar bg-dark">
      <h1><Link to="/"><i className="fas fa-code" /> DevConnector</Link></h1>
      {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks }</Fragment>)}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);
