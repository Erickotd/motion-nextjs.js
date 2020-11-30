import { HIDE_ALERT, SHOW_ALERT } from '../actionTypes';

const initialState = {
  show: false,
  msg: null,
};

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT: {
      console.log('in da show', action);
      return {
        show: true,
        msg: action.payload,
      };
    }
    case HIDE_ALERT: {
      console.log('in da hide', action);
      return {
        show: false,
        msg: null,
      };
    }
    default:
      return state;
  }
};
