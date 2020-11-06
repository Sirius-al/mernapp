import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { createProfile, getCurrentProfile } from '../../Actions/profileActions'

const EditProfileForm = ({ profile: { profile, loading }, createProfile, history, token, getCurrentProfile }) => {

    const [formData, setFormData] = useState({
        company: '', website: '', location: '', bio: '', status: '', githubusername: '', skills: '', facebook: '', youtube: '', twitter: '', instagram: '', linkedIn: ''
    })

    useEffect(() => {
      getCurrentProfile(token)

      setFormData({
        company: loading || !profile.company ? '' : profile.company,
        website: loading || !profile.website ? '' : profile.website,
        location: loading || !profile.location ? '' : profile.location,
        bio: loading || !profile.bio ? '' : profile.bio,
        status: loading || !profile.status ? '' : profile.status,
        githubusername: loading || !profile.githubusername ? '' : profile.githubusername,
        skills: loading || !profile.skills ? '' : profile.skills.toString(),
        facebook: loading || !profile.socials ? '' : profile.socials.facebook,
        youtube: loading || !profile.socials ? '' : profile.socials.youtube,
        twitter: loading || !profile.socials ? '' : profile.socials.twitter,
        instagram: loading || !profile.socials ? '' : profile.socials.instagram,
        linkedIn: loading || !profile.socials ? '' : profile.socials.linkedIn
      })
    }, [loading, getCurrentProfile])

    const { company, website, location, bio, status, githubusername, skills, facebook, youtube, twitter, instagram, linkedIn } = formData;

    const [displaysocialInputs, toggleSocialInputs] = useState(false)
    

    const onFieldChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onFormSubmit = (e) => {
        e.preventDefault()

        // console.log(formData)
        createProfile(formData, history, token, true)
    } 


    return (
      <Fragment>
        <div>
          <h1 className="large text-primary">Create Your Profile</h1>
          <p className="lead">
            <i className="fas fa-user" /> Let's get some information to make
            your profile stand out
          </p>
          <small>* = required field</small>
          <form className="form" onSubmit={e => onFormSubmit(e)}>
            <div className="form-group">
              <select name="status" value={status} onChange={e => onFieldChange(e)}>
                <option value={0}>* Select Professional Status</option>
                <option value="Developer">Developer</option>
                <option value="Junior Developer">Junior Developer</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Manager">Manager</option>
                <option value="Student or Learning">Student or Learning</option>
                <option value="Instructor">Instructor or Teacher</option>
                <option value="Intern">Intern</option>
                <option value="Other">Other</option>
              </select>
              <small className="form-text">
                Give us an idea of where you are at in your career
              </small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Company" name="company" value={company} onChange={e => onFieldChange(e)} />
              <small className="form-text">
                Could be your own company or one you work for
              </small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Website" name="website" value={website} onChange={e => onFieldChange(e)} />
              <small className="form-text">
                Could be your own or a company website
              </small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="Location" name="location" value={location} onChange={e => onFieldChange(e)} />
              <small className="form-text">
                City &amp; state suggested (eg. Boston, MA)
              </small>
            </div>
            <div className="form-group">
              <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={e => onFieldChange(e)} />
              <small className="form-text">
                Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Github Username"
                name="githubusername"
                value={githubusername} onChange={e => onFieldChange(e)}
              />
              <small className="form-text">
                If you want your latest repos and a Github link, include your
                username (Make Sure the username is Equivalent to github's Username)
              </small>
            </div>
            <div className="form-group">
              <textarea
                placeholder="A short bio of yourself"
                name="bio"
                value={bio} onChange={e => onFieldChange(e)}
              />
              <small className="form-text">
                Tell us a little about yourself
              </small>
            </div>
            <div className="my-2">
              <button onClick={() => toggleSocialInputs(!displaysocialInputs)} type="button" className="btn btn-light">
                Add Social Network Links
              </button>
              <span>Optional</span>
            </div>
              {!displaysocialInputs ? <Fragment>  </Fragment> : <Fragment>
                    <div className="form-group social-input">
                    <i className="fab fa-twitter fa-2x" />
                    <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onFieldChange(e)} />
                    </div>
                    <div className="form-group social-input">
                    <i className="fab fa-facebook fa-2x" />
                    <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onFieldChange(e)}/>
                    </div>
                    <div className="form-group social-input">
                    <i className="fab fa-youtube fa-2x" />
                    <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onFieldChange(e)}/>
                    </div>
                    <div className="form-group social-input">
                    <i className="fab fa-linkedin fa-2x" />
                    <input type="text" placeholder="Linkedin URL" name="linkedIn" value={linkedIn} onChange={e => onFieldChange(e)}/>
                    </div>
                    <div className="form-group social-input">
                    <i className="fab fa-instagram fa-2x" />
                    <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onFieldChange(e)}/>
                    </div>
                  </Fragment>}
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
    token: state.auth.token,
    profile: state.profile
})

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfileForm));
