import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from 'react-moment'

const ProfileExp = ({ profile: { experience } }) => {


  const exps = (exp, i) => {
    
    const { current, title, company, from, to, description } = exp;

    return (
      <div key={i}>
        <h3 className="text-dark">{company}</h3>
        <p>
          <Moment format='YYYY/MM/DD'>{from}</Moment>
          {" - "}
          {current ? 'Current' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
        </p>
        <p>
          <strong>Position: </strong>{title}
        </p>
        {description && (
          <p>
            <strong>Description: </strong>{description}
          </p>
        )}
      </div>
    );
  };

  return (
    <Fragment>
      <div className="profile-exp bg-white p-2">
        <h2 className="text-primary">Experience</h2>
        {experience.length > 0 ? experience.map((exp, i) => exps(exp, i)) : "No Experience"}
      </div>
    </Fragment>
  );
};

ProfileExp.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileExp;
