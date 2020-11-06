import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux'
import Spinner from '../layouts/Spinner'
import { getAllProfiles } from '../../Actions/profileActions'
import ProfilesItems from './ProfilesItems'

const Profiles = ({ profile: { profiles, loading}, getAllProfiles }) => {

    useEffect(() => {
        getAllProfiles()
    }, [getAllProfiles])

    const profileBody = () => {
        return (
          <Fragment>
            <h1 className="large text-primary">Developers</h1>
            <p className="lead">
              <i className="fab fa-connectdevelop" /> Browse and connect with
              developers
            </p>
            <div className="profiles">
                {!profiles.length > 0 ? <Spinner /> : (
                    profiles.map(profile => {
                        return<ProfilesItems key={profile._id} profile={profile} />
                    })
                )}
              </div>
          </Fragment>
        );
    }


    return (
        <Fragment>
            {loading ? <Spinner /> : profileBody()}
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getAllProfiles })(Profiles);
