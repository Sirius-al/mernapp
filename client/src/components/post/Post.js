import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layouts/Spinner";
import { getPost } from "../../Actions/postAction";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import Comment from './Comment'
import CommentCreateForm from './CommentCreateForm'

function Post({ getPost, post: { post, loading }, auth, match }) {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  
  
  if (loading || post === null) {
    return <Spinner />
  
} else {

    const { _id, name, title, text, comments, date, user, avatar } = post
    return <Fragment>
            <Link to="/posts" className="btn">
            Back To Posts
            </Link>
            <div className="post bg-dark p-1 my-1">
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
                <h2 className="my-1 text-center">{title}</h2>
                <p className="my-1">{text}</p>
                <p className="post-date">Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></p>
            </div>
            </div>
            
            {auth.isAuthenticated && <CommentCreateForm postid={_id} />}
            
            <div className="comments">
                {comments.length > 0 ? comments.map((comment, i) => <Comment key={i} comment={comment} postId={_id} />) : " No Comments Yet ! "}
            </div>
        </Fragment>
  }
  
}

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth
});

export default connect(mapStateToProps, { getPost })(Post);
