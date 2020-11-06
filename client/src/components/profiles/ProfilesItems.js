import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ProfilesItems = ({ profile }) => {

    const { user: { _id, name, avatar }, company, status, location, skills } = profile

    return (
        <Fragment>
            <div className="profile bg-light">
                <img
                  className="round-img"
                  src={avatar}
                  alt={`${name}'s img`}
                />
                <div>
                  <h2>{name}</h2>
                  <p>{status} at {company}</p>
                  <p>{location}</p>
                  <Link to={`/profile/${_id}`} className="btn btn-primary">
                    View Profile
                  </Link>
                </div>
                <ul>
                    {skills.slice(0, 5).map((skill, i) => {
                        return (
                            <li key={i} className="text-primary">
                                <i className="fas fa-check" /> {skill}
                            </li>
                        )
                    })}
                </ul>
              </div>
        </Fragment>
    );
}

export default ProfilesItems;
