import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../Actions/profileActions'
import D_mainFrame from './D_mainFrame'

// import Spinner from '../layouts/Spinner'

const Dashboard = ({ getCurrentProfile, auth, profile }) => {

    useEffect(() => {
        getCurrentProfile(auth.token)
    }, [])

    const { user } = auth

    // if (profile.error.msg && profile.error.status) {
    //   console.log(profile.error.msg, '------', profile.error.status)
    // }

    const renderButtons = () => {
      return (
          <Fragment>
              <div className="dash-buttons">
                <Link to="/edit-profile" className="btn btn-light">
                  <i className="fas fa-user-circle text-primary" /> Edit Profile
                </Link>
                <Link to="/add-experience" className="btn btn-light">
                  <i className="fab fa-black-tie text-primary" /> Add Experience
                </Link>
                <Link to="/add-education" className="btn btn-light">
                  <i className="fas fa-graduation-cap text-primary" /> Add Education
                </Link>
              </div>
          </Fragment>
        );
    } 



    return (
      <Fragment>
            <div>
              <h1 className="large text-primary">Dashboard</h1>
              <p className="lead">
                <i className="fas fa-user" /> Welcome { user && user.name }
              </p>
              {profile.profile !== null ? <Fragment> {renderButtons()} </Fragment> : <Fragment> 
                {profile.error.msg} <br/> <Link to="/create-profile" className="btn btn-primary">
                   Create Profile </Link> </Fragment>}
            </div>
            <D_mainFrame />
          </Fragment>
    )
}
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
