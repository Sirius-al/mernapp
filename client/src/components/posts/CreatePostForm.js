import React, { Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../../Actions/postAction'

function CreatePostForm({ createPost, token }) {
    
    const [text, SetText] = useState('')
    const [title, SetTitle] = useState('')

    const onFormSubmit = (e) => {
        e.preventDefault();
        // console.log({title, text})
        createPost({title, text}, token)
        SetText(''); SetTitle('')
    }


    return (
        <form className="form" onSubmit={e => onFormSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Post's Title"
              name="title"
              required
              value={title}
              onChange={e => SetTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              name="text"
              cols={30}
              rows={5}
              placeholder="* Post's Body"
              value={text}
              onChange={e => SetText(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary my-1">
            Submit
          </button>
        </form>
    );
}

CreatePostForm.propTypes = {
    createPost: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    token: state.auth.token
})

export default connect(mapStateToProps, { createPost })(CreatePostForm)

