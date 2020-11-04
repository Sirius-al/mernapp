import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment'
import { deleteEducation } from '../../../Actions/profileActions'

const D_Education = ({ education, token, deleteEducation }) => {

    const educations = education.map((edu) => {
        return (
            <tr key={edu._id}>
                <td>{edu.institute}</td>
                <td className="hide-sm">{edu.degree}</td>
                <td className="hide-sm">
                    <Moment format='YYYY/MM/DD'>{edu.from}</Moment>
                     {"  -  "}
                    {edu.current === true ? "Still studying" : <Moment format='YYYY/MM/DD'>{edu.to}</Moment>}
                </td>
                <td>
                  <button onClick={() => deleteEducation(edu._id, token)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        )
    })




    return (
      <Fragment>
          <h2 className="my-2">Education Credentials</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Institute</th>
                <th className="hide-sm">Degree</th>
                <th className="hide-sm">Years</th>
                <th />
              </tr>
            </thead>
            <tbody>{educations}</tbody>
          </table>
      </Fragment>
    );
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, { deleteEducation })(D_Education);
