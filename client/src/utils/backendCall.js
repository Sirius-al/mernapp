import axios from 'axios';

export default axios.create({
        baseURL: `http://localhost:8000`, //! uploaded to heroku as https://dev-rapport.herokuapp.com/
        // headers: {"x-auth-token": `${token}`}
})
// https://dev-rapport.herokuapp.com/