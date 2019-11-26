import axios from 'axios';
import * as types from './actionTypes';
import axiosWithAuth from '../axiosWithAuth';

export const getAllTests = () => dispatch => {
    axios.get("http://localhost:4000/api/tests")
    .then(res => {
        dispatch({ type: types.SET_ALL_TESTS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
    })
}

export const getUserTests = () => dispatch => {
    axiosWithAuth().get("http://localhost:4000/api/users/tests")
    .then(res => {
        dispatch({ type: types.SET_USER_TESTS, payload: res.data })
    })
    .catch(err => {
        console.log(err)
    })
}