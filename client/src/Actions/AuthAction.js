import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from './Type';

import { returnErrors } from './ErrorAction';

//AUTH function
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    axios.get('/Api/Auth/user', tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    }))
    .catch( err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
        returnErrmssg(err);
    });
};


export const register = ({ name, email, username, password }) => dispatch => {

    const configure = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, username, password });

    axios.post('/Api/Users', body, configure)
    .then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
    .catch( err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        dispatch({
            type: REGISTER_FAIL
        });
        returnErrmssg(err);
    });
};

export const login = ({ username, password }) => dispatch => {

    const configure = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({username, password});

    axios.post('/Api/Auth', body, configure)
    .then( res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch( err => {
        dispatch(returnErrors(err.response.data, err.response.status), 'LOGIN_FAIL');
        dispatch({
            type: LOGIN_FAIL
        });
        returnErrmssg(err);
    });
};


export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
};


//function that will get the header of the token for us
export const tokenConfig = getState => {

    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if(token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}

function returnErrmssg (Err) {
    console.log("Error with State Dispatch!" + Err + " ");
}
