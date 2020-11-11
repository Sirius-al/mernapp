import React, { Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layouts/Spinner'
import { getProfileByID } from '../../Actions/profileActions'
import { Link, Redirect } from 'react-router-dom'

import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExp from './ProfileExp'
import ProfileEdu from './ProfileEdu'
import ProfileGithub from './ProfileGithub'

function Profile({ match, getProfileByID, profile: {profile, loading, error}, auth }) {

    useEffect(() => {
        getProfileByID(match.params.id)
    }, [getProfileByID, match.params.id])


    const mainFrame = () => {


        return (
          <Fragment>
              <Link to="/profiles" className="btn btn-light">
                Back To Profiles
              </Link>
              {auth.isAuthenticated && auth.loading === false && profile.user._id === auth.user._id && <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>}
              <div className="profile-grid my-1">
                {/* profile top section */}
                <ProfileTop profile={profile}/>
                {/* profile's About */}
                <ProfileAbout profile={profile}/>
                {/* Profile's Experience */}
                <ProfileExp profile={profile}/>
                {/* Profile's Education */}
                <ProfileEdu profile={profile}/>
                {/* Profile's Github */}
                <ProfileGithub profile={profile}/>
              </div>
          </Fragment>
        );
    }

    return (
        <Fragment>
            {profile === null || loading && !error.msg ? <Spinner /> : mainFrame()}
            {profile === null && !loading && error.msg &&  ( <Fragment>
              <h1 className="large">No profile found !</h1>
              <Link to="/profiles" className="btn btn-light">Back To Profiles</Link>
              </Fragment>)}
        </Fragment>
    )
}

Profile.propTypes = {
    getProfileByID: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
    
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfileByID })(Profile)

