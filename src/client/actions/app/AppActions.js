import axios from 'axios';
import * as ActionTypes from '../ActionTypes';

export function saveSuccess(user) {
  return {
    type: ActionTypes.JSON_DATA_SAVE_SUCCESS,
    user,
  };
}

export function saving(bool) {
  return {
    type: ActionTypes.JSON_DATA_SAVING,
    isLoading: bool,
  };
}

export function saveErrored(hasErrored, errorDetails) {
  return {
    type: ActionTypes.JSON_DATA_SAVE_ERROR,
    hasErrored,
    errorDetails,
  };
}


export function saveJSON(appId, password, data) {
  return (dispatch) => {
    dispatch(saving(true));
    let payload = {};
    try {
      payload = JSON.parse(data);
    } catch (error) {
      console.log('Error in parsing data to a valid json');
      throw (error);
    }

    axios.post(`http://localhost:3000/api/v1/apps/${appId}/savejson`, payload, {
      headers: {
        password,
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }

        dispatch(saving(false));

        return response;
      })
      .then(data => dispatch(saveSuccess(payload)))
      .catch(err => dispatch(saveErrored(true, err.response.data.error_description.message)))
      .catch(error => dispatch(saveErrored(true, error)));
  };
}
