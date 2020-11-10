import { GET_POSTS, POST_ERROR, LIKE_POST, UNLIKE_POST, DELETE_POST, ADD_POST } from '../Actions/types';

const INITIAL_STATE = {
    post: null,
    posts: [],
    loading: true,
    error: {}
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: payload.data,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                posts: [payload, ...state.posts],
                loading: false
            }
        case POST_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case LIKE_POST:
            return {
                ...state,
                loading: false,
                posts: state.posts.map(post => post._id === payload.id ? { ...post, likes: payload.likes } : post)
            }
        case UNLIKE_POST:
            return {
                ...state,
                loading: false,
                posts: state.posts.map(post =>  post._id === payload.id ? { ...post, unlikes: payload.unlikes } : post)
            }
        case DELETE_POST:
            return {
                ...state,
                loading: false,
                posts: state.posts.filter(post =>  post._id.toString() !== payload.toString())
            }
        default:
            return state;
    }
}