import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    UPDATE_PROFILE,
    GET_All_PROFILES,
    GET_REPOS
  } from "../Actions/types";

const INITIAL_STATE = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
}

export default function(state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_All_PROFILES :
            return {
                ...state,
                profiles: payload.data.profiles,
                loading: false
            }
        case GET_PROFILE :
        case UPDATE_PROFILE :
            return {
                ...state,
                profile: payload.data.profile,
                loading: false
            };
        case PROFILE_ERROR :
            return {
                ...state,
                error: payload,
                loading: false
            }
        case PROFILE_ERROR :
            return {
                ...state,
                error: payload
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                repos: [],
                loading: false
            }
        default:
            return state;
    }
}