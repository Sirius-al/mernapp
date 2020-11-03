import axios from 'axios';
import backendCall from '../utils/backendCall';
import { setAlert } from './alertActions';
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from './types';


//* get current users profile
export const getCurrentProfile = (token) => async dispatch => {

    const config = {
        headers: { 
            "x-auth-token": `${token}`
        }
    }

    try {
      const res = await backendCall.get('/api/profile/user/me', config)
      // console.log(res)

      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    } catch (err) {
        const error = err.response
        // console.error(error)
        dispatch({
          type: PROFILE_ERROR,
          payload: { msg: error.data.message, status: error.status }
        })
        
    }
}  

//* create / edit profile

export const createProfile = (formData, history, token, edit = false) => async dispatch => {
  const config = {
    headers: { 
        "Content-Type": `application/json`,
        "x-auth-token": `${token}`
    }
}

try {
  const res = await backendCall.post('/api/profile', formData, config)
  // console.log(res)
  dispatch({
    type: GET_PROFILE,
    payload: res
  })
  dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'))

  if (!edit) {
    history.push('/dashboard')
  }

} catch (err) {
        const error = err.response
        
        // console.error(err)
        if (error) {
          dispatch(setAlert(error.data.msg, 'danger', 2000))
        }
        dispatch({
          type: PROFILE_ERROR,
          payload: { msg: error.data.msg, status: error.status }
        })
}}

//* Create Experience

export const addExperience = (formData, history, token) => async dispatch => {
  const config = {
    headers: { 
        "Content-Type": `application/json`,
        "x-auth-token": `${token}`
    }
}

try {
  const res = await backendCall.patch('/api/profile/experience', formData, config)
  // console.log(res)
  dispatch({
    type: UPDATE_PROFILE,
    payload: res
  })
  dispatch(setAlert('Experience Added', 'success'))

  history.push('/dashboard')

} catch (err) {
        const error = err.response
        
        // console.error(err)
        if (error) {
          dispatch(setAlert(error.data.msg, 'danger', 2000))
        }
        dispatch({
          type: PROFILE_ERROR,
          payload: { msg: error.data.msg, status: error.status }
        })
}}


//* Create Education

export const addEducation = (formData, history, token) => async dispatch => {
  const config = {
    headers: { 
        "Content-Type": `application/json`,
        "x-auth-token": `${token}`
    }
}

try {
  const res = await backendCall.patch('/api/profile/education', formData, config)
  // console.log(res)
  dispatch({
    type: UPDATE_PROFILE,
    payload: res
  })
  dispatch(setAlert('Education Added', 'success'))

  history.push('/dashboard')

} catch (err) {
        const error = err.response
        
        // console.error(err)
        if (error) {
          dispatch(setAlert(error.data.msg, 'danger', 2000))
        }
        dispatch({
          type: PROFILE_ERROR,
          payload: { msg: error.data.msg, status: error.status }
        })
}}


