import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { getGithubRepos } from '../../Actions/profileActions'

const ProfileGithub = ({ profile: { githubusername }, getGithubRepos, repos }) => {

  useEffect(() => {
    getGithubRepos(githubusername)
  }, [githubusername])

  if (!githubusername) {
    return <Fragment> </Fragment>
  } else {

    const repoBody = (repo, i) => {

      const { id, name, html_url, description, watchers_count, forks_count, stargazers_count } = repo;

      return (
        <div key={id}className="repo bg-white p-1 my-1">
            <div>
              <h4>
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                  Repo : {name}
                </a>
              </h4>
              {description && (
                <p>
                  {description}
                </p>
              )}
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">Stars: {stargazers_count}</li>
                <li className="badge badge-dark">Watchers: {watchers_count}</li>
                <li className="badge badge-light">Forks: {forks_count}</li>
              </ul>
            </div>
          </div>
      )
    }

    return (
      <Fragment>
        <div className="profile-github">
          <h2 className="text-primary my-1">
            <i className="fab fa-github" /> Github Repos
          </h2>

          {repos.length > 0 ? repos.map((repo, i) => repoBody(repo, i)) : "No Repos Were Found"}
        </div>
      </Fragment>
    );
  }
  
};

ProfileGithub.propTypes = {
  profile: PropTypes.object.isRequired,
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos
})

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
