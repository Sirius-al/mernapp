import React, { Fragment, useState} from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { addComment } from '../../Actions/postAction'

function CommentCreateForm({ postid, addComment, auth: { token } }) {

  const [title, SetTitle] = useState('')
  const [text, SetText] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault();

    addComment(postid, { title, description: text }, token)
    SetTitle(''); SetText('')
  }

  return (
    <Fragment>
      <div className="post-form">
        <div className="bg-primary p">
          <h3>Leave A Comment</h3>
        </div>
        <form className="form my-1" onSubmit={e => onFormSubmit(e)}>
          <input
            type="text"
            placeholder="* What's this comment is all about !"
            name="title"
            required
            value={title}
            onChange={e => SetTitle(e.target.value)}
          />
          <textarea
            name="text"
            cols={30}
            rows={5}
            placeholder="Comment on this post"
            required
            value={text}
            onChange={e => SetText(e.target.value)}
          />
          <button type="submit" className="btn btn-dark my-1" defaultValue="Submit">Submit</button>
        </form>
      </div>
    </Fragment>
  );
}

CommentCreateForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { addComment })(CommentCreateForm);
