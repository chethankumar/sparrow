import { combineReducers } from 'redux';

import loginReducer from './login/LoginReducer';

export default combineReducers({
  login: loginReducer,
});

