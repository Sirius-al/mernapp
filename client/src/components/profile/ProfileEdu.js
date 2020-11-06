import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEdu = ({ profile: { education } }) => {
  const edus = (edu, i) => {
    const {
      current,
      institute,
      degree,
      fieldofstudy,
      from,
      to,
      description
    } = edu;

    return (
      <div key={i}>
        <h3>{institute}</h3>
        <p>
          <Moment format="YYYY/MM/DD">{from}</Moment>
          {" - "}
          {current ? "Current" : <Moment format="YYYY/MM/DD">{to}</Moment>}
        </p>
        <p>
          <strong>Degree: </strong>
          {degree}
        </p>
        <p>
          <strong>Field Of Study: </strong>
          {fieldofstudy}
        </p>
        {description && (
          <p>
            <strong>Description: </strong>
            {description}
          </p>
        )}
      </div>
    );
  };

  return (
    <Fragment>
      <div className="profile-edu bg-white p-2">
        <h2 className="text-primary">Education</h2>
        {education.length > 0
          ? education.map((edu, i) => edus(edu, i))
          : "No Education Credentials"}
      </div>
    </Fragment>
  );
};

ProfileEdu.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileEdu;
