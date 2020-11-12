import axios from 'axios';

export default axios.create({
        baseURL: `https://dev-rapport.herokuapp.com/`,
        // headers: {"x-auth-token": `${token}`}
})
// https://dev-rapport.herokuapp.com/