import { LOGIN, LOGIN_ERROR, LOGOUT } from '../actionTypes';
import axios from 'axios';
import baseUrl from '../../constants';

export const login = (userAccessInfo) => {
  return {
    type: LOGIN,
    payload: userAccessInfo,
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const loginAction = (userAcessInfo) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}auth/token/`, userAcessInfo);
    const { data } = response;
    dispatch(login(data));
    localStorage.setItem('token', data.access);
    return response;
  } catch (error) {
    console.log(error);
    dispatch(loginError('Credentials are not valid'));
    return error;
  }
};
