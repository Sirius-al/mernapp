import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addEducation } from '../../Actions/profileActions'

const AddExperience = ({ addEducation, history, token}) => {

    const [ formData, setFormData ] = useState({
        institute: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const {institute, degree, fieldofstudy, from, to, current, description} = formData


    const onFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    } 

    const [ toDate, toggleToDate ] = useState(false)

    const onFormSubmit = (e) => {
        e.preventDefault()

        // console.log(formData)
        addEducation(formData, history, token)
    }  



    return (
      <Fragment>
        <div>
          <div>
            <h1 className="large text-primary">Add Your Education</h1>
            <p className="lead">
              <i className="fas fa-graduation-cap" /> Add any school, bootcamp,
              etc that you have attended
            </p>
          </div>
          <small>* = required field</small>
          <form className="form" onSubmit={(e) => onFormSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Institute"
                name="institute"
                required
                value={institute}
                onChange={(e) => onFieldChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Degree"
                name="degree"
                required
                value={degree}
                onChange={(e) => onFieldChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Field Of Study"
                required
                name="fieldofstudy"
                value={fieldofstudy}
                onChange={(e) => onFieldChange(e)}
              />
            </div>
            <div className="form-group">
              <h4>Start Date</h4>
              <input
                type="date"
                name="from"
                required
                value={from}
                onChange={(e) => onFieldChange(e)}
              />
            </div>
            <div className="form-group">
              <p>
                <input
                  type="checkbox"
                  checked={current}
                  name="current"
                  value={current}
                  onChange={(e) => {
                    setFormData({ ...formData, current: !current });
                    toggleToDate(!toDate);
                  }}
                />{" "}
                Currently Working here
              </p>
            </div>
            <div className="form-group">
              <h4>End Date</h4>
              <input
                type="date"
                name="to"
                value={to}
                onChange={(e) => onFieldChange(e)}
                disabled={toDate ? "disabled" : ""}
              />
            </div>
            <div className="form-group">
              <textarea
                name="description"
                cols={30}
                rows={5}
                placeholder="Description about the Program you took there !"
                value={description}
                onChange={(e) => onFieldChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary my-1">
              Submit
            </button>
            <Link className="btn btn-light my-1" to="/dashboard">
              Go Back
            </Link>
          </form>
        </div>
      </Fragment>
    );
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})
export default connect(mapStateToProps, { addEducation })(withRouter(AddExperience));
