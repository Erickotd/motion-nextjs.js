import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { alertReducer } from './alertReducer';
// import { signupReducer } from './signupReducer';

export const reducers = combineReducers({
  loginReducer,
  alertReducer,
  // signupReducer,
});
