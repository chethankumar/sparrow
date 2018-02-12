// This is basically action creators and returns objects called actions.
import axios from 'axios';
import * as ActionTypes from '../ActionTypes';

export function loginSuccess(user) {
  return {
    type: ActionTypes.USER_LOGIN_SUCCESS,
    user,
  };
}

export function loginLoading(bool) {
  return {
    type: ActionTypes.USER_LOGIN_LOADING,
    isLoading: bool,
  };
}

export function loginErrored(hasErrored, errorDetails) {
  return {
    type: ActionTypes.USER_LOGIN_ERROR,
    hasErrored,
    errorDetails,
  };
}


export function login(appId, password) {
  return (dispatch) => {
    dispatch(loginLoading(true));

    axios.post(`http://localhost:3000/api/v1/apps/${appId}/login`, {}, {
      headers: {
        password,
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }

        dispatch(loginLoading(false));

        return response;
      })
      .then(user => dispatch(loginSuccess(user.data)))
      .catch(err => dispatch(loginErrored(true, err.response.data.error_description.message)));
  };
}
