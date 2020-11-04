import axios from 'axios';
import backendCall from '../utils/backendCall';
import { setAlert } from './alertActions';
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE, DELETE_ACCOUNT, CLEAR_PROFILE, GET_All_PROFILE } from './types';


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


//* Get all profiles

const getAllProfiles = () => async dispatch => {
  try {
    const res = await backendCall.get('/api/profile/')
    // console.log(res)

    dispatch({
      type: GET_All_PROFILE,
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

//* Delete Experience
export const deleteExperience = (id, token) => async dispatch => {
  const config = {
    headers: { 
        "Content-Type": `application/json`,
        "x-auth-token": `${token}`
    }
}
  try {
    const res = await backendCall.delete(`/api/profile/experience/${id}`, config)
    
    dispatch({
      type: UPDATE_PROFILE,
      payload: res
    })
    dispatch(setAlert('Experience Deleted', 'info', 2000))

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
    console.log(err)
  }
} 


//* Delete Education

export const deleteEducation = (id, token) => async dispatch => {
  const config = {
    headers: { 
        "Content-Type": `application/json`,
        "x-auth-token": `${token}`
    }
}
  try {
    const res = await backendCall.delete(`/api/profile/education/${id}`, config)
    
    dispatch({
      type: UPDATE_PROFILE,
      payload: res
    })
    dispatch(setAlert('Education Deleted', 'info', 2000))

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
  }
}


//! ********************************** Delete whole Account **********************************


export const DeleteWholeAccount = (token) => async dispatch => {
  const config = {
    headers: { 
        "Content-Type": `application/json`,
        "x-auth-token": `${token}`
    }
  }

  if (window.confirm('Are You sure To delete Your Account ? Beware this cannot be unDone')) {
    try {
    
     const res = await backendCall.delete(`/api/profile/`, config)
     
     dispatch({ type: CLEAR_PROFILE })
     dispatch({ type: DELETE_ACCOUNT })
 
     dispatch(setAlert('Your Account has been Deleted Permanently', 'Danger', 3000))
 
   } catch (err) {
       const error = err.response
         
       console.error(err)
       if (error) {
         dispatch(setAlert(error.data.message, 'danger', 2000))
       }
     dispatch({
       type: PROFILE_ERROR,
       payload: { msg: error.data.msg, status: error.status }
     })
 
   }

  }

 }
