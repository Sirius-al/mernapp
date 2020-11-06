import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from 'react-moment'


const ProfileEdu = ({ profile: { education }}) => {


  const edus = (edu, i) => {

    const { current, institute, degree, fieldofstudy, from, to } = edu;

    return (
        <div key={i}>
          <h3>University Of Washington</h3>
          <p>Sep 1993 - June 1999</p>
          <p>
            <strong>Degree: </strong>Masters
          </p>
          <p>
            <strong>Field Of Study: </strong>Computer Science
          </p>
          <p>
            <strong>Description: </strong>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos placeat, dolorum ullam ipsam, sapiente
            suscipit dicta eius velit amet aspernatur asperiores modi quidem
            expedita fugit.
          </p>
        </div>
    )
  }


  return (
    <Fragment>
      <div className="profile-edu bg-white p-2">
        <h2 className="text-primary">Education</h2>
        {education.length > 0 ? education.map((edu, i) => edus(edu, i)) : "No Education Credentials"}
      </div>
    </Fragment>
  );
};

ProfileEdu.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileEdu;
