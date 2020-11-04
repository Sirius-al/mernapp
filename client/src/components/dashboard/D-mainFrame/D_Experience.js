import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteExperience } from '../../../Actions/profileActions'

const D_Experience = ({ experience, deleteExperience, token }) => {

    const experiences = experience.map((exp) => {
        return (
            <tr key={exp._id}>
                <td>{exp.company}</td>
                <td className="hide-sm">{exp.title}</td>
                <td className="hide-sm">
                    <Moment format='YYYY/MM/DD'>{exp.from}</Moment>
                     {"  -  "}
                    {exp.current === true ? "Still working" : <Moment format='YYYY/MM/DD'>{exp.to}</Moment>}
                </td>
                <td>
                  <button onClick={() => deleteExperience(exp._id, token)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    })




    return (
      <Fragment>
          <h2 className="my-2">Experience Credentials</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Company</th>
                <th className="hide-sm">Title</th>
                <th className="hide-sm">Years</th>
                <th />
              </tr>
            </thead>
            <tbody>{experiences}</tbody>
          </table>
      </Fragment>
    );
}

const mapStateToProps = (state) => ({
  token: state.auth.token
})

export default connect(mapStateToProps, { deleteExperience })(D_Experience);
