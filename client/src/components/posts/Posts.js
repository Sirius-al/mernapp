import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllPosts } from "../../Actions/postAction";
import Spinner from "../layouts/Spinner";

import PostsItem from './postsItem'
import CreatePostForm from './CreatePostForm'
import { setAlert } from "../../Actions/alertActions";

const Posts = ({ isAuthenticated, getAllPosts, post: { posts, loading }, error, setAlert }) => {
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
          <h1 className="large text-primary">Posts</h1>
          <p className="lead">
            <i className="fas fa-user" /> Welcome to the community!
          </p>
          {isAuthenticated && <CreatePostForm />}
          {!(posts.length > 0) ? "No Posts Found" : (
          <div className="posts">
            {error && error.message && setAlert('You have to be logged-in to perform this action', 'danger', 2000)}
            {posts.map((post, i) => <PostsItem key={i} post={post}/>)}
          </div>)}
      </Fragment>
    );
  }
};

Posts.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.post.error
});

export default connect(mapStateToProps, { getAllPosts, setAlert })(Posts);
