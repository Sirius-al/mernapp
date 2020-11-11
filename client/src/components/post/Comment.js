import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { removeComment } from "../../Actions/postAction";


const Comment = ({postId, comment: { _id, title, description, user, name, avatar, date }, auth, removeComment}) => {
  return (
    <Fragment>
      <div className="post bg-white p-1 my-1">
        <div>
          <Link to={`/profile/${user}`}>
            <img
              className="round-img"
              src={avatar}
              alt={name}
            />
            <h4>{name}</h4>
          </Link>
        </div>
        <div>
          <h4 className="my-1">{title}</h4>
          <p className="my-1">{description}</p>
          <p className="post-date">Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></p>

          {auth.isAuthenticated && auth.user && auth.user._id == user ? (
          <button onClick={e => removeComment(postId, _id, auth.token)} type="button" className="btn btn-danger">
            <i className="fas fa-times" />
          </button>) : ''}
        </div>
      </div>
    </Fragment>
  );
}

Comment.propTypes = {
  auth: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.number.isRequired,
  removeComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {removeComment})(Comment);
