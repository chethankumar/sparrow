// These are basically state modifiers. They return the new state based on the dispatched action.
import _ from 'lodash';

import * as ActionTypes from '../../actions/ActionTypes';


export default function loginReducer(state = {
  user: {},
  hasErrored: false,
  errorDetails: '',
  isLoginLoading: false,
}, action) {
  switch (action.type) {
    case ActionTypes.USER_LOGIN_SUCCESS:
    {
      const newStateUsers = _.cloneDeep(state);
      newStateUsers.isLoginLoading = false;
      newStateUsers.hasErrored = false;
      newStateUsers.errorDetails = '';
      newStateUsers.user = action.user;
      return newStateUsers;
    }

    case ActionTypes.USER_LOGIN_ERROR: {
      const newStateErr = _.cloneDeep(state);
      newStateErr.hasErrored = action.hasErrored;
      newStateErr.errorDetails = action.errorDetails;
      newStateErr.isLoginLoading = false;
      return newStateErr;
    }

    case ActionTypes.USER_LOGIN_LOADING: {
      const newStateLoading = _.cloneDeep(state);
      newStateLoading.isLoginLoading = action.isLoginLoading;
      newStateLoading.hasErrored = false;
      newStateLoading.errorDetails = '';
      return newStateLoading;
    }
    default:
      return state;
  }
}

