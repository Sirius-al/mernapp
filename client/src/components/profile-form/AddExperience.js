import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addExperience } from '../../Actions/profileActions'

const AddExperience = ({ addExperience, history, token}) => {

    const [ formData, setFormData ] = useState({
        title: '',
        company: '',
        website: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: '',
    })

    const {title, company, website, location, from, to, current, description} = formData


    const onFieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    } 

    const [ toDate, toggleToDate ] = useState(false)

    const onFormSubmit = (e) => {
        e.preventDefault()

        // console.log(formData)
        addExperience(formData, history, token)
    }  



    return (
      <Fragment>
        <div>
          <h1 className="large text-primary">Add An Experience</h1>
          <p className="lead">
            <i className="fas fa-code-branch" /> Add any developer/programming
            positions that you have had in the past
          </p>
          <small>* = required field</small>
          <form className="form" onSubmit={e => onFormSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Job Title"
                name="title"
                required
                value={title}
                onChange={e => onFieldChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="* Company"
                name="company"
                required
                value={company}
                onChange={e => onFieldChange(e)}
              />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Location" name="location" value={location}
                onChange={e => onFieldChange(e)} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Website" name="website" value={website}
                onChange={e => onFieldChange(e)} />
            </div>
            <div className="form-group">
              <h4>Start Date</h4>
              <input type="date" name="from" required value={from}
                onChange={e => onFieldChange(e)}/>
            </div>
            <div className="form-group">
              <p>
                <input type="checkbox" checked={current} name="current" value={current}
                    onChange={e => {setFormData({ ...formData, current: !current });
                    toggleToDate(!toDate)
                }} /> Currently Working here
              </p>
            </div>
            <div className="form-group">
              <h4>End Date</h4>
              <input type="date" name="to" value={to}
                onChange={e => onFieldChange(e)} disabled={toDate ? 'disabled' : ''}/>
            </div>
            <div className="form-group">
              <textarea
                name="description"
                cols={30}
                rows={5}
                placeholder="Job Description"
                value={description}
                onChange={e => onFieldChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary my-1">Submit</button>
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
export default connect(mapStateToProps, { addExperience })(withRouter(AddExperience));
