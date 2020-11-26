import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
// import { signupReducer } from './signupReducer';

export const reducers = combineReducers({
  loginReducer,
  // signupReducer,
});
