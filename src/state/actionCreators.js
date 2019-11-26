import axios from 'axios';
import * as types from './actionTypes';

export const login = (userData) => dispatch => {
    axios.post("http://localhost:4000/api/auth/login", userData)
    .then(res => {
        console.log(res);
        dispatch({ type: types.SET_LOGGED_IN_USER, payload: res.data.user })
    })
    .catch(err => {
        console.log(err)
        console.log(userData)
    })
}