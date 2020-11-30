import { SHOW_ALERT, HIDE_ALERT } from '../actionTypes';

export function showNotification(msg) {
  return { type: SHOW_ALERT, payload: msg };
}
export function hideNotification() {
  return { type: HIDE_ALERT };
}

export const alertAction = (error) => async (dispatch) => {
  dispatch(showNotification(error));
  setTimeout(() => {
    dispatch(hideNotification());
  }, 3000);
};
