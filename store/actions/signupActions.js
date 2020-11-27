import { VERIFICATION, SIGNUP_ERROR, VERIFICATION_ERROR } from '../actionTypes';
import axios from 'axios';
import baseUrl from '../../constants';

export const verification = (userInfo) => {
  return {
    type: VERIFICATION,
    payload: userInfo,
  };
};

export const signupError = (error) => {
  return {
    type: SIGNUP_ERROR,
    payload: error,
  };
};

export const verification_error = (error) => {
  return {
    type: VERIFICATION_ERROR,
    payload: error,
  };
};

export const signupAction = (userEmail) => async (dispatch) => {
  console.log(userEmail);
  try {
    const response = await axios.post(
      `${baseUrl}auth/registration/`,
      userEmail
    );
    return response;
  } catch (error) {
    // dispatch(loginError('The credentials are not valid'));
    return error;
  }
};

export const verificationAction = (userInfo) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `${baseUrl}auth/registration/validation/`,
      userInfo
    );
    const { data } = response;
    // dispatch(verification(data));
    return response;
  } catch (error) {
    // dispatch(loginError('The credentials are not valid'));
    return error;
  }
};
